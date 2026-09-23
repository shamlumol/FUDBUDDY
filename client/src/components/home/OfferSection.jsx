import React from 'react';
import SectionHeader from '../common/SectionHeader';
import OfferCard from './OfferCard';
import { offers } from '../../data/offers';

const OfferSection = () => {
  if (!offers || offers.length === 0) return null;
  return (
    <section className="mb-10 md:mb-12">
      <div className="px-1">
        <SectionHeader title="Today's Best Food Offers" seeAllLink="/offers" />
      </div>
      
      {/* Mobile: Horizontal Scroll */}
      <div className="flex md:hidden space-x-4 overflow-x-auto scrollbar-hide pb-4 px-1 -mx-1 snap-x">
        {offers.slice(0, 4).map((offer) => (
          <div key={offer.id} className="snap-start">
            <OfferCard offer={offer} />
          </div>
        ))}
      </div>

      {/* Desktop: Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.slice(0, 4).map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
