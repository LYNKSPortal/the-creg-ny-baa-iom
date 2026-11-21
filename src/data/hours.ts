export type ServicePeriod = {
  days: string;
  time: string;
  confirmed: boolean;
};

export const lunchHours: ServicePeriod[] = [
  { days: "Monday – Thursday", time: "12:00 – 15:00", confirmed: true },
  { days: "Friday – Sunday", time: "From 12:00", confirmed: true },
];

export const eveningHours: ServicePeriod[] = [
  { days: "Monday – Thursday", time: "16:30 – 19:45", confirmed: true },
  { days: "Friday – Saturday", time: "16:30 – 20:30", confirmed: true },
  {
    days: "Sunday evening",
    time: "Please call to check",
    confirmed: false,
  },
];

export const hoursNotes = {
  closingTimesNote:
    "Some closing times are provisional and subject to confirmation; please call the pub directly to check before travelling, especially outside peak season.",
  sundayEveningNote:
    "We haven't confirmed a standard Sunday evening service yet, so please call 01624 676948 before planning a Sunday evening visit.",
};
