import React from 'react';
import SearchBar from './SearchBar';
import LocationSelector from './LocationSelector';

const HeroSection = () => {
  return (
    <>
      {/* MOBILE HERO */}
      <section className="md:hidden mt-2 mb-6">
        <div className="flex justify-between items-center relative mb-6">
          <div className="flex-1 pr-4 z-10">
            <h1 className="text-[32px] font-extrabold text-gray-900 leading-[1.1] mb-2 tracking-tight">
              The<br />Sunday Bite
            </h1>
            <p className="text-sm text-gray-500 font-medium">Delicious food for every mood</p>
          </div>
          <div className="absolute right-[-20px] top-[-10px] w-32 h-32 rounded-full overflow-hidden flex-shrink-0 z-0 opacity-90">
             <img decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=300" alt="Food Plate" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-1 mb-2">
          <SearchBar />
        </div>
        
        <div className="flex items-center px-2 mt-3">
          <LocationSelector />
        </div>
      </section>

      {/* DESKTOP HERO */}
      <section className="hidden md:flex items-center justify-between bg-[#f2f4f5] rounded-3xl p-12 mb-12 relative h-[420px]">
        {/* Decorative elements behind plate can go here if needed */}
        
        <div className="flex-1 max-w-xl z-10 pl-6">
          <h1 className="text-[52px] font-extrabold text-gray-900 leading-[1.1] mb-3 tracking-tight">
            The<br />Sunday Bite
          </h1>
          <p className="text-[#3a444a] text-lg font-medium mb-8">Delicious food for every mood</p>
          
          <div className="max-w-[480px]">
            <SearchBar className="py-3 text-base shadow-sm mb-4" />
            <LocationSelector />
          </div>
        </div>
        
        <div className="w-[380px] h-[380px] rounded-full overflow-hidden flex-shrink-0 relative shadow-xl z-10 mr-4 border-[6px] border-white">
           <img decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800" alt="Food Plate" className="w-full h-full object-cover" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
