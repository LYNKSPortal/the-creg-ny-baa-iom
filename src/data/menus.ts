// Real menu PDFs supplied by the venue live in /public/menus — update the
// pdfHref values below if filenames change or new menus are issued.

export type MenuCategory = {
  id: string;
  title: string;
  description: string;
  pdfHref: string | null; // set to the real menu PDF path/URL once supplied
  image: string;
  imageAlt: string;
};

const LUNCH_EVENING_PDF = "/menus/16.05.2025-Lunch-Evening-Gluten-Free.pdf";
const SENIOR_CITIZENS_PDF = "/menus/16.05.2025-Sunday-Citizens-Menu.pdf";

export const menuCategories: MenuCategory[] = [
  {
    id: "main-menu",
    title: "Lunch & Evening Menu",
    description:
      "Freshly cooked traditional pub favourites, made in-house — from the Creg's famous battered cod to homemade pies, burgers, salads and light bites.",
    pdfHref: LUNCH_EVENING_PDF,
    image: "/images/food/creg-ny-burger.jpg",
    imageAlt: "The Creg-ny-Burger with homemade chips and onion rings",
  },
  {
    id: "specials",
    title: "Daily Specials",
    description:
      "Our specials board changes regularly, making the most of seasonal ingredients alongside kitchen favourites — ask your server what's on today.",
    pdfHref: null,
    image: "/images/food/lamb-shank.jpg",
    imageAlt: "Slow-cooked lamb shank with mash and vegetables, a Creg Ny Baa specials board favourite",
  },
  {
    id: "sunday-roast",
    title: "Sunday Roast",
    description:
      "A traditional home-cooked Sunday roast, served with all the trimmings — a long-standing favourite with locals and visitors alike.",
    pdfHref: null,
    image: "/images/food/sunday-roast.jpg",
    imageAlt: "A traditional Sunday roast dinner with all the trimmings at the Creg Ny Baa",
  },
  {
    id: "childrens",
    title: "Children's Menu",
    description:
      "Family-friendly dishes sized and priced for younger guests, including fish, chicken nuggets and homemade beef lasagne — see the Lunch & Evening menu for details.",
    pdfHref: LUNCH_EVENING_PDF,
    image: "/images/food/chicken-goujons.jpg",
    imageAlt: "Chicken goujons with chips, a family favourite at the Creg Ny Baa",
  },
  {
    id: "senior-citizens",
    title: "Senior Citizens' Menu",
    description:
      "Smaller, great-value portions of our favourite dishes for senior guests (and older children) — just let your server know you'd like the Senior Citizens sizing.",
    pdfHref: SENIOR_CITIZENS_PDF,
    image: "/images/food/full-breakfast.jpg",
    imageAlt: "A home-cooked meal served at the Creg Ny Baa",
  },
  {
    id: "gluten-free",
    title: "Gluten-Free Menu",
    description:
      "An extensive gluten-free offering across starters, mains, light bites and sides, prepared with dedicated fryers and utensils and flagged clearly when served.",
    pdfHref: LUNCH_EVENING_PDF,
    image: "/images/food/pie-and-chips.jpg",
    imageAlt: "Homemade pie with chips, available gluten-free at the Creg Ny Baa",
  },
];

export const glutenFreeInfo = {
  heading: "Our Gluten-Free Offering",
  body: [
    "We're very proud of our gluten-free menu, specials and desserts — with many of our pub favourites available gluten-free, including our famous battered cod in its own gluten-free batter.",
    "We ensure there is no cross-contamination: separate fryers and utensils are used for gluten-free food, kept apart from standard menu preparation.",
    "Look out for (GF) on our specials board — this means that dish can be prepared gluten-free, but you must tell your server you'd like the gluten-free option when ordering.",
    "Every gluten-free meal is brought to your table with a flag — if yours doesn't arrive with one, please question it with your server.",
  ],
  disclaimer:
    "While we take great care with our gluten-free preparation, our kitchen handles gluten-containing ingredients and we cannot guarantee a completely gluten-free environment. Please speak to our team about your requirements before ordering if you have a severe allergy or intolerance.",
};

export const diningNotes = {
  familyFriendly:
    "Families are always welcome — our children's menu and relaxed dining spaces make the Creg Ny Baa an easy choice for a meal out together.",
  dogsWelcome:
    "Well-behaved dogs are welcome in our lower bar area — perfect after a walk on the Mountain Road or across the surrounding hills.",
};
