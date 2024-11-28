import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import SmallPlanSection from '@/components/sections/SmallPlanSection';
import GrowthPlanSection from '@/components/sections/GrowthPlanSection';
import ProPlanSection from '@/components/sections/ProPlanSection';

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <div className="pt-24">
        <HeroSection />
        <div className="max-w-[85%] mx-auto"> {/* Making sections 15% smaller */}
          <SmallPlanSection />
          <GrowthPlanSection />
          <ProPlanSection />
          <WhyChooseSection /> {/* Moved under Pro Plan section */}
        </div>
      </div>
    </div>
  );
};

export default LearnMore;