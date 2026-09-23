import React, { useState } from 'react';
import { ArrowLeft, Heart, Share2, Star } from 'lucide-react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { foods, restaurants } from '../data/mockData';
import RestaurantCard from '../components/RestaurantCard';
import { toast } from '../components/ui/Toast';

const FoodDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handleShare = () => toast("Link copied to clipboard!");
  
  const food = foods.find(f => f.id === parseInt(id)) || foods[0];
  const restaurantList = restaurants.slice(0, 3); // Mocking multiple availability

  return (
    <div className="w-full bg-white md:bg-[#f9fafb] min-h-screen pb-24 md:pb-10 font-sans">
      
      {/* ========================================================= */}
      {/* MOBILE LAYOUT                                             */}
      {/* ========================================================= */}
      <div className="md:hidden pb-20">
        {/* Top App Bar */}
        <div className="flex justify-between items-center px-4 py-4 bg-white sticky top-0 z-50">
          <button onClick={() => navigate(-1)} className="text-[#112431] p-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <div className="flex items-center gap-4">
            <button onClick={() => setIsFavorite(!isFavorite)} className="text-[#112431] hover:text-[#8cc63f] transition-colors">
              <Heart size={24} className={isFavorite ? "fill-[#8cc63f] text-[#8cc63f]" : ""} />
            </button>
            <button onClick={handleShare} className="text-[#112431]">
              <Share2 size={24} />
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="px-4 mb-5">
          <div className="w-full h-56 bg-gray-200 rounded-2xl overflow-hidden shadow-sm flex items-center justify-center">
            <img src={food.image} alt={food.name} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Details */}
        <div className="px-4">
          <div className="flex justify-between items-start mb-1">
            <h2 className="text-[24px] font-extrabold text-[#112431] leading-tight max-w-[70%]">{food.name}</h2>
            <p className="font-extrabold text-[#112431] text-[24px] mt-0.5">
              <span className="text-[14px] mr-1">SR</span>{food.price.replace('SR', '').trim()}
            </p>
          </div>
          
          <div className="flex items-center text-[13px] font-bold text-gray-500 mb-4">
            <Star size={16} className="text-[#FF9800] fill-current mr-1" />
            <span className="text-gray-700 mr-1">{food.rating}</span>
            <span>(320 reviews)</span>
          </div>

          <p className="text-[14px] text-[#3a444a] font-medium leading-relaxed mb-6">
            {food.desc || "Juicy grilled beef patty with cheese, lettuce and signature sauce."}
          </p>

          <div className="flex flex-wrap gap-2.5 mb-8">
            {['Popular', 'Spicy', 'No preservatives'].map((tag, idx) => (
              <span key={idx} className="bg-[#f3f4f6] text-[#3a444a] px-3.5 py-1.5 text-[12px] rounded-lg font-bold">
                {tag}
              </span>
            ))}
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
               <h3 className="text-[17px] font-extrabold text-[#112431]">Available at</h3>
               <span className="text-[13px] font-bold text-gray-500">See all</span>
            </div>
            <div className="flex flex-col gap-5">
              {restaurantList.map(rest => (
                <Link to={`/restaurant/${rest.id}`} key={rest.id} className="flex items-center justify-between group">
                  <div className="flex items-center">
                    <div className="w-[56px] h-[56px] bg-gray-200 rounded-xl flex items-center justify-center mr-4 overflow-hidden shadow-sm">
                      <img src={rest.logo} alt={rest.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#112431] text-[15px] mb-0.5">{rest.name}</h4>
                      <div className="flex items-center text-[12px] text-gray-500 font-medium">
                        <Star size={12} className="text-[#FF9800] fill-current mr-1" />
                        <span className="font-bold text-gray-700 mr-1">{rest.rating}</span>
                        <span>â€¢ {rest.location}</span>
                      </div>
                    </div>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* DESKTOP LAYOUT                                            */}
      {/* ========================================================= */}
      <div className="hidden md:flex flex-col w-full mx-auto px-4 md:px-6 lg:px-8 pt-12 pb-20 gap-8">
        
        {/* Top Card: Food Info */}
        <div className="bg-white rounded-3xl p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex gap-10">
          {/* Image */}
          <div className="w-[400px] h-[400px] flex-shrink-0 bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <img src={food.image} alt={food.name} className="w-full h-full object-cover" />
          </div>
          
          {/* Details */}
          <div className="flex-1 pt-4">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-[32px] font-extrabold text-[#112431]">{food.name}</h1>
              <button onClick={() => setIsFavorite(!isFavorite)} className="text-[#3a444a] hover:text-[#8cc63f] transition-colors bg-[#f3f4f6] p-3 rounded-full">
                <Heart size={24} className={isFavorite ? "fill-[#8cc63f] text-[#8cc63f]" : ""} />
              </button>
            </div>
            
            <div className="flex items-center text-[15px] font-bold text-gray-500 mb-8">
              <Star size={18} className="text-[#FF9800] fill-current mr-1.5" />
              <span className="text-gray-700 mr-2">{food.rating}</span>
              <span>(320 reviews)</span>
            </div>
            
            <p className="font-extrabold text-[#112431] text-[32px] mb-10">
              <span className="text-[16px] mr-1.5">SR</span>{food.price.replace('SR', '').trim()}
            </p>
            
            <p className="text-[16px] text-[#3a444a] font-medium leading-relaxed mb-10 max-w-2xl">
              {food.desc || "Juicy grilled beef patty with cheese, lettuce and signature sauce."}
            </p>

            <div className="flex flex-wrap gap-3">
              {['Popular', 'Spicy', 'No preservatives', 'Healthy'].map((tag, idx) => (
                <span key={idx} className="bg-[#f3f4f6] text-[#3a444a] px-4 py-2 text-[12px] rounded-full font-bold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Card: Available at */}
        <div className="bg-white rounded-3xl p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
          <h3 className="text-[18px] font-extrabold text-[#112431] mb-6">Available at</h3>
          
          <div className="flex flex-col">
            {restaurantList.map((rest, idx) => (
              <div key={rest.id} className={`flex items-center justify-between py-4 ${idx !== restaurantList.length - 1 ? 'border-b border-gray-50' : ''}`}>
                <div className="flex items-center flex-1">
                  <div className="w-[60px] h-[60px] bg-gray-200 rounded-xl flex items-center justify-center mr-5 overflow-hidden shadow-sm">
                    <img src={rest.logo} alt={rest.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#112431] text-[15px] mb-1">{rest.name}</h4>
                    <div className="flex items-center text-[12px] text-gray-500 font-medium">
                      <span>{rest.location}</span>
                      <span className="mx-2">â€¢</span>
                      <Star size={12} className="text-[#FF9800] fill-current mr-1" />
                      <span className="font-bold text-gray-700">{rest.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <Link to={`/restaurant/${rest.id}`} className="bg-[#8cc63f] text-white px-6 py-2 rounded-xl text-[13px] font-bold shadow-sm hover:bg-[#7ab135] transition-colors">
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
