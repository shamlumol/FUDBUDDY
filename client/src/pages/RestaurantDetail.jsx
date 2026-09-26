import Breadcrumbs from '../components/common/Breadcrumbs';
import React, { useState, useEffect } from 'react';
import { Heart, Share2, Star, MapPin, Phone, Mail, Globe, Navigation, ArrowLeft } from 'lucide-react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { getRestaurantById, getRestaurantMenu } from '../services/api';
import { toast } from '../components/ui/Toast';

const TrendingDishCard = ({ item }) => (
  <div className="group cursor-pointer flex flex-col h-full">
    <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden mb-3 relative bg-gray-50">
      {item.image ? (
        <img decoding="async" loading="lazy" src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
      ) : (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
        </div>
      )}
      <div className="absolute top-2 left-2 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
         <div className={`w-2.5 h-2.5 rounded-sm border ${item.isVeg ? 'border-green-600' : 'border-red-600'} flex items-center justify-center bg-white`}>
           <div className={`w-1 h-1 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
         </div>
      </div>
    </div>
    <div className="flex justify-between items-start px-1">
      <h4 className="text-[14px] font-extrabold text-[#112431] leading-tight line-clamp-2 pr-2">{item.name}</h4>
      <span className="text-[14px] font-extrabold text-[#8cc63f] whitespace-nowrap">{item.price || `SR ${item.priceValue}`}</span>
    </div>
  </div>
);


const Pagination = ({ total, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(total / itemsPerPage);
  if (totalPages <= 1) return null;
  return (
    <div className="flex justify-center items-center gap-4 mt-6 w-full col-span-full">
      <Breadcrumbs items={[{ label: 'Restaurant' }]} />
      <button onClick={() => onPageChange(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 disabled:opacity-50">&lt;</button>
      <div className="flex gap-2">
        {Array.from({length: totalPages}, (_, i) => i + 1).map(p => (
          <button key={p} onClick={() => onPageChange(p)} className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${currentPage === p ? 'bg-[#8cc63f] text-white' : 'bg-gray-100 text-gray-600'}`}>{p}</button>
        ))}
      </div>
      <button onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 disabled:opacity-50">&gt;</button>
    </div>
  );
};

const RestaurantDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    if (restaurant) {
      const saved = JSON.parse(localStorage.getItem('savedRestaurants') || '[]');
      setIsFavorite(saved.some(r => r.id === restaurant.id));
    }
  }, [restaurant]);

  const toggleSave = () => {
    if (!restaurant) return;
    let saved = JSON.parse(localStorage.getItem('savedRestaurants') || '[]');
    if (isFavorite) {
      saved = saved.filter(r => r.id !== restaurant.id);
    } else {
      saved.push(restaurant);
    }
    localStorage.setItem('savedRestaurants', JSON.stringify(saved));
    setIsFavorite(!isFavorite);
    window.dispatchEvent(new Event('storage'));
    toast(isFavorite ? "Removed from Wishlist" : "Added to Wishlist");
  };
  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
    toast("Link copied to clipboard!");
  };
  
  
  const [trendingItems, setTrendingItems] = useState([]);
  const [trendingPage, setTrendingPage] = useState(1);
  const [budgetPage, setBudgetPage] = useState(1);
  const itemsPerPage = 8;
  const [budgetItems, setBudgetItems] = useState([]);
  const [fullMenu, setFullMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [restRes, menuRes] = await Promise.all([
          getRestaurantById(id),
          getRestaurantMenu(id)
        ]);
        setRestaurant(restRes);
        setFullMenu(menuRes || []);
        setTrendingItems((menuRes || []).filter(item => item.isTrending));
        setBudgetItems((menuRes || []).filter(item => item.isBudget));
        if (!menuRes?.some(item => item.isTrending)) {
          setTrendingItems((menuRes || [])); // Fallback
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <div className="p-8 text-center text-gray-500 font-medium">Loading...</div>;
  }
  
  if (!restaurant) {
    return <div className="p-8 text-center text-red-500 font-bold">Failed to load restaurant.</div>;
  }

  let displayItems = trendingItems;
  let filteredBudgetItems = budgetItems;

  return (
    <div className="w-full bg-white min-h-screen pb-24 md:pb-10 font-sans">
      
      {/* ========================================================= */}
      {/* MOBILE LAYOUT                                             */}
      {/* ========================================================= */}
      <div className="md:hidden pb-20">
        
        {/* Floating App Bar (Transparent) */}
        <div className="flex justify-between items-center px-4 py-4 fixed top-0 w-full z-50 bg-gradient-to-b from-black/50 to-transparent">
          <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-white">
            <ArrowLeft size={20} strokeWidth={2.5} />
          </button>
          <div className="flex items-center gap-3">
            <button onClick={toggleSave} className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-white hover:text-[#8cc63f] transition-colors">
              <Heart size={20} className={isFavorite ? "fill-[#8cc63f] text-[#8cc63f]" : ""} />
            </button>
            <button onClick={handleShare} className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-white">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* Hero Image with Fade */}
        <div className="w-full h-[320px] relative mb-12">
          <img decoding="async" loading="lazy" src={restaurant.headerImage} alt={restaurant.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
          
          {/* Floating Logo */}
          <div className="absolute -bottom-8 left-6 w-[100px] h-[100px] bg-white rounded-3xl p-1 shadow-lg shadow-black/5 border border-white">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-white flex items-center justify-center">
              <img decoding="async" loading="lazy" src={restaurant.logo} alt={restaurant.name} className="w-full h-full object-contain p-2" />
            </div>
          </div>
        </div>

        <div className="px-6 bg-white pb-6">
          <h1 className="text-[28px] font-extrabold text-[#112431] mb-2 leading-tight tracking-tight">{restaurant.name}</h1>
          <div className="flex items-center text-[13px] font-bold text-gray-400 mb-2">
            <Star size={16} className="text-[#FF9800] fill-current mr-1.5" />
            <span className="text-[#112431] mr-1.5">{restaurant.rating}</span> 
            <span className="font-medium">({restaurant.reviewCount || '1.2k'} reviews)</span>
          </div>
          <div className="flex items-center text-[13px] font-medium text-gray-400 mb-8">
            <MapPin size={14} className="mr-1.5" />
            <span>{restaurant.location}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {(restaurant.tags || []).filter(tag => !restaurant.specialties?.map(s => s.toLowerCase()).includes(tag.toLowerCase())).slice(0, 5).map((tag, idx) => (
              <button key={idx} className="bg-gray-50 text-gray-600 px-3 py-1.5 text-[10px] md:text-[12px] md:px-4 md:py-2 rounded-lg md:rounded-full font-bold hover:bg-gray-100 transition-colors">
                {tag}
              </button>
            ))}
          </div>

          {/* Minimal Action Buttons */}
          <div className="flex justify-start gap-4 mb-10">
             <a href={restaurant.contact ? `tel:${restaurant.contact.replace(/\s+/g, '')}` : "#"} className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full shadow-sm shadow-gray-200/50 hover:bg-gray-100 transition-colors">
               <Phone size={18} className="text-[#112431]" />
             </a>
             <a href={restaurant.email ? `mailto:${restaurant.email}` : "#"} className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full shadow-sm shadow-gray-200/50 hover:bg-gray-100 transition-colors">
               <Mail size={18} className="text-[#112431]" />
             </a>
             <a href={restaurant.website || "#"} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full shadow-sm shadow-gray-200/50 hover:bg-gray-100 transition-colors">
               <Globe size={18} className="text-[#112431]" />
             </a>
             <a href={restaurant.mapLink || `https://maps.google.com/?q=${encodeURIComponent(restaurant.location)}`} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-[#8cc63f] rounded-full shadow-md shadow-[#8cc63f]/30 hover:bg-[#7ab135] transition-colors">
               <Navigation size={18} className="text-white" />
             </a>
          </div>

          <Link to={`/restaurant/${id}/menu`} className="flex items-center justify-center w-full bg-[#8cc63f] text-white font-bold text-[15px] py-4 rounded-2xl mb-10 shadow-lg shadow-black/10 hover:bg-[#7ab135] transition-colors">
            View Menu
          </Link>

          

          <div className="mb-8 bg-[#f8f9fa] border border-gray-100 rounded-3xl p-6">
            <div className="mb-6">
              <h3 className="text-[17px] font-extrabold text-[#112431] mb-3 tracking-tight">About Us</h3>
              <p className="text-[14px] text-gray-500 font-medium leading-relaxed">
                {restaurant.about}
              </p>
            </div>

            {true && (
              <div className="border-t border-gray-200 pt-5">
                <h3 className="text-[12px] font-extrabold text-gray-400 uppercase tracking-widest mb-3">House Specialties</h3>
                <ul className="space-y-2">
                  {['Takeaway', 'Dine-in', 'Online Order', ...(restaurant.specialties || [])].map((spec, idx) => (
                    <li key={idx} className="flex items-center text-[#112431] font-bold text-[14px] tracking-tight">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8cc63f] mr-3"></div>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>



          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[19px] font-extrabold text-[#112431] tracking-tight">Trending Dishes</h3>
              
            </div>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 pb-4">
              {displayItems.slice((trendingPage - 1) * itemsPerPage, trendingPage * itemsPerPage).map((item, idx) => (
                <TrendingDishCard key={idx} item={item} />
              ))}
              {displayItems.length === 0 && <p className="text-sm text-gray-400 col-span-2">No trending dishes available.</p>}
              <Pagination total={displayItems.length} itemsPerPage={itemsPerPage} currentPage={trendingPage} onPageChange={setTrendingPage} />
            </div>
          </div>

          {filteredBudgetItems.length > 0 && (
            <div className="mt-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[19px] font-extrabold text-[#112431] tracking-tight">Budget Friendly</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 pb-4">
                {filteredBudgetItems.slice((budgetPage - 1) * itemsPerPage, budgetPage * itemsPerPage).map((item, idx) => (
                  <TrendingDishCard key={idx} item={item} />
                ))}
                <Pagination total={filteredBudgetItems.length} itemsPerPage={itemsPerPage} currentPage={budgetPage} onPageChange={setBudgetPage} />
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ========================================================= */}
      {/* DESKTOP LAYOUT                                            */}
      {/* ========================================================= */}
      <div className="hidden md:block">
        
        {/* Desktop Header Image */}
        <div className="w-full h-[320px] relative mb-10">
           <img decoding="async" loading="lazy" src={restaurant.headerImage} alt={restaurant.name} className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
           
           <div className="absolute top-8 right-12 flex space-x-4">
             <button className="bg-white px-5 py-2.5 rounded-full font-bold text-xs shadow-lg flex items-center text-[#112431] hover:bg-white transition-colors">
               OFFERS
             </button>
             <button onClick={toggleSave} className="bg-white w-11 h-11 flex items-center justify-center rounded-full shadow-lg text-[#112431] hover:text-[#8cc63f] transition-colors">
               <Heart size={20} className={isFavorite ? "fill-[#8cc63f] text-[#8cc63f]" : ""} />
             </button>
             <button onClick={handleShare} className="bg-white w-11 h-11 flex items-center justify-center rounded-full shadow-lg text-[#112431] hover:text-gray-600 transition-colors">
               <Share2 size={20} />
             </button>
           </div>
        </div>

        {/* Desktop Content */}
        <div className="w-full mx-auto px-8 pb-24 flex gap-12">
          
          {/* Left Column */}
          <div className="flex-1">
            <div className="flex items-end mb-10 -mt-36 relative z-10">
              <div className="w-36 h-36 bg-white rounded-[2.5rem] p-1.5 shadow-xl shadow-black/5 border border-white mr-8">
                <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white flex items-center justify-center">
                  <img decoding="async" loading="lazy" src={restaurant.logo} alt={restaurant.name} className="w-full h-full object-contain p-2" />
                </div>
              </div>
              <div className="pb-4">
                <h1 className="text-[42px] font-extrabold text-[#112431] mb-2 leading-none tracking-tight">{restaurant.name}</h1>
                <div className="flex items-center text-sm font-bold text-gray-500 mb-2">
                  <Star size={18} className="text-[#FFC107] fill-current mr-2" />
                  <span className="text-[#112431] mr-2">{restaurant.rating}</span>
                  <span>({restaurant.reviewCount || '1.6k'} reviews)</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mb-12">
              {(restaurant.tags || []).filter(tag => !restaurant.specialties?.map(s => s.toLowerCase()).includes(tag.toLowerCase())).slice(0, 5).map((tag, idx) => (
                <button key={idx} className="bg-gray-50 text-gray-600 px-4 py-2 text-[12px] rounded-lg font-bold tracking-wide hover:bg-gray-100 transition-colors">
                  {tag}
                </button>
              ))}
            </div>

            <div className="bg-[#f8f9fa] border border-gray-100 rounded-2xl p-6 mb-8">
              <div className="mb-5">
                <h3 className="text-base font-extrabold text-[#112431] mb-2 tracking-tight">About Us</h3>
                <p className="text-gray-500 font-medium leading-relaxed text-[13px] max-w-3xl">
                  {restaurant.about}
                </p>
              </div>

              {true && (
                <div className="border-t border-gray-200 pt-4 flex items-center gap-4">
                  <h3 className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest border-r border-gray-200 pr-4">Specialties</h3>
                  <div className="flex items-center gap-4 flex-wrap">
                    {['Takeaway', 'Dine-in', 'Online Order', ...(restaurant.specialties || [])].map((spec, idx) => (
                      <div key={idx} className="flex items-center text-[#112431] font-bold text-[12px] tracking-tight">
                        <div className="w-1 h-1 rounded-full bg-[#8cc63f] mr-2 shadow-sm shadow-[#8cc63f]/50"></div>
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>



            <div className="mb-14">
              <div className="flex items-center mb-8">
                <h3 className="text-xl font-extrabold text-[#112431] mr-4 tracking-tight">Trending Dishes</h3>
                
              </div>
              <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                {displayItems.slice((trendingPage - 1) * itemsPerPage, trendingPage * itemsPerPage).map((item, idx) => (
                  <TrendingDishCard key={idx} item={item} />
                ))}
                <Pagination total={displayItems.length} itemsPerPage={itemsPerPage} currentPage={trendingPage} onPageChange={setTrendingPage} />
              </div>
            </div>

            {filteredBudgetItems.length > 0 && (
              <div>
                <div className="flex items-center mb-8">
                  <h3 className="text-xl font-extrabold text-[#112431] mr-4 tracking-tight">Budget Friendly</h3>
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                  {filteredBudgetItems.slice((budgetPage - 1) * itemsPerPage, budgetPage * itemsPerPage).map((item, idx) => (
                  <TrendingDishCard key={idx} item={item} />
                ))}
                <Pagination total={filteredBudgetItems.length} itemsPerPage={itemsPerPage} currentPage={budgetPage} onPageChange={setBudgetPage} />
                </div>
              </div>
            )}
          </div>

          {/* Right Column (Minimal Dashboard) */}
          <div className="w-[340px] flex-shrink-0 flex flex-col space-y-8 mt-4">
            
            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
               <div className="absolute -bottom-12 -right-12 opacity-[0.02] pointer-events-none">
                  <MapPin size={240} />
               </div>
               
               <h3 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-8">Restaurant Info</h3>
               {restaurant.contact && (
                 <a href={`tel:${restaurant.contact.replace(/\s+/g, '')}`} className="flex items-center text-[15px] text-[#112431] font-bold mb-6 hover:text-[#8cc63f] transition-colors group">
                   <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4 group-hover:bg-[#f4faeb] transition-colors">
                     <Phone size={16} className="text-[#8cc63f]" />
                   </div>
                   {restaurant.contact}
                 </a>
               )}
               {restaurant.email && (
                 <a href={`mailto:${restaurant.email}`} className="flex items-center text-[15px] text-[#112431] font-bold mb-6 hover:text-[#8cc63f] transition-colors group">
                   <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4 group-hover:bg-[#f4faeb] transition-colors">
                     <Mail size={16} className="text-[#8cc63f]" />
                   </div>
                   {restaurant.email}
                 </a>
               )}
               {restaurant.website && (
                 <a href={restaurant.website} target="_blank" rel="noreferrer" className="flex items-center text-[15px] text-[#112431] font-bold hover:text-[#8cc63f] transition-colors group">
                   <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4 group-hover:bg-[#f4faeb] transition-colors">
                     <Globe size={16} className="text-[#8cc63f]" />
                   </div>
                   {restaurant.website.replace(/^https?:\/\//, '')}
                 </a>
               )}

               <a href={restaurant.mapLink || `https://maps.google.com/?q=${encodeURIComponent(restaurant.location)}`} target="_blank" rel="noreferrer" className="mt-8 block border border-gray-100 rounded-2xl overflow-hidden h-36 relative bg-gray-50 hover:border-[#8cc63f] transition-colors cursor-pointer group">
                 <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'radial-gradient(circle at center, #000 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-14 h-14 bg-white rounded-full p-1 shadow-md mb-2 border-2 border-[#8cc63f] group-hover:scale-110 transition-transform relative z-10">
                      <img decoding="async" loading="lazy" src={restaurant.logo} alt="map pin" className="w-full h-full rounded-full object-cover" />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#8cc63f]"></div>
                    </div>
                    <span className="text-gray-500 font-bold text-[11px] group-hover:text-[#8cc63f] transition-colors">View on Map</span>
                 </div>
               </a>
            </div>

            <Link to={`/restaurant/${id}/menu`} className="block w-full text-center bg-[#8cc63f] text-white font-bold text-[16px] py-5 rounded-2xl shadow-xl shadow-black/10 hover:bg-[#7ab135] transition-colors">
              View Menu
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;

