// Core, frequently-referenced venue information.
// Update this file as details are confirmed so the rest of the site stays in sync.

export const siteConfig = {
  name: "The Famous Creg Ny Baa",
  shortName: "Creg Ny Baa",
  url: "https://www.cregnybaa.com",
  description:
    "The Famous Creg Ny Baa — iconic Isle of Man TT grandstand corner, traditional Manx pub and restaurant, and premier events venue on the Mountain Road, Onchan. Home-cooked food, warm hospitality and legendary race-day views.",
  email: "creg-ny-baa@hotmail.com",
  phone: "01624 676948",
  phoneHref: "tel:+441624676948",
  address: {
    line1: "Creg Ny Baa Hotel",
    line2: "Mountain Road",
    town: "Onchan",
    postcode: "IM4 5BP",
    country: "Isle of Man",
    full: "Creg Ny Baa Hotel, Mountain Road, Onchan, IM4 5BP, Isle of Man",
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Creg+Ny+Baa+Hotel+Mountain+Road+Onchan+IM4+5BP+Isle+of+Man",
  // Real Dazzler booking link, confirmed from the live cregnybaa.com site.
  bookingUrl: "https://dazzler.app/isle-of-man/onchan/the-creg-ny-baa-d290r/book-a-table" as string | null,
  social: {
    facebook: "https://www.facebook.com/cregnybaaiom" as string | null,
    // Add a verified Instagram URL when confirmed — omitted fields are hidden in the footer.
    instagram: null as string | null,
  },
};

export const legalNotices = {
  cashOnRaceDays:
    "Please bring cash on race days — card payment queues and connectivity can be unpredictable when the Mountain Road is at its busiest.",
  mayCloseEarly:
    "During quieter periods we may close earlier than our advertised hours. Please call ahead on race days and out of season to avoid disappointment.",
};
