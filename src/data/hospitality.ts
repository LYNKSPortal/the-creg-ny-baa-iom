export type HospitalityPackage = {
  id: string;
  title: string;
  price: string;
  priceNote?: string;
  description: string;
  inclusions: string[];
  archived?: boolean;
};

// TT Races hospitality, 2027 packages are not yet announced.
// 2026 details are retained below as historical reference only.
export const tt2026Packages: HospitalityPackage[] = [
  {
    id: "tt-full-day",
    title: "Full-Day VIP Hospitality",
    price: "£335",
    priceNote: "+ VAT per person (2026 archive price)",
    description:
      "A full day of racing in comfort, with exclusive balcony viewing directly over the Creg Ny Baa corner and private function-room access.",
    inclusions: [
      "Exclusive balcony viewing of the Creg Ny Baa corner",
      "Private function-room access throughout the day",
      "Breakfast on arrival",
      "Gourmet lunch",
      "Refreshments served throughout the day",
      "Complimentary drinks",
      "VIP gift",
    ],
    archived: true,
  },
  {
    id: "tt-half-day",
    title: "Shorter Hospitality Package",
    price: "£230",
    priceNote: "+ VAT per person (2026 archive price)",
    description:
      "A shorter hospitality experience for those joining us for part of the racing, with the same exclusive balcony access and warm Creg Ny Baa welcome.",
    inclusions: [
      "Exclusive balcony viewing of the Creg Ny Baa corner",
      "Private function-room access",
      "Gourmet lunch or refreshments (session-dependent)",
      "Complimentary drinks",
      "VIP gift",
    ],
    archived: true,
  },
];

export const mgpClassicTt2026Packages: HospitalityPackage[] = [
  {
    id: "mgp-balcony",
    title: "Balcony Race Viewing & Hospitality",
    price: "Price archived",
    priceNote: "August 2026 reference package",
    description:
      "Manx Grand Prix and Classic TT hospitality with balcony views over the famous Creg Ny Baa corner, in the relaxed, intimate atmosphere the MGP and Classic TT is known for.",
    inclusions: [
      "Reserved balcony viewing over the Creg corner",
      "Access to private function space",
      "Homemade buffet catering",
      "Bar service throughout the event",
    ],
    archived: true,
  },
];

export const meetingPackages = [
  {
    id: "meeting-25",
    title: "Full-Day Meeting Package",
    capacity: "Up to 25 people",
    price: "£150",
    priceNote: "excludes lunch",
  },
  {
    id: "meeting-50",
    title: "Full-Day Meeting Package",
    capacity: "Up to 50 people",
    price: "£225",
    priceNote: "excludes lunch",
  },
];

export const veranda = {
  name: "The Veranda Suite",
  description:
    "Our first-floor function suite with its own private bar and balconies looking directly out over the TT course and the Manx countryside beyond; one of the most memorable settings for a private event on the Island.",
  standingCapacity: 100,
  seatedCapacity: 65,
  accessibilityNote:
    "The Veranda Suite is on the first floor and is accessed by stairs only; there is no lift, so unfortunately this space is not wheelchair accessible. Please contact us to discuss accessible alternatives for your event.",
  features: [
    "Private bar",
    "Balconies overlooking the TT course",
    "Flexible room layouts for seated dining or standing receptions",
    "Live music and dancing, licensed until midnight",
    "Tailored homemade buffets and catering options",
  ],
  suitableFor: [
    "Birthdays",
    "Christenings",
    "Anniversaries",
    "Baby showers",
    "Family gatherings",
    "Corporate events",
    "Club meetings",
  ],
};

export const funeralWakes = {
  intro:
    "We understand how important it is to get every detail right when celebrating the life of someone loved. The team at the Creg Ny Baa has many years of experience hosting wakes and remembrance gatherings, and we're happy to talk you through the options whenever you're ready.",
  topBar: {
    name: "The Top Bar",
    capacity: "Up to 30 guests",
    description:
      "An intimate, relaxed space for smaller remembrance gatherings, ideal for close family and friends.",
  },
  restaurant: {
    name: "The Restaurant",
    capacity: "Approximately 30–50 guests",
    description:
      "A fully accessible option on the ground floor for medium-sized gatherings, with step-free access throughout.",
  },
  largerSpaces:
    "For larger gatherings, our function spaces (including the Veranda Suite) can accommodate bigger numbers; please get in touch to discuss your requirements.",
  extras: [
    "Homemade buffet options tailored to your wishes",
    "Space for photo displays and memory tables",
    "Slideshow and remembrance arrangements",
    "Dedicated support from our team on the day",
  ],
};
