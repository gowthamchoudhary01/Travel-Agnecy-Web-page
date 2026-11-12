import React from 'react';
import { Star, Quote, Info } from 'lucide-react';
import { SAMPLE_TESTIMONIALS, formatCompanyName } from '../../utils/travelData';

interface AgencyTestimonialsProps {
  companyName: string;
}

export const AgencyTestimonials: React.FC<AgencyTestimonialsProps> = ({ companyName }) => {
  const formattedName = formatCompanyName(companyName);

  return (
    <section className="py-24 bg-[#FAF8F5] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200 text-xs font-medium mb-3">
            <Info className="w-3.5 h-3.5" />
            <span>Illustrative Demonstration Content</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
            Stories From Our Travelers
          </h2>
          <p className="mt-4 text-stone-600 font-body text-base sm:text-lg leading-relaxed">
            See how prospective travelers and clients experience authentic testimonials on your {formattedName} digital storefront.
          </p>
        </div>

        {/* 3 Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SAMPLE_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-8 border border-stone-200/90 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-stone-700 font-body text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <div className="font-display font-bold text-stone-900 text-base">
                  {t.clientName}
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-500 mt-1">
                  <span className="font-medium text-teal-800">{t.tripTaken}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t.location}</span>
                </div>
                <div className="text-[11px] text-stone-400 mt-0.5">
                  Traveled {t.travelYear}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
