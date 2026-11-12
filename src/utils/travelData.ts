import { Destination, HolidayPackage, Testimonial, ContactEnquiry } from '../types/travel';

export const DESTINATION_IMAGES = {
  maldives: '/src/assets/images/destination_maldives_resort_1794479129887.jpg',
  switzerland: '/src/assets/images/destination_swiss_alps_1794479130133.jpg',
  rajasthan: '/src/assets/images/destination_rajasthan_palace_1794479131029.jpg',
  dubai: '/src/assets/images/destination_dubai_skyline_1794479158635.jpg',
  bali: '/src/assets/images/destination_bali_temple_1794479157903.jpg',
  paris: '/src/assets/images/destination_paris_eiffel_1794479158499.jpg',
};

export const POPULAR_DESTINATIONS: Destination[] = [
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Republic of Maldives',
    tagline: 'Private Overwater Sanctuaries & Azure Lagoons',
    description: 'Immerse yourself in barefoot luxury with secluded private overwater villas, untouched coral reefs, and world-class oceanfront hospitality.',
    image: DESTINATION_IMAGES.maldives,
    bestTimeToVisit: 'November to April',
    idealDuration: '5 – 8 Days',
    highlights: ['Private seaplane transfers', 'Bioluminescent reef diving', 'Sunset catamaran cruises', 'Overwater spa therapies'],
    vibe: 'Pure Luxury & Serenity',
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    country: 'Switzerland',
    tagline: 'Majestic Alpine Summits & Serene Glacial Lakes',
    description: 'Traverse timeless snow-capped peaks, pristine alpine meadows, historic panoramic railways, and secluded boutique mountain lodges.',
    image: DESTINATION_IMAGES.switzerland,
    bestTimeToVisit: 'June to September & December to March',
    idealDuration: '7 – 10 Days',
    highlights: ['Glacier Express first-class journey', 'Lake Lucerne private yacht', 'Matterhorn sunrise viewpoints', 'Artisan Swiss chocolaterie tours'],
    vibe: 'Scenic Grandeur & Alpine Heritage',
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    tagline: 'Architectural Wonders & Royal Arabian Dunes',
    description: 'Experience futuristic luxury, award-winning Michelin gastronomy, serene desert retreats, and prestigious private marina cruises.',
    image: DESTINATION_IMAGES.dubai,
    bestTimeToVisit: 'October to April',
    idealDuration: '4 – 6 Days',
    highlights: ['Private desert safari & luxury camp', 'Burj Khalifa Sky Lounge access', 'Sunset yacht cruise through Dubai Marina', 'Old Dubai gold & spice heritage walk'],
    vibe: 'Opulence & Modern Innovation',
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    tagline: 'Emerald Rice Valleys & Sacred Coastal Temples',
    description: 'Discover holistic spiritual sanctuaries, cliffside ocean temples, artisanal Ubud workshops, and secluded black-sand beach villas.',
    image: DESTINATION_IMAGES.bali,
    bestTimeToVisit: 'April to October',
    idealDuration: '7 – 12 Days',
    highlights: ['Uluwatu cliffside sunset ceremonies', 'Private wellness retreats in Ubud', 'Nusa Penida yacht excursions', 'Sunrise trek to Mount Batur'],
    vibe: 'Spiritual Peace & Tropical Splendor',
  },
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    tagline: 'Timeless Romance, Haute Couture & World Culture',
    description: 'Wander grand Haussmann boulevards, iconic art museums, private Seine river soirees, and world-renowned French culinary institutions.',
    image: DESTINATION_IMAGES.paris,
    bestTimeToVisit: 'April to June & September to November',
    idealDuration: '5 – 7 Days',
    highlights: ['Private evening cruise on the Seine', 'After-hours Louvre guided curator tour', 'Champagne tasting in Historic Montmartre', 'Exclusive Versailles palace day trip'],
    vibe: 'Art, Romance & Epicurean Elegance',
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    country: 'India',
    tagline: 'Royal Palaces, Golden Forts & Desert Legends',
    description: 'Step into royal grandeur amidst intricately sculpted sandstone fortresses, tranquil lake palaces, and private royal heritage stays.',
    image: DESTINATION_IMAGES.rajasthan,
    bestTimeToVisit: 'October to March',
    idealDuration: '8 – 12 Days',
    highlights: ['Udaipur Lake Pichola private royal boat', 'Jaipur Amer Fort heritage expedition', 'Thar Desert luxury dune glamping', 'Private royal dinner in historic courtyards'],
    vibe: 'Imperial Royalty & Vibrant Culture',
  },
];

