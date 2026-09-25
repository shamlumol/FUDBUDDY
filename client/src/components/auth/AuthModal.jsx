import React, { useState } from 'react';
import { toast } from '../ui/Toast';

const AuthModal = ({ isOpen, onClose, onSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Strict Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      toast('Please enter a valid, secure email address.');
      return;
    }
    
    if (password.length < 8) {
      toast('Password must be at least 8 characters long for security.');
      return;
    }

    if (isSignUp) {
      if (fullName.trim().length < 3) {
        toast('Please enter your full, real name.');
        return;
      }
      
      const storedUsers = JSON.parse(localStorage.getItem('fudbuddy_users') || '[]');
      if (storedUsers.some(u => u.email === email)) {
        toast('An account with this email already exists! Please login.');
        return;
      }
      
      const newUser = { email, password, name: fullName, phone: '' };
      storedUsers.push(newUser);
      localStorage.setItem('fudbuddy_users', JSON.stringify(storedUsers));
      localStorage.setItem('fudbuddy_current_user', JSON.stringify(newUser));
      
      toast('Account securely created!');
      onSuccess();
    } else {
      const storedUsers = JSON.parse(localStorage.getItem('fudbuddy_users') || '[]');
      const user = storedUsers.find(u => u.email === email);
      
      if (!user) {
        toast('No account found! Please sign up first.');
        return;
      }
      
      if (user.password !== password) {
        toast('Incorrect password. Access denied.');
        return;
      }
      
      localStorage.setItem('fudbuddy_current_user', JSON.stringify(user));
      toast('Logged in securely!');
      onSuccess();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl relative animate-fade-in-down">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 bg-gray-100 rounded-full p-2 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <h2 className="text-2xl font-extrabold text-[#112431] mb-2">
          {isSignUp ? 'Create Secure Account' : 'Secure Login'}
        </h2>
        <p className="text-sm text-gray-500 font-medium mb-8">
          {isSignUp ? 'Sign up to safely claim your offers.' : 'Please login to access your secure profile.'}
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {isSignUp && (
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Full Name</label>
              <input 
                type="text" 
                placeholder="Your Name" 
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[#8cc63f] focus:ring-1 focus:ring-[#8cc63f]"
              />
            </div>
          )}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="Your Email ID" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[#8cc63f] focus:ring-1 focus:ring-[#8cc63f]"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Password</label>
            <input 
              type="password" 
              placeholder="Minimum 8 characters" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[#8cc63f] focus:ring-1 focus:ring-[#8cc63f]"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#8cc63f] text-white font-bold text-[15px] py-4 rounded-xl shadow-md hover:bg-[#7ab135] transition-colors mt-2"
          >
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </form>
        <p className="text-center text-xs font-medium text-gray-500 mt-6">
          {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
          <span onClick={() => setIsSignUp(!isSignUp)} className="text-[#8cc63f] font-bold cursor-pointer hover:underline">
            {isSignUp ? 'Login here' : 'Sign up securely'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
