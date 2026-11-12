import React, { useState, useEffect } from 'react';
import { PersonalizeModal } from './components/PersonalizeModal';
import { AgencyWebsiteView } from './components/AgencyWebsite/AgencyWebsiteView';
import { formatCompanyName } from './utils/travelData';
import { Monitor, Tablet, Smartphone, Sparkles, RefreshCw } from 'lucide-react';

export default function App() {
  const getInitialName = () => {
    if (typeof window === 'undefined') return 'Your Travel Company';
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('company') || params.get('preview');
    if (fromUrl && fromUrl.trim()) return decodeURIComponent(fromUrl.trim());
    return 'Your Travel Company';
  };

  const [companyName, setCompanyName] = useState<string>(getInitialName);
  // Prompt requirement: "When someone opens the website, immediately display a beautiful, centered modal popup."
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Handle "Preview My Website" with entered name
  const handleConfirmName = (enteredName: string) => {
    const clean = formatCompanyName(enteredName);
    setCompanyName(clean);
    setIsPopupOpen(false);

    try {
      const url = new URL(window.location.href);
      url.searchParams.set('company', clean);
      window.history.replaceState({ company: clean }, '', url.toString());
      sessionStorage.setItem('personalized_agency_name', clean);
    } catch {
      // Ignore
    }
  };

  // Handle "Skip for Now"
  const handleSkip = () => {
    // Prompt: "Use the default demo brand name 'Your Travel Company'."
    setCompanyName('Your Travel Company');
    setIsPopupOpen(false);

    try {
      const url = new URL(window.location.href);
      url.searchParams.delete('company');
      url.searchParams.delete('preview');
      window.history.replaceState({}, '', url.pathname);
    } catch {
      // Ignore
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans antialiased selection:bg-teal-200 selection:text-teal-900">
      {/* 1. Initial Screen — Centered Modal Popup */}
      <PersonalizeModal
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onConfirm={handleConfirmName}
        onSkip={handleSkip}
      />

      {/* Subtle Top Demo Utility Toolbar */}
      <aside
        aria-label="Demo controls"
        className="bg-stone-900 text-stone-300 text-xs py-2 px-4 border-b border-stone-800"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-stone-400">Live Client Demo:</span>
            <span className="font-semibold text-amber-300 tracking-wide">{companyName}</span>
            <button
              onClick={() => setIsPopupOpen(true)}
              className="ml-1 text-[11px] px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white transition-colors cursor-pointer border border-stone-700"
            >
              Personalize Name
            </button>
          </div>

          {/* Device viewport frame selector */}
          <div className="hidden sm:flex items-center gap-1 bg-stone-800/80 rounded-lg p-0.5 border border-stone-700/60">
            <button
              onClick={() => setViewMode('desktop')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                viewMode === 'desktop' ? 'bg-teal-700 text-white font-medium' : 'text-stone-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setViewMode('tablet')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                viewMode === 'tablet' ? 'bg-teal-700 text-white font-medium' : 'text-stone-400 hover:text-white'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet</span>
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                viewMode === 'mobile' ? 'bg-teal-700 text-white font-medium' : 'text-stone-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
          </div>

          <button
            onClick={() => {
              const presets = ['Royal Holidays', 'Azure Expeditions', 'Zenith Travel Club', 'Silk Route Voyages', 'Your Travel Company'];
              const next = presets[(presets.indexOf(companyName) + 1) % presets.length] || presets[0];
              handleConfirmName(next);
            }}
            className="inline-flex items-center gap-1 text-stone-300 hover:text-amber-200 transition-colors cursor-pointer text-[11px]"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Cycle Demo Agency</span>
          </button>
        </div>
      </aside>

      {/* 2. Direct Travel Agency Website (No marketing landing page) */}
      <div className="flex justify-center overflow-x-hidden">
        <div
          className={`transition-all duration-300 w-full ${
            viewMode === 'desktop'
              ? 'max-w-full'
              : viewMode === 'tablet'
              ? 'max-w-[768px] my-6 shadow-2xl rounded-2xl overflow-hidden border border-stone-300 ring-8 ring-stone-900/10'
              : 'max-w-[390px] my-6 shadow-2xl rounded-3xl overflow-hidden border border-stone-300 ring-10 ring-stone-900/10'
          }`}
        >
          <AgencyWebsiteView
            companyName={companyName}
            isCompact={viewMode === 'mobile'}
            onOpenPersonalize={() => setIsPopupOpen(true)}
          />
        </div>
      </div>
    </div>
  );
}