export const HOLIDAY_PACKAGES: HolidayPackage[] = [
  {
    id: 'maldives-luxury-escape',
    name: 'Maldives Luxury Escape',
    destinationId: 'maldives',
    destinationName: 'Maldives',
    duration: '6 Days / 5 Nights',
    description: 'Exclusive 5-star overwater bungalow retreat with private infinity pool, sunset dolphin cruise, and all-inclusive gourmet dining.',
    fullOverview: 'Experience the pinnacle of tropical sanctuary living. Arrive by scenic seaplane to a private island resort where a dedicated butler attends to your every comfort. Unwind with sunrise yoga over calm lagoons, feast at undersea restaurants, and stargaze from your overwater deck.',
    startingPrice: 3850,
    currency: '$',
    image: DESTINATION_IMAGES.maldives,
    featured: true,
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Scenic Seaplane', detail: 'VIP airport escort and direct scenic seaplane transfer to your private lagoon resort.' },
      { day: 'Day 2', title: 'Lagoon Relaxation & Coral Garden', detail: 'Private guided snorkeling along the protected house reef with marine biologist.' },
      { day: 'Day 3', title: 'Sunset Dolphin Cruise', detail: 'Traditional handcrafted dhoni sailing with vintage champagne and wild spinner dolphins.' },
      { day: 'Day 4', title: 'Undersea Dining & Spa Bliss', detail: 'Multi-course lunch at subterranean restaurant followed by ocean-view signature spa treatments.' },
      { day: 'Day 5', title: 'Private Sandbank Picnic', detail: 'Castaway experience on an isolated powder-soft sandbank with personalized chef service.' },
      { day: 'Day 6', title: 'Farewell Tropical Breakfast', detail: 'Floating breakfast in your villa pool before departure transfer.' },
    ],
    inclusions: [
      '5 Nights in Luxury Overwater Pool Villa',
      'Daily gourmet breakfast & 4-course dinners',
      'Return VIP seaplane airport transfers',
      'Complimentary marine equipment & guided reef tours',
      'USD $250 signature wellness spa credit',
    ],
  },
  {
    id: 'swiss-alpine-adventure',
    name: 'Swiss Alpine Adventure',
    destinationId: 'switzerland',
    destinationName: 'Switzerland',
    duration: '8 Days / 7 Nights',
    description: 'Glacier Express first-class rail, Matterhorn panoramic hiking, boutique chalet stays, and scenic cruise across Lake Lucerne.',
    fullOverview: 'Traverse the majestic heart of the Swiss Alps in peerless comfort. Journey on legendary panoramic railways through snow-crested mountain passes, stay in hand-selected luxury chalets, and savor fondue under starlit peaks.',
    startingPrice: 4200,
    currency: '$',
    image: DESTINATION_IMAGES.switzerland,
    featured: true,
    itinerary: [
      { day: 'Day 1', title: 'Zurich to Lucerne Arrival', detail: 'First-class Swiss rail transfer to scenic lakeside Lucerne; evening promenade walk.' },
      { day: 'Day 2', title: 'Mount Pilatus Golden Roundtrip', detail: 'Steepest cogwheel railway in the world followed by aerial cableway descent.' },
      { day: 'Day 3', title: 'Glacier Express Panoramic Journey', detail: 'Excellence Class panoramic rail car passing dramatic viaducts and gorges to Zermatt.' },
      { day: 'Day 4', title: 'Matterhorn Glacier Paradise', detail: 'Europe’s highest mountain station at 3,883m with crystalline ice palace and alpine views.' },
      { day: 'Day 5', title: 'Interlaken & Jungfraujoch', detail: 'Ascent to the "Top of Europe" with vast views across the Aletsch Glacier.' },
      { day: 'Day 6', title: 'Lauterbrunnen Valley of 72 Waterfalls', detail: 'Gentle walk through storybook alpine meadows and subterranean Trümmelbach falls.' },
      { day: 'Day 7', title: 'Geneva Lakeside Soiree', detail: 'High-speed scenic rail to Lake Geneva; private chocolate atelier workshop.' },
      { day: 'Day 8', title: 'Homeward Bound', detail: 'Private executive transfer to Geneva International Airport.' },
    ],
    inclusions: [
      '7 Nights in 5-star Swiss Alpine Chalet & Boutique Hotels',
      'First-Class 8-Day Swiss Travel Pass',
      'Guaranteed Excellence Class Glacier Express reservation',
      'Daily gourmet Swiss artisan breakfast',
      'Private mountain guide for alpine hiking excursions',
    ],
  },
  {
    id: 'dubai-city-experience',
    name: 'Dubai City Experience',
    destinationId: 'dubai',
    destinationName: 'Dubai',
    duration: '5 Days / 4 Nights',
    description: 'Burj Khalifa VIP sky lounge, private desert safari with luxury dune dining, and sunset yacht cruise along Dubai Marina.',
    fullOverview: 'Indulge in the dazzling crossroads of futuristic architectural ambition and Arabian desert warmth. From penthouse skyline suites to private dune camps beneath the desert night sky, discover the finest that the Emirates offer.',
    startingPrice: 2450,
    currency: '$',
    image: DESTINATION_IMAGES.dubai,
    itinerary: [
      { day: 'Day 1', title: 'Arrive in Dubai & Marina Check-In', detail: 'Chauffeured luxury SUV transfer to your premier downtown or marina hotel.' },
      { day: 'Day 2', title: 'Old Dubai & Burj Khalifa Sky', detail: 'Morning abra ride on Dubai Creek, heritage spice souks, followed by VIP Level 148 Sky Lounge.' },
      { day: 'Day 3', title: 'Royal Desert Safari & Starlit Dinner', detail: 'Vintage 4x4 dune drive, falconry demonstration, and private Arabian feast under the stars.' },
      { day: 'Day 4', title: 'Private Yacht Charter & Beach Club', detail: '4-hour private yacht cruise around Palm Jumeirah with Mediterranean lunch on board.' },
      { day: 'Day 5', title: 'Leisure & Departure', detail: 'Complimentary late check-out and private executive airport departure transfer.' },
    ],
    inclusions: [
      '4 Nights in 5-star Downtown Dubai Suite',
      'Private luxury desert safari with gourmet BBQ',
      'Private 4-hour yacht charter with refreshments',
      'Fast-track Burj Khalifa Level 148 tickets',
      'Roundtrip private airport chauffeured transfers',
    ],
  },
  {
    id: 'bali-tropical-holiday',
    name: 'Bali Tropical Holiday',
    destinationId: 'bali',
    destinationName: 'Bali',
    duration: '7 Days / 6 Nights',
    description: 'Private pool villa in lush Ubud jungle, sacred water purification blessing, sunset cliffside dinner in Uluwatu, and beachside leisure.',
    fullOverview: 'Rebalance mind and body in the island of the gods. Split your stay between the emerald rain-forest canopies of Ubud and the golden beaches of Uluwatu. Savor Balinese culinary traditions, yoga among lotus ponds, and cliff-top ocean vistas.',
    startingPrice: 1980,
    currency: '$',
    image: DESTINATION_IMAGES.bali,
    itinerary: [
      { day: 'Day 1', title: 'Welcome to Ubud Jungle Valley', detail: 'Private flower-scented transfer to your secluded river-valley pool villa.' },
      { day: 'Day 2', title: 'Tegalalang Rice Terraces & Coffee Farm', detail: 'Scenic morning walk through UNESCO emerald terraces and organic luwak roast tasting.' },
      { day: 'Day 3', title: 'Tirta Empul Holy Water Blessing', detail: 'Private sacred purification ceremony guided by a respected local temple priest.' },
      { day: 'Day 4', title: 'Journey South to Uluwatu Cliffs', detail: 'Check into ocean-cliff villa; evening Kecak fire dance against crashing sea waves.' },
      { day: 'Day 5', title: 'Nusa Lembongan Catamaran Cruise', detail: 'Full-day catamaran trip to pristine snorkeling reefs and mangrove lagoons.' },
      { day: 'Day 6', title: 'Balinese Herbal Spa & Jimbaran Feast', detail: '3-hour traditional Balinese flower-bath massage and beachfront seafood dinner.' },
      { day: 'Day 7', title: 'Tropical Leisure & Departure', detail: 'Breakfast overlooking the Indian Ocean and private airport transfer.' },
    ],
    inclusions: [
      '3 Nights Ubud Rainforest Pool Villa + 3 Nights Uluwatu Cliff Resort',
      'Daily organic farm-to-table breakfast',
      'Dedicated private English-speaking chauffeur & luxury vehicle',
      'Balinese temple blessings & all cultural entry permits',
      'Jimbaran candlelit seafood dinner on the beach',
    ],
  },
  {
    id: 'paris-romantic-getaway',
    name: 'Paris Romantic Getaway',
    destinationId: 'paris',
    destinationName: 'Paris',
    duration: '6 Days / 5 Nights',
    description: 'Chic boutique hotel near Saint-Germain, vintage Citroën city tour, after-hours Louvre access, and private Seine dinner cruise.',
    fullOverview: 'The quintessential romantic European city break. Walk tree-lined boulevards hand-in-hand, discover quiet bistro courtyards, and view the City of Light from the gentle waters of the Seine. Thoughtfully curated for couples and discerning travelers.',
    startingPrice: 3200,
    currency: '$',
    image: DESTINATION_IMAGES.paris,
    itinerary: [
      { day: 'Day 1', title: 'Bienvenue à Paris', detail: 'Private airport transfer to your boutique hotel in the heart of Saint-Germain-des-Prés.' },
      { day: 'Day 2', title: 'Vintage 2CV Citroën City Highlights', detail: 'Open-top tour winding through hidden Marais courtyards and Place des Vosges.' },
      { day: 'Day 3', title: 'Louvre Masterpieces & Palais Royal', detail: 'Skip-the-line curator tour of the Mona Lisa and Venus de Milo; lunch at Café Marly.' },
      { day: 'Day 4', title: 'Montmartre Secret Vineyards & Sunset', detail: 'Private walking tour of artisan artists’ studios and panoramic Sacré-Cœur views.' },
      { day: 'Day 5', title: 'Private Seine Soiree Dinner Cruise', detail: 'Illuminated evening sail past Notre-Dame and the sparkling Eiffel Tower with 5 courses.' },
      { day: 'Day 6', title: 'Croissant Breakfast & Departure', detail: 'Morning café terrace leisure before private limousine transfer to CDG Airport.' },
    ],
    inclusions: [
      '5 Nights in 5-star Saint-Germain Boutique Hotel',
      'Private vintage open-top convertible city tour',
      'Skip-the-line VIP passes to Louvre & Musée d’Orsay',
      '5-Course Seine river dinner cruise with champagne pairing',
      'Curated Paris gastronomy & patisserie guide',
    ],
  },
  {
    id: 'rajasthan-heritage-tour',
    name: 'Rajasthan Heritage Tour',
    destinationId: 'rajasthan',
    destinationName: 'Rajasthan',
    duration: '9 Days / 8 Nights',
    description: 'Royal palaces of Udaipur, Amer Fort of Jaipur, sunset desert safari in Jodhpur, and stays in authentic restored royal Havelis.',
    fullOverview: 'Journey into the opulent era of Maharajas and royal Rajput warriors. Bask in the ethereal beauty of Udaipur’s Lake Pichola, marvel at the pink sandstone ramparts of Jaipur, and sleep beneath desert constellations in luxury royal camps.',
    startingPrice: 2850,
    currency: '$',
    image: DESTINATION_IMAGES.rajasthan,
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Jaipur - The Pink City', detail: 'Traditional marigold garland welcome and transfer to heritage palace hotel.' },
      { day: 'Day 2', title: 'Amer Fort & City Palace', detail: 'Private morning exploration of Amer Fort’s Sheesh Mahal (Mirror Palace) and royal observatory.' },
      { day: 'Day 3', title: 'Drive to Jodhpur - The Blue City', detail: 'Scenic road journey across the Aravalli hills; evening walk in the cobalt blue alleys.' },
      { day: 'Day 4', title: 'Mehrangarh Fort & Desert Glamping', detail: 'Ascend the mighty Mehrangarh fortress; afternoon arrival at Thar luxury desert camp.' },
      { day: 'Day 5', title: 'Scenic Drive to Udaipur', detail: 'En-route visit to the intricately carved marble temples of Ranakpur.' },
      { day: 'Day 6', title: 'Udaipur City Palace & Lake Pichola', detail: 'Private solar-powered boat ride on Lake Pichola past Jag Mandir and Lake Palace.' },
      { day: 'Day 7', title: 'Artisanal Miniature Painting & Gardens', detail: 'Private session with hereditary royal court miniature artists and Saheliyon Ki Bari.' },
      { day: 'Day 8', title: 'Royal Courtyard Farewell Feast', detail: 'Traditional Rajasthani Thali dinner hosted in an illuminated palace courtyard.' },
      { day: 'Day 9', title: 'Udaipur Departure', detail: 'Breakfast by the lake and private escort to Udaipur Airport.' },
    ],
    inclusions: [
      '8 Nights in authentic Luxury Heritage Palaces & Luxury Desert Camp',
      'Dedicated private air-conditioned vehicle & professional chauffeur throughout',
      'Daily royal buffet breakfast and 4 traditional palace dinners',
      'Private boat cruise on Lake Pichola',
      'All monument admission fees and government licensed historians',
    ],
  },
];

