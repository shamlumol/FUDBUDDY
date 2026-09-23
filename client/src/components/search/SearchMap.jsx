import React from 'react';
import { ChevronDown } from 'lucide-react';

const FoodBuddyPin = ({ className = "" }) => (
  <svg 
    viewBox="0 0 64 80" 
    className={`drop-shadow-md ${className}`} 
    width="48" 
    height="60"
  >
    <defs>
      <linearGradient id="pinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#c5e638" />
        <stop offset="100%" stopColor="#5ea72b" />
      </linearGradient>
      <radialGradient id="shadowGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(0,0,0,0.5)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </radialGradient>
    </defs>

    {/* Map Shadow */}
    <ellipse cx="32" cy="74" rx="10" ry="4" fill="url(#shadowGrad)" />

    {/* Pin Shape */}
    <path 
      d="M32 0C14.327 0 0 14.327 0 32c0 23 32 40 32 40s32-17 32-40C64 14.327 49.673 0 32 0z" 
      fill="url(#pinGrad)" 
    />

    {/* White Icon inside */}
    <g fill="#ffffff">
      {/* Steam */}
      <path d="M26 18c0 3 2 4 2 6s-2 3-2 6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 17c0 3 2 4 2 6s-2 3-2 6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 19c0 3 2 4 2 6s-2 3-2 6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      
      {/* Knife */}
      <path d="M18 36 h 20 l 4 2 l -4 2 h -20 z" />
      
      {/* Fork */}
      <path d="M18 42 h 6 v -3 h 2 v 8 h -2 v -3 h -6 v -2 z" />
      <rect x="26" y="42" width="16" height="2" />
    </g>
  </svg>
);

const SearchMap = () => {
  return (
    <div className="w-full mb-8">
      {/* Map Container */}
      <div className="w-full h-[320px] bg-[#eef1f3] rounded-2xl overflow-hidden relative border border-gray-200 mb-4 shadow-sm">
        {/* Subtle map pattern background */}
        <div 
          className="absolute inset-0 opacity-40" 
          style={{
            backgroundImage: 'radial-gradient(circle at center, #9ca3af 2px, transparent 2px)', 
            backgroundSize: '30px 30px'
          }}
        ></div>
        
        {/* Map paths (simulated lines) */}
        <svg className="absolute inset-0 w-full h-full opacity-20 stroke-gray-500" fill="none" strokeWidth="3">
          <path d="M 50 0 L 80 120 L 20 200 L 0 250" />
          <path d="M 120 0 L 150 150 L 250 220 L 300 250" />
          <path d="M 300 80 L 180 140 L 120 280 L 50 320" />
          <path d="M 220 0 L 200 80 L 280 180 L 400 200" />
        </svg>

        {/* Map Pins */}
        <div className="absolute top-[10%] left-[25%]">
          <FoodBuddyPin className="scale-75 origin-bottom" />
        </div>
        <div className="absolute top-[30%] left-[15%]">
          <FoodBuddyPin className="scale-75 origin-bottom" />
        </div>
        <div className="absolute top-[25%] left-[55%]">
          <FoodBuddyPin className="scale-75 origin-bottom" />
        </div>
        <div className="absolute top-[55%] left-[35%]">
          <FoodBuddyPin className="scale-75 origin-bottom" />
        </div>
        <div className="absolute top-[65%] left-[65%]">
          <FoodBuddyPin className="scale-75 origin-bottom" />
        </div>
      </div>

      {/* Sort By */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-bold text-gray-900">Sort by:</span>
        <button className="flex items-center justify-between min-w-[140px] bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-bold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
          Top rated
          <ChevronDown size={16} className="text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default SearchMap;
