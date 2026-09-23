import React, { useState } from 'react';
import { Heart, Tag, MapPin, Bell, Settings, ChevronRight, User, Search as SearchIcon, HelpCircle, Bookmark, Ticket, Clock } from 'lucide-react';
import { userProfile } from '../data/mockData';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('Profile');

  const mobileMenuItems = [
    { icon: Heart, label: "Saved Restaurants" },
    { icon: Bookmark, label: "Saved Foods" },
    { icon: Ticket, label: "My Offers" },
    { icon: Clock, label: "Search History" },
    { icon: MapPin, label: "Location", value: "Dammam" },
    { icon: Bell, label: "Notifications" },
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Help & Support" },
  ];

  const desktopMenuItems = [
    { icon: User, label: "Profile" },
    { icon: Heart, label: "Saved Restaurants" },
    { icon: Heart, label: "Saved Foods" },
    { icon: Tag, label: "My Offers" },
    { icon: SearchIcon, label: "Search History" },
    { icon: MapPin, label: "Location" },
    { icon: Bell, label: "Notifications" },
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Help & Support" },
  ];

  return (
    <div className="w-full bg-background min-h-screen pb-24 md:pb-10 font-sans">
      
      {/* ========================================================= */}
      {/* MOBILE LAYOUT                                             */}
      {/* ========================================================= */}
      <div className="md:hidden pb-24 bg-[#f9fafb] min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center px-6 pt-8 pb-4">
          <h1 className="text-[22px] font-extrabold text-[#112431]">Profile</h1>
          <button className="text-[#112431]"><Settings size={22} /></button>
        </header>

        <div className="bg-[#f9fafb]">
          {/* User Info */}
          <div className="flex flex-col items-center pt-2 pb-6">
            <div className="w-[88px] h-[88px] bg-gray-200 rounded-full mb-4 overflow-hidden shadow-sm flex items-center justify-center">
               <User size={44} className="text-gray-400" />
            </div>
            <h2 className="text-[18px] font-extrabold text-[#112431] mb-1">{userProfile.name}</h2>
            <p className="text-[13px] text-gray-500 font-medium">{userProfile.phone}</p>
            <p className="text-[13px] text-gray-500 font-medium">{userProfile.email || 'john@example.com'}</p>
          </div>

          {/* Menu List */}
          <div className="flex flex-col px-6">
            {mobileMenuItems.map((item, idx) => (
              <button key={idx} className="flex items-center justify-between py-4 border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <item.icon size={20} className="text-[#3a444a] mr-4" />
                  <span className="text-[14px] font-bold text-[#112431]">{item.label}</span>
                </div>
                <div className="flex items-center">
                  {item.value && <span className="text-[12px] font-medium text-gray-400 mr-2">{item.value}</span>}
                  <ChevronRight size={18} className="text-gray-400" />
                </div>
              </button>
            ))}
          </div>

          {/* Logout Button */}
          <div className="px-6 mt-8 pb-8">
            <button className="w-full bg-[#f0f8e8] text-[#8cc63f] font-bold text-[15px] py-4 rounded-xl shadow-sm hover:bg-[#e2f0d9] transition-colors">
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* DESKTOP LAYOUT                                            */}
      {/* ========================================================= */}
      <div className="hidden md:flex w-full mx-auto px-4 md:px-6 lg:px-8 py-10 gap-8 min-h-[calc(100vh-80px)]">
        
        {/* Left Sidebar Menu */}
        <div className="w-[300px] flex-shrink-0 flex flex-col bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center mb-8 pb-4">
             <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
               <img src="/logo.png" alt="Fudbuddy Logo" className="w-full h-full object-contain" />
             </div>
             <h2 className="text-[20px] font-extrabold text-[#8cc63f] tracking-tight">fud<span className="text-[#112431]">buddy</span></h2>
          </div>

          <div className="flex flex-col space-y-1 mb-6">
            {[
              { icon: User, label: "Profile", active: true },
              { icon: Heart, label: "Saved Restaurants" },
              { icon: Heart, label: "Saved Foods" },
              { icon: Tag, label: "My Offers" },
              { icon: SearchIcon, label: "Search History" }
            ].map((item, idx) => (
              <button 
                key={idx} 
                className={`flex items-center py-3.5 px-4 rounded-xl transition-colors ${item.active ? 'bg-[#f0f8e8] text-[#8cc63f] font-extrabold' : 'text-[#3a444a] font-bold hover:bg-gray-50'}`}
              >
                <item.icon size={20} className={`mr-4 ${item.active ? 'text-[#8cc63f] fill-[#8cc63f]' : 'text-[#3a444a]'}`} />
                <span className="text-[14px]">{item.label}</span>
              </button>
            ))}
          </div>
          
          <div className="flex flex-col space-y-1 border-t border-gray-100 pt-6 mb-8 flex-1">
             {[
               { icon: MapPin, label: "Location" },
               { icon: Bell, label: "Notifications" },
               { icon: Settings, label: "Settings" },
               { icon: HelpCircle, label: "Help & Support" }
             ].map((item, idx) => (
              <button 
                key={idx} 
                className="flex items-center py-3.5 px-4 rounded-xl transition-colors text-[#3a444a] font-bold hover:bg-gray-50"
              >
                <item.icon size={20} className="mr-4 text-[#3a444a]" />
                <span className="text-[14px]">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-auto">
             <button className="flex justify-center items-center py-3.5 px-4 rounded-xl bg-[#f0f8e8] text-[#8cc63f] hover:bg-[#e2f0d9] w-full transition-colors font-bold text-[14px]">
               Logout
             </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col gap-6">
           
           {/* Top Info Card */}
           <div className="bg-white border border-gray-100 rounded-3xl p-8 flex items-center shadow-sm">
             <div className="w-[100px] h-[100px] bg-gray-300 rounded-full flex items-center justify-center overflow-hidden mr-6 flex-shrink-0">
                <User size={50} className="text-gray-500" />
             </div>
             <div>
               <h1 className="text-[24px] font-extrabold text-[#112431] mb-1">{userProfile.name}</h1>
               <p className="text-[14px] text-gray-500 font-medium mb-1">{userProfile.phone}</p>
               <p className="text-[14px] text-gray-500 font-medium">{userProfile.email || 'john@example.com'}</p>
             </div>
           </div>

           {/* Middle List Card */}
           <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col space-y-1">
              {[
                { icon: Heart, label: "Saved Restaurants (12)" },
                { icon: Heart, label: "Saved Foods (8)" },
                { icon: Tag, label: "My Offers (2)" },
                { icon: SearchIcon, label: "Search History (18)" }
              ].map((item, idx) => (
                <button key={idx} className="flex items-center justify-between py-4 px-4 hover:bg-gray-50 rounded-xl transition-colors group">
                   <div className="flex items-center">
                     <item.icon size={22} className="text-[#3a444a] mr-4 group-hover:text-[#8cc63f] transition-colors" />
                     <span className="font-extrabold text-[#112431] text-[15px]">{item.label}</span>
                   </div>
                   <ChevronRight size={20} className="text-[#3a444a]" />
                </button>
              ))}
           </div>

           {/* Bottom Settings Card */}
           <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col space-y-1">
              
              <button className="flex items-center justify-between py-4 px-4 hover:bg-gray-50 rounded-xl transition-colors">
                 <div className="flex items-center">
                   <MapPin size={22} className="text-[#3a444a] mr-4" />
                   <div className="flex flex-col items-start">
                     <span className="font-extrabold text-[#112431] text-[15px] mb-0.5">Location</span>
                     <span className="text-[13px] text-gray-500 font-medium">Dammam, Alkhobar</span>
                   </div>
                 </div>
                 <ChevronRight size={20} className="text-[#3a444a]" />
              </button>

              <button className="flex items-center justify-between py-4 px-4 hover:bg-gray-50 rounded-xl transition-colors">
                 <div className="flex items-center">
                   <Bell size={22} className="text-[#3a444a] mr-4" />
                   <div className="flex flex-col items-start">
                     <span className="font-extrabold text-[#112431] text-[15px] mb-0.5">Notifications</span>
                     <span className="text-[13px] text-gray-500 font-medium">Receive latest offers & updates</span>
                   </div>
                 </div>
                 {/* Toggle */}
                 <div className="w-[44px] h-[24px] bg-[#8cc63f] rounded-full relative shadow-inner">
                    <div className="w-[20px] h-[20px] bg-white rounded-full absolute top-[2px] right-[2px] shadow-sm"></div>
                 </div>
              </button>

              <button className="flex items-center justify-between py-4 px-4 hover:bg-gray-50 rounded-xl transition-colors">
                 <div className="flex items-center">
                   <Settings size={22} className="text-[#3a444a] mr-4" />
                   <div className="flex flex-col items-start">
                     <span className="font-extrabold text-[#112431] text-[15px] mb-0.5">Settings</span>
                     <span className="text-[13px] text-gray-500 font-medium">App preferences</span>
                   </div>
                 </div>
                 <ChevronRight size={20} className="text-[#3a444a]" />
              </button>

           </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;