export const SAMPLE_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Arthur & Eleanor Vance',
    tripTaken: 'Maldives Luxury Escape',
    quote: 'From our first consultation to the moment our seaplane landed back at Malé, the itinerary was executed with extraordinary precision. The overwater villa was magical and every reservation was effortless.',
    rating: 5,
    travelYear: 'Spring 2026',
    location: 'London, UK',
  },
  {
    id: '2',
    clientName: 'Dr. Michael Chen',
    tripTaken: 'Swiss Alpine Adventure',
    quote: 'Traveling with elderly parents requires flawless planning. The Excellence Class rail passes, step-free boutique chalet access, and local mountain guides made our Swiss trip the most stress-free holiday we have ever taken.',
    rating: 5,
    travelYear: 'Summer 2026',
    location: 'San Francisco, USA',
  },
  {
    id: '3',
    clientName: 'Priya & Rajan Kapoor',
    tripTaken: 'Rajasthan Heritage Tour',
    quote: 'The private boat ride on Lake Pichola at sunset was breathtaking. Every hotel felt like living inside a royal fairy tale. We could not have asked for more thoughtful care and attention to detail.',
    rating: 5,
    travelYear: 'Autumn 2026',
    location: 'Singapore',
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Personalized Travel Planning',
    shortDesc: 'Every itinerary is customized to match your tempo, personal travel style, culinary desires, and milestone celebrations.',
  },
  {
    title: 'Carefully Selected Destinations',
    shortDesc: 'We partner directly with peer-reviewed luxury resorts, certified local historian guides, and verified boutique stays.',
  },
  {
    title: 'Hassle-Free Experiences',
    shortDesc: 'From VIP tarmac greeting to private transport and reserved dining, every logistical step is orchestrated behind the scenes.',
  },
  {
    title: 'Dedicated Customer Support',
    shortDesc: 'A 24/7 dedicated travel concierge is on call before, during, and after your trip to handle changes and special requests.',
  },
];

/**
 * Pure helper functions for tests and runtime
 */

export function slugifyCompanyName(name: string): string {
  if (!name) return 'travel-agency';
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'travel-agency';
}

export function formatCompanyName(name: string): string {
  const clean = name.trim();
  if (!clean) return 'Your Travel Company';
  return clean;
}

export function formatPrice(price: number, currency: string = '$'): string {
  return `${currency}${price.toLocaleString('en-US')}`;
}

export function generateAgencyStory(companyName: string): { intro: string; mission: string; vision: string } {
  const name = formatCompanyName(companyName);
  return {
    intro: `At ${name}, we believe travel is not merely about visiting destinations—it is an art form designed to enrich the human soul. Founded with an unwavering commitment to bespoke exploration, we curate journeys that transcend the ordinary.`,
    mission: `Our mission at ${name} is to transform your travel aspirations into seamlessly executed, unforgettable adventures. We combine deep destination knowledge, exclusive hotel partnerships, and thoughtful concierge care so you can savor every moment with absolute peace of mind.`,
    vision: `Whether you are tracing ancient mountain ridges, unwinding in an overwater lagoon sanctuary, or discovering vibrant world capitals, ${name} ensures every detail is crafted with artistry, elegance, and integrity.`,
  };
}

export function validateContactForm(enquiry: ContactEnquiry): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!enquiry.fullName || enquiry.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!enquiry.email || !emailRegex.test(enquiry.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  const phoneDigits = (enquiry.phone || '').replace(/\D/g, '');
  if (!enquiry.phone || phoneDigits.length < 7) {
    errors.phone = 'Please provide a valid phone number (at least 7 digits).';
  }

  if (!enquiry.destination || enquiry.destination.trim().length === 0) {
    errors.destination = 'Please choose a destination of interest.';
  }

  if (!enquiry.message || enquiry.message.trim().length < 5) {
    errors.message = 'Please provide a short message or trip requirements (at least 5 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function generateWhatsAppLink(
  phoneNumber: string,
  companyName: string,
  destination?: string,
  packageName?: string
): string {
  const cleanPhone = (phoneNumber || '+15550198234').replace(/[^\d+]/g, '');
  let message = `Hello ${formatCompanyName(companyName)}! I am interested in planning a vacation.`;
  if (packageName) {
    message = `Hello ${formatCompanyName(companyName)}! I would like to enquire about the "${packageName}" package.`;
  } else if (destination) {
    message = `Hello ${formatCompanyName(companyName)}! I am interested in travel packages for ${destination}.`;
  }
  return `https://wa.me/${cleanPhone.replace('+', '')}?text=${encodeURIComponent(message)}`;
}
