import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="flex items-center text-sm font-medium text-gray-500 mb-6 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-4">
      <Link to="/" className="hover:text-[#8cc63f] flex items-center transition-colors">
        <Home size={14} className="mr-1" />
        Home
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={14} className="mx-2 flex-shrink-0" />
          {item.path ? (
            <Link to={item.path} className="hover:text-[#8cc63f] transition-colors whitespace-nowrap">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-bold whitespace-nowrap truncate">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
