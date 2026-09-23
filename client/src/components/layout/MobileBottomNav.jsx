import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Tag, User } from 'lucide-react';

const MobileBottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={22} /> },
    { name: 'Search', path: '/search', icon: <Search size={22} /> },
    { name: 'Offers', path: '/offers', icon: <Tag size={22} /> },
    { name: 'Profile', path: '/profile', icon: <User size={22} /> },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-2 flex justify-between items-center z-50 pb-[env(safe-area-inset-bottom,16px)]">
      {navItems.map((item) => {
        const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
        
        return (
          <Link
            key={item.name}
            to={item.path}
            className={`flex flex-col items-center justify-center w-16 h-12 gap-1 ${
              isActive ? (item.name === 'Offers' ? 'text-[#8cc63f]' : 'text-green-500') : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {item.icon}
            <span className="text-[10px] font-medium">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileBottomNav;
