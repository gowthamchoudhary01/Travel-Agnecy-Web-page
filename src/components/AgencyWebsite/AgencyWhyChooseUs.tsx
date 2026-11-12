import React from 'react';
import { Compass, Sparkles, Shield, Headphones, Check } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS, formatCompanyName } from '../../utils/travelData';

interface AgencyWhyChooseUsProps {
  companyName: string;
}

export const AgencyWhyChooseUs: React.FC<AgencyWhyChooseUsProps> = ({ companyName }) => {
  const formattedName = formatCompanyName(companyName);

  const icons = [
    <Sparkles className="w-6 h-6" key="planning" />,
    <Compass className="w-6 h-6" key="destinations" />,
    <Shield className="w-6 h-6" key="hassle-free" />,
    <Headphones className="w-6 h-6" key="support" />,
  ];

  return (
    <section className="py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-teal-800 text-xs font-semibold tracking-widest uppercase">
            The {formattedName} Standard
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
            Why Choose Us
          </h2>
          <p className="mt-4 text-stone-600 font-body text-base sm:text-lg leading-relaxed">
            Every holiday we organize reflects our uncompromising commitment to excellence, discretion, and personalized luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US_POINTS.map((point, index) => (
            <div
              key={point.title}
              className="bg-[#FAF8F5] rounded-2xl p-8 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-800 text-amber-200 flex items-center justify-center mb-6">
                  {icons[index]}
                </div>
                <h3 className="font-display text-xl font-bold text-stone-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-stone-600 font-body text-sm leading-relaxed">
                  {point.shortDesc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center gap-1.5 text-xs text-teal-800 font-medium">
                <Check className="w-4 h-4 text-teal-600" />
                <span>Guaranteed Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
