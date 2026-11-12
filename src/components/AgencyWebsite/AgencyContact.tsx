import React, { useState, useEffect } from 'react';
import { Send, MessageSquare, CheckCircle2, Phone, Mail, MapPin, AlertCircle, Info, ExternalLink } from 'lucide-react';
import { ContactEnquiry } from '../../types/travel';
import { formatCompanyName, validateContactForm, generateWhatsAppLink, POPULAR_DESTINATIONS } from '../../utils/travelData';

interface AgencyContactProps {
  companyName: string;
  prefilledDestination?: string;
  prefilledPackage?: string;
}

export const AgencyContact: React.FC<AgencyContactProps> = ({
  companyName,
  prefilledDestination,
  prefilledPackage,
}) => {
  const formattedName = formatCompanyName(companyName);
  const demoWhatsAppNumber = '+1 (555) 019-8234';

  const [formData, setFormData] = useState<ContactEnquiry>({
    fullName: '',
    email: '',
    phone: '',
    destination: prefilledDestination || 'Maldives',
    travelDate: '',
    travelersCount: '2 Travelers',
    message: prefilledPackage ? `I would like to enquire about the "${prefilledPackage}" package.` : '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedEnquiry, setSubmittedEnquiry] = useState<ContactEnquiry | null>(null);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  useEffect(() => {
    if (prefilledDestination) {
      setFormData((prev) => ({ ...prev, destination: prefilledDestination }));
    }
  }, [prefilledDestination]);

  useEffect(() => {
    if (prefilledPackage) {
      setFormData((prev) => ({
        ...prev,
        message: `I would like to enquire about the "${prefilledPackage}" package.`,
      }));
    }
  }, [prefilledPackage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmittedEnquiry({ ...formData });
  };

  const handleReset = () => {
    setSubmittedEnquiry(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      destination: 'Maldives',
      travelDate: '',
      travelersCount: '2 Travelers',
      message: '',
    });
  };

  const whatsappUrl = generateWhatsAppLink(
    demoWhatsAppNumber,
    companyName,
    formData.destination,
    prefilledPackage
  );

  return (
    <section id="agency-contact" className="py-24 bg-white text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Agency Contact Info & WhatsApp */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-teal-800 text-xs font-semibold tracking-widest uppercase">
                Direct Communication
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
                Plan Your Private Journey
              </h2>
              <p className="mt-4 text-stone-600 font-body text-base leading-relaxed">
                Connect with the travel designers at <span className="font-semibold text-stone-900">{formattedName}</span>. Whether planning a milestone anniversary or a multi-country exploration, we tailor every detail.
              </p>
            </div>

            {/* Agency Contact Card */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/90 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-800 text-amber-200 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-stone-500 font-medium block">Demonstration Helpline</span>
                  <span className="text-sm font-semibold text-stone-900">+1 (800) 555-VOYAGE</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-800 text-amber-200 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-stone-500 font-medium block">Enquiries Desk</span>
                  <span className="text-sm font-semibold text-stone-900">concierge@{companyName.toLowerCase().replace(/[^a-z0-9]/g, '') || 'agency'}.demo</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-800 text-amber-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-stone-500 font-medium block">Private Lounge</span>
                  <span className="text-sm font-semibold text-stone-900">Available by Appointment Globally</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Feature Card */}
            <div className="bg-emerald-50/70 p-6 rounded-2xl border border-emerald-200/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Instant WhatsApp Travel Concierge</h4>
                  <span className="text-[11px] text-stone-500 block">Demonstration WhatsApp Integration</span>
                </div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                Test how your future travelers can tap to open an instant WhatsApp chat with pre-filled destination details.
              </p>
              <button
                type="button"
                onClick={() => setShowWhatsAppModal(true)}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Test WhatsApp Enquiry Link</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form or Confirmation Receipt */}
          <div className="lg:col-span-7">
            {submittedEnquiry ? (
              <div className="bg-[#FAF8F5] p-8 sm:p-10 rounded-2xl border border-stone-200/90 shadow-md animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="text-teal-800 text-xs font-semibold tracking-widest uppercase">
                  Enquiry Submitted Successfully
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                  Thank You, {submittedEnquiry.fullName}!
                </h3>
                <p className="text-stone-600 font-body text-sm mt-3 leading-relaxed">
                  Your customized journey enquiry has been received by <strong className="text-stone-900">{formattedName}</strong>. This is a working demo confirmation showcasing how your agency captures qualified inbound client leads.
                </p>

                {/* Lead Summary Card */}
                <div className="mt-6 bg-white p-5 rounded-xl border border-stone-200 text-xs space-y-2.5">
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span className="text-stone-500">Destination of Interest:</span>
                    <span className="font-semibold text-stone-900">{submittedEnquiry.destination}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span className="text-stone-500">Email:</span>
                    <span className="font-semibold text-stone-900">{submittedEnquiry.email}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span className="text-stone-500">Phone:</span>
                    <span className="font-semibold text-stone-900">{submittedEnquiry.phone}</span>
                  </div>
                  {submittedEnquiry.travelersCount && (
                    <div className="flex justify-between border-b border-stone-100 pb-2">
                      <span className="text-stone-500">Travel Party:</span>
                      <span className="font-semibold text-stone-900">{submittedEnquiry.travelersCount}</span>
                    </div>
                  )}
                  <div className="pt-1">
                    <span className="text-stone-500 block mb-1">Message:</span>
                    <p className="italic text-stone-700 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                      "{submittedEnquiry.message}"
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-medium transition-colors cursor-pointer"
                  >
                    Submit Another Test Enquiry
                  </button>
                  <button
                    onClick={() => setShowWhatsAppModal(true)}
                    className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Also Connect on WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#FAF8F5] p-8 sm:p-10 rounded-2xl border border-stone-200/90 shadow-sm space-y-5">
                <div className="border-b border-stone-200/80 pb-4">
                  <h3 className="font-display text-2xl font-bold text-stone-900">
                    Send an Enquiry to {formattedName}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Fill out the form below to receive a personalized proposal within 24 hours.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Your Full Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Elizabeth Hastings"
                    className={`w-full px-4 py-3 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName ? 'border-rose-400 focus:ring-rose-500' : 'border-stone-300 focus:ring-teal-700'
                    }`}
                  />
                  {errors.fullName && <p className="mt-1 text-xs text-rose-600">{errors.fullName}</p>}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Email Address <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. elizabeth@example.com"
                      className={`w-full px-4 py-3 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.email ? 'border-rose-400 focus:ring-rose-500' : 'border-stone-300 focus:ring-teal-700'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Phone Number <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 234-5678"
                      className={`w-full px-4 py-3 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.phone ? 'border-rose-400 focus:ring-rose-500' : 'border-stone-300 focus:ring-teal-700'
                      }`}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-rose-600">{errors.phone}</p>}
                  </div>
                </div>

                {/* Destination & Travelers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-destination" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Destination of Interest <span className="text-rose-600">*</span>
                    </label>
                    <select
                      id="contact-destination"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-700"
                    >
                      {POPULAR_DESTINATIONS.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name} ({d.country})
                        </option>
                      ))}
                      <option value="Custom Bespoke Itinerary">Other / Multi-Destination</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-travelers" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Travel Party Size
                    </label>
                    <select
                      id="contact-travelers"
                      value={formData.travelersCount}
                      onChange={(e) => setFormData({ ...formData, travelersCount: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-700"
                    >
                      <option value="Solo Traveler">Solo Traveler</option>
                      <option value="2 Travelers (Couple)">2 Travelers (Couple)</option>
                      <option value="Family (3-4 Travelers)">Family (3–4 Travelers)</option>
                      <option value="Private Group (5+ Travelers)">Private Group (5+ Travelers)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Your Travel Requirements & Notes <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your preferred travel window, special interests, celebratory milestones, or room preferences..."
                    className={`w-full px-4 py-3 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.message ? 'border-rose-400 focus:ring-rose-500' : 'border-stone-300 focus:ring-teal-700'
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-rose-600">{errors.message}</p>}
                </div>

                {/* Submit Enquiry Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-teal-800 hover:bg-teal-900 text-amber-100 font-medium text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Enquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* WhatsApp Modal with Demonstration Transparency */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-stone-200 shadow-2xl relative text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-stone-900">
                  WhatsApp Concierge Demonstration
                </h3>
                <span className="text-xs text-emerald-700 font-medium">Interactive Demo Feature</span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-stone-600 font-body leading-relaxed">
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                <div className="font-semibold text-stone-800 mb-1">Pre-filled Customer Message:</div>
                <p className="italic text-stone-700">
                  "Hello {formattedName}! I am interested in travel packages for {formData.destination}."
                </p>
              </div>

              <div className="flex items-start gap-2 text-stone-500 bg-amber-50/80 p-3 rounded-lg border border-amber-200/80 text-xs text-amber-900">
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-800" />
                <p>
                  <strong>Demonstration Notice:</strong> In this live demo, clicking below generates the real WhatsApp deep-link directed to the demonstration line (<code>{demoWhatsAppNumber}</code>). No real message is silently dispatched without your WhatsApp confirmation.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowWhatsAppModal(false)}
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-center text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to WhatsApp (Demo)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setShowWhatsAppModal(false)}
                className="py-3 px-4 rounded-xl border border-stone-300 hover:bg-stone-100 text-stone-700 font-medium text-xs sm:text-sm cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
