// Real product photography from the venue's own merchandise display.
// Prices are still to be confirmed — update `price` once set.

export type StockStatus = "In Stock" | "Limited Availability" | "Coming Soon";

export type Product = {
  id: string;
  name: string;
  price: string;
  stock: StockStatus;
  description: string;
  image: string;
  imageAlt: string;
};

export const products: Product[] = [
  {
    id: "the-creg-hoodie",
    name: '"The Creg" Hoodie',
    price: "Price TBC",
    stock: "In Stock",
    description: "A soft, heavyweight hoodie embroidered with \"The Creg\" — a popular souvenir for TT visitors and regulars alike.",
    image: "/images/merch/hoodie-front.jpg",
    imageAlt: '"The Creg" branded hoodie on display',
  },
  {
    id: "road-racing-hoodie",
    name: "Isle of Man Road Racing Hoodie",
    price: "Price TBC",
    stock: "In Stock",
    description: "A zip-up hoodie with a bold \"Isle of Man Road Racing\" back print — perfect for cooler trackside days on the Mountain Road.",
    image: "/images/merch/hoodie-back.jpg",
    imageAlt: "Isle of Man Road Racing zip hoodie, back print",
  },
  {
    id: "bobble-hat",
    name: "Creg Ny Baa Bobble Hat",
    price: "Price TBC",
    stock: "In Stock",
    description: "A warm knitted bobble hat with the Creg Ny Baa name woven in — a trackside essential during race week.",
    image: "/images/merch/bobble-hat-front.jpg",
    imageAlt: "Creg Ny Baa branded bobble hat",
  },
  {
    id: "beanie-hat",
    name: "Creg Ny Baa Beanie",
    price: "Price TBC",
    stock: "Limited Availability",
    description: "A classic knitted beanie with subtle Creg Ny Baa branding, ideal for the Mountain Road in any season.",
    image: "/images/merch/beanie-hat.jpg",
    imageAlt: "Creg Ny Baa branded beanie hat",
  },
];

export const merchandiseNote =
  "Our full merchandise range is available behind the bar — product names and photography shown here are real, but prices are still to be confirmed online. To purchase or check current availability, please enquire by email and our team will be happy to help.";
