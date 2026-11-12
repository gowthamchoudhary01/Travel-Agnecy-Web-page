import React from 'react';
import { Compass, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { formatCompanyName, POPULAR_DESTINATIONS, HOLIDAY_PACKAGES } from '../../utils/travelData';

interface AgencyFooterProps {
  companyName: string;
  onNavigate: (sectionId: string) => void;
}

export const AgencyFooter: React.FC<AgencyFooterProps> = ({
  companyName,
  onNavigate,
}) => {
  const formattedName = formatCompanyName(companyName).toUpperCase();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800/80">
          {/* Brand Info (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-display text-2xl font-bold tracking-wider text-white block">
              {formattedName}
            </span>
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm font-body leading-relaxed">
              Curators of fine travel, extraordinary destinations, and bespoke private itineraries. Dedicated to creating journeys that become treasured lifelong memories.
            </p>
            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <p>Private Concierge: +1 (800) 555-VOYAGE</p>
              <p>Bespoke Inquiries: concierge@{companyName.toLowerCase().replace(/[^a-z0-9]/g, '') || 'agency'}.demo</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200 mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-body">
              <li>
                <button
                  onClick={() => onNavigate('agency-hero')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('agency-destinations')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Destinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('agency-packages')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('agency-about')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('agency-contact')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Signature Destinations */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200 mb-4">
              Destinations
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-body">
              {POPULAR_DESTINATIONS.map((dest) => (
                <li key={dest.id}>
                  <button
                    onClick={() => onNavigate('agency-destinations')}
                    className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                  >
                    {dest.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Curated Packages */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200 mb-4">
              Holiday Packages
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-body">
              {HOLIDAY_PACKAGES.map((pkg) => (
                <li key={pkg.id}>
                  <button
                    onClick={() => onNavigate('agency-packages')}
                    className="hover:text-amber-300 transition-colors cursor-pointer text-left truncate max-w-[200px]"
                  >
                    {pkg.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} {formatCompanyName(companyName)}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-stone-400 hover:text-white transition-colors cursor-pointer ml-4"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
