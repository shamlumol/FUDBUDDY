import React, { useState, useEffect } from 'react';
import { ArrowLeft, Search as SearchIcon, Heart } from 'lucide-react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getRestaurantById, getRestaurantMenu } from '../services/api';
import { toast } from '../components/ui/Toast';

const Menu = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantFoods, setRestaurantFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const [savedFoodIds, setSavedFoodIds] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('savedFoods') || '[]');
    return saved.map(f => f.id);
  });

  const handleToggleWishlist = (e, food) => {
    e.preventDefault();
    e.stopPropagation();
    let saved = JSON.parse(localStorage.getItem('savedFoods') || '[]');
    const isSaved = saved.some(f => f.id === food.id);
    
    if (isSaved) {
      saved = saved.filter(f => f.id !== food.id);
      setSavedFoodIds(prev => prev.filter(id => id !== food.id));
      toast('Removed from wishlist!');
    } else {
      saved.push(food);
      setSavedFoodIds(prev => [...prev, food.id]);
      toast('Added to wishlist!');
    }
    localStorage.setItem('savedFoods', JSON.stringify(saved));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [restRes, menuRes] = await Promise.all([
          getRestaurantById(id),
          getRestaurantMenu(id)
        ]);
        setRestaurant(restRes);
        setRestaurantFoods(menuRes || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  
  const [activeCategory, setActiveCategory] = useState('All');

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Loading...</div>;
  }
  
  if (!restaurant) {
    return <div className="p-8 text-center text-red-500 font-bold">Failed to load restaurant. Please ensure the backend server is running!</div>;
  }

  // Generate dynamic categories from the foods
  const uniqueCats = Array.from(new Set(restaurantFoods.map(f => f.category).filter(Boolean)));
  const categories = ['All', ...uniqueCats];
  
  // Mobile filtering logic
  const filteredFoods = activeCategory === 'All' 
    ? restaurantFoods 
    : restaurantFoods.filter(f => f.category === activeCategory);

  // Desktop grouping logic
  const categoriesToRender = activeCategory === 'All' ? uniqueCats : [activeCategory];

  return (
    <div className="w-full bg-white min-h-screen pb-24 md:pb-10 font-sans">
      
      {/* ========================================================= */}
      {/* MOBILE LAYOUT                                             */}
      {/* ========================================================= */}
      <div className="md:hidden flex flex-col min-h-screen bg-white pb-20">
        {/* Header */}
        <header className="flex items-center justify-between px-4 pt-6 pb-4 bg-white sticky top-0 z-50">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3 text-[#112431]">
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-[17px] font-extrabold text-[#112431]">{restaurant.name}</h1>
          </div>
          <button className="text-[#112431]"><SearchIcon size={24} /></button>
        </header>

        {/* Top Tabs */}
        <div className="px-4 py-2 flex gap-2 overflow-x-auto hide-scrollbar sticky top-[68px] z-40 bg-white shadow-[0_4px_6px_-6px_rgba(0,0,0,0.1)]">
           <button className="bg-[#8cc63f] text-white px-5 py-2 rounded-xl text-[13px] font-bold flex-shrink-0 shadow-sm">Menu</button>
           <button className="bg-[#f3f4f6] text-[#3a444a] px-5 py-2 rounded-xl text-[13px] font-bold flex-shrink-0">Offers</button>
           <button className="bg-[#f3f4f6] text-[#3a444a] px-5 py-2 rounded-xl text-[13px] font-bold flex-shrink-0">Reviews</button>
           <button className="bg-[#f3f4f6] text-[#3a444a] px-5 py-2 rounded-xl text-[13px] font-bold flex-shrink-0">About</button>
        </div>

        {/* 2-Column Split Pane */}
        <div className="flex flex-1 overflow-hidden h-[calc(100vh-140px)]">
          {/* Left Sidebar - Categories */}
          <div className="w-[100px] flex-shrink-0 bg-[#f9fafb] overflow-y-auto hide-scrollbar border-r border-gray-100 pb-20">
            {categories.map((cat, idx) => {
              const isActive = cat === activeCategory;
              return (
                <button 
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left py-4 px-3 text-[12px] font-bold transition-colors ${
                    isActive ? 'bg-[#fff5f5] text-[#112431]' : 'text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Right Main Area - Items */}
          <div className="flex-1 overflow-y-auto px-4 pb-24 bg-white">
            {filteredFoods.length > 0 ? filteredFoods.map((item, idx) => (
               <Link to={`/food/${item.id}`} key={idx} className="flex py-4 border-b border-gray-50 items-start cursor-pointer hover:bg-gray-50 transition-colors">
                 {/* Image */}
                 <div className="w-[85px] h-[85px] bg-gray-200 rounded-xl mr-3 flex-shrink-0 shadow-sm relative overflow-hidden flex items-center justify-center">
                   {item.image ? <img src={item.image} alt={item.name} className="w-full h-full object-cover" /> : 
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 opacity-50"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>}
                 </div>
                 
                 {/* Details */}
                 <div className="flex-1 flex flex-col h-[85px] justify-between">
                   <div>
                     <h4 className="font-extrabold text-[#112431] text-[13px] leading-tight mb-0.5">{item.name}</h4>
                     {item.desc && <p className="text-[11px] font-medium text-gray-400 line-clamp-1">{item.desc}</p>}
                   </div>
                   
                   <div className="flex justify-between items-end w-full">
                     <p className="font-extrabold text-[#112431] text-[15px]">
                       <span className="text-[10px] mr-0.5">SR</span>{(item.price || '').replace('SR', '').trim()}
                     </p>
                     <button 
                       onClick={(e) => handleToggleWishlist(e, item)}
                       className="p-2 rounded-full hover:bg-red-50 transition-colors flex items-center justify-center flex-shrink-0 group/wishlist"
                     >
                       <Heart size={20} className={`${savedFoodIds.includes(item.id) ? 'fill-red-500 text-red-500' : 'text-gray-400 group-hover/wishlist:text-red-500'} transition-colors`} />
                     </button>
                   </div>
                 </div>
               </Link>
            )) : (
              <div className="p-4 text-gray-500 text-sm">No items found for this category.</div>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* DESKTOP LAYOUT                                            */}
      {/* ========================================================= */}
      <div className="hidden md:block w-full mx-auto px-4 md:px-6 lg:px-8 pt-12 pb-20">
        
        {/* Header */}
        <div className="flex items-center mb-8">
          <button onClick={() => navigate(-1)} className="mr-4 text-[#112431] bg-[#f3f4f6] p-2 rounded-full hover:bg-gray-200 transition-colors">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-[24px] font-extrabold text-[#112431]">{restaurant.name}</h1>
        </div>

        {/* Main Tabs */}
        <div className="flex space-x-3 mb-6">
          <button className="bg-[#8cc63f] text-white px-8 py-2.5 rounded-xl text-[14px] font-bold shadow-md">Menu</button>
          <button className="bg-[#f3f4f6] text-[#3a444a] px-8 py-2.5 rounded-xl text-[14px] font-bold hover:bg-gray-200 transition-colors">Offers</button>
          <button className="bg-[#f3f4f6] text-[#3a444a] px-8 py-2.5 rounded-xl text-[14px] font-bold hover:bg-gray-200 transition-colors">Reviews</button>
          <button className="bg-[#f3f4f6] text-[#3a444a] px-8 py-2.5 rounded-xl text-[14px] font-bold hover:bg-gray-200 transition-colors">About</button>
        </div>

        {/* Sub Category Pills */}
        <div className="flex space-x-2.5 mb-10 pb-6 border-b border-gray-100 flex-wrap gap-y-3">
           {categories.map((cat, idx) => (
             <button 
               key={idx}
               onClick={() => setActiveCategory(cat)}
               className={`px-5 py-2 rounded-full text-[13px] font-bold transition-colors ${
                 activeCategory === cat ? 'bg-[#8cc63f] text-white shadow-sm' : 'bg-[#f3f4f6] text-[#3a444a] hover:bg-gray-200'
               }`}
             >
               {cat}
             </button>
           ))}
        </div>

        {/* Layout */}
        <div className="flex flex-col gap-10">
          
          {categoriesToRender.map((cat, idx) => {
            const items = restaurantFoods.filter(f => f.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={idx}>
                 <h3 className="text-[18px] font-extrabold text-[#112431] mb-4">{cat}</h3>
                 <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                   {items.map((item, itemIdx, arr) => (
                     <Link to={`/food/${item.id}`} key={itemIdx} className={`flex py-5 px-6 items-center hover:bg-gray-50 transition-colors cursor-pointer ${itemIdx !== arr.length - 1 ? 'border-b border-gray-50' : ''}`}>
                       <div className="w-[120px] h-[80px] bg-gray-200 rounded-xl mr-5 flex-shrink-0 overflow-hidden shadow-sm flex items-center justify-center">
                         {item.image ? <img src={item.image} alt={item.name} className="w-full h-full object-cover" /> : 
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 opacity-50"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>}
                       </div>
                       <div className="flex-1 pr-6 flex flex-col h-[80px] justify-between py-0.5">
                         <div>
                           <h4 className="font-extrabold text-[#112431] text-[15px] mb-1 leading-tight">{item.name}</h4>
                           {item.desc && <p className="text-[13px] text-gray-500 font-medium">{item.desc}</p>}
                         </div>
                         <p className="font-extrabold text-[#112431] text-[15px]">
                           <span className="text-[11px] mr-1">SR</span>{(item.price || '').replace('SR', '').trim()}
                         </p>
                       </div>
                       <button 
                         onClick={(e) => handleToggleWishlist(e, item)}
                         className="p-2 rounded-full hover:bg-red-50 transition-colors flex items-center justify-center flex-shrink-0 group/wishlist"
                       >
                         <Heart size={24} className={`${savedFoodIds.includes(item.id) ? 'fill-red-500 text-red-500' : 'text-gray-400 group-hover/wishlist:text-red-500'} transition-colors`} />
                       </button>
                     </Link>
                   ))}
                 </div>
              </div>
            );
          })}
          {categoriesToRender.length === 0 && (
             <div className="p-8 text-center text-gray-500">No items available.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
