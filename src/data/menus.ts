// No specific dishes, prices or PDF menus have been supplied yet.
// This file defines the structure only — add real menu content or PDF links
// as they become available, and the Our Menus page will pick them up automatically.

export type MenuCategory = {
  id: string;
  title: string;
  description: string;
  pdfHref: string | null; // set to the real menu PDF path/URL once supplied
};

export const menuCategories: MenuCategory[] = [
  {
    id: "main-menu",
    title: "Main Menu",
    description:
      "Freshly cooked traditional pub favourites, made in-house using quality ingredients, including Manx produce where possible.",
    pdfHref: null,
  },
  {
    id: "specials",
    title: "Daily Specials",
    description:
      "Our specials board changes regularly, making the most of seasonal and local ingredients alongside kitchen favourites.",
    pdfHref: null,
  },
  {
    id: "sunday-roast",
    title: "Sunday Roast",
    description:
      "A traditional home-cooked Sunday roast, served with all the trimmings — a long-standing favourite with locals and visitors alike.",
    pdfHref: null,
  },
  {
    id: "childrens",
    title: "Children's Menu",
    description:
      "Family-friendly dishes sized and priced for younger guests, served throughout our regular opening hours.",
    pdfHref: null,
  },
  {
    id: "senior-citizens",
    title: "Senior Citizens' Menu",
    description:
      "A dedicated menu offering great value for our senior guests — ask a member of the team for details.",
    pdfHref: null,
  },
  {
    id: "gluten-free",
    title: "Gluten-Free Menu",
    description:
      "An extensive gluten-free offering, prepared with dedicated fryers and utensils and flagged clearly when served.",
    pdfHref: null,
  },
];

export const glutenFreeInfo = {
  heading: "Our Gluten-Free Offering",
  body: [
    "We're proud to offer an extensive gluten-free menu, with many of our pub favourites available gluten-free on request.",
    "Gluten-free food is prepared using separate fryers and utensils, kept apart from standard menu preparation to reduce the risk of cross-contact.",
    "Every gluten-free meal is clearly identified with a flag when it's brought to your table, so you can be confident you've been served the right dish.",
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
