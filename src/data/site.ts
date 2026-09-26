export const firm = {
  name: "RAI Associates",
  short: "RAI",
  tagline: "Advocates & Solicitors",
  city: "Chandigarh",
  email: "chambers@raiassociates.in",
  address: "Chambers, Sector 17, Chandigarh",
  appearances: ["Chandigarh", "New Delhi", "Jaipur", "Jodhpur", "Shimla"],
  description:
    "A North Indian litigation chambers instructed in civil and commercial disputes, constitutional writs, and criminal defence — appearing before the High Courts of Punjab and Haryana, Delhi, Rajasthan and Himachal Pradesh, and before DRT, NCLT, NCLAT, ITAT, CAT, the Railway Claims Tribunal, collectorates and the stamps department.",
};

export const nav = [
  { to: "/about" as const, label: "The Firm" },
  { to: "/practice" as const, label: "Practice" },
  { to: "/forums" as const, label: "Forums" },
  { to: "/team" as const, label: "Chambers" },
  { to: "/insights" as const, label: "Insights" },
];
