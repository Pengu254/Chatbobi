import { Bot, MessageSquare, Zap, Shield } from 'lucide-react';
import ChatWidget from '@/components/ChatWidget';
import PricingCard from '@/components/PricingCard';
import FeatureCard from '@/components/FeatureCard';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Transform Your Customer Service with AI
            </h1>
            <p className="text-xl mb-8">
              Automate support, engage customers 24/7, and scale your business with our intelligent chatbot platform.
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Platform?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Bot}
              title="AI-Powered"
              description="Advanced natural language processing for human-like conversations"
            />
            <FeatureCard
              icon={MessageSquare}
              title="Multi-Channel"
              description="Deploy across website, mobile, and social platforms"
            />
            <FeatureCard
              icon={Zap}
              title="Lightning Fast"
              description="Instant responses to customer queries 24/7"
            />
            <FeatureCard
              icon={Shield}
              title="Secure"
              description="Enterprise-grade security and data protection"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Starter"
              price="49"
              features={[
                "Up to 1,000 conversations/mo",
                "Basic bot training",
                "Email support",
                "Basic analytics"
              ]}
            />
            <PricingCard
              title="Professional"
              price="99"
              features={[
                "Up to 5,000 conversations/mo",
                "Advanced bot training",
                "Priority support",
                "Advanced analytics"
              ]}
              isPopular
            />
            <PricingCard
              title="Enterprise"
              price="249"
              features={[
                "Unlimited conversations",
                "Custom bot training",
                "24/7 phone support",
                "Custom analytics"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Get Started Today
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Index;