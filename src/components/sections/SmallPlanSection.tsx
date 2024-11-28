import React from 'react';
import { Bot, ArrowRight } from 'lucide-react';

const SmallPlanSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Small Plan: AI Chatbot Integration</h2>
            <p className="text-lg text-gray-600">
              Start your journey with our essential AI chatbot solution
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-[#FEF250] bg-opacity-20 p-3 rounded-lg">
                    <Bot className="h-6 w-6 text-[#FEF250]" />
                  </div>
                  <h3 className="text-xl font-semibold">24/7 AI Chatbot Support</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our AI chatbot provides instant responses to customer inquiries, handling common questions and support requests automatically.
                </p>
                <ul className="space-y-3">
                  {[
                    "Instant customer support",
                    "Natural language understanding",
                    "Custom responses based on your business",
                    "Multi-language support",
                    "Easy website integration"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-[#FEF250]" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold mb-4">Benefits</h4>
                <ul className="space-y-4">
                  {[
                    {
                      title: "Cost Reduction",
                      description: "Reduce support costs by automating common inquiries"
                    },
                    {
                      title: "24/7 Availability",
                      description: "Provide instant support at any time, any day"
                    },
                    {
                      title: "Scalable Solution",
                      description: "Handle multiple customer conversations simultaneously"
                    },
                    {
                      title: "Improved Response Time",
                      description: "Instant answers to customer questions"
                    }
                  ].map((benefit, index) => (
                    <li key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <h5 className="font-semibold mb-1">{benefit.title}</h5>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallPlanSection;