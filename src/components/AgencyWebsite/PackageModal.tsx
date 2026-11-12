import React from 'react';
import { X, Clock, Check, Send, Sparkles, MapPin, Calendar } from 'lucide-react';
import { HolidayPackage } from '../../types/travel';
import { formatPrice } from '../../utils/travelData';

interface PackageModalProps {
  pkg: HolidayPackage | null;
  onClose: () => void;
  onEnquire: (pkg: HolidayPackage) => void;
}

export const PackageModal: React.FC<PackageModalProps> = ({
  pkg,
  onClose,
  onEnquire,
}) => {
  if (!pkg) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/75 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden border border-stone-200 shadow-2xl relative my-8 max-h-[90vh] flex flex-col">
        {/* Header with image */}
        <div className="relative aspect-16/8 shrink-0 bg-stone-100">
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{pkg.duration}</span>
              <span aria-hidden="true">·</span>
              <span>{pkg.destinationName}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">
              {pkg.name}
            </h2>
          </div>
        </div>

        {/* Scrollable details */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-left">
          {/* Price Bar */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-teal-50 border border-teal-200/80">
            <div>
              <span className="text-xs uppercase tracking-wider text-teal-800 font-semibold block">
                Illustrative Demo Starting Rate
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-display text-3xl font-bold text-teal-900">
                  {formatPrice(pkg.startingPrice, pkg.currency)}
                </span>
                <span className="text-xs text-teal-700">/ guest (double occupancy)</span>
              </div>
            </div>
            <div className="text-xs text-teal-800 text-right">
              <span className="font-medium block">All-Inclusive Luxury</span>
              <span className="text-[11px] text-teal-600">Sample Tour Package</span>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-stone-900 mb-2">
              Journey Overview
            </h4>
            <p className="text-stone-700 font-body text-sm leading-relaxed">
              {pkg.fullOverview}
            </p>
          </div>

          {/* Day by Day Itinerary */}
          <div>
            <h4 className="font-display text-lg font-bold text-stone-900 mb-4">
              Day-by-Day Experience Schedule
            </h4>
            <div className="space-y-4">
              {pkg.itinerary.map((dayItem, idx) => (
                <div key={idx} className="flex gap-4 p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200/70">
                  <span className="px-2.5 py-1 rounded-md bg-stone-900 text-amber-200 font-bold text-xs shrink-0 h-fit">
                    {dayItem.day}
                  </span>
                  <div>
                    <h5 className="font-semibold text-stone-900 text-sm">
                      {dayItem.title}
                    </h5>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {dayItem.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions */}
          <div>
            <h4 className="font-display text-lg font-bold text-stone-900 mb-3">
              Included in This Itinerary
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              {pkg.inclusions.map((inc, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Bar */}
        <div className="p-4 sm:px-8 border-t border-stone-200 bg-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-stone-500">
            Customize this itinerary for your exact travel dates.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onEnquire(pkg);
                onClose();
              }}
              className="flex-1 sm:flex-initial py-2.5 px-6 rounded-xl bg-teal-800 hover:bg-teal-900 text-amber-100 font-medium text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <Send className="w-4 h-4" />
              <span>Enquire for This Package</span>
            </button>
            <button
              onClick={onClose}
              className="py-2.5 px-4 rounded-xl border border-stone-300 hover:bg-stone-100 text-stone-700 text-sm font-medium cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
