import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const toast = (message) => {
  window.dispatchEvent(new CustomEvent('show-toast', { detail: message }));
};

export const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handleToast = (e) => {
      const message = e.detail;
      const id = Date.now();
      setToasts(prev => [...prev, { id, message }]);
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, 3000);
    };

    window.addEventListener('show-toast', handleToast);
    return () => window.removeEventListener('show-toast', handleToast);
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-20 md:top-24 left-1/2 transform -translate-x-1/2 z-[100] flex flex-col items-center gap-2 pointer-events-none w-full max-w-sm px-4">
      {toasts.map(t => (
        <div key={t.id} className="bg-[#112431] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-fade-in-down w-full max-w-xs justify-center transition-all">
          <CheckCircle2 size={18} className="text-[#8cc63f]" />
          <span className="font-bold text-[13px]">{t.message}</span>
        </div>
      ))}
    </div>
  );
};
