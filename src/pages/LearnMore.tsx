import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Mail, Phone, Share2 } from 'lucide-react';

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[#FEF250] opacity-95" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="max-w-3xl mx-auto">
              <div className="text-center space-y-8">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-black">
                  About ChatBoB
                </h1>
                <p className="text-xl md:text-2xl text-gray-800 max-w-2xl mx-auto">
                  Your AI-Powered Customer Service Solution
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Why Choose ChatBoB?</h2>
                  <p className="text-lg text-gray-600">
                    ChatBoB is designed to revolutionize your customer service experience with advanced AI technology that understands and responds to your customers' needs 24/7.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "24/7 Customer Support",
                      "Natural Language Processing",
                      "Seamless Integration",
                      "Customizable Solutions",
                      "Analytics & Insights",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <svg
                          className="h-6 w-6 text-[#FEF250]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="/lovable-uploads/d9f650d7-8b98-468d-9d62-299054de0af7.png"
                    alt="ChatBoB Features"
                    className="w-96 animate-float"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

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
