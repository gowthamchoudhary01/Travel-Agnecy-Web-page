import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Award, Sparkles } from 'lucide-react';
import { DESTINATION_IMAGES, formatCompanyName } from '../../utils/travelData';

interface AgencyHeroProps {
  companyName: string;
  onExploreDestinations: () => void;
  onExplorePackages: () => void;
}

export const AgencyHero: React.FC<AgencyHeroProps> = ({
  companyName,
  onExploreDestinations,
  onExplorePackages,
}) => {
  const formattedName = formatCompanyName(companyName);

  return (
    <section id="agency-hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-950 text-white">
      {/* Background Photography with warm sunset glow and contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={DESTINATION_IMAGES.maldives}
          alt={`Luxury travel destinations by ${formattedName}`}
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-stone-900/50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
        {/* Subtle Luxury Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-200 text-xs sm:text-sm font-medium tracking-widest uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Bespoke Journeys & Luxury Holidays</span>
        </div>

        {/* Exact Headline from Update Prompt */}
        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight text-balance">
          Discover the World. Make Every Journey Count.
        </h1>

        {/* Exact Subtitle from Update Prompt */}
        <p className="mt-5 text-base sm:text-xl text-stone-200 max-w-3xl mx-auto font-body font-light leading-relaxed">
          Explore extraordinary destinations, unforgettable experiences and thoughtfully planned holidays with <span className="font-semibold text-amber-300">{formattedName}</span>.
        </p>

        {/* Action Buttons: Explore Destinations and View Packages */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onExploreDestinations}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-teal-700 hover:bg-teal-600 text-amber-50 font-medium text-base shadow-xl hover:shadow-teal-900/40 transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Explore Destinations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onExplorePackages}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-medium text-base transition-all flex items-center justify-center cursor-pointer"
          >
            <span>View Packages</span>
          </button>
        </div>

        {/* Quick Agency Highlights Ribbon */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/15 text-left text-xs sm:text-sm text-stone-200">
          <div className="flex items-center gap-3">
            <Compass className="w-5 h-5 text-teal-400 shrink-0" />
            <div>
              <p className="font-semibold text-white">6 Signature Destinations</p>
              <p className="text-stone-300 text-xs">Curated global retreats</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-amber-300 shrink-0" />
            <div>
              <p className="font-semibold text-white">5-Star Accommodations</p>
              <p className="text-stone-300 text-xs">Handpicked partner villas</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0" />
            <div>
              <p className="font-semibold text-white">100% Tailor-Made</p>
              <p className="text-stone-300 text-xs">Designed around you</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-300 shrink-0" />
            <div>
              <p className="font-semibold text-white">24/7 VIP Concierge</p>
              <p className="text-stone-300 text-xs">Dedicated trip support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
