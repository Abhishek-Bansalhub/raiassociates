export type Forum = {
  name: string;
  place: string;
  kind: "high-court" | "district" | "tribunal" | "revenue";
  note: string;
};

export const forums: Forum[] = [
  {
    name: "Punjab and Haryana High Court",
    place: "Chandigarh",
    kind: "high-court",
    note: "Principal High Court of the practice. Civil, criminal, service, revenue and company appellate work, and the writ jurisdiction that covers both States and the Union Territory.",
  },
  {
    name: "Delhi High Court",
    place: "New Delhi",
    kind: "high-court",
    note: "Original, commercial and writ side; company and arbitration petitions; criminal quashing and bail on the Delhi list.",
  },
  {
    name: "Rajasthan High Court",
    place: "Jaipur & Jodhpur",
    kind: "high-court",
    note: "Principal seat at Jodhpur and the Jaipur Bench. Writs, civil and criminal appellate work, and service matters arising in the State.",
  },
  {
    name: "Himachal Pradesh High Court",
    place: "Shimla",
    kind: "high-court",
    note: "Writ, civil and criminal work, including service, land and forest-adjacent revenue disputes from the hill districts.",
  },
  {
    name: "District Courts",
    place: "Across the region",
    kind: "district",
    note: "Trial work in civil suits, commercial courts, Sessions and Magistrate lists, execution, and the local boards that still decide most Indian disputes.",
  },
  {
    name: "Debts Recovery Tribunal",
    place: "Chandigarh and other DRTs",
    kind: "tribunal",
    note: "SARFAESI section 17 applications, RDB Act original applications, stay of possession and the recovery-certificate docket.",
  },
  {
    name: "NCLT",
    place: "Principal Benches as the company sits",
    kind: "tribunal",
    note: "Admission under the Insolvency and Bankruptcy Code, personal guarantors, and the company-law original jurisdiction that still lives in the Tribunal.",
  },
  {
    name: "NCLAT",
    place: "New Delhi (and circuit as notified)",
    kind: "tribunal",
    note: "Appeals from the NCLT in insolvency and company matters. Treated as a continuation of the same brief.",
  },
  {
    name: "Income Tax authorities",
    place: "Assessment & first appeal",
    kind: "revenue",
    note: "Assessment, penalty, stay of demand and Commissioner (Appeals) — the record on which every later appeal is built.",
  },
  {
    name: "ITAT",
    place: "Chandigarh and other Benches",
    kind: "tribunal",
    note: "Second appeal on facts and law, the last unrestricted merits forum in the direct-tax ladder.",
  },
  {
    name: "Central Administrative Tribunal",
    place: "Chandigarh and Principal Bench",
    kind: "tribunal",
    note: "Original applications in central service, disciplinary and pension matters, with High Court review thereafter.",
  },
  {
    name: "Railway Claims Tribunal",
    place: "Regional Benches",
    kind: "tribunal",
    note: "Compensation for untoward incidents and goods claims under the Railways Act — a specialised docket we still take.",
  },
  {
    name: "Collectorate",
    place: "District Collectors / SDMs",
    kind: "revenue",
    note: "Land acquisition, mutations, revenue appeals, and the magisterial work that sits under SARFAESI section 14 and local land law.",
  },
  {
    name: "Stamps Department",
    place: "State stamp authorities",
    kind: "revenue",
    note: "Deficit duty, valuation references, impounding and the stamp questions that unwind otherwise closed transactions.",
  },
];
