import React from 'react';
import { X, MapPin, Calendar, Clock, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Destination } from '../../types/travel';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onEnquire: (destinationName: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onEnquire,
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/75 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden border border-stone-200 shadow-2xl relative my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-16/9 bg-stone-100">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-1.5 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{destination.country}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              {destination.name}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-teal-800 text-xs font-semibold tracking-wider uppercase block mb-1">
              {destination.tagline}
            </span>
            <p className="text-stone-700 font-body text-sm sm:text-base leading-relaxed">
              {destination.description}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#FAF8F5] border border-stone-200/80 text-xs">
            <div>
              <span className="text-stone-400 block font-medium">Best Season</span>
              <span className="font-semibold text-stone-900 mt-0.5 block">{destination.bestTimeToVisit}</span>
            </div>
            <div>
              <span className="text-stone-400 block font-medium">Recommended Duration</span>
              <span className="font-semibold text-stone-900 mt-0.5 block">{destination.idealDuration}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-stone-400 block font-medium">Experience Vibe</span>
              <span className="font-semibold text-teal-800 mt-0.5 block">{destination.vibe}</span>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="font-display text-lg font-bold text-stone-900 mb-3">
              Curated Highlights & Inclusions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {destination.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onEnquire(destination.name);
                onClose();
              }}
              className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-teal-800 hover:bg-teal-900 text-amber-100 font-medium text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xs transition-colors"
            >
              <span>Enquire About {destination.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto py-3 px-5 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-700 font-medium text-sm cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
