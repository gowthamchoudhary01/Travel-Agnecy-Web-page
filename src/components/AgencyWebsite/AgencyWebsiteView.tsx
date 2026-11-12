import React, { useState } from 'react';
import { AgencyNav } from './AgencyNav';
import { AgencyHero } from './AgencyHero';
import { AgencyDestinations } from './AgencyDestinations';
import { AgencyPackages } from './AgencyPackages';
import { AgencyAbout } from './AgencyAbout';
import { AgencyWhyChooseUs } from './AgencyWhyChooseUs';
import { AgencyTestimonials } from './AgencyTestimonials';
import { AgencyContact } from './AgencyContact';
import { AgencyFooter } from './AgencyFooter';
import { DestinationModal } from './DestinationModal';
import { PackageModal } from './PackageModal';
import { Destination, HolidayPackage } from '../../types/travel';

interface AgencyWebsiteViewProps {
  companyName: string;
  agencyEmail?: string;
  isCompact?: boolean;
  onOpenPersonalize?: () => void;
}

export const AgencyWebsiteView: React.FC<AgencyWebsiteViewProps> = ({
  companyName,
  agencyEmail,
  isCompact,
  onOpenPersonalize,
}) => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<HolidayPackage | null>(null);
  const [prefilledDestination, setPrefilledDestination] = useState<string>('Maldives');
  const [prefilledPackage, setPrefilledPackage] = useState<string>('');

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPlanner = () => {
    handleNavigate('agency-contact');
  };

  const handleSelectDestination = (dest: Destination) => {
    setSelectedDestination(dest);
  };

  const handleEnquireFromDestination = (destName: string) => {
    setPrefilledDestination(destName);
    handleNavigate('agency-contact');
  };

  const handleEnquirePackage = (pkg: HolidayPackage) => {
    setPrefilledPackage(pkg.name);
    setPrefilledDestination(pkg.destinationName);
    handleNavigate('agency-contact');
  };

  const handleViewPackageDetails = (pkg: HolidayPackage) => {
    setSelectedPackage(pkg);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans selection:bg-teal-200 selection:text-teal-900">
      {/* Client Agency Navigation */}
      <AgencyNav
        companyName={companyName}
        onNavigate={handleNavigate}
        onOpenPlanner={handleOpenPlanner}
        onOpenPersonalize={onOpenPersonalize}
        isCompact={isCompact}
      />

      {/* Main Client Agency Sections */}
      <main>
        <AgencyHero
          companyName={companyName}
          onExploreDestinations={() => handleNavigate('agency-destinations')}
          onExplorePackages={() => handleNavigate('agency-packages')}
        />

        <AgencyDestinations
          onSelectDestination={handleSelectDestination}
        />

        <AgencyPackages
          onEnquirePackage={handleEnquirePackage}
          onViewPackageDetails={handleViewPackageDetails}
        />

        <AgencyAbout
          companyName={companyName}
        />

        <AgencyWhyChooseUs
          companyName={companyName}
        />

        <AgencyTestimonials
          companyName={companyName}
        />

        <AgencyContact
          companyName={companyName}
          prefilledDestination={prefilledDestination}
          prefilledPackage={prefilledPackage}
        />
      </main>

      {/* Client Agency Footer */}
      <AgencyFooter
        companyName={companyName}
        onNavigate={handleNavigate}
      />

      {/* Modals */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onEnquire={handleEnquireFromDestination}
      />

      <PackageModal
        pkg={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        onEnquire={handleEnquirePackage}
      />
    </div>
  );
};
