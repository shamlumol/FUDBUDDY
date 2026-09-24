import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-5 bg-background md:hidden sticky top-0 z-50">
      <div className="flex items-center">
        <Link to="/">
          <img loading="lazy" src="/logo.png" alt="FoodBuddy Logo" className="h-6 object-contain" />
        </Link>
      </div>
      <Link to="/offers" className="bg-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
        Offers
      </Link>
    </header>
  );
};

export default Header;
