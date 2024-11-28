import React from 'react';
import { Bot, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SmallPlanSection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Small Plan: Start Simple
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Perfect for small businesses starting their AI journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left side - Features and Benefits Card */}
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-[#FEF250] bg-opacity-20 p-2.5 rounded-lg">
                    <Bot className="h-6 w-6 text-[#9b87f5]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Features & Benefits</h3>
                </div>

                <div className="space-y-6">
                  {/* Features List */}
                  <ul className="space-y-3">
                    {[
                      "24/7 Customer Support Coverage",
                      "Basic Language Understanding",
                      "Simple Website Integration",
                      "Standard Response Templates",
                      "Basic Analytics Dashboard"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3 text-gray-700">
                        <Check className="h-5 w-5 text-[#9b87f5] flex-shrink-0" />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Key Benefits */}
                  <div className="border-t border-gray-100 pt-6">
                    <ul className="space-y-4">
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
                        <li key={index} className="group">
                          <h5 className="font-semibold text-[#6E59A5] mb-1 group-hover:text-[#9b87f5] transition-colors">
                            {benefit.title}
                          </h5>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Right side - Chat Demo */}
            <div className="bg-[#1A1F2C] rounded-xl shadow-2xl p-6 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center space-x-3 border-b border-gray-700/50 pb-4 mb-6">
                <Bot className="h-6 w-6 text-[#FEF250]" />
                <h3 className="text-lg font-semibold text-white">AI Assistant Demo</h3>
              </div>
              
              <div className="space-y-4">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-gray-700/70 rounded-2xl rounded-tr-sm p-3 max-w-[80%]">
                    <p className="text-sm text-white">Hi! I need help with my order #12345</p>
                  </div>
                </div>

                {/* Bot Response */}
                <div className="flex space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#FEF250] flex items-center justify-center flex-shrink-0">
                    <Bot className="h-5 w-5 text-[#1A1F2C]" />
                  </div>
                  <div className="bg-[#9b87f5] rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                    <p className="text-sm text-white">Hello! I'd be happy to help you with your order. I can see that order #12345 was shipped yesterday and is expected to arrive by Friday.</p>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-gray-700/70 rounded-2xl rounded-tr-sm p-3 max-w-[80%]">
                    <p className="text-sm text-white">Yes, please show me the tracking information</p>
                  </div>
                </div>

                {/* Bot Response */}
                <div className="flex space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#FEF250] flex items-center justify-center flex-shrink-0">
                    <Bot className="h-5 w-5 text-[#1A1F2C]" />
                  </div>
                  <div className="bg-[#9b87f5] rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                    <p className="text-sm text-white">Here's your tracking link: <span className="underline cursor-pointer hover:text-[#FEF250] transition-colors">track.shipping.com/12345</span></p>
                  </div>
                </div>
              </div>

              {/* Input Field Demo */}
              <div className="mt-6 border-t border-gray-700/50 pt-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 p-2.5 bg-gray-800/50 border border-gray-700/50 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent transition-all"
                    disabled
                  />
                  <button 
                    className="bg-[#9b87f5] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#8b5cf6] transition-colors disabled:opacity-50" 
                    disabled
                  >
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