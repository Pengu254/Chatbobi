import React from 'react';
import { MessageCircle, Mail, RefreshCcw } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const GrowthPlanSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Growth Plan: Enhanced AI Communication Suite</h2>
            <p className="text-gray-600">
              Scale your customer service with advanced AI tools and automated email management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <Card className="bg-gray-50 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-[#FEF250] bg-opacity-20 p-3 rounded-lg">
                      <MessageCircle className="h-6 w-6 text-[#FEF250]" />
                    </div>
                    <h3 className="text-xl font-semibold">Advanced AI Chatbot</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Our continuously evolving AI chatbot learns from interactions to provide even better customer support.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Self-learning capabilities",
                      "Regular feature updates",
                      "Advanced conversation handling",
                      "Custom knowledge integration",
                      "Performance analytics"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <RefreshCcw className="h-4 w-4 text-[#FEF250]" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-[#FEF250] bg-opacity-20 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-[#FEF250]" />
                    </div>
                    <h3 className="text-xl font-semibold">AI Email Automation</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Intelligent email management system that handles customer inquiries automatically.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Smart email categorization",
                      "Automated response generation",
                      "Priority inbox management",
                      "Follow-up automation",
                      "Email analytics and insights"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <RefreshCcw className="h-4 w-4 text-[#FEF250]" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-gray-50 shadow-md">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Growth Plan Benefits</h4>
                <div className="space-y-4">
                  {[
                    {
                      title: "Enhanced Customer Experience",
                      description: "Provide faster, more accurate responses across multiple channels"
                    },
                    {
                      title: "Time Savings",
                      description: "Automate up to 80% of routine customer communications"
                    },
                    {
                      title: "Continuous Improvement",
                      description: "AI systems that learn and adapt to your business needs"
                    },
                    {
                      title: "Seamless Integration",
                      description: "Works alongside your existing customer service tools"
                    },
                    {
                      title: "Scalable Solution",
                      description: "Easily handle increasing customer inquiries as you grow"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                      <h5 className="font-semibold mb-1">{benefit.title}</h5>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthPlanSection;