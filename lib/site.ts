export const services = [
  {
    title: "Lane search",
    body: "We look for freight that fits the truck you run, whether that is a 53-foot trailer or a 16- to 26-foot box, with your hours and your home time in the plan.",
  },
  {
    title: "Rate negotiation",
    body: "Brokers get a call before you accept. We push the linehaul and we do not hide a weak rate inside a long deadhead.",
  },
  {
    title: "Setup and paperwork",
    body: "Carrier packets, rate confirmations, and broker setup go out under your MC. You see the confirmation before pickup.",
  },
  {
    title: "Load support",
    body: "Check calls, appointment changes, lumper questions, and the broker when a dock runs long. The desk stays on it.",
  },
  {
    title: "Accessorials",
    body: "Detention, layover, and tonu get documented and billed. Collected accessorials are part of gross, and the fee applies there too.",
  },
  {
    title: "Weekly numbers",
    body: "Every week you get gross, the 4 Freight fee, and what came back to the truck before fuel and the note. No blended average.",
  },
] as const;

export const promises = [
  {
    title: "No upfront fee",
    body: "Nothing is due to start. No setup charge, no onboarding invoice, and no weekly minimum. 4 Freight is paid only as a percentage of gross, after you approve the load.",
  },
  {
    title: "No forced dispatch",
    body: "A hole on the board is not a reason to move the truck. You see the broker, the miles, and the rate first. If it does not fit, the answer is no.",
  },
  {
    title: "No contract",
    body: "There is no term to sign, no cancellation fee, and no paperwork that locks the truck to this desk. Stay while the weeks pay. Leave when the current loads are delivered.",
  },
] as const;

export const principles = [
  "No upfront fee of any kind. No setup charge, no onboarding invoice, no weekly minimum.",
  "No forced dispatch. You approve every load before the truck moves.",
  "No contract. No term, no cancellation fee, and nothing that keeps the truck after the current loads deliver.",
  "The fee is a percentage of gross, shown on the weekly sheet.",
  "Carriers must be active, insured, and running under their own authority.",
] as const;

export const steps = [
  {
    title: "Send the authority",
    body: "MC, insurance, and the truck: semi, or a 16-, 20-, 24-, or 26-foot box. There is no contract to sign and no fee to start. We only dispatch under an active carrier authority.",
  },
  {
    title: "Set the week",
    body: "We agree on home time, the rate floor, and whether the truck is solo or team. Nothing is booked outside that plan.",
  },
  {
    title: "You approve the rate",
    body: "You get the broker, the miles, and the money before we send a confirmation. That is not forced dispatch. A no is a complete sentence.",
  },
  {
    title: "Read the sheet",
    body: "At the end of the week the gross, the fee, and the net to the truck are on one page. That is the relationship.",
  },
] as const;

export const quotes = [
  {
    quote:
      "4 Freight took a Dallas to Chicago dry van and stayed on the broker until the rate matched the miles. I saw the confirmation before I hooked the trailer.",
    name: "Marcus Hale",
    detail: "4F-1042 · Dry van · Dallas",
  },
  {
    quote:
      "I run reefer out of the valley. They know a missed appointment costs the week, and they do not leave detention sitting in a broker’s inbox.",
    name: "Elena Vasquez",
    detail: "4F-1108 · Reefer · Fresno",
  },
  {
    quote:
      "There was no contract and no bill to start. The weekly sheet matched 8% of my gross. That is the only way I want a desk paid.",
    name: "Amina Diallo",
    detail: "4F-1188 · Dry van · Memphis",
  },
  {
    quote:
      "I run a 26-foot box out of Chicago. They book around the liftgate and the city I need to finish in. They do not hand me a 53-foot load and call it close enough.",
    name: "Andre Williams",
    detail: "4F-1620 · Box truck · Chicago",
  },
] as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Trucks" },
  { href: "/revenue", label: "Revenue" },
  { href: "/how-it-works", label: "How it works" },
] as const;

export const emptyInquiry = {
  name: "",
  phone: "",
  email: "",
  mc: "",
  equipment: "",
  base: "",
  note: "",
};
