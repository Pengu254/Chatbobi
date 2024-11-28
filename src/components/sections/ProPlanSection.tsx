import React from 'react';
import { MessageCircle, Mail, Phone, Share2, Facebook, Instagram, Linkedin, Youtube, Crown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProPlanSection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-[#F2FCE2] to-[#E5DEFF]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Crown className="h-8 w-8 text-[#8B5CF6]" />
              <h2 className="text-2xl font-bold">Pro Plan: Complete AI Communication Suite</h2>
            </div>
            <p className="text-lg text-gray-600">
              Enterprise-level AI solutions for comprehensive customer engagement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="grid gap-4">
              {[
                {
                  icon: MessageCircle,
                  title: "Advanced AI Chatbot",
                  description: "Enterprise-grade chatbot with continuous learning and custom training capabilities"
                },
                {
                  icon: Mail,
                  title: "Premium Email Automation",
                  description: "Comprehensive email management with smart prioritization and advanced analytics"
                },
                {
                  icon: Phone,
                  title: "AI Phone Service",
                  description: "Intelligent call handling with voice recognition and real-time translation"
                },
                {
                  icon: Share2,
                  title: "Social Media Management",
                  description: "Unified social media support across all major platforms"
                }
              ].map((feature, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#8B5CF6]/20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-[#8B5CF6] bg-opacity-20 p-3 rounded-lg">
                        <feature.icon className="h-6 w-6 text-[#8B5CF6]" />
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                    {feature.icon === Share2 && (
                      <div className="flex space-x-4 mt-4">
                        <Facebook className="h-5 w-5 text-[#8B5CF6]" />
                        <Instagram className="h-5 w-5 text-[#8B5CF6]" />
                        <Linkedin className="h-5 w-5 text-[#8B5CF6]" />
                        <Youtube className="h-5 w-5 text-[#8B5CF6]" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-white shadow-xl border-2 border-[#8B5CF6]/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Crown className="h-6 w-6 text-[#8B5CF6]" />
                  Pro Plan Benefits
                </h4>
                <div className="space-y-4">
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
                    <div key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
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

export default ProPlanSection;