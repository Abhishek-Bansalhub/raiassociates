export type Counsel = {
  role: string;
  desk: string;
  initials: string;
  bio: string;
  focus: string[];
};

export const principal: Counsel = {
  role: "Principal Counsel",
  desk: "Civil, commercial, constitutional and criminal defence",
  initials: "RA",
  bio: "The chambers is led from Chandigarh. The Principal Counsel takes instructions in civil and commercial suits, constitutional writs, banking and SARFAESI, insolvency, arbitration, and criminal defence including white-collar prosecutions — and appears personally in the High Courts of Punjab and Haryana, Delhi, Rajasthan and Himachal Pradesh, and before the tribunals listed on this site. The list is a litigation list. Advisory work is taken only where it is the prelude to a forum.",
  focus: [
    "High Court advocacy",
    "SARFAESI and DRT",
    "NCLT / NCLAT",
    "Criminal and white-collar defence",
    "Arbitration and commercial suits",
    "Writs — tender, service, revenue",
  ],
};

export const counsel: Counsel[] = [
  {
    role: "Counsel",
    desk: "Banking, SARFAESI & Insolvency",
    initials: "RI",
    bio: "Recovery and insolvency are run as one desk, because the same debt now travels through SARFAESI, the DRT and the NCLT. Counsel on this list prepare section 13 measures, section 17 applications, admission papers and the guarantor petitions that follow a corporate default.",
    focus: ["SARFAESI", "DRT / DRAT", "IBC admission", "Personal guarantors", "NCLAT"],
  },
  {
    role: "Counsel",
    desk: "Criminal Defence & White Collar",
    initials: "CD",
    bio: "Defence instructions from FIR to appeal, with a particular docket in commercial fraud, NI Act, PMLA process and the predicate offences that sit under an ED brief. Bail and quashing are treated as paper exercises; trial is treated as one.",
    focus: ["Bail and quashing", "PMLA", "NI Act", "Sessions trial", "Economic offences"],
  },
  {
    role: "Counsel",
    desk: "Civil, Commercial & Arbitration",
    initials: "CA",
    bio: "Suits, injunctions, commercial-court actions and domestic references. The desk draws pleadings that can survive a three-year list, and section 9 applications that have to hold until the tribunal is constituted.",
    focus: ["Civil suits", "Commercial Courts", "Section 9 / 34", "Injunctions", "Execution"],
  },
  {
    role: "Counsel",
    desk: "Constitutional, Service & Revenue",
    initials: "SR",
    bio: "Writs, CAT original applications, and the collectorate and stamps work that most chambers treat as someone else’s file. Maintainability is decided before the draft, not after the notice of motion.",
    focus: ["Article 226 / 227", "CAT", "Tenders", "Service law", "Stamps and land"],
  },
  {
    role: "Research Counsel",
    desk: "Knowledge & briefs",
    initials: "RD",
    bio: "A dedicated research desk prepares authorities, legislative notes and the internal memoranda that go into every High Court brief. Published writing on this site is a public version of that work — not marketing copy.",
    focus: ["Authorities", "Legislative notes", "Internal memos", "Insights"],
  },
];
