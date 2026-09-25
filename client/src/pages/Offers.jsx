import React from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { ArrowLeft, Heart } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { offersData, restaurants } from '../data/mockData';

const Offers = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-background min-h-screen pb-24 md:pb-10 font-sans">
      <Breadcrumbs items={[{ label: 'Offers' }]} />
      
      {/* ========================================================= */}
      {/* MOBILE LAYOUT                                             */}
      {/* ========================================================= */}
      <div className="md:hidden pb-24">
        {/* Header */}
        <header className="flex items-center px-4 pt-6 pb-4 bg-white sticky top-0 z-10">
          <button onClick={() => navigate(-1)} className="mr-3 text-[#112431]">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-[17px] font-extrabold text-[#112431]">Offers</h1>
        </header>

        {/* Tabs */}
        <div className="px-4 mb-5 flex space-x-2 overflow-x-auto hide-scrollbar">
          <button className="bg-[#8cc63f] text-white px-5 py-2 rounded-xl text-[13px] font-bold flex-shrink-0 shadow-sm">All</button>
          <button className="bg-[#f3f4f6] text-[#3a444a] px-5 py-2 rounded-xl text-[13px] font-bold flex-shrink-0 hover:bg-gray-200">Restaurants</button>
          <button className="bg-[#f3f4f6] text-[#3a444a] px-5 py-2 rounded-xl text-[13px] font-bold flex-shrink-0 hover:bg-gray-200">Food</button>
          <button className="bg-[#f3f4f6] text-[#3a444a] px-5 py-2 rounded-xl text-[13px] font-bold flex-shrink-0 hover:bg-gray-200">Near Me</button>
        </div>

        {/* Hero Banner */}
        <div className="px-4 mb-4">
          <div className="bg-gradient-to-br from-gray-200 to-gray-100 rounded-2xl h-[140px] flex items-center p-5 relative overflow-hidden">
            {/* Placeholder shape */}
            <div className="absolute left-[-20px] bottom-[-20px] w-32 h-32 bg-gray-300 rounded-full opacity-50 blur-xl"></div>
            
            <div className="w-[100px] h-[100px] flex-shrink-0 mr-4 flex items-center justify-center">
               <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            </div>
            
            <div className="flex-1 z-10">
               <h2 className="text-[18px] font-extrabold text-[#112431] leading-tight mb-1">Delicious Deals Just for You</h2>
               <p className="text-[12px] text-[#3a444a] font-medium">Great food. Great savings.</p>
            </div>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center space-x-1.5 mt-3">
             <div className="w-1.5 h-1.5 rounded-full bg-[#8cc63f]"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
          </div>
        </div>

        {/* Offer Cards (Horizontal style from wireframe) */}
        <div className="px-4 flex flex-col gap-4">
          {offersData.map((offer, idx) => {
            const restaurant = restaurants.find(r => r.id === offer.restaurantId) || restaurants[0];
            return (
              <div key={offer.id} className="bg-white border border-gray-100 rounded-[20px] p-3 flex shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                
                {/* Left Image */}
                <div className="w-[110px] h-[110px] bg-gray-200 rounded-2xl flex-shrink-0 mr-4 relative overflow-hidden flex items-center justify-center shadow-sm">
                  {offer.image ? (
                     <img decoding="async" loading="lazy" src={offer.image} alt="Offer" className="w-full h-full object-cover" />
                  ) : (
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                  )}
                </div>
                
                {/* Right Details */}
                <div className="flex-1 py-1 flex flex-col justify-between relative">
                  
                  {/* Heart Icon */}
                  <button className="absolute top-0 right-0 text-[#3a444a] hover:text-[#8cc63f]">
                    <Heart size={18} className={idx === 0 ? "fill-[#8cc63f] text-[#8cc63f]" : ""} />
                  </button>

                  <div>
                    <h3 className="text-[15px] font-extrabold text-[#8cc63f] mb-0.5">{offer.discount}</h3>
                    <p className="text-[11px] text-[#3a444a] font-medium mb-0.5">On selected items</p>
                    <p className="text-[12px] text-gray-500 font-bold line-clamp-1">{restaurant.name}</p>
                  </div>
                  
                  <Link to={`/redeem/${offer.id}`} className="mt-3 w-full inline-block text-center bg-[#8cc63f] text-white font-bold text-[13px] py-2.5 rounded-xl shadow-sm hover:bg-[#7ab135] transition-colors">
                    View Offer
                  </Link>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================= */}
      {/* DESKTOP LAYOUT                                            */}
      {/* ========================================================= */}
      <div className="hidden md:block w-full mx-auto px-4 md:px-6 lg:px-8 pt-12 pb-20">
        <div className="flex items-center mb-8">
          <h1 className="text-[24px] font-extrabold text-[#112431]">Today's Best Food Offers</h1>
        </div>

        {/* Tabs */}
        <div className="flex space-x-3 mb-10 pb-4">
          <button className="bg-[#8cc63f] text-white px-8 py-2.5 rounded-xl text-[14px] font-bold shadow-md">All</button>
          <button className="bg-[#f3f4f6] text-[#3a444a] px-8 py-2.5 rounded-xl text-[14px] font-bold hover:bg-gray-200 transition-colors">Restaurants</button>
          <button className="bg-[#f3f4f6] text-[#3a444a] px-8 py-2.5 rounded-xl text-[14px] font-bold hover:bg-gray-200 transition-colors">Food</button>
          <button className="bg-[#f3f4f6] text-[#3a444a] px-8 py-2.5 rounded-xl text-[14px] font-bold hover:bg-gray-200 transition-colors">Near Me</button>
        </div>

        {/* Offer Cards Grid */}
        <div className="grid grid-cols-2 gap-8">
          {offersData.map((offer) => {
            const restaurant = restaurants.find(r => r.id === offer.restaurantId) || restaurants[0];
            return (
              <div key={offer.id} className="bg-white border border-gray-100 rounded-[24px] p-5 flex flex-col shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                <div className="w-full h-[200px] bg-gray-200 rounded-2xl mb-5 relative overflow-hidden shadow-sm">
                  <img decoding="async" loading="lazy" src={offer.image} alt="Offer" className="w-full h-full object-cover" />
                </div>
                
                <h3 className="text-[20px] font-extrabold text-[#112431] mb-1">{offer.discount}</h3>
                <p className="text-[14px] text-[#3a444a] font-medium mb-6 flex-1">{restaurant.name}</p>
                
                <Link to={`/redeem/${offer.id}`} className="w-full text-center bg-[#8cc63f] text-white font-bold text-[15px] py-3.5 rounded-xl shadow-sm hover:bg-[#7ab135] transition-colors">
                  View Offer
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Offers;
