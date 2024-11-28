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
            {/* Left side - Combined Features and Benefits */}
            <div>
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  {/* What You Get Section */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-[#FEF250] bg-opacity-20 p-3 rounded-lg">
                        <Bot className="h-6 w-6 text-[#9b87f5]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Essential Features</h3>
                        <p className="text-gray-600">What You Get with Small Plan</p>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6">
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

                    {/* Key Benefits Section - Now directly below features */}
                    <div className="border-t pt-6">
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
                          <li key={index} className="pb-3 last:pb-0">
                            <h5 className="font-semibold text-[#6E59A5] mb-1">{benefit.title}</h5>
                            <p className="text-gray-600">{benefit.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right side - Chat Demo */}
            <div className="relative bg-white rounded-xl shadow-2xl p-6">
              <div className="flex items-center space-x-3 border-b pb-4 mb-4">
                <Bot className="h-8 w-8 text-[#9b87f5]" />
                <h3 className="text-lg font-semibold">AI Assistant Demo</h3>
              </div>
              
              <div className="space-y-4">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-[#F3F4F6] rounded-lg p-3 max-w-[80%]">
                    <p className="text-gray-800">Hi! I need help with my order #12345</p>
                  </div>
                </div>

                {/* Bot Response */}
                <div className="flex space-x-2">
                  <Bot className="h-6 w-6 text-[#9b87f5]" />
                  <div className="bg-[#EEF2FF] rounded-lg p-3 max-w-[80%]">
                    <p className="text-gray-800">Hello! I'd be happy to help you with your order. I can see that order #12345 was shipped yesterday and is expected to arrive by Friday. Would you like to track its current status?</p>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-[#F3F4F6] rounded-lg p-3 max-w-[80%]">
                    <p className="text-gray-800">Yes, please show me the tracking information</p>
                  </div>
                </div>

                {/* Bot Response */}
                <div className="flex space-x-2">
                  <Bot className="h-6 w-6 text-[#9b87f5]" />
                  <div className="bg-[#EEF2FF] rounded-lg p-3 max-w-[80%]">
                    <p className="text-gray-800">Here's your tracking link: <span className="text-[#6E59A5] underline">track.shipping.com/12345</span>. The package is currently in transit from our warehouse. Is there anything else you'd like to know?</p>
                  </div>
                </div>
              </div>

              {/* Input Field Demo */}
              <div className="mt-4 border-t pt-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
                    disabled
                  />
                  <button className="bg-[#9b87f5] text-white px-4 py-2 rounded-lg" disabled>
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