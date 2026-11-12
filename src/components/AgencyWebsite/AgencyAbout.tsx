import React from 'react';
import { Compass, Heart, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { formatCompanyName, generateAgencyStory, DESTINATION_IMAGES } from '../../utils/travelData';

interface AgencyAboutProps {
  companyName: string;
}

export const AgencyAbout: React.FC<AgencyAboutProps> = ({ companyName }) => {
  const formattedName = formatCompanyName(companyName);
  const story = generateAgencyStory(formattedName);

  return (
    <section id="agency-about" className="py-24 bg-[#FAF8F5] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Asset Gallery */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200 aspect-4/5">
              <img
                src={DESTINATION_IMAGES.rajasthan}
                alt={`Heritage luxury travel by ${formattedName}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-amber-300 text-xs font-semibold uppercase tracking-wider block mb-1">
                  Established Excellence
                </span>
                <p className="font-display text-xl font-bold">
                  Bespoke journeys designed for discerning travelers worldwide.
                </p>
              </div>
            </div>

            {/* Overlapping small accent card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-white p-5 rounded-xl border border-stone-200 shadow-xl max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Certified Specialists</h4>
                  <p className="text-xs text-stone-500">100% Tailored Private Itineraries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-teal-800 text-xs font-semibold tracking-widest uppercase">
              About Our Philosophy
            </div>

            {/* Title from Prompt */}
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              Your Journey, Our Passion.
            </h2>

            <p className="text-stone-700 font-body text-base sm:text-lg leading-relaxed">
              {story.intro}
            </p>

            <p className="text-stone-600 font-body text-sm sm:text-base leading-relaxed">
              {story.mission}
            </p>

            <p className="text-stone-600 font-body text-sm sm:text-base leading-relaxed">
              {story.vision}
            </p>

            <div className="pt-6 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Global Direct Partnerships</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Preferred partner rates and VIP amenities at leading world resorts.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Seamless Peace of Mind</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Every ticket, transit, and exclusive permit confirmed before departure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
