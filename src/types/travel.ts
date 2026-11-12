export interface Destination {
  id: string;
  name: string;
  country: string;
  tagline: string;
  description: string;
  image: string;
  bestTimeToVisit: string;
  idealDuration: string;
  highlights: string[];
  vibe: string;
}

export interface HolidayPackage {
  id: string;
  name: string;
  destinationId: string;
  destinationName: string;
  duration: string;
  description: string;
  fullOverview: string;
  startingPrice: number;
  currency: string;
  image: string;
  itinerary: { day: string; title: string; detail: string }[];
  inclusions: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  tripTaken: string;
  quote: string;
  rating: number;
  travelYear: string;
  location: string;
}

export interface ContactEnquiry {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  travelDate?: string;
  travelersCount?: string;
  message: string;
}

export interface AgencyConfig {
  name: string;
  email?: string;
  phone?: string;
  whatsappNumber?: string;
  tagline?: string;
  primaryColor?: string;
}
