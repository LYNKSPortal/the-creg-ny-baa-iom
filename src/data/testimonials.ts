// Genuine customer feedback, as published on the venue's existing site
// (cregnybaa.com). No reviewer names, dates or star ratings were given there
// beyond "Happy Customer", so none are invented here either.

export type Testimonial = {
  quote: string;
  source?: string;
};

export const testimonials: Testimonial[] = [
  { quote: "Best Fish & Chips 👍", source: "Happy Customer" },
  { quote: "Fantastic food, friendly service and a plus for being able to safely serve gluten free.", source: "Happy Customer" },
  { quote: "Food and service 2nd to none!", source: "Happy Customer" },
  { quote: "Brilliant gluten free menu!", source: "Happy Customer" },
  { quote: "It's fab to know that my plate is full of Manx produce. Couldn't ask for anything better!", source: "Happy Customer" },
  { quote: "Very friendly and helpful.", source: "Happy Customer" },
  { quote: "Very friendly staff and amazing food!", source: "Happy Customer" },
  { quote: "Great service with amazing food!", source: "Happy Customer" },
  { quote: "The Creg also caters for GF, LF, veg and vegan.", source: "Happy Customer" },
  { quote: "The Pork Belly was fantastic!", source: "Happy Customer" },
  { quote: "Their gluten free menu is very extensive and everything delicious!", source: "Happy Customer" },
  { quote: "Lovely place, lovely staff, lovely food — overall a great place to eat, definitely coming back!", source: "Happy Customer" },
];

export const testimonialsPlaceholderNote =
  "Genuine customer reviews are coming soon — this section is ready to display verified feedback about our friendly service, home-cooked food, fish and chips, gluten-free options and Manx produce as soon as it's supplied.";
