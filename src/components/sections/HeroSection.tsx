import React from 'react';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;