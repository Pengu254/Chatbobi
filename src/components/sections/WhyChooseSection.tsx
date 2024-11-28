import React from 'react';

const WhyChooseSection = () => {
  return (
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
  );
};

export default WhyChooseSection;