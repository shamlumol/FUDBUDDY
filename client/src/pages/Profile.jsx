import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { Heart, Tag, MapPin, Bell, Settings, ChevronRight, User, Search as SearchIcon, HelpCircle, Bookmark, Ticket, Clock, CheckCircle2 } from 'lucide-react';
import {  useNavigate , Link } from 'react-router-dom';
import { toast } from '../components/ui/Toast';

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Profile');
  const storedUser = JSON.parse(localStorage.getItem('fudbuddy_current_user') || 'null');
  
  useEffect(() => {
    if (!storedUser) {
      navigate('/');
    }
  }, [navigate, storedUser]);

  const [currentUser, setCurrentUser] = useState(storedUser || { name: '', phone: '', email: '' });

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedUser = {
      ...currentUser,
      name: formData.get('name') || currentUser.name,
      email: formData.get('email') || currentUser.email,
      phone: formData.get('phone') || currentUser.phone,
      dob: formData.get('dob')
    };
    setCurrentUser(updatedUser);
    localStorage.setItem('fudbuddy_current_user', JSON.stringify(updatedUser));
    toast('Profile updated securely!');
  };

  const handleLogout = () => {
    localStorage.removeItem('fudbuddy_current_user');
    navigate('/');
  };

  const navItemsTop = [
    { icon: User, label: "Profile" },
    { icon: Heart, label: "Saved Restaurants", path: "/wishlist" },
    { icon: Bookmark, label: "Saved Foods", path: "/wishlist" },
    { icon: Tag, label: "My Offers", path: "/offers" }
  ];

  const navItemsBottom = [
    { icon: MapPin, label: "Location" },
    { icon: Bell, label: "Notifications" },
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Help & Support" }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Location':
        return (
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm w-full h-full animate-fade-in-down">
      <Breadcrumbs items={[{ label: 'Profile' }]} />
            <h2 className="text-[24px] font-extrabold text-[#112431] mb-8">Delivery Locations</h2>
            <div className="bg-[#f9fafb] p-6 rounded-2xl border border-gray-200 mb-6 flex items-start justify-between">
              <div className="flex items-start">
                <MapPin size={24} className="text-[#8cc63f] mr-4 mt-1" />
                <div>
                  <h3 className="font-extrabold text-[#112431] text-[16px] mb-1">Home</h3>
                  <p className="text-gray-500 text-[14px] font-medium">123 King Fahd Road, Dammam, Alkhobar</p>
                </div>
              </div>
              <CheckCircle2 size={22} className="text-[#8cc63f]" />
            </div>
            <button className="text-[#8cc63f] font-extrabold text-[15px] hover:underline">+ Add New Address</button>
          </div>
        );
      case 'Notifications':
        return (
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm w-full h-full animate-fade-in-down">
            <h2 className="text-[24px] font-extrabold text-[#112431] mb-8">Notification Preferences</h2>
            <div className="space-y-6">
              {[
                { title: "Order Updates", desc: "Get live status on your food delivery" },
                { title: "Exclusive Offers", desc: "Receive personalized discounts and promos" },
                { title: "Restaurant News", desc: "Hear about new restaurants in your area" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                  <div>
                    <h3 className="font-extrabold text-[#112431] text-[16px] mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-[13px] font-medium">{item.desc}</p>
                  </div>
                  <div className="w-[44px] h-[24px] bg-[#8cc63f] rounded-full relative shadow-inner cursor-pointer">
                    <div className="w-[20px] h-[20px] bg-white rounded-full absolute top-[2px] right-[2px] shadow-sm"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Settings':
        return (
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm w-full h-full animate-fade-in-down overflow-y-auto">
            <h2 className="text-[24px] font-extrabold text-[#112431] mb-8">Profile Settings</h2>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6" onSubmit={handleProfileUpdate}>
              <div className="flex flex-col">
                <label className="text-[12px] font-bold text-gray-700 uppercase tracking-wide mb-2">Full Name</label>
                <input name="name" type="text" defaultValue={currentUser.name} className="w-full bg-[#f9fafb] border border-gray-200 rounded-xl px-4 py-3.5 text-[14px] font-medium text-[#112431] focus:outline-none focus:border-[#8cc63f] focus:ring-1 focus:ring-[#8cc63f] transition-all" />
              </div>
              <div className="flex flex-col">
                <label className="text-[12px] font-bold text-gray-700 uppercase tracking-wide mb-2">Email Address</label>
                <input name="email" type="email" defaultValue={currentUser.email || 'john@example.com'} className="w-full bg-[#f9fafb] border border-gray-200 rounded-xl px-4 py-3.5 text-[14px] font-medium text-[#112431] focus:outline-none focus:border-[#8cc63f] focus:ring-1 focus:ring-[#8cc63f] transition-all" />
              </div>
              <div className="flex flex-col">
                <label className="text-[12px] font-bold text-gray-700 uppercase tracking-wide mb-2">Phone Number</label>
                <input name="phone" type="tel" defaultValue={currentUser.phone || '+966 50 123 4567'} className="w-full bg-[#f9fafb] border border-gray-200 rounded-xl px-4 py-3.5 text-[14px] font-medium text-[#112431] focus:outline-none focus:border-[#8cc63f] focus:ring-1 focus:ring-[#8cc63f] transition-all" />
              </div>
              <div className="flex flex-col">
                <label className="text-[12px] font-bold text-gray-700 uppercase tracking-wide mb-2">Date of Birth</label>
                <input name="dob" type="date" defaultValue={currentUser.dob || "1990-01-01"} className="w-full bg-[#f9fafb] border border-gray-200 rounded-xl px-4 py-3.5 text-[14px] font-medium text-[#112431] focus:outline-none focus:border-[#8cc63f] focus:ring-1 focus:ring-[#8cc63f] transition-all" />
              </div>
              <div className="md:col-span-2 pt-2 pb-6 border-b border-gray-100 flex justify-end">
                <button type="submit" className="bg-[#8cc63f] text-white font-bold text-[15px] px-10 py-3.5 rounded-xl shadow-sm hover:bg-[#7ab135] transition-colors">
                  Save Changes
                </button>
              </div>
            </form>

            <h3 className="text-[18px] font-extrabold text-[#112431] mb-4 mt-6">Security</h3>
            <button onClick={() => toast('Password reset link sent to your email!')} className="w-full flex items-center justify-between p-4 bg-[#f9fafb] rounded-xl hover:bg-gray-50 transition-colors">
              <span className="font-bold text-[#3a444a] text-[15px]">Reset / Forgot Password</span>
              <ChevronRight size={18} className="text-gray-400" />
            </button>
          </div>
        );
      case 'Help & Support':
        return (
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm w-full h-full animate-fade-in-down">
            <h2 className="text-[24px] font-extrabold text-[#112431] mb-8">Help & Support</h2>
            <div className="bg-[#f0f8e8] p-6 rounded-2xl mb-8 flex items-center">
              <HelpCircle size={40} className="text-[#8cc63f] mr-6" />
              <div>
                <h3 className="font-extrabold text-[#112431] text-[18px]">How can we help?</h3>
                <p className="text-[#8cc63f] text-[14px] font-bold">support@fudbuddy.com</p>
              </div>
            </div>
            <h3 className="font-extrabold text-[#112431] text-[18px] mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div className="p-4 bg-[#f9fafb] rounded-xl"><span className="font-bold text-[#3a444a]">How do I claim an offer?</span></div>
              <div className="p-4 bg-[#f9fafb] rounded-xl"><span className="font-bold text-[#3a444a]">Where is my saved food list?</span></div>
              <div className="p-4 bg-[#f9fafb] rounded-xl"><span className="font-bold text-[#3a444a]">Can I change my phone number?</span></div>
            </div>
          </div>
        );
      case 'Profile':
      default:
        return (
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm w-full h-full animate-fade-in-down flex flex-col items-center justify-center text-center">
             <div className="w-[120px] h-[120px] bg-[#f0f8e8] border-4 border-white shadow-md rounded-full flex items-center justify-center mb-6 overflow-hidden">
                 <User size={60} className="text-[#8cc63f]" />
             </div>
             <h2 className="text-[28px] font-extrabold text-[#112431] mb-2">{currentUser.name}</h2>
             <p className="text-gray-500 font-medium text-[15px] mb-1">{currentUser.email || 'john@example.com'}</p>
             <p className="text-gray-500 font-medium text-[15px] mb-8">{currentUser.phone || '+966 50 123 4567'}</p>
             
             <button onClick={() => setActiveTab('Settings')} className="bg-[#112431] text-white px-10 py-3.5 rounded-xl font-bold shadow-sm hover:bg-[#203a4d] transition-colors">
                Edit Profile Settings
             </button>
          </div>
        );
    }
  };

  return (
    <div className="w-full bg-background min-h-screen pb-24 md:pb-10 font-sans">
      
      {/* ========================================================= */}
      {/* MOBILE LAYOUT                                             */}
      {/* ========================================================= */}
      <div className="md:hidden pb-24 bg-[#f9fafb] min-h-screen flex flex-col">
        <header className="flex justify-between items-center px-6 pt-8 pb-4">
          <h1 className="text-[22px] font-extrabold text-[#112431]">{activeTab}</h1>
          <button className="text-[#112431]" onClick={() => setActiveTab('Settings')}><Settings size={22} /></button>
        </header>

        {activeTab === 'Profile' ? (
          <div className="bg-[#f9fafb]">
            <div className="flex flex-col items-center pt-2 pb-6">
              <div className="w-[88px] h-[88px] bg-gray-200 rounded-full mb-4 overflow-hidden shadow-sm flex items-center justify-center">
                 <User size={44} className="text-gray-400" />
              </div>
              <h2 className="text-[18px] font-extrabold text-[#112431] mb-1">{currentUser.name}</h2>
              <p className="text-[13px] text-gray-500 font-medium">{currentUser.phone}</p>
              <p className="text-[13px] text-gray-500 font-medium">{currentUser.email || 'john@example.com'}</p>
            </div>
            
            <div className="flex flex-col px-6 border-b border-gray-200 pb-4 mb-4">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Navigation</h3>
              {navItemsTop.slice(1).map((item, idx) => (
                <button 
                  key={idx} 
                  onClick={() => item.path && navigate(item.path)}
                  className="flex items-center justify-between py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <item.icon size={20} className="text-[#3a444a] mr-4" />
                    <span className="text-[14px] font-bold text-[#112431]">{item.label}</span>
                  </div>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>
              ))}
            </div>

            <div className="flex flex-col px-6">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Preferences</h3>
              {navItemsBottom.map((item, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveTab(item.label)}
                  className="flex items-center justify-between py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <item.icon size={20} className="text-[#3a444a] mr-4" />
                    <span className="text-[14px] font-bold text-[#112431]">{item.label}</span>
                  </div>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>
              ))}
            </div>

            <div className="px-6 mt-8 pb-8">
              <button onClick={handleLogout} className="w-full bg-[#f0f8e8] text-[#8cc63f] font-bold text-[15px] py-4 rounded-xl shadow-sm hover:bg-[#e2f0d9] transition-colors">
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 bg-white p-6 rounded-t-3xl shadow-[0_-4px_10px_rgba(0,0,0,0.02)] relative">
            <button onClick={() => setActiveTab('Profile')} className="absolute top-6 right-6 text-gray-400 hover:text-gray-900">
               <ChevronRight size={24} className="rotate-180" />
            </button>
            <div className="-mx-6 -mt-6">
               {renderContent()}
            </div>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* DESKTOP LAYOUT                                            */}
      {/* ========================================================= */}
      <div className="hidden md:flex w-full mx-auto px-4 md:px-6 lg:px-8 py-10 gap-8 min-h-[calc(100vh-80px)]">
        
        {/* Left Sidebar Menu */}
        <div className="w-[300px] flex-shrink-0 flex flex-col bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">


          <div className="flex flex-col space-y-1 mb-6">
            {navItemsTop.map((item, idx) => {
              const isActive = activeTab === item.label;
              return (
                <button 
                  key={idx} 
                  onClick={() => item.path ? navigate(item.path) : setActiveTab(item.label)}
                  className={`flex items-center py-3.5 px-4 rounded-xl transition-colors ${isActive ? 'bg-[#f0f8e8] text-[#8cc63f] font-extrabold' : 'text-[#3a444a] font-bold hover:bg-gray-50'}`}
                >
                  <item.icon size={20} className={`mr-4 ${isActive ? 'text-[#8cc63f] fill-[#8cc63f]' : 'text-[#3a444a]'}`} />
                  <span className="text-[14px]">{item.label}</span>
                </button>
              );
            })}
          </div>
          
          <div className="flex flex-col space-y-1 border-t border-gray-100 pt-6 mb-8 flex-1">
             {navItemsBottom.map((item, idx) => {
               const isActive = activeTab === item.label;
               return (
                <button 
                  key={idx} 
                  onClick={() => setActiveTab(item.label)}
                  className={`flex items-center py-3.5 px-4 rounded-xl transition-colors ${isActive ? 'bg-[#f0f8e8] text-[#8cc63f] font-extrabold' : 'text-[#3a444a] font-bold hover:bg-gray-50'}`}
                >
                  <item.icon size={20} className={`mr-4 ${isActive ? 'text-[#8cc63f]' : 'text-[#3a444a]'}`} />
                  <span className="text-[14px]">{item.label}</span>
                </button>
               );
             })}
          </div>

          <div className="mt-auto">
             <button onClick={handleLogout} className="flex justify-center items-center py-3.5 px-4 rounded-xl bg-[#f0f8e8] text-[#8cc63f] hover:bg-[#e2f0d9] w-full transition-colors font-bold text-[14px]">
               Logout
             </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col">
          {renderContent()}
        </div>

      </div>
    </div>
  );
};

export default Profile;
