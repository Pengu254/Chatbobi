import { Bot } from 'lucide-react';

const DemoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          See the Difference
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Old Bot Side */}
          <div className="p-6 rounded-lg bg-gray-200 space-y-4 border border-gray-300 opacity-75 hover:opacity-85 transition-opacity">
            <div className="text-center mb-6">
              <span className="inline-block px-3 py-1 bg-gray-300 text-gray-700 text-sm rounded-full">
                Traditional Bot
              </span>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-gray-400 rounded-lg p-4">
                <Bot className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <div className="bg-white p-4 rounded-lg border border-gray-400">
                  <p className="text-gray-700">Hi, how can I help you?</p>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4 justify-end">
              <div className="flex-1">
                <div className="bg-gray-300 p-4 rounded-lg">
                  <p className="text-gray-800">I need a refund for my order #12345</p>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-gray-400 rounded-lg p-4">
                <Bot className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <div className="bg-white p-4 rounded-lg border border-gray-400">
                  <p className="text-gray-700">I don't understand. Please contact support@example.com</p>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-4 font-mono text-xs">
              Limited Understanding • No Actions • Email Only
            </p>
          </div>

          {/* New Bot Side - More modern and vibrant */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-[#F2FCE2] to-[#E5DEFF] space-y-4 shadow-2xl border border-[#9b87f5]/20 hover:scale-[1.02] transition-all">
            <div className="text-center mb-6">
              <span className="inline-block px-4 py-1.5 bg-[#9b87f5] text-white text-sm rounded-full shadow-lg">
                AI-Powered Assistant
              </span>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-white rounded-xl p-2 shadow-lg animate-pulse">
                <img 
                  src="/lovable-uploads/fcb93b34-7b4b-4829-8029-c444ee9669a3.png" 
                  alt="BOB Assistant" 
                  className="w-12 h-12 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <div className="bg-white/90 p-4 rounded-xl shadow-lg border border-[#9b87f5]/20 animate-fade-in">
                  <p className="text-gray-800 font-medium">Hello! I'm here to assist you. How can I help?</p>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4 justify-end">
              <div className="flex-1">
                <div className="bg-[#FEF250] p-4 rounded-xl shadow-lg">
                  <p className="text-gray-800 font-medium">I need a refund for my order #12345</p>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-white rounded-xl p-2 shadow-lg animate-pulse">
                <img 
                  src="/lovable-uploads/fcb93b34-7b4b-4829-8029-c444ee9669a3.png" 
                  alt="BOB Assistant" 
                  className="w-12 h-12 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <div className="bg-white/90 p-4 rounded-xl shadow-lg border border-[#9b87f5]/20 animate-fade-in">
                  <p className="text-gray-800 font-medium">
                    I've found your order #12345. I can process the refund right away. The amount of $59.99 will be returned to your original payment method within 3-5 business days. Is there anything else you need help with?
                  </p>
                </div>
              </div>
            </div>
            <p className="text-center text-[#6E59A5] mt-4 font-medium">
              Smart Understanding • Instant Actions • 24/7 Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;