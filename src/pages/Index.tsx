import { Bot, MessageSquare, Zap, Shield } from 'lucide-react';
import ChatWidget from '@/components/ChatWidget';
import PricingCard from '@/components/PricingCard';
import FeatureCard from '@/components/FeatureCard';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#FFE135] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              The Easiest Way To Outsource Your Repetitive Customer Support
            </h1>
            <p className="text-xl mb-8 text-gray-800">
              We offer AI setup customer service AI chat bots.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors">
              Book demo Now
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
            <div className="md:w-1/3 mb-12 md:mb-0">
              <img 
                src="/lovable-uploads/d9f650d7-8b98-468d-9d62-299054de0af7.png" 
                alt="BOB Mascot" 
                className="w-64 mx-auto"
              />
            </div>
            <div className="md:w-2/3 grid md:grid-cols-3 gap-8">
              <PricingCard
                title="SMALL"
                price="500"
                features={[
                  "Basic bot training",
                  "Email support",
                  "Basic analytics"
                ]}
              />
              <PricingCard
                title="GROWTH"
                price="1000"
                features={[
                  "Advanced bot training",
                  "Priority support",
                  "Advanced analytics"
                ]}
                isPopular
              />
              <PricingCard
                title="PRO"
                price="2500"
                features={[
                  "Custom bot training",
                  "24/7 phone support",
                  "Custom analytics"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Customers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {/* Add customer logos here */}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Delivery Timeline
          </h2>
          {/* Add timeline content here */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Add footer menu items here */}
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Index;