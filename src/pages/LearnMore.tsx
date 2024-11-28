import Header from '@/components/Header';

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
                  About ChatBob
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
                  <h2 className="text-3xl font-bold">Why Choose ChatBob?</h2>
                  <p className="text-lg text-gray-600">
                    ChatBob is designed to revolutionize your customer service experience with advanced AI technology that understands and responds to your customers' needs 24/7.
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
                    alt="ChatBob Features"
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
      </div>
    </div>
  );
};

export default LearnMore;