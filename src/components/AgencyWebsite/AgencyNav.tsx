import React, { useState } from 'react';
import { Menu, X, Compass, Phone } from 'lucide-react';
import { formatCompanyName } from '../../utils/travelData';

interface AgencyNavProps {
  companyName: string;
  onNavigate: (sectionId: string) => void;
  onOpenPlanner: () => void;
  onOpenPersonalize?: () => void;
  isCompact?: boolean;
}

export const AgencyNav: React.FC<AgencyNavProps> = ({
  companyName,
  onNavigate,
  onOpenPlanner,
  onOpenPersonalize,
  isCompact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const formattedName = formatCompanyName(companyName).toUpperCase();

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-stone-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6 sm:gap-8">
        {/* Brand Zone - Strictly 1-line text element wordmark dynamically displaying COMPANY NAME */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleLinkClick('agency-hero')}
            className="text-left font-display text-lg sm:text-2xl font-bold tracking-wider text-stone-900 whitespace-nowrap shrink-0 hover:text-teal-900 transition-colors cursor-pointer"
          >
            {formattedName}
          </button>
          {onOpenPersonalize && (
            <button
              onClick={onOpenPersonalize}
              className="hidden lg:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
              title="Click to personalize company name"
            >
              Change Name
            </button>
          )}
        </div>

        {/* Zone 2: Simple clean navigation links (Home, Destinations, Packages, About, Contact) */}
        <div className={`${isCompact ? 'hidden' : 'hidden md:flex'} items-center gap-7 text-sm font-medium text-stone-700`}>
          <button
            onClick={() => handleLinkClick('agency-hero')}
            className="hover:text-teal-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleLinkClick('agency-destinations')}
            className="hover:text-teal-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Destinations
          </button>
          <button
            onClick={() => handleLinkClick('agency-packages')}
            className="hover:text-teal-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Packages
          </button>
          <button
            onClick={() => handleLinkClick('agency-about')}
            className="hover:text-teal-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleLinkClick('agency-contact')}
            className="hover:text-teal-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Zone 3: 1 primary action */}
        <div className={`${isCompact ? 'hidden' : 'hidden md:flex'} items-center gap-3 shrink-0`}>
          {onOpenPersonalize && (
            <button
              onClick={onOpenPersonalize}
              className="lg:hidden px-3 py-1.5 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-100 text-xs font-medium cursor-pointer"
            >
              Change Name
            </button>
          )}
          <button
            onClick={onOpenPlanner}
            className="px-5 py-2.5 rounded-lg bg-teal-800 hover:bg-teal-900 text-amber-100 text-xs sm:text-sm font-medium tracking-wide transition-all shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap shrink-0"
          >
            Plan Your Journey
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className={`${isCompact ? 'flex' : 'md:hidden'} items-center`}>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`${isCompact ? 'block' : 'md:hidden'} border-b border-stone-200 bg-[#FFFDF9] px-4 pt-2 pb-6 space-y-3 animate-fade-in`}>
          <button
            onClick={() => handleLinkClick('agency-hero')}
            className="w-full text-left px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleLinkClick('agency-destinations')}
            className="w-full text-left px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md cursor-pointer"
          >
            Destinations
          </button>
          <button
            onClick={() => handleLinkClick('agency-packages')}
            className="w-full text-left px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md cursor-pointer"
          >
            Packages
          </button>
          <button
            onClick={() => handleLinkClick('agency-about')}
            className="w-full text-left px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleLinkClick('agency-contact')}
            className="w-full text-left px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md cursor-pointer"
          >
            Contact
          </button>
          {onOpenPersonalize && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPersonalize();
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-teal-800 hover:bg-teal-50 rounded-md cursor-pointer"
            >
              Personalize Company Name
            </button>
          )}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlanner();
              }}
              className="w-full py-3 px-4 rounded-lg bg-teal-800 text-amber-100 font-medium text-center cursor-pointer"
            >
              Plan Your Journey
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
