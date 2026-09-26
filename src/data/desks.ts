export type Desk = {
  slug: string;
  title: string;
  short: string;
  icon:
    | "banknote"
    | "building"
    | "landmark"
    | "scale"
    | "handshake"
    | "file"
    | "briefcase"
    | "house"
    | "umbrella"
    | "shield"
    | "search"
    | "scroll";
  summary: string;
  body: string;
  work: string[];
  forums: string[];
};

export const desks: Desk[] = [
  {
    slug: "banking-sarfaesi",
    title: "Banking & SARFAESI",
    short: "Recovery, security interest and borrower protection before DRT and the High Courts.",
    icon: "banknote",
    summary:
      "Instructions for banks, NBFCs, borrowers and guarantors under the SARFAESI Act, the RDB Act and related recovery statutes.",
    body: "The desk is instructed on both sides of the recovery fence. For secured creditors: demand notices, measures under section 13(4), applications under section 14, and the defence of DRT proceedings. For borrowers and guarantors: challenges to possession, valuation, auction and residual liability, with the limitation and locus questions that decide these matters before they reach evidence. High Court writs are taken out only where the tribunal remedy is inadequate — a discipline we keep, because the writ court will keep it for us.",
    work: [
      "Section 13(2) and 13(4) notices, symbolic and physical possession",
      "Section 14 applications before the Magistrate / District Magistrate",
      "Section 17 applications before the Debts Recovery Tribunal",
      "Auction, valuation and sale-certificate challenges",
      "Guarantor liability and residual recovery after sale",
      "Parallel RDB Act original applications and recovery certificates",
    ],
    forums: ["DRT", "DRAT", "Punjab & Haryana High Court", "Delhi High Court", "Rajasthan High Court"],
  },
  {
    slug: "insolvency",
    title: "Insolvency — NCLT & NCLAT",
    short: "Admission, moratorium, resolution and liquidation, including personal guarantors.",
    icon: "building",
    summary:
      "Corporate insolvency, personal guarantor petitions, and the overlapping recovery that now sits between IBC, SARFAESI and the civil court.",
    body: "Admission under sections 7, 9 and 10 is a pleadings exercise before it is a commercial one. The desk prepares the record the Adjudicating Authority actually reads: debt, default, limitation, and the authorities after Innoventive, Swiss Ribbons, E.S. Krishnamurthy and Vidarbha. Once a moratorium is in, the work shifts to claims, avoidance, resolution-plan objections and the liquidation waterfall — and to the personal-guarantor petitions that now run in parallel. NCLAT appellate work is taken as a continuation of the same brief, not a second instruction.",
    work: [
      "Section 7, 9 and 10 petitions and their replies",
      "Limitation, acknowledgment and section 18 of the Limitation Act",
      "Moratorium collisions with SARFAESI, arbitration and criminal process",
      "Claims, CoC composition and resolution-plan challenges",
      "Avoidance applications and look-back transactions",
      "Personal guarantors and appeals to the NCLAT",
    ],
    forums: ["NCLT", "NCLAT", "High Courts (writ / company)", "Supreme Court (on instruction)"],
  },
  {
    slug: "constitutional",
    title: "Constitutional & Writs",
    short: "Article 226 and 227 work: tender, service, revenue and the control of public power.",
    icon: "landmark",
    summary:
      "Writ petitions and supervisory jurisdiction where a public body has acted without authority, contrary to the record, or in breach of the procedure the statute required.",
    body: "The constitutional desk is not a substitute for a trial. It is used where the record already shows the error: a tender clause applied unlike its text, a service penalty without the inquiry the rules required, a revenue demand without the notice the Act mandates. We are conservative about maintainability, alternative remedy and disputed facts, because a writ lost on those grounds is a writ that should never have been filed. The same discipline applies to special leave; we do not file to be seen to have filed.",
    work: [
      "Tender and procurement challenges under Article 226",
      "Service, pension and disciplinary writs",
      "Revenue, stamps and collectorate orders",
      "Supervisory petitions under Article 227",
      "Habeas, preventive detention and personal liberty",
      "Policy and delegated-legislation challenges where the record supports it",
    ],
    forums: [
      "Punjab & Haryana High Court",
      "Delhi High Court",
      "Rajasthan High Court",
      "Himachal Pradesh High Court",
    ],
  },
  {
    slug: "civil-commercial",
    title: "Civil & Commercial",
    short: "Suits, injunctions, execution and the long work of getting a decree that can be enforced.",
    icon: "scale",
    summary:
      "Original civil and commercial litigation — from urgent injunctions through trial, first appeal and execution — in the district courts and on the original and appellate sides of the High Courts.",
    body: "Civil work in this chambers is run as a file, not a hearing. Pleadings, documents, issues, and the injunction that has to survive three years of the suit: that is the craft. Commercial Courts Act timelines, the Specific Relief amendments, and the narrower window for interlocutory appeals all change how a plaint is drawn. We take instructions in money recovery, partnership and shareholder disputes, property, and the ordinary civil suit that still accounts for most of the cause-list. Execution is treated as part of the original brief.",
    work: [
      "Suits for declaration, injunction, possession and recovery",
      "Commercial Court actions and summary judgment",
      "Temporary injunctions and vacation applications",
      "First appeals, regular second appeals and civil revisions",
      "Execution, objections and resistance to delivery",
      "Partnership, family property and partition",
    ],
    forums: ["District Courts", "Commercial Courts", "High Courts", "Small Causes (where applicable)"],
  },
  {
    slug: "arbitration",
    title: "Arbitration",
    short: "Section 9, 11, 34 and 37 work, and the conduct of references seated in India.",
    icon: "handshake",
    summary:
      "Interim protection, appointment, challenge and enforcement of awards, and counsel work in domestic references.",
    body: "Most arbitration instructions in this practice begin as an injunction by another name: section 9 protection of a bank guarantee, a site, or a contractual right that will be worthless after the award. Appointment under section 11, the seat-venue distinction, and the limited section 34 challenge are the rest of the statute we actually use. We do not treat arbitration as a private club. We treat it as a forum with a record, a timeline under section 29A, and a High Court that will only rarely reopen the merits.",
    work: [
      "Section 9 interim measures before and during the reference",
      "Section 11 appointment and section 8 reference to arbitration",
      "Conduct of domestic commercial references",
      "Section 34 and 37 challenges and appeals",
      "Enforcement of awards as decrees",
      "Emergency and consent-process work in ad-hoc references",
    ],
    forums: ["High Courts (original / commercial)", "Arbitral tribunals", "District Court (enforcement)"],
  },
  {
    slug: "contracts-tenders",
    title: "Contracts & Tenders",
    short: "Works contracts, procurement challenges and the public-law overlay on private bargains.",
    icon: "file",
    summary:
      "Contractual claims, termination and blacklisting, and judicial review of tender conditions, disqualification and award.",
    body: "Tender litigation is won or lost on the clause, the pre-bid query, and the note sheet. The Supreme Court’s line from Tata Cellular through Michigan Rubber, Jagdish Mandal, Silppi and N.G. Projects is not a slogan — it is a set of limits. We take instructions for bidders who were shut out, and for departments whose award is under attack. Parallel contractual claims (delay, extra items, bank guarantees) are pleaded as civil or arbitral work, not as a writ in disguise.",
    work: [
      "Pre-bid and post-award tender challenges",
      "Disqualification, MSME preference and eligibility",
      "Blacklisting and debarment",
      "Works-contract claims, delay and extra items",
      "Bank-guarantee injunctions",
      "Termination, force majeure and price variation",
    ],
    forums: ["High Courts", "Commercial Courts", "Arbitration", "MSME Council (where applicable)"],
  },
  {
    slug: "service-matters",
    title: "Service Matters",
    short: "CAT original applications, disciplinary inquiries, seniority, pension and the High Court thereafter.",
    icon: "briefcase",
    summary:
      "Central and state service litigation — from charge-sheet to penalty, and from the Tribunal to the Division Bench.",
    body: "Service law is procedural law. The inquiry that skipped a document, the penalty that ignored the inquiry, the seniority list that rewrote the rules: those are the cases. Original applications before the Central Administrative Tribunal are drawn to the OA format the Bench actually uses. After L. Chandra Kumar, the High Court remains the first court of judicial review; we do not skip the Tribunal to look busy in a writ. Pension, MACP, compassionate appointment and transfer are taken where the statutory hook is real.",
    work: [
      "Charge-sheets, inquiries and penalties",
      "Seniority, promotion and MACP",
      "Pension, retiral benefits and qualification",
      "Termination, probation and regularisation",
      "Transfer, posting and standing-order disputes",
      "Appeals from CAT to the High Court",
    ],
    forums: ["CAT", "High Courts", "State service tribunals", "Departmental authorities"],
  },
  {
    slug: "tenancy-land",
    title: "Tenancy & Land",
    short: "Rent, eviction, title, acquisition, mutation and the collectorate.",
    icon: "house",
    summary:
      "Urban tenancy, agricultural and urban land, acquisition and the revenue work that sits under every title dispute in the region.",
    body: "Land in Punjab, Haryana, Himachal and Rajasthan is a revenue file before it is a title suit. Mutations, jamabandi, stamps and collectorate orders decide more disputes than the plaint admits. The desk takes eviction and rent work under the state rent Acts, title and partition, acquisition and solatium under RFCTLARR, and the writ that follows a collector’s order. We do not plead a civil suit where the revenue forum is the statute’s choice — and we do not stay in the revenue forum where title is genuinely in issue.",
    work: [
      "Eviction, rent and tenancy defences",
      "Title, possession and partition",
      "Land acquisition, compensation and lapse",
      "Mutation, jamabandi and revenue appeals",
      "Stamps, valuation and deficit duty",
      "Collectorate and Tehsildar proceedings",
    ],
    forums: ["District Courts", "Collector / SDM", "Stamps Department", "High Courts"],
  },
  {
    slug: "insurance",
    title: "Insurance",
    short: "Repudiation, surveyor evidence, consumer commissions and the civil suit that still has a place.",
    icon: "umbrella",
    summary:
      "Policyholder and insurer work in fire, marine, health, motor and the commercial cover that ends in a one-line repudiation letter.",
    body: "An insurance claim is a documents case. Proposal, policy, claim form, surveyor, addenda, and the clause the repudiation actually cites: that is the brief. We appear in consumer commissions where the statute fits, and in civil suits where the value, the complexity, or the insurer’s set-off makes the commission the wrong room. Subrogation, contribution and the duty of disclosure are argued from the policy, not from a brochure.",
    work: [
      "Repudiation challenges and claim settlement",
      "Surveyor reports and appointment of independent survey",
      "Consumer complaints and appeals",
      "Civil suits on commercial policies",
      "Motor accident and indemnity overlap",
      "Subrogation and recovery after payout",
    ],
    forums: ["Consumer Commissions", "District Courts", "High Courts", "MACT (overlap)"],
  },
  {
    slug: "criminal-defence",
    title: "Criminal Defence",
    short: "Bail, quashing, trial defence and appeals — including the economic-offence cause-list.",
    icon: "shield",
    summary:
      "Defence instructions from the first information report through trial and appeal, with a particular list in commercial and economic allegations.",
    body: "Criminal defence in this chambers is quiet work. Anticipatory and regular bail are prepared as a paper on the FIR, the role, the recovery and the Satender Kumar Antil grid — not as a speech. Quashing under section 482 / 528 BNSS is taken where the complaint is stillborn on its own words. Trial is run as a cross-examination plan and a documents plan. We take ordinary penal work and the commercial FIRs that now sit next to every recovery dispute. Sentencing and suspension of sentence are treated as part of the same brief.",
    work: [
      "Anticipatory and regular bail",
      "Quashing of FIR and complaint",
      "Trial defence in Sessions and Magistrate courts",
      "Appeals, revisions and suspension of sentence",
      "Negotiable Instruments Act complaints and defence",
      "Police custody, remand and default-bail calculations",
    ],
    forums: ["High Courts", "Sessions Courts", "Magistrate Courts", "Special courts (on instruction)"],
  },
  {
    slug: "white-collar",
    title: "White Collar",
    short: "PMLA, companies offences, ED process, and the overlap with IBC and the criminal trial.",
    icon: "search",
    summary:
      "Defence in money-laundering, corporate fraud, securities and the predicate-offence prosecutions that travel with them.",
    body: "White-collar instructions fail when the criminal, the attachment and the insolvency are run as three separate files. They are one fact-pattern. The desk coordinates PMLA attachment and bail (including the section 45 questions after Vijay Madanlal), predicate FIRs, SFIO / ED process, and the IBC moratorium that does not stay a criminal trial but does change the estate. We do not promise a collapse of the prosecution. We promise a record that a court can actually use.",
    work: [
      "PMLA attachment, retention and bail",
      "Predicate-offence defence (IPC / BNS, Companies Act, special Acts)",
      "ED, CBI and SFIO process",
      "Look-back, proceeds and beneficial ownership",
      "Interface with IBC, SARFAESI and arbitration",
      "Mutual legal assistance and look-out circulars",
    ],
    forums: ["PMLA special courts", "High Courts", "NCLT (estate overlap)", "Magistrate / Sessions"],
  },
  {
    slug: "tax-revenue",
    title: "Tax, Stamps & Revenue",
    short: "Income tax, ITAT, collectorate revenue and the stamps department.",
    icon: "scroll",
    summary:
      "Assessment, appellate and writ work in direct tax, and the state revenue and stamp matters that sit under land and commercial closings.",
    body: "Tax litigation is an appellate craft. The assessment order, the record that was before the AO, and the question of law that will survive section 260A: that is the work. We appear before the Commissioner (Appeals) and the ITAT, and in the High Court on substantial questions. Parallel instructions cover stamp duty, deficit, and collectorate revenue — the unfashionable files that still close (or unwind) a transaction. We do not run a tax product. We run the dispute.",
    work: [
      "Assessment, penalty and search matters",
      "Commissioner (Appeals) and ITAT",
      "High Court appeals on substantial questions of law",
      "Stay of demand and recovery",
      "Stamp duty, valuation and deficit",
      "Collectorate revenue and land-record collisions",
    ],
    forums: ["Income Tax authorities", "ITAT", "High Courts", "Collector / Stamps Department"],
  },
];

export function getDesk(slug: string) {
  return desks.find((d) => d.slug === slug);
}
