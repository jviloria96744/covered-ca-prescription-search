// This object is used to populate the drawer that is clicked for the tier and coverage definitions
// The definitions depend on the insurer
export const COVERAGE_OBJECT = {
  "Anthem-Blue-Cross": {
    Tier: {
      label: "Prescription Tiers",
      items: [
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
      ],
    },
    coverageRequirements: {
      label: "Coverage Requirements and Limits",
      items: [
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
      ],
    },
  },
  cchp: {
    Tier: {
      label: "Prescription Tiers",
      items: [
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
      ],
    },
    coverageRequirements: {
      label: "Coverage Requirements and Limits",
      items: [
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
      ],
    },
  },
  healthnet: {
    Tier: {
      label: "Prescription Tiers",
      items: [
        {
          label: "Tier 1",
          content: `Drugs in this tier include generic drugs and low-cost preferred brand drugs.`,
        },
        {
          label: "Tier 2",
          content: `Drugs in this tier are higher cost generic drugs and preferred brand drugs.`,
        },
        {
          label: "Tier 3",
          content: `Drugs in this tier are non-preferred brand drugs, brand drugs with generic
          equivalents on a lower tier, or drugs that have a preferred alternative at a lower
          tier.`,
        },
        {
          label: "Tier 4 or SP",
          content: `Tier 4 or Specialty Drugs include drugs that are made using biotechnology, drugs
          that must be distributed through a specialty pharmacy, drugs that require special
          training for self-administration, or drugs that require regular monitoring of care by
          a pharmacy, and drugs that cost more than six hundred dollars for a one-month
          supply.`,
        },
        {
          label: "GP",
          content: `Generic drugs are preferred. To get a brand drug that has a generic available, your
          doctor must request prior authorization to show medical necessity. If we approve
          the request, the drug may be covered at a higher copayment. Refer to your plan
          documents for coverage details.`,
        },
        {
          label: "NF",
          content: `The NF next to a drug (including brands with a generic available) means the drug is
          not covered on Health Net’s Formulary. Your doctor must request authorization
          from Health Net and show medical necessity for the drug to be covered.`,
        },
        {
          label: "PV",
          content: `Includes preventive benefit drugs, including contraceptives, covered at no cost to
          members under the Affordable Care Act. A deductible does not apply. `,
        },
      ],
    },
    coverageRequirements: {
      label: "Coverage Requirements and Limits",
      items: [
        {
          label: "AL",
          content: `Age Limit: These drugs may require prior authorization if your age does
          not fall within manufacturer, FDA, or clinical
          recommendations.`,
        },
        {
          label: "AC",
          content: `Anti-Cancer: These oral cancer drugs are subject to a maximum $200
          copayment for a one-month supply, after any deductible
          has been met, per state law (or $600 maximum for a
          three-month supply through mail order).`,
        },
        {
          label: "LA",
          content: `Limited Access: Some drugs may be subject to limited access or restricted
          access. This means that a drug may only be available at
          select pharmacies. Limited access may be due to the
          following reasons: (1) The FDA or the manufacturer has restricted distribution of
          a drug to certain facilities, pharmacies or prescribers, (2) Certain drugs require special handling, coordination of care,
          or patient education that cannot be provided at a retail pharmacy. If the drug is approved, we will let you know how to get limited
          access drugs.`,
        },
        {
          label: "PA",
          content: `Prior Authorization: This drug requires prior authorization. This means that you
          or your prescriber must get approval from us before you fill
          your prescription. If you don’t get approval, we may not
          cover the drug.`,
        },
        {
          label: "QL",
          content: `Quantity Limits: These drugs have a limit on the amount that will be covered.
          Your doctor must request approval for a higher quantity of
          the drug from Health Net. Health Net covers a 12-month
          supply when dispensed at one time of all self-administered
          hormonal contraceptives on the Formulary. `,
        },
        {
          label: "RX/OTC",
          content: `Prescription & Over-The-Counter: Certain drugs are available both in a prescription form and in
          an OTC form. Only prescription drugs are covered by your
          plan with the exception of some insulins, insulin supplies and
          some covered preventive drugs. OTC drugs on the drug list,
          including OTC preventive drugs and contraceptives, require a
          prescription to be covered.`,
        },
        {
          label: "ST",
          content: `Step Therapy: Step therapy is when you are required to use one drug before
          another, in a stepwise fashion. Unless an exception is made,
          one or more preferred drugs must be tried first before
          progressing to a drug that is subject to step therapy.`,
        },
      ],
    },
  },
  kaiser: {
    Tier: {
      label: "Prescription Tiers",
      items: [
        {
          label: "Tier 1",
          content: `Tier 1 (generic) A generic drug is approved by the FDA as having the same active ingredient as the brand-name drug.
          Generally, generic drugs cost less than brand-name drugs.`,
        },
        {
          label: "Tier 2",
          content: `Tier 2 (Brand-Name) Brand-name drugs are manufactured and sold by the pharmaceutical company that originally 
          Kaiser Permanente 2020 California Commercial Marketplace Formulary • Page 9 of 166
          researched and developed the drug. When the patent on a brand-name drug expires, other
          pharmaceutical companies may manufacture and sell an FDA-approved generic version of the drug
          with the same active ingredient(s) at lower prices.`,
        },
        {
          label: "Tier 4",
          content: `Tier 4 (Specialty) Specialty-tier drugs are very high-cost drugs approved by the FDA that are on our formulary.`,
        },
      ],
    },
    coverageRequirements: {
      label: "Coverage Requirements and Limits",
      items: [
        {
          label: "QL",
          content: `Quantity Limits: Quantity Limits for certain drugs, we may limit the amount of drug that you can
          receive. Additionally, when there is a national shortage of a drug, we may limit the
          quantity of the drug dispensed.`,
        },
        {
          label: "LD",
          content: `Limited Distribution: Limited Distribution drugs can only be obtained at certain specialty pharmacies.
          To locate a specialty pharmacy, refer to your electronic member guidebook at
          kp.org/eguidebook (under the facility directory) or contact Member Services.`,
        },
        {
          label: "OC",
          content: `There is a maximum limit on the copayment/ coinsurance amount for orally
          administered anti-cancer drugs of no more than $200 per 30-day supply. Please see
          your Summary of Benefits for more detailed information.`,
        },
        {
          label: "PREV",
          content: `Preventive health drugs are select drugs required by federal law to be
          covered at no charge to members in select plans. Preventive health drugs are
          determined based upon evidence-based recommendations by the United States
          Preventive Services Task Force (USPSTF) with a rating of “A” or “B.”`,
        },
        {
          label: "MB",
          content: `A medical benefit drug is a drug that is not generally self-administered and
          administered by a health care professional. The outpatient prescription drug benefit
          includes FDA approved drugs that are self-administered, commonly oral, or selfinjectable drugs, not otherwise excluded from coverage.`,
        },
      ],
    },
  },
};

// This is the array of insurers, links to their sites/formularies and whether or not they are supported in the tool
export const INSURER_ARRAY = [
  {
    label: "Anthem Blue Cross of California",
    formulary_url:
      "https://fm.formularynavigator.com/FBO/143/2020_Select_4_Tier_CA_IND.pdf",
    key: "Anthem-Blue-Cross",
    website_url: "https://www.anthem.com/ca/",
    supported: true,
  },
  {
    label: "Chinese Community Health Plan",
    formulary_url:
      "http://assets.ctfassets.net/ykg55i5qpwt5/g99gc0V7G509opitecc4U/6d6ce67659e115b1f98f247518b7eb01/2019_CCHP_November_ON_Exchange_Formulary_NOV.pdf",
    key: "cchp",
    website_url: "https://www.cchphealthplan.com/",
    supported: true,
  },
  {
    label: "Health Net",
    formulary_url:
      "https://www.healthnet.com/static/general/unprotected/pdfs/national/ca_essential_rx_list.pdf",
    key: "healthnet",
    website_url: "https://www.healthnet.com/",
    supported: true,
  },
  {
    label: "Blue Shield of California",
    formulary_url:
      "https://www.blueshieldca.com/bsca/pharmacy/formulary/home.sp",
    key: "blue shield",
    website_url: "https://www.blueshieldca.com/",
    supported: false,
  },
  {
    label: "Kaiser Permanente",
    formulary_url:
      "https://healthy.kaiserpermanente.org/health/care/!ut/p/a0/04_Sj9CPykssy0xPLMnMz0vMAfIjk1PzSlKLrJLzy1KLUlN0c1NTMpPB0sW6aflFuaU5iUWV-gXZjooA5UnAOg!!/",
    key: "kaiser",
    website_url: "https://healthy.kaiserpermanente.org/",
    supported: true,
  },
  {
    label: "LA Care Health Plan",
    formulary_url:
      "http://www.lacare.org/members/welcome-la-care/member-documents/la-care-covered",
    key: "la care",
    website_url: "https://www.lacare.org/",
    supported: false,
  },
  {
    label: "Molina Healthcare",
    formulary_url:
      "https://www.molinahealthcare.com/members/ca/en-US/hp/marketplace/plans/Pages/View-Our-2020-Plans.aspx",
    key: "molina",
    website_url:
      "https://www.molinahealthcare.com/members/ca/en-us/Pages/home.aspx",
    supported: false,
  },
  {
    label: "Oscar Health Plan of California",
    formulary_url:
      "https://assets.ctfassets.net/plyq12u1bv8a/72DDNlKiFJmMEn3yGDBGnh/1012d5fb1e4d2024c7d58b5abab922c1/Oscar_4T_CA_STND_Member_Doc__May_2020__as_of_031820.pdf",
    key: "oscar",
    website_url: "https://www.hioscar.com/",
    supported: false,
  },
  {
    label: "Valley Health Plan",
    formulary_url:
      "https://www.valleyhealthplan.org/sites/m/pn/pharm/pages/pharmacy.aspx",
    key: "valley",
    website_url: "https://www.valleyhealthplan.org/Pages/default.aspx",
    supported: false,
  },
];
