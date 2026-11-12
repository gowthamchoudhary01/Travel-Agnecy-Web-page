import React from 'react';
import { Clock, Check, ArrowRight, Sparkles, Send } from 'lucide-react';
import { HolidayPackage } from '../../types/travel';
import { HOLIDAY_PACKAGES, formatPrice } from '../../utils/travelData';

interface AgencyPackagesProps {
  onEnquirePackage: (pkg: HolidayPackage) => void;
  onViewPackageDetails: (pkg: HolidayPackage) => void;
}

export const AgencyPackages: React.FC<AgencyPackagesProps> = ({
  onEnquirePackage,
  onViewPackageDetails,
}) => {
  return (
    <section id="agency-packages" className="py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-teal-800 text-xs font-semibold tracking-widest uppercase">
              Curated Itineraries
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
              Holiday Packages
            </h2>
            <p className="mt-4 text-stone-600 font-body text-base sm:text-lg leading-relaxed">
              Every package is thoughtfully orchestrated with five-star partner accommodations, VIP private transit, and personalized excursions.
            </p>
          </div>
          <div className="text-xs text-stone-500 bg-stone-50 px-3.5 py-2 rounded-lg border border-stone-200 max-w-xs text-right">
            * All starting prices are illustrative demonstration figures per guest based on double occupancy.
          </div>
        </div>

        {/* 6 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOLIDAY_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-[#FFFDF9] rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-16/10 overflow-hidden bg-stone-100 group">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md text-amber-200 px-3 py-1 rounded-md text-xs font-medium flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-1">
                    {pkg.destinationName}
                  </div>
                  <h3 className="font-display text-xl font-bold text-stone-900 mb-2 leading-snug">
                    {pkg.name}
                  </h3>
                  <p className="text-stone-600 font-body text-sm leading-relaxed mb-4">
                    {pkg.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 pt-3 border-t border-stone-100 mb-4">
                    {pkg.inclusions.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-6 pt-0 border-t border-stone-100">
                <div className="flex items-baseline justify-between mb-4 pt-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-stone-400 block font-medium">
                      Demo Starting Price
                    </span>
                    <span className="font-display text-2xl font-bold text-teal-900">
                      {formatPrice(pkg.startingPrice, pkg.currency)}
                    </span>
                    <span className="text-xs text-stone-500 ml-1">/ person</span>
                  </div>
                  <button
                    onClick={() => onViewPackageDetails(pkg)}
                    className="text-xs font-medium text-stone-600 hover:text-teal-800 underline cursor-pointer"
                  >
                    View Details
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onEnquirePackage(pkg)}
                    className="w-full py-3 px-4 rounded-xl bg-teal-800 hover:bg-teal-900 text-amber-100 font-medium text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enquire Now</span>
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
