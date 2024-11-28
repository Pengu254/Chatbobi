import React from 'react';
import { Bot, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SmallPlanSection = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Small Plan: Start Simple</h2>
            <p className="text-gray-600">
              Perfect for small businesses starting with AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Left side - Combined Features and Benefits */}
            <div>
              <Card className="bg-white shadow-md">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-[#FEF250] bg-opacity-20 p-2 rounded-lg">
                      <Bot className="h-5 w-5 text-[#9b87f5]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Essential Features & Benefits</h3>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Features List */}
                    <ul className="space-y-2">
                      {[
                        "24/7 Customer Support Coverage",
                        "Basic Language Understanding",
                        "Simple Website Integration",
                        "Standard Response Templates",
                        "Basic Analytics Dashboard"
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <Check className="h-4 w-4 text-[#9b87f5]" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Key Benefits */}
                    <div className="border-t pt-4 mt-4">
                      <ul className="space-y-3">
                        {[
                          {
                            title: "Reduce Support Costs",
                            description: "Handle basic inquiries automatically"
                          },
                          {
                            title: "Always Available",
                            description: "Provide instant responses 24/7"
                          },
                          {
                            title: "Quick Setup",
                            description: "Get started in minutes"
                          }
                        ].map((benefit, index) => (
                          <li key={index} className="text-sm">
                            <h5 className="font-semibold text-[#6E59A5]">{benefit.title}</h5>
                            <p className="text-gray-600">{benefit.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right side - Chat Demo with increased contrast */}
            <div className="bg-[#1A1F2C] rounded-xl shadow-2xl p-4 text-white">
              <div className="flex items-center space-x-3 border-b border-gray-700 pb-3 mb-4">
                <Bot className="h-6 w-6 text-[#FEF250]" />
                <h3 className="text-lg font-semibold">AI Assistant Demo</h3>
              </div>
              
              <div className="space-y-4">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-gray-700 rounded-lg p-2 max-w-[80%]">
                    <p className="text-sm">Hi! I need help with my order #12345</p>
                  </div>
                </div>

                {/* Bot Response */}
                <div className="flex space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#FEF250] flex items-center justify-center">
                    <Bot className="h-5 w-5 text-[#1A1F2C]" />
                  </div>
                  <div className="bg-[#9b87f5] rounded-lg p-2 max-w-[80%]">
                    <p className="text-sm">Hello! I'd be happy to help you with your order. I can see that order #12345 was shipped yesterday and is expected to arrive by Friday.</p>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-gray-700 rounded-lg p-2 max-w-[80%]">
                    <p className="text-sm">Yes, please show me the tracking information</p>
                  </div>
                </div>

                {/* Bot Response */}
                <div className="flex space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#FEF250] flex items-center justify-center">
                    <Bot className="h-5 w-5 text-[#1A1F2C]" />
                  </div>
                  <div className="bg-[#9b87f5] rounded-lg p-2 max-w-[80%]">
                    <p className="text-sm">Here's your tracking link: <span className="underline">track.shipping.com/12345</span></p>
                  </div>
                </div>
              </div>

              {/* Input Field Demo */}
              <div className="mt-4 border-t border-gray-700 pt-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 p-2 bg-gray-700 border-none rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#9b87f5]"
                    disabled
                  />
                  <button className="bg-[#9b87f5] text-white px-3 py-2 rounded-lg text-sm" disabled>
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallPlanSection;