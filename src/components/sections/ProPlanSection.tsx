import React from 'react';
import { MessageCircle, Mail, Phone, Share2, Crown, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProPlanSection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-[#8B5CF6] to-[#6E59A5] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Crown className="h-8 w-8 text-[#FEF250]" />
              <h2 className="text-2xl font-bold">Pro Plan: Enterprise Suite</h2>
            </div>
            <p className="text-gray-100">
              Complete AI solution for enterprise communication
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="grid gap-4">
              {[
                {
                  icon: MessageCircle,
                  title: "Enterprise AI Chatbot",
                  description: "Custom-trained AI with advanced learning",
                  features: [
                    "Custom AI training",
                    "Advanced analytics",
                    "Multiple chatbot instances",
                    "Priority support"
                  ]
                },
                {
                  icon: Mail,
                  title: "Premium Email Suite",
                  description: "Complete email automation system",
                  features: [
                    "Smart categorization",
                    "Custom workflows",
                    "Team collaboration",
                    "Advanced reporting"
                  ]
                },
                {
                  icon: Phone,
                  title: "AI Phone System",
                  description: "Intelligent call management",
                  features: [
                    "Voice recognition",
                    "Call routing",
                    "Real-time translation",
                    "Call analytics"
                  ]
                },
                {
                  icon: Share2,
                  title: "Social Integration",
                  description: "Unified social media support",
                  features: [
                    "Multi-platform support",
                    "Automated responses",
                    "Content management",
                    "Engagement analytics"
                  ]
                }
              ].map((feature, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-lg border-0 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-[#FEF250] bg-opacity-20 p-3 rounded-lg">
                        <feature.icon className="h-6 w-6 text-[#FEF250]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                        <p className="text-gray-200">{feature.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <Check className="h-5 w-5 text-[#FEF250]" />
                          <span className="text-gray-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
                  <Crown className="h-6 w-6 text-[#FEF250]" />
                  Enterprise Benefits
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      title: "Complete AI Suite",
                      description: "All channels integrated in one platform"
                    },
                    {
                      title: "Custom Solutions",
                      description: "Tailored to your specific needs"
                    },
                    {
                      title: "24/7 Priority Support",
                      description: "Dedicated support team"
                    },
                    {
                      title: "Advanced Security",
                      description: "Enterprise-grade protection"
                    },
                    {
                      title: "Scalable System",
                      description: "Grows with your business"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="border-b border-white/20 pb-3 last:border-0 last:pb-0">
                      <h5 className="font-semibold mb-1 text-white">{benefit.title}</h5>
                      <p className="text-gray-200">{benefit.description}</p>
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