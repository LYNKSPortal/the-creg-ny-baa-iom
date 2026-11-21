// Real venue photography, sourced from the venue's own site (cregnybaa.com)
// and stored locally under /public/images. Add new entries here as further
// photography is supplied.

export type GalleryCategory = "TT Racing" | "Food & Dining" | "The Venue" | "Events & Hospitality";

export type GalleryImage = {
  id: string;
  category: GalleryCategory;
  image: string;
  alt: string;
  tall?: boolean;
};

export const galleryCategories: GalleryCategory[] = [
  "TT Racing",
  "Food & Dining",
  "The Venue",
  "Events & Hospitality",
];

export const galleryImages: GalleryImage[] = [
  { id: "tt-1", category: "TT Racing", image: "/images/tt/spectators-at-the-corner.jpg", alt: "Spectators lining the Mountain Road at the Creg Ny Baa corner during TT race week", tall: true },
  { id: "tt-2", category: "TT Racing", image: "/images/venue/exterior-bikes-lined-up.jpg", alt: "Motorcycles lined up outside the Creg Ny Baa during TT race week" },
  { id: "tt-3", category: "TT Racing", image: "/images/tt/race-day-crowd.jpg", alt: "Friends enjoying race day outside the Creg Ny Baa dining room" },
  { id: "tt-4", category: "TT Racing", image: "/images/tt/pin-suit-collector.jpg", alt: "A collector's pin-covered racing suit on display inside the Creg Ny Baa" },

  { id: "venue-1", category: "The Venue", image: "/images/venue/exterior-mountain-road.jpg", alt: "The Creg Ny Baa exterior on the Mountain Road, with cars parked outside and the Manx countryside beyond", tall: true },
  { id: "venue-2", category: "The Venue", image: "/images/venue/exterior-group-photo.jpg", alt: "A group photo outside the Creg Ny Baa's balcony and traditional signage" },
  { id: "venue-3", category: "The Venue", image: "/images/venue/bar-chalkboard.jpg", alt: "The Famous Creg chalkboard sign inside the bar at the Creg Ny Baa" },
  { id: "venue-4", category: "The Venue", image: "/images/venue/bar-drinks.jpg", alt: "A tray of drinks ready to serve at the Creg Ny Baa bar" },

  { id: "food-1", category: "Food & Dining", image: "/images/food/creg-ny-burger.jpg", alt: "The Creg-ny-Burger with homemade chips and onion rings", tall: true },
  { id: "food-2", category: "Food & Dining", image: "/images/food/sunday-roast.jpg", alt: "A traditional Sunday roast dinner with all the trimmings at the Creg Ny Baa" },
  { id: "food-3", category: "Food & Dining", image: "/images/food/full-breakfast.jpg", alt: "A full cooked breakfast served at the Creg Ny Baa" },
  { id: "food-4", category: "Food & Dining", image: "/images/food/lamb-shank.jpg", alt: "Slow-cooked lamb shank with mash and vegetables" },
  { id: "food-5", category: "Food & Dining", image: "/images/food/chicken-goujons.jpg", alt: "Chicken goujons with chips, salad and dip at the Creg Ny Baa" },
  { id: "food-6", category: "Food & Dining", image: "/images/food/pie-and-chips.jpg", alt: "Homemade pie with chips at the Creg Ny Baa" },
  { id: "food-7", category: "Food & Dining", image: "/images/food/sticky-toffee-pudding.jpg", alt: "Sticky toffee pudding with custard being poured over" },
  { id: "food-8", category: "Food & Dining", image: "/images/food/cheesecake-slice.jpg", alt: "A slice of cheesecake with chocolate drizzle" },
  { id: "food-9", category: "Food & Dining", image: "/images/food/oreo-cheesecake.jpg", alt: "A whole chocolate cheesecake on display" },
  { id: "food-10", category: "Food & Dining", image: "/images/food/trifle.jpg", alt: "A traditional sherry trifle dessert" },
  { id: "food-11", category: "Food & Dining", image: "/images/food/sausage-rolls.jpg", alt: "Homemade sausage rolls, a Creg Ny Baa buffet favourite" },
  { id: "food-12", category: "Food & Dining", image: "/images/food/christmas-dinner.jpg", alt: "A festive Christmas dinner served at the Creg Ny Baa" },
  { id: "food-13", category: "Food & Dining", image: "/images/food/fireside-hot-chocolate.jpg", alt: "A hot chocolate by the fireside at the Creg Ny Baa" },

  { id: "events-1", category: "Events & Hospitality", image: "/images/events/function-room-set-up.jpg", alt: "The function room set up for a private celebration, with red and white chair sashes", tall: true },
  { id: "events-2", category: "Events & Hospitality", image: "/images/events/wedding-pit-lane.jpg", alt: "A wedding ceremony with a racing-themed 'Pit Lane' sign at the Creg Ny Baa" },
  { id: "events-3", category: "Events & Hospitality", image: "/images/merch/bar-merch-display.jpg", alt: "Creg Ny Baa branded clothing on display above the bar" },
];
