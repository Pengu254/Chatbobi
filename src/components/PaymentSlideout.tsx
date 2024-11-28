import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "@supabase/auth-helpers-react";
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
  const session = useSession();

  const handlePayment = async () => {
    if (!session?.user) {
      toast({
        title: "Please sign in",
        description: "You need to be signed in to purchase a subscription",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: plan.price,
          userId: session.user.id,
          planTitle: plan.title,
        }),
      });

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
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