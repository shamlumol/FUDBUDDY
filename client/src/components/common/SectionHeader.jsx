import React from 'react';
import { Link } from 'react-router-dom';

const SectionHeader = ({ title, seeAllLink }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg md:text-xl font-extrabold text-gray-900">{title}</h3>
      {seeAllLink && (
        <Link 
          to={seeAllLink} 
          className="text-sm font-bold text-gray-500 hover:text-green-500 transition-colors"
        >
          See all
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
