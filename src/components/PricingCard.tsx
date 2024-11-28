interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard = ({ title, price, features, isPopular }: PricingCardProps) => {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 border-2 transition-all duration-300 hover:transform hover:-translate-y-2 ${isPopular ? 'border-[#FEF250] shadow-xl' : 'border-gray-100'}`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-gray-500">/mo</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <svg className={`w-5 h-5 ${isPopular ? 'text-[#FEF250]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full py-2 px-4 rounded-full transition-all duration-300 ${
        isPopular ? 'bg-[#FEF250] text-black hover:bg-opacity-90 shadow-md hover:shadow-lg' : 'bg-gray-100 text-black hover:bg-gray-200'
      }`}>
        Order Now
      </button>
    </div>
  );
};

export default PricingCard;