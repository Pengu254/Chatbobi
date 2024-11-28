import React from 'react';
import { MessageCircle, Mail, Phone, Share2, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const ProPlanSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F2FCE2] to-[#E5DEFF]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pro Plan: Complete AI Communication Suite</h2>
            <p className="text-lg text-gray-600">
              Enterprise-level AI solutions for comprehensive customer engagement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Features Grid */}
            <div className="grid gap-6">
              {/* AI Chatbot */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-[#9b87f5] bg-opacity-20 p-3 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-[#9b87f5]" />
                  </div>
                  <h3 className="text-xl font-semibold">Advanced AI Chatbot</h3>
                </div>
                <p className="text-gray-600">
                  Enterprise-grade chatbot with continuous learning and custom training capabilities
                </p>
              </div>

              {/* AI Email */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-[#9b87f5] bg-opacity-20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-[#9b87f5]" />
                  </div>
                  <h3 className="text-xl font-semibold">Premium Email Automation</h3>
                </div>
                <p className="text-gray-600">
                  Comprehensive email management with smart prioritization and advanced analytics
                </p>
              </div>

              {/* AI Phone Service */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-[#9b87f5] bg-opacity-20 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-[#9b87f5]" />
                  </div>
                  <h3 className="text-xl font-semibold">AI Phone Service</h3>
                </div>
                <p className="text-gray-600">
                  Intelligent call handling with voice recognition and real-time translation
                </p>
              </div>

              {/* Social Media Support */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-[#9b87f5] bg-opacity-20 p-3 rounded-lg">
                    <Share2 className="h-6 w-6 text-[#9b87f5]" />
                  </div>
                  <h3 className="text-xl font-semibold">Social Media Management</h3>
                </div>
                <p className="text-gray-600">
                  Unified social media support across all major platforms
                </p>
                <div className="flex space-x-4 mt-4">
                  <Facebook className="h-5 w-5 text-gray-600" />
                  <Instagram className="h-5 w-5 text-gray-600" />
                  <Linkedin className="h-5 w-5 text-gray-600" />
                  <Youtube className="h-5 w-5 text-gray-600" />
                </div>
              </div>
            </div>

            {/* Benefits Panel */}
            <div className="bg-white p-8 rounded-xl shadow-xl border border-[#9b87f5]/20">
              <h4 className="text-xl font-semibold mb-6">Pro Plan Benefits</h4>
              <div className="space-y-6">
                {[
                  {
                    title: "Enterprise-Grade AI",
                    description: "Custom-trained AI models specific to your business needs"
                  },
                  {
                    title: "Omnichannel Support",
                    description: "Seamless integration across all communication channels"
                  },
                  {
                    title: "Advanced Analytics",
                    description: "Comprehensive reporting and insights across all platforms"
                  },
                  {
                    title: "Priority Support",
                    description: "24/7 dedicated support team for your business"
                  },
                  {
                    title: "Custom Integration",
                    description: "Tailored solutions that fit your existing workflow"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <h5 className="font-semibold mb-2">{benefit.title}</h5>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProPlanSection;