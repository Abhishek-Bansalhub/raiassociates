export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "quote"; text: string }
  | { type: "ul"; items: string[] };

export type Insight = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  desk: string;
  deskSlug: string;
  read: string;
  body: Block[];
};

export const insights: Insight[] = [
  {
    slug: "sarfaesi-section-17-after-possession",
    title: "What a borrower can still do after a 13(4) measure is taken",
    dek: "The DRT remains the court of first instance. The High Court is not a second DRT, and a 13(2) notice is not, by itself, a measure.",
    date: "18 August 2026",
    desk: "Banking & SARFAESI",
    deskSlug: "banking-sarfaesi",
    read: "8 min",
    body: [
      {
        type: "p",
        text: "Most SARFAESI instructions still arrive too late, or in the wrong room. A demand notice under section 13(2) has been served; a possession notice under 13(4) has followed; someone has already written to the High Court. The sequence is familiar, and so is the result. After Mardia Chemicals and the later course of the statute, the Debts Recovery Tribunal is the court of first instance for a challenge to measures taken by a secured creditor. A writ that could have been a section 17 application is a writ that will usually be sent there anyway.",
      },
      {
        type: "h",
        text: "The measure, not the threat",
      },
      {
        type: "p",
        text: "Section 17 opens when a measure under section 13(4) has been taken — possession, management, or the other listed steps — not when a 13(2) notice is merely on the table. The distinction matters for limitation. The forty-five days run from the date of the measure, not from the date the borrower was frightened by the letterhead. Symbolic possession is still a measure; physical possession is a further one. Each has a record (notice, newspaper publication, panchnama) that has to be in the paper book. An application that does not annex that record is an application the Tribunal will not be able to decide on the first date, which is often the only date that matters.",
      },
      {
        type: "quote",
        text: "The High Court is not a second Debts Recovery Tribunal. It is a court of last resort for the case the Tribunal cannot hear.",
      },
      {
        type: "p",
        text: "Valuation and auction are where these cases are actually won. A sale on a valuation that the borrower never saw, or on a reserve price that cannot be reconciled with the report, is a sale the Tribunal can still unwind. So is a sale to a related purchaser. What the Tribunal cannot do, and will not pretend to do, is re-open the underlying debt as if it were a civil suit on the mortgage. The limited merits of section 17 are the point of the provision. Plead them; do not plead the loan all over again.",
      },
      {
        type: "h",
        text: "Section 14, and the Magistrate who is not a court of appeal",
      },
      {
        type: "p",
        text: "Applications to the Magistrate or District Magistrate under section 14 are ministerial in the sense the Supreme Court has described — which is not the same as unreviewable. The limited questions (declaration, affidavit, secured asset) are still questions. A borrower who wants to fight section 14 in the High Court must have a reason the DRT cannot give relief in time. That reason is rarer than the cause-list suggests. The better paper is usually the section 17 application, with a prayer for stay of further possession, filed with the complete 13(2)/13(4) record and a valuation note that a Tribunal can read in twenty minutes.",
      },
      {
        type: "ul",
        items: [
          "Do not write to the High Court because the DRT date is two weeks away.",
          "Do annex the possession notice, the newspaper cuttings, and the valuation.",
          "Do decide, before the first date, whether the attack is on the measure, the valuation, or the sale.",
          "Do not treat a guarantor as an afterthought. Residual liability is a separate instruction.",
        ],
      },
    ],
  },
  {
    slug: "section-7-admission-default-and-discretion",
    title: "Section 7 admission: default, discretion, and the facts that still matter",
    dek: "Innoventive and E.S. Krishnamurthy did not abolish the record. They told us which parts of it the Adjudicating Authority is required to read.",
    date: "2 August 2026",
    desk: "Insolvency",
    deskSlug: "insolvency",
    read: "9 min",
    body: [
      {
        type: "p",
        text: "A section 7 petition is not a commercial novel. It is a short paper on debt, default and limitation. After Innoventive Industries and E.S. Krishnamurthy, the Adjudicating Authority is not sitting to decide whether the corporate debtor has a good story about working capital. It is sitting to decide whether a financial debt is due and whether a default has occurred. Vidarbha Industries is the qualification that everyone cites and few plead correctly: a residuary discretion, in a particular class of facts, not a general licence to dismiss a petition because the debtor would rather pay later.",
      },
      {
        type: "h",
        text: "What the reply is for",
      },
      {
        type: "p",
        text: "The useful reply is almost always a limitation reply, or a ‘this is not a financial debt’ reply, or a ‘there is no default on the date pleaded’ reply. Acknowledgments under section 18 of the Limitation Act, one-time settlements that were not concluded, and the date of the NPA versus the date of default in the petition: those are the paragraphs that decide admission. A reply that is a prospectus of the company is a reply that will be ignored. So is a reply that invites the NCLT to conduct a trial on the quality of the underlying project.",
      },
      {
        type: "quote",
        text: "The Code is not a recovery statute that happens to use a tribunal. It is a collective proceeding that begins when a default is proved. Plead the default, or plead its absence.",
      },
      {
        type: "p",
        text: "Personal guarantors have their own docket, and it is no longer an afterthought. A petition against the guarantor that ignores the corporate insolvency — or a corporate reply that ignores the guarantor petitions — is a split brief of the kind that produces inconsistent stays and no real protection. The moratorium under section 14 does not mean what clients think it means for criminal process, for PMLA attachment, or for a SARFAESI sale already advertised. Those collisions have to be mapped on the first afternoon, not the afternoon before the admission hearing.",
      },
      {
        type: "ul",
        items: [
          "Date of default, date of NPA, and date of the petition must sit on one page.",
          "Section 18 acknowledgments are a limitation issue, not a merits issue.",
          "Vidarbha is a case, not a slogan. Cite the facts that make it apply.",
          "Map SARFAESI, PMLA and the criminal FIR against the moratorium before the first hearing.",
        ],
      },
    ],
  },
  {
    slug: "section-9-arbitration-interim-measures",
    title: "Section 9 is not a dress rehearsal for the award",
    dek: "Interim protection under the Arbitration Act is a High Court (or District Court) injunction with a shorter life and a harder question: why the tribunal cannot yet help.",
    date: "11 July 2026",
    desk: "Arbitration",
    deskSlug: "arbitration",
    read: "7 min",
    body: [
      {
        type: "p",
        text: "Most section 9 petitions in this region are bank-guarantee petitions, site-access petitions, or ‘do not terminate’ petitions. They are not, and should not be pleaded as, a trial of the works contract. The court is being asked to hold a position until a tribunal exists and can be asked the same thing under section 17. After the 2015 amendments, that is a harder ask than it used to be — the statute prefers the tribunal — but it is not an impossible one. The petition that succeeds is the petition that explains, on facts, why the right will be worthless by the time the arbitrator is appointed.",
      },
      {
        type: "h",
        text: "Guarantee invocations, and the two exceptions that still work",
      },
      {
        type: "p",
        text: "The law on injunctions against bank-guarantee invocation remains narrow: egregious fraud, or irretrievable injustice, of the kind the Supreme Court has actually described. A dispute about measurement, delay or extra items is not fraud. A pending reference is not irretrievable injustice. The petitions we decline to file are as important as the ones we file. Where the exception is real — a beneficiary invoking on a letter that the contract itself forbids at this stage, or a guarantee whose underlying contract has been novated — the pleading has to quote the clause and the invocation letter on the same page.",
      },
      {
        type: "quote",
        text: "A section 9 petition that reads like an opening submission on the merits is a petition the court will not finish.",
      },
      {
        type: "p",
        text: "Seat and venue still confuse instructions. The court that can hear the section 9 or the section 34 is the court of the seat, not the court of the project, unless the clause says otherwise and means it. A Chandigarh works contract with a Delhi seat is a Delhi petition. Filing it in Chandigarh because the site is in Panchkula is how a limitation clock is lost. Section 34, when the award eventually comes, is not a first appeal. The grounds are the grounds in the statute. We draft the challenge to those grounds, or we advise that there is no challenge worth the fee.",
      },
    ],
  },
  {
    slug: "white-collar-pmla-ibc-criminal-trial",
    title: "White-collar defence is one fact-pattern, not three files",
    dek: "PMLA attachment, the predicate FIR and the insolvency of the corporate vehicle will be decided by different rooms. They should not be prepared by different minds.",
    date: "22 June 2026",
    desk: "White Collar",
    deskSlug: "white-collar",
    read: "8 min",
    body: [
      {
        type: "p",
        text: "A commercial default in 2026 often arrives as a set: an FIR, a section 7 petition, a SARFAESI notice, and, in a smaller class of cases, an Enforcement Directorate brief. Each forum has a statute that tells it to ignore the others. The client cannot. Bail in the predicate offence, bail under section 45 of the PMLA, the fate of attached property, and the resolution-plan treatment of the same property are four questions about one set of facts. A chambers that answers only one of them is not defending the case. It is defending a caption.",
      },
      {
        type: "h",
        text: "Section 45, and what Vijay Madanlal actually changed",
      },
      {
        type: "p",
        text: "The twin conditions for PMLA bail remain the statute’s most litigated sentence. After Vijay Madanlal Choudhary, the constitutional argument is narrower than it was in 2017, and the practical argument is the same as it always was: the role, the predicate, the proceeds, and the risk of influence. Papers that spend ten pages on the history of the Act and one paragraph on the client’s role are papers that lose. So are papers that treat the predicate acquittal as inevitable. It is not. It has to be won in the court that is trying it.",
      },
      {
        type: "quote",
        text: "The moratorium does not stay the criminal trial. It also does not make the attached flat available for a resolution plan just because someone would like it to.",
      },
      {
        type: "p",
        text: "Look-out circulars, summons under section 50, and the decision whether the client should make a statement, are the first-week work. They are not less important than the bail application. A statement given to explain a ledger often becomes the ledger of the prosecution. We take those decisions as part of the defence, not as a courtesy to the agency. The IBC proceeding, if there is one, has to be told about the attachment; the PMLA court has to be told about the CIRP. The two sentences are short. They are also the sentences that prevent a later court from saying it was never informed.",
      },
    ],
  },
  {
    slug: "tender-judicial-review-after-ng-projects",
    title: "Judicial review of tenders after N.G. Projects: a narrower window, not a closed one",
    dek: "The Supreme Court has spent twenty years telling High Courts not to run tenders. It has not told them to ignore a clause that was not applied.",
    date: "30 May 2026",
    desk: "Contracts & Tenders",
    deskSlug: "contracts-tenders",
    read: "7 min",
    body: [
      {
        type: "p",
        text: "Tata Cellular, Michigan Rubber, Jagdish Mandal, Silppi Constructions, Airports Authority, N.G. Projects: the list is recited at the start of every tender writ, usually by the State. The principle is not in doubt. A High Court does not sit as an appellate authority on the choice of a bidder, does not re-evaluate technical marks, and does not save a contractor from a clause he did not read. The window that remains is the window that was always there: mala fides, the clause that was rewritten after the bids, the eligibility condition applied to one party and not the other, the note sheet that contradicts the affidavit.",
      },
      {
        type: "h",
        text: "Plead the clause, the query, and the note",
      },
      {
        type: "p",
        text: "A tender challenge that does not quote the offending condition in the first three pages is not a challenge. Pre-bid queries — asked or, as importantly, not asked — decide more of these cases than the oral argument. A bidder who sat through the pre-bid and did not object will be told so. A department that answered a query in writing and then awarded on a different reading will also be told so. The record is the note sheet. If the department will not produce it, that is the first prayer.",
      },
      {
        type: "quote",
        text: "We do not file a writ because our client’s bid was lower. We file it because the clause as written was not the clause as applied.",
      },
      {
        type: "p",
        text: "Blacklisting is a different, and often better, writ. The notice, the reply, and the order that does not deal with the reply: that is a natural-justice case, and the Supreme Court has been less forbidding here than on the choice of a bidder. Debarment for a period that the order does not justify, or for an alleged breach that is still in arbitration, is the kind of public-law error a Division Bench will still correct. Contractual claims for delay and extra items, by contrast, belong in arbitration or in a commercial suit. Putting them in a writ is how a good blacklisting case is lost.",
      },
    ],
  },
  {
    slug: "cat-and-the-high-court-after-chandra-kumar",
    title: "CAT first, the High Court after: service law is still a sequence",
    dek: "L. Chandra Kumar did not make the Tribunal optional. It made the Division Bench the court of judicial review — once the Tribunal has done the work.",
    date: "9 May 2026",
    desk: "Service Matters",
    deskSlug: "service-matters",
    read: "6 min",
    body: [
      {
        type: "p",
        text: "Central service litigation has a sequence that clients, and sometimes instructing advocates, still try to skip. The original application before the Central Administrative Tribunal is the place where the record is built: the charge-sheet, the inquiry report, the documents that were withheld, the penalty that does not follow from the findings. The High Court, after L. Chandra Kumar, is a court of judicial review over the Tribunal, not a second original forum. A writ filed to avoid the CAT cause-list is a writ that will be asked, on the first date, why the statutory forum was not used.",
      },
      {
        type: "h",
        text: "The inquiry is the case",
      },
      {
        type: "p",
        text: "Disciplinary matters are document matters. Was the charged officer given the listed documents. Was the presenting officer also the inquiry officer in any sense that the rules forbid. Did the disciplinary authority disagree with the inquiry and, if so, did it say why. Was the penalty one the rules allow for the charge as found. Those four questions decide more OAs than any argument about motive. Motive is almost never a service-law ground. Procedure is.",
      },
      {
        type: "quote",
        text: "A penalty that ignores the inquiry is a penalty the Tribunal can set aside. A penalty that follows a fair inquiry is a penalty the High Court will not re-try.",
      },
      {
        type: "p",
        text: "Pension, MACP, seniority and compassionate appointment have their own short statutes and office memoranda. They are not ‘equity’ cases. The OA that wins is the OA that puts the OM, the cadre rules and the impugned order on three consecutive pages. Transfer, which generates more instructions than any of the above, is still the hardest to move. Unless the transfer is punitive, contrary to a binding policy, or issued by an authority that did not have the power, the Tribunal will not run the department. We say so before the fee is taken, not after the OA is dismissed.",
      },
    ],
  },
  {
    slug: "tenancy-land-punjab-haryana-revenue-first",
    title: "Land in this region is a revenue file before it is a title suit",
    dek: "Mutation, jamabandi, stamps and the collectorate decide more Punjab and Haryana disputes than the plaint admits. The civil court is not always the first room.",
    date: "14 April 2026",
    desk: "Tenancy & Land",
    deskSlug: "tenancy-land",
    read: "7 min",
    body: [
      {
        type: "p",
        text: "A purchaser in Punjab or Haryana who has a registered deed and no mutation is not a person who has finished. A vendor who has a jamabandi and a cousin in possession is not a person who has won. Title in this region is a sandwich of the Registration Act, the state land-revenue law, the stamps department, and, when the State has notified an acquisition, the Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act. Filing a civil suit because it feels like the ‘proper’ court is how a client spends five years on a question a Tehsildar could have closed.",
      },
      {
        type: "h",
        text: "When the civil court is the right court",
      },
      {
        type: "p",
        text: "It is the right court when title is genuinely in issue between private parties, when possession has to be recovered, when a document has to be cancelled, and when a partition cannot be done in the revenue forum because the dispute is not the kind the revenue statute covers. It is the wrong court when the only grievance is a mutation, a stamp deficit, or a collectorate compensation award that has its own appeal. The High Court writ is a third choice, not a first one: it is for the collectorate order that is without jurisdiction, or for the acquisition that has lapsed on the statutory clock.",
      },
      {
        type: "quote",
        text: "We do not plead a civil suit where the revenue forum is the statute’s choice. We do not stay in the revenue forum where title is the issue.",
      },
      {
        type: "p",
        text: "Urban tenancy is a different statute again. The East Punjab Urban Rent Restriction Act and the Haryana urban rent law still decide eviction on grounds that have to be pleaded as the Act requires — personal necessity, non-payment, change of user — not as a common-law story about an ungrateful tenant. A landlord who wants a tenant out because a developer has called will be told, in this chambers, what the Act actually allows. A tenant who has not paid rent and wants a long injunction will be told the same thing. The candour is the service.",
      },
    ],
  },
  {
    slug: "insurance-repudiation-forum-and-the-clause",
    title: "Insurance repudiation: the clause, the surveyor, and the choice of forum",
    dek: "Consumer commission, civil court, or both. The wrong room is how a good claim becomes a five-year file.",
    date: "3 March 2026",
    desk: "Insurance",
    deskSlug: "insurance",
    read: "6 min",
    body: [
      {
        type: "p",
        text: "A repudiation letter is a one-page document that cites a clause and a surveyor. The claim file is two hundred pages that the letter does not mention. The work is to put the two together. Non-disclosure is the favourite ground, and it is only as good as the proposal form and the questions that were actually asked. Exclusion is the second favourite, and it is only as good as the clause as printed, not as summarised in the letter. Breach of condition is the third, and it usually fails where the insurer kept the premium and kept silence until the claim.",
      },
      {
        type: "h",
        text: "Where to file",
      },
      {
        type: "p",
        text: "The Consumer Protection Act 2019 is the right statute for a policyholder who is a consumer in the statutory sense, for a value the commission can hear, and for a dispute that will be decided on documents. It is the wrong statute for a commercial cover with a set-off, a contribution claim, or a complexity the commission will not case-manage. A civil suit is slower and, in a documents case, often cleaner. Filing both without a strategy for stay and res judicata is how a client pays twice. We choose one room and, if we are wrong, we say so early.",
      },
      {
        type: "quote",
        text: "The surveyor is a witness, not a court. The clause is the statute of the policy. Plead both. Do not plead the fire.",
      },
      {
        type: "p",
        text: "Motor accident claims, which overlap this desk, belong in the Claims Tribunal when they are third-party statutory claims, and in the consumer or civil court when they are own-damage disputes with the insurer. Mixing the two captions is a common instruction and a bad idea. The same is true of fire claims that try to become criminal complaints against the surveyor. If there is a fraud, it can be said. If there is a difference of opinion on the estimate, it cannot. Chambers will say which is which before the complaint is signed.",
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((p) => p.slug === slug);
}

export function relatedInsights(slug: string, deskSlug: string, n = 3) {
  const rest = insights.filter((p) => p.slug !== slug);
  const same = rest.filter((p) => p.deskSlug === deskSlug);
  const other = rest.filter((p) => p.deskSlug !== deskSlug);
  return [...same, ...other].slice(0, n);
}
