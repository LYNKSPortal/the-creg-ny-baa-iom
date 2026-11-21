// Buffet and catering menus, supplied by the venue as PDFs in /public/menus.
// Used for private functions, celebrations and funeral wakes.

export type BuffetMenu = {
  id: string;
  title: string;
  price: string;
  minGuests: string;
  description: string;
  pdfHref: string;
};

export const buffetMenus: BuffetMenu[] = [
  {
    id: "afternoon-tea",
    title: "Afternoon Tea Buffet",
    price: "£12 per person",
    minGuests: "Minimum 10 guests",
    description:
      "Assorted sandwiches, homemade chips, vegetable spring rolls, mini scones and cakes, with tea and coffee included.",
    pdfHref: "/menus/30.10.2024-Afternoon-Tea-Buffet-Menu.pdf",
  },
  {
    id: "fine-meats-seafood",
    title: "Fine Meats & Seafood Buffet",
    price: "From £18 per person",
    minGuests: "Minimum 30 guests",
    description:
      "A premium cold buffet of roast meats carved to order, homemade sausage rolls and quiche, upgrade to include poached salmon and prawns.",
    pdfHref: "/menus/30.10.2024-Fine-Meat-And-Sea-Food-Buffet-Menu.pdf",
  },
  {
    id: "hot-buffet",
    title: "Hot Buffet",
    price: "£13.50 per person (£12.50 for 31+)",
    minGuests: "Minimum 25 guests",
    description:
      "Choose two hot dishes from our homemade lasagne, pie, curry, chilli or hot pot, with rice, chips, garlic bread and salad.",
    pdfHref: "/menus/30.10.2024-Hot-Buffet-Menu.pdf",
  },
  {
    id: "mini-party",
    title: "Mini Party Buffet",
    price: "£9 per person",
    minGuests: "Up to 25 guests",
    description:
      "A compact buffet of assorted sandwiches, pigs in blankets, spring rolls and homemade chips, ideal for smaller gatherings.",
    pdfHref: "/menus/30.10.2024-Mini-Party-Buffet-Menu.pdf",
  },
  {
    id: "party-buffet",
    title: "Party Buffet",
    price: "£12 per person",
    minGuests: "Minimum 25 guests",
    description:
      "Our full party buffet selection, including homemade sausage rolls, pasties, pigs in blankets and all the trimmings.",
    pdfHref: "/menus/30.10.2024-Party-Buffet-Menu.pdf",
  },
  {
    id: "pie-peas-hotpot",
    title: "Pie & Peas or Hot Pot Buffet",
    price: "£9 per person",
    minGuests: "Minimum 20 guests",
    description:
      "A hearty choice of homemade beef hot pot or shortcrust pie, served with mushy peas, a Manx comfort-food favourite.",
    pdfHref: "/menus/30.10.2024-Pie-Peas-Hot-Pot-Buffet-Menu.pdf",
  },
  {
    id: "pulled-pork-bap",
    title: "Pulled Pork Bap Buffet",
    price: "£10 per person",
    minGuests: "Minimum 10 guests",
    description:
      "Homemade pulled pork in brioche baps with apple sauce, Cajun slaw and homemade chips, great for informal gatherings.",
    pdfHref: "/menus/30.10.2024-Pulled-Pork-Bap-Buffet-Menu.pdf",
  },
  {
    id: "sausage-saver",
    title: "Sausage Saver Buffet",
    price: "£7.50 per person (£7 for 31+)",
    minGuests: "Minimum 15 guests",
    description:
      "Sausages (or veggie sausages) in baps with homemade chips, perfect for feeding a crowd at a club event or treasure hunt.",
    pdfHref: "/menus/30.10.2024-Sausage-Saver-Menu.pdf",
  },
];

export const buffetNotes = {
  dietary:
    "Please advise us of any dietary requirements in advance; gluten-free and vegan options are available across our buffet menus on request.",
  roomHire: [
    "Function Room: £50 hire charge for daytime use until 6pm; £50 for evening events until 10pm, or £75 for evening events until midnight.",
    "Restaurant: suitable for gatherings of up to 50 guests, with wheelchair access (subject to availability).",
    "Upper Bar Area: ideal for smaller, informal gatherings of up to 30 guests (subject to availability).",
    "Different rates apply for conferences, meetings or weddings; please ask our team for details.",
  ],
  suitableFor:
    "Our buffets are popular for christenings, birthdays, anniversaries, club events and funeral wakes; we can help arrange everything following a funeral service too.",
};
