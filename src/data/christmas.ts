// Festive content supplied by the venue as PDFs in /public/menus.
// `activeFrom` / `activeUntil` control when the Christmas section and
// announcement banner appear — update each year so outdated festive
// information never shows as current.

export const christmasSeason = {
  activeFrom: "2026-11-01",
  activeUntil: "2026-12-26",
  menuPdfHref: "/menus/Creg-Christmas-Menus-2026-.pdf",
  preOrderPdfHref: "/menus/CHristmas-Pre-Order-26.pdf",
  availability: "Available from 1st to 23rd December",
  openingArrangements: [
    { label: "Christmas Eve", detail: "Bookings from 12:00 till 4:45pm. Pub closes 7:00pm. Menu is Pub Favourites & Specials of the Day." },
    { label: "Christmas Day & Boxing Day", detail: "Closed" },
    { label: "New Year's Eve", detail: "Bookings from 12:00 till 4:45pm. Pub closes 7:00pm." },
    { label: "New Year's Day", detail: "Food served from 12:00 till 3:30pm. Menu is Pub Favourites & Specials of the Day. Closed in the evening." },
  ],
  menus: [
    { title: "Christmas Party Menu", price: "3 Courses £35 · 2 Courses £29" },
    { title: "Senior Citizens Menu", price: "3 Courses £29 · 2 Courses £24" },
    { title: "Gluten Free Menu", price: "3 Courses £35 · 2 Courses £29" },
    { title: "Vegan Menu", price: "3 Courses £35 · 2 Courses £29" },
    { title: "Children's Menu", price: "£13" },
  ],
  functionRoom: {
    description:
      "Book our traditional function room for your Christmas party, or just a private room with its own private bar and fantastic views. Suitable for parties of 60 or fewer.",
    freeHire: "Free room hire for any Christmas party booked for 25 or more guests.",
  },
  festiveBrunch: {
    description:
      "Our Festive Brunch is back by popular demand — brioche baps, festive sausage rolls, pigs in blankets and warm mini mince pies, delivered to your workplace or collected from us.",
    price: "£15 per head",
    delivery: "Free delivery to Onchan and Douglas for 10 or more guests (£5 for fewer than 10, or collect for free). Must be delivered by 11:45am.",
  },
  terms: [
    "A £50 deposit is required for bookings of 3 or more.",
    "Cancellations or changes require 24 hours' notice, otherwise meals will be charged for.",
    "Pre-orders are required 5 days before your visit, and each party must order from the same menu.",
    "A 10% service charge is added to tables of 10 or more.",
  ],
};
