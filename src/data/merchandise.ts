// Merchandise details are incomplete — product names, prices, images and stock
// status are all placeholders ready to be edited once real product information
// and photography are supplied.

export type StockStatus = "In Stock" | "Limited Availability" | "Coming Soon";

export type Product = {
  id: string;
  name: string;
  price: string;
  stock: StockStatus;
  description: string;
};

export const products: Product[] = [
  {
    id: "classic-tee",
    name: "Creg Ny Baa Classic T-Shirt",
    price: "Price TBC",
    stock: "In Stock",
    description:
      "Soft cotton tee featuring the famous Creg Ny Baa name — a popular souvenir for TT visitors.",
  },
  {
    id: "race-day-hoodie",
    name: "Race Day Hoodie",
    price: "Price TBC",
    stock: "Limited Availability",
    description:
      "Heavyweight hoodie for cooler trackside days on the Mountain Road, in classic Creg Ny Baa colours.",
  },
  {
    id: "enamel-pin",
    name: "Creg Corner Enamel Pin",
    price: "Price TBC",
    stock: "In Stock",
    description: "A collectible enamel pin badge celebrating the legendary Creg Ny Baa corner.",
  },
  {
    id: "baseball-cap",
    name: "Creg Ny Baa Baseball Cap",
    price: "Price TBC",
    stock: "In Stock",
    description: "Adjustable cap with embroidered branding — a trackside essential.",
  },
  {
    id: "stubby-holder",
    name: "Stubby Holder",
    price: "Price TBC",
    stock: "In Stock",
    description: "Keep your drink cold trackside with this branded stubby holder.",
  },
  {
    id: "tt-poster",
    name: "Limited Edition TT Print",
    price: "Price TBC",
    stock: "Coming Soon",
    description: "A limited-run print celebrating the Creg Ny Baa's place on the TT course — details coming soon.",
  },
];

export const merchandiseNote =
  "Our merchandise range is being updated — product names, prices and photography shown here are placeholders. To purchase or check current availability, please enquire by email and our team will be happy to help.";
