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
            {/* Left side - Text Content */}
            <div className="space-y-8">
              {/* What You Get Section */}
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-[#FEF250] bg-opacity-20 p-3 rounded-lg">
                      <Bot className="h-6 w-6 text-[#9b87f5]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">What You Get</h3>
                      <p className="text-gray-600">Essential AI Features</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "24/7 Customer Support Coverage",
                      "Basic Language Understanding",
                      "Simple Website Integration",
                      "Standard Response Templates",
                      "Basic Analytics Dashboard"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-[#9b87f5]" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Benefits Section */}
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4">Key Benefits</h4>
                  <ul className="space-y-4">
                    {[
                      {
                        title: "Reduce Support Costs",
                        description: "Handle basic inquiries automatically, saving on support staff costs"
                      },
                      {
                        title: "Always Available",
                        description: "Provide instant responses to customers 24/7, even outside business hours"
                      },
                      {
                        title: "Quick Setup",
                        description: "Get started in minutes with our simple integration process"
                      }
                    ].map((benefit, index) => (
                      <li key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                        <h5 className="font-semibold text-[#6E59A5] mb-1">{benefit.title}</h5>
                        <p className="text-gray-600">{benefit.description}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right side - Image */}
            <div className="relative h-full">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="AI Chatbot Demo"
                className="rounded-xl shadow-2xl object-cover w-full h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#9b87f5]/20 to-transparent rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallPlanSection;