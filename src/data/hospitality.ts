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
      "2026 dates: Saturday 30 May, Tuesday 2 June, Wednesday 3 June and Friday 5 June. Limited availability was advertised for these dates; they have now passed.",
    inclusions: [
      "Exclusive pub access for up to 95 guests",
      "Viewing from our world-famous balconies",
      "Full English buffet breakfast and Buck’s Fizz",
      "Gourmet lunch",
      "Afternoon desserts, cheese and biscuits",
      "Complimentary bar: tea, coffee, soft drinks, draught lager, bitter, cider, wines and Prosecco",
      "Creg gift and VIP pass to take home",
    ],
    archived: true,
  },
  {
    id: "tt-half-day",
    title: "Shorter VIP Hospitality Day",
    price: "£230",
    priceNote: "+ VAT per person (2026 archive price)",
    description:
      "A shorter day to suit shorter race schedules. Archived availability: Sunday 31 May 2026 had five places remaining; Saturday 6 June 2026 (Senior Race Day) was fully booked. These dates have now passed.",
    inclusions: [
      "Exclusive function-room access for 65 guests, opening onto our famous balconies",
      "Breakfast and lunch, or lunch with afternoon cakes, depending on race schedules and road closures",
      "Complimentary bar: tea, coffee, soft drinks, draught lager, bitter, cider, wines and Prosecco",
    ],
    archived: true,
  },
];

export const ttViewing2026 = {
  intro:
    "With 19 years of VIP expertise, we’re proud to offer what we believe is the best VIP hospitality experience on the Island, welcoming returning guests year after year. Our VIP experience offers the flexibility to come and go even when roads are closed. Please contact us to discuss access arrangements.",
  options: [
    {
      title: "Blue Seated Grandstand",
      price: "£40 (2026)",
      description:
        "Our own blue seated grandstand replaced the open-top bus in 2026, with fantastic views all the way up to Kate’s Cottage and around the Creg corner. Tickets included use of the toilets inside the pub and were available by emailing our team.",
    },
    {
      title: "Elevated Seated Viewing Platforms",
      price: "£35 (2026)",
      description:
        "Panoramic views of the bikes coming down from Kate’s Cottage, taking the Creg corner and accelerating towards Brandish. A private lower area offers space for relaxation and refreshments. Tickets were sold on the day, first come, first served.",
    },
    {
      title: "Other Viewing Options",
      description:
        "There are plenty of free viewing areas along the hedges and fences around the Creg. Arrive early and be prepared to walk a short distance through fields to secure a spot. On race days, a licensed bar, catering and seating are available in the large marquee in our car park, along with mobile toilets.",
    },
  ],
  ownership:
    "The permanent grandstand, tower, café and car park opposite the pub belong to the neighbouring operators, not the Creg Ny Baa.",
  practice: [
    {
      title: "Pub & Table Reservations",
      description: "Our pub is open to all during practice sessions. Table reservations are available for groups of 10 or more.",
    },
    {
      title: "Practice Tickets",
      description: "Tickets are sold 24–48 hours beforehand, subject to weather conditions. Tickets are non-refundable and non-transferable, with limited availability and high demand.",
    },
    {
      title: "Grandstand Viewing",
      description: "Grandstand tickets are sold 24–48 hours before each session.",
    },
    {
      title: "Platform Viewing",
      description: "Platform tickets are sold on the day on a first-come, first-served basis.",
    },
  ],
};

export const mgpClassicTt2026Packages: HospitalityPackage[] = [
  {
    id: "mgp-balcony",
    title: "Hospitality Day: Wednesday 26 August 2026",
    price: "£125",
    priceNote: "per person (2026 archive price)",
    description:
      "Our one and only Classic Hospitality Day in August 2026, with a full day of racing and viewing from our world-famous balconies.",
    inclusions: [
      "Exclusive use of our function room, maximum 60 guests",
      "Private bar",
      "Breakfast baps, Danish pastries, tea and coffee",
      "Bucks Fizz on arrival",
      "Hot buffet lunch and desserts",
      "Viewing from our world-famous balconies",
    ],
    archived: true,
  },
];

export const mgp2026Viewing = {
  schedule: [
    { time: "10.15am", race: "Formula One Classic TT (3 laps)" },
    { time: "12.15pm", race: "TT Rewind / Classic Sidecar Parade" },
    { time: "1.15pm", race: "Lightweight Classic TT & Ultra Lightweight (3 laps)" },
    { time: "3pm", race: "Junior 600 Classic TT (3 laps)" },
  ],
  balconyDays: [
    "MGP: Saturday 22 & Monday 24 August 2026, £40",
    "Senior Classic TT: Friday 28 August 2026, £45",
  ],
  balconyInclusions: [
    "Use of our function room leading out to the balconies",
    "Limited numbers of guests",
    "Private bar, with food and drink available to purchase",
    "Complimentary tea and coffee until 10.30am",
  ],
  platforms:
    "Race-day tickets for our viewing platforms, offering excellent views up to Kate’s Cottage, were offered on a first-come, first-served basis on the day.",
  qualifying:
    "Balcony viewing tickets for qualifying and practice sessions were offered 24–48 hours before each practice, on a first-come, first-served basis.",
};

export const meetingFacilities = {
  description:
    "A relaxing room with stunning views and natural light for meetings, conferences and training days. A big-screen projector connected to TV and broadband supports presentations, and we can arrange the room to suit your meeting. Ample free parking is available.",
  features: [
    "Smart TV with laptop connectivity for plug-and-play PowerPoint presentations",
    "Big-screen projector, TV and broadband",
    "Wi-Fi",
    "Flexible room layouts",
    "Natural light and countryside views",
    "Ample free parking",
  ],
  inclusions: [
    "Tea and coffee on arrival",
    "Tea, coffee, mineral water and biscuits mid-morning",
    "Lunch at an extra charge: reserve a table in our restaurant or bar, or choose a buffet to suit your requirements",
    "Tea, coffee, mineral water and biscuits mid-afternoon",
  ],
};

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
    "The Veranda Suite is on the first floor with no lift, making it unsuitable for wheelchair users or guests who cannot manage stairs. If stairs can be managed, we can offer use of our staff toilet on the same level. Please contact us to discuss accessible alternatives.",
  features: [
    "Private bar",
    "Balconies overlooking the TT course",
    "Flexible room layouts for seated dining or standing receptions",
    "Live music and dancing, licensed until midnight",
    "Homemade menus and buffets tailored to your requirements and budget",
    "Smart TV with laptop connectivity for PowerPoint presentations and Wi-Fi",
  ],
  suitableFor: [
    "Birthdays",
    "Christenings",
    "Anniversaries",
    "Baby showers",
    "Family gatherings",
    "Corporate events",
    "Club and association meetings",
    "Business conferencing",
    "Funeral wakes",
  ],
};

export const funeralWakes = {
  intro:
    "With 18 years of experience hosting celebrations of life, we understand how important it is to get every detail right. Our location offers plenty of parking and spaces for small or large gatherings. We will do our best to accommodate your requirements and take the worry out of the arrangements.",
  topBar: {
    name: "The Top Bar",
    capacity: "Up to 30 guests",
    description:
      "We can reserve our cosy Top Bar area just for your gathering, with an intimate setting near the log burner for close family and friends.",
  },
  restaurant: {
    name: "The Restaurant",
    capacity: "Approximately 30–50 guests",
    description:
      "Our accessible restaurant offers big windows and fantastic views for gatherings of 30 to 50 guests.",
  },
  largerSpaces:
    "Larger gatherings can use our upstairs function room, or we can discuss options for hosting downstairs. Please get in touch to find the right arrangement for your guests.",
  extras: [
    "Homemade buffets to suit any time of day and your requirements",
    "A tea and coffee station is highly recommended",
    "Careful arrangement of photographs and displays",
    "Use of our screens for a remembrance slideshow",
    "A table for a remembrance book",
    "Dedicated support from our team on the day",
  ],
};
