import { Bot, MessageSquare, Zap, Shield } from 'lucide-react';
import ChatWidget from '@/components/ChatWidget';
import PricingCard from '@/components/PricingCard';
import FeatureCard from '@/components/FeatureCard';
import ContactForm from '@/components/ContactForm';
import DemoSection from '@/components/DemoSection';
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      {/* Add margin-top to account for fixed header */}
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[#FEF250] opacity-95" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="max-w-3xl mx-auto">
              <div className="text-center space-y-8">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-black">
                  Easiest Way to Handle Customer Support
                </h1>
                <p className="text-xl md:text-2xl text-gray-800 max-w-2xl mx-auto">
                  Comprehensive End-to-End Customer Service Automation Solutions
                </p>
                <div className="flex justify-center gap-4">
                  <button className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg">
                    Book Demo
                  </button>
                  <button className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <DemoSection />

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">BOB's Offers</h2>
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
              <div className="md:w-1/3 mb-12 md:mb-0 animate-float">
                <img 
                  src="/lovable-uploads/d9f650d7-8b98-468d-9d62-299054de0af7.png" 
                  alt="BOB Mascot" 
                  className="w-64 mx-auto"
                />
              </div>
              <div className="md:w-2/3 grid md:grid-cols-3 gap-8">
                <PricingCard
                  title="SMALL"
                  price="price_1OvCFXHVlLhQMGWBPxdPFCWx"
                  features={[
                    "Basic bot training",
                    "Email support",
                    "Basic analytics"
                  ]}
                />
                <PricingCard
                  title="GROWTH"
                  price="price_1OvCFXHVlLhQMGWBghjkPFCWx"
                  features={[
                    "Advanced bot training",
                    "Priority support",
                    "Advanced analytics"
                  ]}
                  isPopular
                />
                <PricingCard
                  title="PRO"
                  price="price_1OvCFXHVlLhQMGWBklmnPFCWx"
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
            <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto">
              <div className="flex flex-col items-center justify-center transform hover:scale-105 transition-transform w-full md:w-auto order-1 md:order-1">
                <img 
                  src="/lovable-uploads/17c2b9e5-b057-4cbf-a53b-435350b09a0a.png" 
                  alt="Comfy Food" 
                  className="h-[4.84rem] object-contain mb-2"
                />
                <p className="text-lg font-medium">Comfy Food</p>
              </div>
              <div className="flex flex-col items-center justify-center transform hover:scale-105 transition-transform w-full md:w-auto order-2 md:order-2">
                <img 
                  src="/lovable-uploads/1bb3b802-8c0f-4d49-a982-a8fc0d0ff4bb.png" 
                  alt="Jelppari" 
                  className="h-[4.84rem] object-contain mb-2"
                />
                <p className="text-lg font-medium">Jelppari</p>
              </div>
              <div className="flex flex-col items-center justify-center transform hover:scale-105 transition-transform w-full md:w-auto order-3 md:order-3">
                <img 
                  src="/lovable-uploads/2efa7d5e-4ac7-4d79-ad44-ed52dbef032c.png" 
                  alt="Amonda" 
                  className="h-[4.84rem] object-contain mb-2"
                />
                <p className="text-lg font-medium">Amonda</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 opacity-50" />
          <div className="container mx-auto px-4 relative">
            <h2 className="text-3xl font-bold text-center mb-16">
              Launch Process
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Timeline Bar */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-4 transform -translate-y-1/2">
                  <div className="w-full h-full bg-gradient-to-r from-[#FEF250] via-[#FEF250] to-[#9b87f5] rounded-full opacity-75"></div>
                </div>
                
                {/* Timeline Steps */}
                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                    { title: 'Sign up', time: 'If we start today...', content: 'Initial registration' },
                    { title: 'Kickoff meeting', time: 'in 1-2 days', content: 'Project planning' },
                    { title: 'Training', time: '1-2 week', content: 'Knowledge transfer' },
                    { title: 'Launch', time: 'in 30 days*', content: '(first invoice)' },
                  ].map((step, index) => (
                    <div key={index} className="relative flex flex-col items-center group">
                      <div className="w-12 h-12 bg-white border-4 border-[#FEF250] rounded-full mb-4 z-10 transition-all duration-300 group-hover:border-[#9b87f5]">
                        <div className="w-full h-full bg-[#FEF250] rounded-full transform scale-0 animate-ping group-hover:bg-[#9b87f5]"></div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 bg-white px-2 rounded-lg z-10">{step.title}</h3>
                      <p className="text-sm text-gray-600 mb-2 bg-white px-2 rounded-lg z-10">{step.time}</p>
                      <p className="text-sm text-gray-500 bg-white px-2 rounded-lg z-10">{step.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
    </div>
  );
};

export default Index;
