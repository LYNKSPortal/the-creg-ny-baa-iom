// FAQ content, grounded only in facts already established elsewhere in
// src/data/*. These power both the visible FAQ sections and FAQPage
// structured data, written to directly answer the way people actually
// search and ask AI assistants about the venue.

import { siteConfig, legalNotices } from "@/data/site";

export type Faq = { question: string; answer: string };

export const homeFaqs: Faq[] = [
  {
    question: "Where is the Creg Ny Baa and is it near the Isle of Man TT course?",
    answer:
      "The Creg Ny Baa sits directly on the Isle of Man TT course, on the A18 Mountain Road at Creg Ny Baa Hotel, Mountain Road, Onchan, IM4 5BP. It's one of the most famous corners on the entire 37¾-mile circuit and a popular spot for spectators during TT and Manx Grand Prix race weeks.",
  },
  {
    question: "What are the Creg Ny Baa's opening hours?",
    answer:
      "Lunch is served Monday to Thursday 12:00–15:00, and Friday to Sunday from 12:00. Evening service runs Monday to Thursday 16:30–19:45 and Friday to Saturday 16:30–20:30. We may close earlier than advertised during quieter periods, so please call 01624 676948 ahead of your visit.",
  },
  {
    question: "Do I need to book a table at the Creg Ny Baa?",
    answer:
      "Booking is recommended, especially on race days and at weekends. You can book a table online through our Dazzler booking page or by calling us on 01624 676948.",
  },
  {
    question: "Does the Creg Ny Baa have a gluten-free menu?",
    answer:
      "Yes. We offer an extensive gluten-free menu prepared using dedicated fryers and utensils, and every gluten-free meal is brought to your table with a flag so you can be confident you've been served the right dish.",
  },
  {
    question: "Are dogs allowed at the Creg Ny Baa?",
    answer: "Well-behaved dogs are welcome in our lower bar area.",
  },
  {
    question: "What should I bring on an Isle of Man TT race day?",
    answer: legalNotices.cashOnRaceDays,
  },
];

export const menusFaqs: Faq[] = [
  {
    question: "Does the Creg Ny Baa cater for gluten-free diets?",
    answer:
      "Yes, extensively. Gluten-free food is prepared with separate fryers and utensils to reduce the risk of cross-contact, and gluten-free meals arrive at your table with a flag so you know it's the right dish. Please let your server know you need the gluten-free option when ordering.",
  },
  {
    question: "Is there a children's menu?",
    answer:
      "Yes, we have a dedicated children's menu with family-friendly dishes sized and priced for younger guests, including fish, chicken nuggets and homemade beef lasagne.",
  },
  {
    question: "Do you offer a senior citizens' menu?",
    answer:
      "Yes. Just let your server know you'd like the Senior Citizens sizing when you order, and we'll serve smaller, great-value portions of our favourite dishes.",
  },
  {
    question: "Are dogs allowed inside the pub?",
    answer: "Well-behaved dogs are welcome in our lower bar area.",
  },
  {
    question: "Do you serve a Sunday roast?",
    answer:
      "Yes, we serve a traditional home-cooked Sunday roast with all the trimmings, a long-standing favourite with locals and visitors alike.",
  },
];

export const functionsEventsFaqs: Faq[] = [
  {
    question: "How many guests can the Veranda Suite hold?",
    answer:
      "The Veranda Suite holds up to 100 guests standing, with around 65 recommended for seated dining. It has its own private bar, balconies overlooking the TT course, and is licensed for live music and dancing until midnight.",
  },
  {
    question: "Is the Veranda Suite wheelchair accessible?",
    answer:
      "No. The Veranda Suite is on the first floor and is accessed by stairs only, there is no lift, so unfortunately it is not wheelchair accessible. Please contact us to discuss accessible alternatives for your event.",
  },
  {
    question: "Can the Creg Ny Baa host a funeral wake?",
    answer:
      "Yes. Our Top Bar area suits intimate gatherings of up to 30 guests, our ground-floor Restaurant is fully accessible for around 30–50 guests, and larger function spaces (including the Veranda Suite) are available for bigger numbers. We offer homemade buffet options, space for photo displays, and support with slideshows and remembrance arrangements.",
  },
  {
    question: "How much does it cost to hire a meeting room?",
    answer:
      "Our full-day meeting package is £150 for up to 25 people, or £225 for up to 50 people, both excluding lunch. Rooms include presentation facilities, Wi-Fi, natural light, countryside views and free parking.",
  },
  {
    question: "What buffet options are available for private events?",
    answer:
      "We offer eight buffet menus for private functions and wakes, including Afternoon Tea, Fine Meats & Seafood, Hot Buffet, Mini Party, Party, Pie & Peas or Hot Pot, Pulled Pork Bap, and Sausage Saver, with minimum numbers from 10 guests and prices from £7.50 per person.",
  },
];

export const tt2027Faqs: Faq[] = [
  {
    question: "Is the Creg Ny Baa a good spot to watch the Isle of Man TT?",
    answer:
      "Yes. The Creg Ny Baa sits directly on one of the most famous corners of the TT course, and our balcony offers an unrivalled view of riders braking hard into the bend. There's also free public viewing around the venue for spectators arriving on race day.",
  },
  {
    question: "When will TT 2027 hospitality packages be announced?",
    answer:
      "TT 2027 hospitality and race-day details haven't been confirmed yet. Register your interest with us by phone or email and we'll let you know as soon as packages are released.",
  },
  {
    question: "What did TT hospitality cost in 2026?",
    answer:
      "For reference only, our 2026 TT hospitality packages were £335 + VAT per person for full-day VIP hospitality, or £230 + VAT per person for a shorter package. These prices do not apply to TT 2027 and are retained here purely as historical reference.",
  },
  {
    question: "Should I bring cash to the Creg Ny Baa on TT race day?",
    answer: legalNotices.cashOnRaceDays,
  },
];

export const mgpFaqs: Faq[] = [
  {
    question: "Does the Creg Ny Baa host Manx Grand Prix and Classic TT hospitality?",
    answer:
      "Yes, every August the Creg Ny Baa offers balcony viewing over the famous corner during the Manx Grand Prix and Classic TT, in a relaxed, close-knit atmosphere, with our kitchen and bar running throughout race days.",
  },
  {
    question: "Is the Creg Ny Baa open to the public during MGP and Classic TT?",
    answer:
      "Yes, alongside any hospitality packages, the pub and restaurant remain open as usual to all visitors during Manx Grand Prix and Classic TT race days.",
  },
];

export const merchandiseFaqs: Faq[] = [
  {
    question: "How do I buy Creg Ny Baa merchandise?",
    answer: `Our full merchandise range is available behind the bar. To check current stock and prices before you visit, email us at ${siteConfig.email} and our team will be happy to help.`,
  },
  {
    question: "What Creg Ny Baa merchandise is available?",
    answer:
      'Our range includes "The Creg" hoodie, an Isle of Man Road Racing zip hoodie, a Creg Ny Baa bobble hat and a Creg Ny Baa beanie, with more items available in person at the bar.',
  },
];
