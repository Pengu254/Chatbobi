import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface PaymentSlideoutProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    title: string;
    price: string;
  };
}

const PaymentSlideout = ({ isOpen, onClose, plan }: PaymentSlideoutProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.functions.invoke('create-checkout-session', {
        body: {
          priceId: plan.price,
          planTitle: plan.title,
        },
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(error.message || 'Failed to create checkout session');
      }
      
      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-4 py-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Subscribe to {plan.title}</h3>
            <p className="text-sm text-gray-500 mb-4">
              You will be redirected to Stripe to complete your purchase
            </p>
            <p className="text-2xl font-bold mb-6">${plan.price}/mo</p>
            <button
              onClick={handlePayment}
              disabled={loading}
              className={`w-full py-2 px-4 rounded-full transition-all duration-300 ${
                loading ? "bg-gray-300" : "bg-[#FEF250] hover:bg-opacity-90"
              }`}
            >
              {loading ? "Processing..." : "Proceed to Payment"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentSlideout;