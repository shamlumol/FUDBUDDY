import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="hidden md:block bg-gray-50 border-t border-gray-100 mt-20 py-12">
      <div className="w-full mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center mb-4 flex-shrink-0">
              <img src="/logo.png" alt="FoodBuddy Logo" className="h-10 object-contain" />
            </Link>
            <p className="text-sm text-gray-500 mb-4">
              Discover the best food and restaurants in Saudi Arabia.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Discover</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/search" className="hover:text-[#8cc63f] transition-colors">Restaurants</Link></li>
              <li><Link to="/offers" className="hover:text-[#8cc63f] transition-colors">Offers</Link></li>
              <li><Link to="/search?type=food" className="hover:text-[#8cc63f] transition-colors">Food Categories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-[#8cc63f] transition-colors">About Us</Link></li>
              <li><Link to="/" className="hover:text-[#8cc63f] transition-colors">Careers</Link></li>
              <li><Link to="/" className="hover:text-[#8cc63f] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-[#8cc63f] transition-colors">Terms of Service</Link></li>
              <li><Link to="/" className="hover:text-[#8cc63f] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} FoodBuddy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
