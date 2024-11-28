import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import SmallPlanSection from '@/components/sections/SmallPlanSection';
import GrowthPlanSection from '@/components/sections/GrowthPlanSection';
import ProPlanSection from '@/components/sections/ProPlanSection';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Mail, Phone, Share2 } from 'lucide-react';

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <div className="pt-24">
        <HeroSection />
        <WhyChooseSection />
        <SmallPlanSection />
        <GrowthPlanSection />
        <ProPlanSection />
        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Cost Effective",
                  description: "Reduce customer service costs while maintaining quality",
                },
                {
                  title: "Always Available",
                  description: "Provide support to your customers around the clock",
                },
                {
                  title: "Scalable Solution",
                  description: "Grow your support capabilities as your business expands",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Tiers Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How ChatBoB Works</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Small Package */}
              <Card className="relative overflow-hidden border-2 hover:border-[#FEF250] transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#FEF250]" />
                <CardContent className="pt-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">Small</h3>
                    <p className="text-gray-600">Essential AI Support</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MessageCircle className="w-6 h-6 text-[#FEF250] mt-1" />
                      <div>
                        <h4 className="font-semibold">AI Chatbot</h4>
                        <p className="text-sm text-gray-600">24/7 instant customer support with our intelligent chatbot</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Growth Package */}
              <Card className="relative overflow-hidden border-2 hover:border-[#FEF250] transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#FEF250]" />
                <CardContent className="pt-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">Growth</h3>
                    <p className="text-gray-600">Enhanced Communication</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MessageCircle className="w-6 h-6 text-[#FEF250] mt-1" />
                      <div>
                        <h4 className="font-semibold">AI Chatbot</h4>
                        <p className="text-sm text-gray-600">Advanced chatbot with learning capabilities</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="w-6 h-6 text-[#FEF250] mt-1" />
                      <div>
                        <h4 className="font-semibold">AI Email Automation</h4>
                        <p className="text-sm text-gray-600">Automated email responses and follow-ups</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pro Package */}
              <Card className="relative overflow-hidden border-2 hover:border-[#FEF250] transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#FEF250]" />
                <CardContent className="pt-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">Pro</h3>
                    <p className="text-gray-600">Full Service Suite</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MessageCircle className="w-6 h-6 text-[#FEF250] mt-1" />
                      <div>
                        <h4 className="font-semibold">AI Chatbot</h4>
                        <p className="text-sm text-gray-600">Enterprise-level chatbot with custom training</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="w-6 h-6 text-[#FEF250] mt-1" />
                      <div>
                        <h4 className="font-semibold">AI Email Automation</h4>
                        <p className="text-sm text-gray-600">Comprehensive email management system</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-6 h-6 text-[#FEF250] mt-1" />
                      <div>
                        <h4 className="font-semibold">AI Phone Service</h4>
                        <p className="text-sm text-gray-600">Automated phone support system</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Share2 className="w-6 h-6 text-[#FEF250] mt-1" />
                      <div>
                        <h4 className="font-semibold">Social Media Management</h4>
                        <p className="text-sm text-gray-600">Full coverage across all major platforms (TikTok, YouTube, Facebook, Instagram, X, LinkedIn)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LearnMore;
