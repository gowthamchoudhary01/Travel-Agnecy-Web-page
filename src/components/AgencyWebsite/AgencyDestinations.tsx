import React from 'react';
import { ArrowUpRight, Compass, MapPin } from 'lucide-react';
import { Destination } from '../../types/travel';
import { POPULAR_DESTINATIONS } from '../../utils/travelData';

interface AgencyDestinationsProps {
  onSelectDestination: (dest: Destination) => void;
}

export const AgencyDestinations: React.FC<AgencyDestinationsProps> = ({
  onSelectDestination,
}) => {
  return (
    <section id="agency-destinations" className="py-24 bg-[#FAF8F5] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-teal-800 text-xs font-semibold tracking-widest uppercase">
              Curated Escapes
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
              Popular Destinations
            </h2>
            <p className="mt-4 text-stone-600 font-body text-base sm:text-lg leading-relaxed">
              From peaceful tropical atolls and grand alpine peaks to royal heritage palaces, explore our most coveted travel journeys.
            </p>
          </div>
          <div className="text-sm text-stone-500 font-medium">
            <span>Showing 6 Handcrafted Regions</span>
          </div>
        </div>

        {/* 6 Destination Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POPULAR_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image with subtle hover zoom */}
              <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />
                
                {/* Destination name over image bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1.5 text-amber-300 text-xs font-medium tracking-wider uppercase mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{dest.country}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white tracking-wide">
                    {dest.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-medium text-teal-800 mb-2">
                    {dest.tagline}
                  </p>
                  <p className="text-stone-600 font-body text-sm leading-relaxed">
                    {dest.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <span>Best Time: {dest.bestTimeToVisit}</span>
                    <span className="font-medium text-stone-700">{dest.idealDuration}</span>
                  </div>
                </div>

                {/* Explore Button */}
                <div className="mt-6">
                  <button
                    onClick={() => onSelectDestination(dest)}
                    className="w-full py-2.5 px-4 rounded-xl border border-stone-300 hover:border-teal-700 bg-stone-50 hover:bg-teal-50 text-stone-800 hover:text-teal-900 font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
                  >
                    <span>Explore {dest.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover/btn:text-teal-800 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
