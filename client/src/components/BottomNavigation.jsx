import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Tag, User, UtensilsCrossed } from 'lucide-react';

const BottomNavigation = () => {
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Search', path: '/search', icon: Search },
    { name: 'Dining', path: '/dining', icon: UtensilsCrossed },
    { name: 'Offers', path: '/offers', icon: Tag },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 w-full bg-white border-t border-gray-100 px-6 py-2 pb-safe z-50">
      <div className="flex justify-between items-center max-w-sm mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center space-y-1 w-16 ${
                isActive ? 'text-primary' : 'text-gray-400'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon size={20} className={isActive ? 'text-primary fill-current/10' : ''} strokeWidth={isActive ? 2.5 : 2} />
                <span className={`text-[10px] font-bold ${isActive ? 'text-primary' : ''}`}>
                  {item.name}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
