// No venue photography has been supplied yet — these entries drive the gallery
// layout using tasteful placeholder artwork. Replace `image` with real asset
// paths (e.g. "/images/gallery/tt-racing-01.jpg") as photography is received.

export type GalleryCategory = "TT Racing" | "Food & Dining" | "The Venue" | "Events & Hospitality";

export type GalleryImage = {
  id: string;
  category: GalleryCategory;
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
  { id: "g1", category: "TT Racing", alt: "Placeholder — motorcycles racing past the Creg Ny Baa corner during TT practice week", tall: true },
  { id: "g2", category: "TT Racing", alt: "Placeholder — spectators gathered on the banking above the Creg corner" },
  { id: "g3", category: "The Venue", alt: "Placeholder — exterior of the Creg Ny Baa pub on the Mountain Road" },
  { id: "g4", category: "Food & Dining", alt: "Placeholder — home-cooked pub food served at the Creg Ny Baa" , tall: true },
  { id: "g5", category: "Events & Hospitality", alt: "Placeholder — guests enjoying a private function in the Veranda Suite" },
  { id: "g6", category: "TT Racing", alt: "Placeholder — TT rider leaning into the famous Creg Ny Baa bend" },
  { id: "g7", category: "The Venue", alt: "Placeholder — countryside views from the Creg Ny Baa balcony" },
  { id: "g8", category: "Food & Dining", alt: "Placeholder — traditional Sunday roast at the Creg Ny Baa" },
  { id: "g9", category: "Events & Hospitality", alt: "Placeholder — VIP hospitality guests watching the racing from the balcony", tall: true },
  { id: "g10", category: "The Venue", alt: "Placeholder — interior of the traditional Creg Ny Baa bar" },
  { id: "g11", category: "TT Racing", alt: "Placeholder — classic TT machine on display near the Creg corner" },
  { id: "g12", category: "Events & Hospitality", alt: "Placeholder — live music and dancing in the function suite" },
];
