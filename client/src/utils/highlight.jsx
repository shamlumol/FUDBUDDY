import React from 'react';

export const highlightText = (text, query) => {
  if (!query || !text) return text;
  
  const regex = new RegExp(`(${query})`, 'gi');
  const parts = text.split(regex);
  
  return parts.map((part, index) => 
    regex.test(part) ? <strong key={index} className="text-[#8cc63f] font-extrabold">{part}</strong> : part
  );
};
