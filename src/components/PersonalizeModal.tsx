import React, { useState } from 'react';
import { Sparkles, ArrowRight, X, Compass, Globe } from 'lucide-react';
import { DESTINATION_IMAGES } from '../utils/travelData';

interface PersonalizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (companyName: string) => void;
  onSkip: () => void;
}

const SAMPLE_AGENCIES = [
  'Royal Holidays',
  'Azure Expeditions',
  'Zenith Travel Club',
  'Silk Route Voyages',
];

export const PersonalizeModal: React.FC<PersonalizeModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  onSkip,
}) => {
  const [nameInput, setNameInput] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      onConfirm(nameInput.trim());
    } else {
      onSkip();
    }
  };

  const handleSelectSample = (sample: string) => {
    setNameInput(sample);
    onConfirm(sample);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="personalize-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-xs animate-fade-in"
    >
      <div className="bg-[#FAF8F5] text-stone-900 rounded-3xl max-w-lg w-full overflow-hidden border border-stone-200/90 shadow-2xl relative transition-all transform scale-100">
        {/* Subtle close icon */}
        <button
          onClick={onSkip}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-stone-200/70 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal and continue"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Small decorative destination photograph banner */}
        <div className="relative h-40 w-full overflow-hidden bg-stone-200">
          <img
            src={DESTINATION_IMAGES.maldives}
            alt="Scenic luxury travel destination"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-stone-950/20" />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-stone-200/80 flex items-center gap-1.5 text-xs font-semibold text-teal-900 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-teal-700" />
            <span>Interactive Live Demonstration</span>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 pt-3 text-center">
          {/* Exact Heading from Prompt */}
          <h2
            id="personalize-title"
            className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-stone-900"
          >
            Let's Personalize Your Experience
          </h2>

          {/* Exact Description from Prompt */}
          <p className="mt-2 text-stone-600 font-body text-sm leading-relaxed max-w-md mx-auto">
            Enter your travel company's name to see how your own website could look.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 text-left space-y-4">
            <div>
              <label
                htmlFor="company-name-modal-input"
                className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5"
              >
                Company Name
              </label>
              <input
                id="company-name-modal-input"
                type="text"
                autoFocus
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Enter your company name"
                className="w-full px-4 py-3.5 rounded-xl border border-stone-300 bg-white text-stone-900 placeholder-stone-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-all shadow-xs"
              />
            </div>

            {/* Quick sample chips */}
            <div>
              <span className="text-[11px] font-medium text-stone-500 uppercase tracking-wider block mb-1.5">
                Or click a sample agency:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {SAMPLE_AGENCIES.map((sample) => (
                  <button
                    key={sample}
                    type="button"
                    onClick={() => handleSelectSample(sample)}
                    className="px-2.5 py-1 rounded-lg bg-white hover:bg-stone-100 text-stone-700 text-xs font-medium border border-stone-200/90 transition-colors cursor-pointer shadow-2xs"
                  >
                    {sample}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-teal-800 hover:bg-teal-900 text-amber-50 font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Preview My Website</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onSkip}
                className="w-full py-2.5 px-4 rounded-xl text-stone-500 hover:text-stone-800 text-xs sm:text-sm font-medium transition-colors cursor-pointer text-center"
              >
                Skip for Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
