import React from 'react';
import { MessageCircle, Mail, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const GrowthPlanSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Growth Plan: Scale Up</h2>
            <p className="text-gray-600">
              Enhanced features for growing businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <Card className="bg-gray-50 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-[#9b87f5] bg-opacity-20 p-3 rounded-lg">
                      <MessageCircle className="h-6 w-6 text-[#9b87f5]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Advanced AI Chatbot</h3>
                      <p className="text-gray-600">Smart Learning System</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Self-learning capabilities",
                      "Advanced conversation flow",
                      "Custom knowledge base",
                      "Multi-language support",
                      "Detailed analytics"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-[#9b87f5]" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-[#9b87f5] bg-opacity-20 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-[#9b87f5]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Email Automation</h3>
                      <p className="text-gray-600">Smart Email Management</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Automated responses",
                      "Email categorization",
                      "Priority inbox",
                      "Follow-up automation",
                      "Basic reporting"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-[#9b87f5]" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-gray-50 shadow-md">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Enhanced Benefits</h4>
                <ul className="space-y-4">
                  {[
                    {
                      title: "Increased Efficiency",
                      description: "Handle more inquiries automatically"
                    },
                    {
                      title: "Better Understanding",
                      description: "AI learns from each interaction"
                    },
                    {
                      title: "Multi-Channel Support",
                      description: "Chat and email integration"
                    },
                    {
                      title: "Advanced Analytics",
                      description: "Track and improve performance"
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

export default GrowthPlanSection;