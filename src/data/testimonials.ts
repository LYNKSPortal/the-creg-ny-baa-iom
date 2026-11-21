// IMPORTANT: No verified customer reviews have been supplied yet.
// Do not invent reviewer names, dates or star ratings — add genuine, attributed
// customer comments here once they are provided, in the same shape as below.

export type Testimonial = {
  quote: string;
  source?: string; // e.g. "Google review" — only add once genuine comments are supplied
};

export const testimonials: Testimonial[] = [];

export const testimonialsPlaceholderNote =
  "Genuine customer reviews are coming soon — this section is ready to display verified feedback about our friendly service, home-cooked food, fish and chips, gluten-free options and Manx produce as soon as it's supplied.";
