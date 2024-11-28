import React from 'react';
import { Bot, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SmallPlanSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Small Plan: Start Simple</h2>
            <p className="text-gray-600">
              Perfect for small businesses starting with AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-[#FEF250] bg-opacity-20 p-3 rounded-lg">
                    <Bot className="h-6 w-6 text-[#FEF250]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Basic AI Chatbot</h3>
                    <p className="text-gray-600">24/7 Customer Support</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Instant customer responses",
                    "Basic language understanding",
                    "Simple website integration",
                    "Standard response templates",
                    "Basic analytics"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-[#FEF250]" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Key Benefits</h4>
                <ul className="space-y-4">
                  {[
                    {
                      title: "Cost Effective",
                      description: "Reduce basic support costs"
                    },
                    {
                      title: "Always Available",
                      description: "24/7 automated responses"
                    },
                    {
                      title: "Easy Setup",
                      description: "Quick integration process"
                    }
                  ].map((benefit, index) => (
                    <li key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <h5 className="font-semibold mb-1">{benefit.title}</h5>
                      <p className="text-gray-600">{benefit.description}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallPlanSection;