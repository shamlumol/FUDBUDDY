import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const FavoriteButton = ({ initialLiked = false, className = "" }) => {
  const [liked, setLiked] = useState(initialLiked);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
  };

  return (
    <button 
      onClick={toggleFavorite}
      aria-label={liked ? "Remove from favorites" : "Add to favorites"}
      className={`w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center transition-transform active:scale-90 hover:scale-110 ${className}`}
    >
      <Heart 
        size={18} 
        className={liked ? "fill-[#8cc63f] text-[#8cc63f]" : "text-gray-400"} 
        strokeWidth={liked ? 1 : 2}
      />
    </button>
  );
};

export default FavoriteButton;
