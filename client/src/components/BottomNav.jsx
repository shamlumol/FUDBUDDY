import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Tag, User } from 'lucide-react';

const BottomNav = () => {
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Discover', path: '/search', icon: Search },
    { name: 'Offers', path: '/offers', icon: Tag },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full md:hidden bg-white border-t border-gray-100 px-6 py-3 pb-safe z-50 rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.05)] max-w-[480px] mx-auto">
      <div className="flex justify-between items-center max-w-lg mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center space-y-1 w-16 ${
                isActive ? 'text-primary' : 'text-gray-400 hover:text-gray-600'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} className={isActive ? 'text-primary' : ''} />
                <span className={`text-[10px] font-semibold ${isActive ? 'text-primary' : ''}`}>
                  {item.name}
                </span>
                {isActive && <div className="w-1 h-1 bg-primary rounded-full mt-0.5" />}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
