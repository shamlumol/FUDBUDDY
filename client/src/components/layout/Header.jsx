import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, MapPin, Heart, User, Tag, Menu, Bell } from 'lucide-react';
import AuthModal from '../auth/AuthModal';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [lang, setLang] = useState(localStorage.getItem('fudbuddy_lang') || 'EN');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = JSON.parse(localStorage.getItem('fudbuddy_current_user') || 'null');

  const handleProtectedAction = (e) => {
    if (!currentUser) {
      e.preventDefault();
      setShowAuthModal(true);
    }
  };

  const toggleLanguage = () => {
    const nextLang = lang === 'EN' ? 'AR' : 'EN';
    setLang(nextLang);
    localStorage.setItem('fudbuddy_lang', nextLang);
    
    if (nextLang === 'AR') {
      document.cookie = "googtrans=/en/ar; path=/";
    } else {
      document.cookie = "googtrans=/en/en; path=/";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    
    // Reload to apply translation cleanly without DOM glitches
    window.location.reload();
  };

  React.useEffect(() => {
    document.documentElement.dir = lang === 'AR' ? 'rtl' : 'ltr';
    if (lang === 'AR') {
      document.body.style.fontFamily = "'Cairo', 'Tajawal', sans-serif";
    } else {
      document.body.style.fontFamily = "";
    }
  }, [lang]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="w-full mx-auto px-4 md:px-6 lg:px-8">
        {/* MOBILE HEADER */}
        <div className="flex items-center justify-between h-16 md:hidden">
          {location.pathname === '/search' ? (
            <div className="flex items-center gap-4 w-full">
              <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-900">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <h1 className="text-xl font-bold text-gray-900">Search</h1>
            </div>
          ) : (
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                {location.pathname !== '/' && (
                  <button onClick={() => navigate(-1)} className="p-2 -ml-2 mr-2 text-gray-900 rounded-full hover:bg-gray-100 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                  </button>
                )}
                <Link to="/" className="flex items-center">
                  <img decoding="async" loading="lazy" src="/logo.png" alt="FoodBuddy Logo" className="h-8 object-contain" />
                </Link>
              </div>

              <div className="flex items-center gap-2 sm:gap-4">
                <Link to="/offers" className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0f8e8] text-[#8cc63f] rounded-full text-xs font-bold hover:bg-[#e2f0d9] transition-colors">
                  <span>OFFERS</span>
                </Link>
                <Link to="/wishlist" onClick={handleProtectedAction} className="w-8 h-8 flex items-center justify-center text-[#8cc63f] rounded-full hover:bg-gray-50">
                  <Heart size={20} />
                </Link>
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 rounded-full hover:bg-gray-50">
                  <Bell size={20} />
                </button>
                <Link to="/profile" onClick={handleProtectedAction} className="w-8 h-8 flex items-center justify-center text-gray-600 rounded-full hover:bg-gray-50">
                  <User size={20} />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* DESKTOP HEADER */}
        <div className="hidden md:flex items-center justify-between h-20 gap-6">
          <div className="flex items-center">
            {location.pathname !== '/' && (
              <button onClick={() => navigate(-1)} className="mr-4 p-2 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors" title="Go Back">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
            )}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img decoding="async" loading="lazy" src="/logo.png" alt="FoodBuddy Logo" className="h-10 object-contain" />
            </Link>
          </div>

          {/* Spacer */}
          <div className="flex-1"></div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <button onClick={toggleLanguage} className="flex items-center justify-center font-bold text-[#112431] text-[13px] px-3.5 py-2 rounded-full hover:bg-gray-50 border border-gray-200 transition-colors">
              {lang === 'EN' ? 'العربية' : 'English'}
            </button>
            <Link to="/offers" className="flex items-center gap-1.5 px-4 py-2 bg-[#f0f8e8] text-[#8cc63f] rounded-full text-sm font-bold hover:bg-[#e2f0d9] transition-colors">
              <Tag size={16} />
              <span>OFFERS</span>
            </Link>
            <Link to="/wishlist" onClick={handleProtectedAction} className="w-10 h-10 flex items-center justify-center text-[#8cc63f] rounded-full hover:bg-gray-50">
              <Heart size={20} />
            </Link>
            <button className="w-10 h-10 flex items-center justify-center text-gray-600 rounded-full hover:bg-gray-50">
              <Bell size={20} />
            </button>
            <Link to="/profile" onClick={handleProtectedAction} className="w-10 h-10 flex items-center justify-center text-gray-600 rounded-full hover:bg-gray-50">
              <User size={20} />
            </Link>
          </div>
        </div>
      </div>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        onSuccess={() => {
          setShowAuthModal(false);
          window.location.reload();
        }}
      />
    </header>
  );
};

export default Header;
