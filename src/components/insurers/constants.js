// This may or may not come from an initial API

export const COVERAGE_OBJECT = [
  {
    label: "$0",
    content: `Preventive drugs. For some members, this product may be covered at 100% 
  with $0 cost share with a prescription from your provider if specified criteria are met.
  `,
  },
  {
    label: "DO",
    content: `Dose Optimization. Usually, this means you may
have to switch from taking a drug twice a day to taking
it once a day at a higher strength.`,
  },
  {
    label: "LD",
    content: `Limited Distribution. These drugs are available
only through certain pharmacies or wholesalers,
depending on what the manufacturer decides.`,
  },
  {
    label: "OC",
    content: `Oral Chemotherapy. These drugs after deductible
shall not exceed $200 per an individual prescription for
up to a 30 day supply.`,
  },
  {
    label: "PA",
    content: `Prior Authorization. You may need to get benefits
approved before certain prescriptions can be filled.`,
  },
  {
    label: "QL",
    content: `Quantity Limits. There are limits on the amount of
medicine covered within a certain amount of time.`,
  },
  {
    label: "SP",
    content: `Specialty Drugs. Specialty drugs are used to treat
difficult, long-term conditions. You may need to get
this drug through a specialty pharmacy.`,
  },
  {
    label: "ST",
    content: `Step Therapy. You may need to use another
recommended drug first before a prescribed drug is
covered.`,
  },
  {
    label: "Tier 1",
    content: `Tier 1 drugs have the lowest cost share for you.
These are usually generic drugs that offer the best
value compared to other drugs that treat the same
conditions.`,
  },
  {
    label: "Tier 2",
    content: `Tier 2 drugs have a higher cost share than Tier 1.
They may be preferred brand drugs, based on how
well they work and their cost compared to other drugs
used for the same type of treatment. Some are
generic drugs that may cost more because they’re
newer to the market.`,
  },
  {
    label: "Tier 3",
    content: `Tier 3 drugs have a higher cost share. They often
include non-preferred brand and generic drugs. They
may cost more than drugs on lower tiers that are
used to treat the same condition. Tier 3 may also
include drugs that were recently approved by the
FDA.`,
  },
  {
    label: "Tier 4",
    content: `Tier 4 drugs have the highest cost share and
usually include specialty brand and generic drugs.
They may cost more than drugs on lower tiers that
are used to treat the same condition. Tier 4 may also
include drugs recently approved by the FDA or
specialty drugs used to treat serious, long-term
health conditions and that may need special
handling.`,
  },
];

export const INSURER_OBJECT = {
  "Anthem-Blue-Cross": {
    label: "Anthem Blue Cross of California",
    formulary_url:
      "https://fm.formularynavigator.com/FBO/143/2020_Select_4_Tier_CA_IND.pdf",
  },
  cchp: {
    label: "Chinese Community Health Plan",
    formulary_url:
      "http://assets.ctfassets.net/ykg55i5qpwt5/g99gc0V7G509opitecc4U/6d6ce67659e115b1f98f247518b7eb01/2019_CCHP_November_ON_Exchange_Formulary_NOV.pdf",
  },
  healthnet: {
    label: "Health Net",
    formulary_url:
      "https://www.healthnet.com/static/general/unprotected/pdfs/national/ca_essential_rx_list.pdf",
  },
};
