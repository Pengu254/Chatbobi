import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#FEF250] py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold">Chat <span className="text-black">Bob</span></span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 hover:text-black transition-colors">
            Home
          </Link>
          <Link to="/what-we-do" className="text-gray-800 hover:text-black transition-colors">
            What We Do
          </Link>
          <Link to="/pricing" className="text-gray-800 hover:text-black transition-colors">
            Pricing
          </Link>
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-sm">
            Book Demo
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;