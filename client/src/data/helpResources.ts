export const HELP_CATEGORIES = [
  "All resources",
  "Housing & tenancy",
  "Legal & rights",
  "Benefits & disability",
  "Work & consumer",
  "Community support",
] as const;

export type HelpCategory = (typeof HELP_CATEGORIES)[number];

export type HelpResource = {
  id: string;
  name: string;
  category: Exclude<HelpCategory, "All resources">;
  kind: string;
  description: string;
  phones: { label: string; number: string }[];
  email?: string;
  emailNote: string;
  address: string;
  accessNote: string;
  website: string;
  sources?: { label: string; url: string }[];
};

// Public intake contacts, checked against the linked official sources on November 1, 2026.
// Do not replace an unpublished intake email with a media or administrative inbox.
export const HELP_RESOURCES: HelpResource[] = [
  {
    id: "211", name: "211 British Columbia", category: "Community support", kind: "Community referral service",
    description: "A useful starting point for food, shelter, benefits, counselling, legal resources and other local services. Free, confidential and multilingual information and referrals.",
    phones: [{ label: "Call or text", number: "211" }, { label: "Alternative phone", number: "1-888-484-3211" }],
    email: "211-help@uwbc.ca", emailNote: "Resource and referral inquiries; the website also offers email and live chat.",
    address: "Telephone and online service across BC.", accessNote: "Use the directory or a navigator to find a suitable local service.",
    website: "https://bc.211.ca/contact-us/",
    sources: [{ label: "Official service listing", url: "https://bc.211.ca/result/211-british-columbia-9491366/" }],
  },
  {
    id: "trac", name: "TRAC — Tenant Resource & Advisory Centre", category: "Housing & tenancy", kind: "Independent tenant organization",
    description: "Free tenancy information, referrals, template letters and resources for BC renters. Its Tenant Infoline can help you understand your options and find further support.",
    phones: [{ label: "Tenant Infoline", number: "604-255-0546" }, { label: "Toll-free", number: "1-800-665-1185" }],
    emailNote: "Email assistance is currently paused. Please use the Tenant Infoline.",
    address: "Phone service; see the official website for current in-person assistance locations.", accessNote: "Call first to check the help available for your tenancy.",
    website: "https://tenants.bc.ca/get-help/tenant-infoline/",
    sources: [{ label: "Email service status", url: "https://tenants.bc.ca/get-help/email-assistance/" }],
  },
  {
    id: "access-pro-bono", name: "Access Pro Bono", category: "Legal & rights", kind: "Independent legal charity",
    description: "Legal referrals and free or low-cost programs. Its Residential Tenancy Program offers qualifying low- and modest-income tenants legal help with matters before the RTB.",
    phones: [{ label: "Legal-help intake", number: "604-878-7400" }],
    email: "tenancylaw@accessprobono.ca", emailNote: "Residential Tenancy Program only. For other legal-help requests, use the official online triage form.",
    address: "Mailing only: 300–845 Cambie Street, Vancouver, BC V6B 4Z9.", accessNote: "No visitors or services at this mailing address. Eligibility and program capacity apply.",
    website: "https://www.accessprobono.ca/contact-us",
    sources: [{ label: "Residential Tenancy Program", url: "https://www.accessprobono.ca/our-programs/residential-tenancy-program" }],
  },
  {
    id: "rtb", name: "Residential Tenancy Branch (RTB)", category: "Housing & tenancy", kind: "BC government service",
    description: "Official tenancy information, forms and dispute resolution for tenants and landlords. Information officers explain the process and tenancy rules; they cannot provide legal advice.",
    phones: [{ label: "Lower Mainland", number: "604-660-1020" }, { label: "Toll-free", number: "1-800-665-8779" }],
    email: "HSRTO@gov.bc.ca", emailNote: "Information inquiries. Follow the RTB's specified process for submitting evidence.",
    address: "400–5021 Kingsway, Burnaby, BC V5H 4A5.", accessNote: "Serves Vancouver residents. Check current office hours before visiting.",
    website: "https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies/contact-the-residential-tenancy-branch",
  },
  {
    id: "legal-aid", name: "Legal Aid BC", category: "Legal & rights", kind: "Public legal-aid service",
    description: "Legal help for eligible people with certain family, criminal, child-protection and immigration matters, plus legal information and referrals. Coverage and financial eligibility vary.",
    phones: [{ label: "Apply for legal aid", number: "604-408-2172" }, { label: "Toll-free intake", number: "1-866-577-2525" }],
    email: "info@legalaid.bc.ca", emailNote: "General inquiries only; legal advice is not available by email. Phone intake to apply.",
    address: "Vancouver intake: 425–510 Burrard Street, Vancouver, BC V6C 3A8.", accessNote: "Appointments encouraged for in-person intake; call ahead.",
    website: "https://legalaid.bc.ca/contact/call-us",
    sources: [{ label: "Vancouver intake and accessibility", url: "https://legalaid.bc.ca/services/accessibility-vancouver" }],
  },
  {
    id: "dabc", name: "Disability Alliance BC — Advocacy Access", category: "Benefits & disability", kind: "Independent disability organization",
    description: "Help with disability-benefit applications and reconsiderations, including PWD, PPMB and Canada Pension Plan disability. Other DABC programs cover tax benefits and disability-related legal issues.",
    phones: [{ label: "Advocacy Access", number: "604-872-1278" }, { label: "Toll-free", number: "1-800-663-1278" }],
    email: "advocacy@dabc.ca", emailNote: "Ask for the program that fits your benefits or disability-support question.",
    address: "1450–605 Robson Street, Vancouver, BC V6B 5J3.", accessNote: "Appointment only; telephone, virtual and in-person appointments. No walk-ins.",
    website: "https://disabilityalliancebc.org/contact-us-new-looking/",
  },
  {
    id: "kettle", name: "The Kettle Society — Legal Advocacy", category: "Benefits & disability", kind: "Independent community organization",
    description: "Poverty-law information and advocacy for low-income community members, including people facing mental-health challenges or insecure housing. Help includes benefits and housing matters.",
    phones: [{ label: "Service information — ask for Legal Advocacy", number: "604-251-2801" }],
    email: "admin@thekettle.ca", emailNote: "General inquiries only; ask how to access Legal Advocacy. This is not a dedicated legal-intake inbox.",
    address: "Legal Advocacy: second floor, 1725 Venables Street, Vancouver, BC V5L 2H3.", accessNote: "Intake is first come, first served; follow-up appointments may be needed. Confirm arrangements before visiting.",
    website: "https://www.thekettle.ca/advocacy",
    sources: [{ label: "Service contacts", url: "https://www.thekettle.ca/contact-us-1" }],
  },
  {
    id: "seniors-first", name: "Seniors First BC — SAIL", category: "Community support", kind: "Independent seniors organization",
    description: "Information, advocacy and support for older adults dealing with abuse or other concerns affecting their well-being. SAIL is the intake route for its support and legal programs.",
    phones: [{ label: "Seniors Abuse & Information Line", number: "604-437-1940" }, { label: "Toll-free", number: "1-866-437-1940" }],
    emailNote: "Call SAIL for service intake. The official contact form is for people unable to call because of disability or accessibility needs.",
    address: "310–1281 West Georgia Street, Vancouver, BC V6E 3J7.", accessNote: "Client meetings by appointment only. Only mail documents if staff requests them.",
    website: "https://seniorsfirstbc.ca/contact/",
  },
  {
    id: "mosaic", name: "MOSAIC — Legal Advocacy Program", category: "Legal & rights", kind: "Independent newcomer organization",
    description: "Free community and family-law advocacy for eligible low-income immigrants and refugees, including housing and income-security issues. Currently not accepting new immigration-law clients.",
    phones: [{ label: "Legal Advocacy", number: "236-479-7153" }],
    email: "lap@mosaicbc.org", emailNote: "Email is the preferred intake method.",
    address: "201–2730 Commercial Drive, Vancouver, BC V5N 5P4.", accessNote: "Appointment only; no drop-ins.",
    website: "https://mosaicbc.org/our-programs/legal-help-for-immigrants-and-refugees/",
  },
  {
    id: "human-rights", name: "BC Human Rights Clinic", category: "Legal & rights", kind: "Community Legal Assistance Society program",
    description: "Information about provincial human-rights complaints and appointments for short legal advice. Further legal assistance may be available for eligible discrimination complaints.",
    phones: [{ label: "Inquiry line", number: "604-622-1100" }, { label: "Toll-free", number: "1-855-685-6222" }],
    email: "infobchrc@clasbc.net", emailNote: "General inquiries only; the clinic does not give legal advice by email. Use its intake process for representation.",
    address: "300–1140 West Pender Street, Vancouver, BC V6E 4G1.", accessNote: "Book advice appointments; phone appointments are available.",
    website: "https://bchrc.net/about-us/contact/",
  },
  {
    id: "workers-advisers", name: "Workers’ Advisers Office", category: "Work & consumer", kind: "BC government service — independent of WorkSafeBC",
    description: "Free advice and assistance for workers and their families about disagreements with WorkSafeBC decisions. Assistance can include reviews, appeals and certain prohibited-action matters.",
    phones: [{ label: "Lower Mainland", number: "604-335-5931" }, { label: "Toll-free", number: "1-800-663-4261" }],
    emailNote: "Use the official inquiry route or call. Existing clients can use the secure Worker Portal.",
    address: "260A–4600 Jacombs Road, Richmond, BC V6V 3B1.", accessNote: "Serves Vancouver residents; call before visiting. Report new injury claims to WorkSafeBC first.",
    website: "https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/personal-injury-and-workplace-safety/offices",
  },
  {
    id: "employment-standards", name: "Employment Standards Branch", category: "Work & consumer", kind: "BC government service",
    description: "Information and complaint processes for covered employment rights, such as unpaid wages, overtime and statutory-holiday pay. Different rules can apply to unionized or federally regulated work.",
    phones: [{ label: "Toll-free", number: "1-833-236-3700" }, { label: "Text or outside Canada/US", number: "604-660-2421" }],
    email: "EmploymentStandards@esb.gov.bc.ca", emailNote: "Employment-standards inquiries; use the official complaint process to file a complaint.",
    address: "Mailing only: PO Box 9570 Stn Prov Govt, Victoria, BC V8W 9K1.", accessNote: "Province-wide service; this mailing address is not a Vancouver walk-in office.",
    website: "https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards/contact-us",
  },
  {
    id: "consumer-protection", name: "Consumer Protection BC", category: "Work & consumer", kind: "Consumer regulator",
    description: "Information, self-help tools and complaints for the consumer transactions and industries it regulates, including certain contracts and debt-collection practices.",
    phones: [{ label: "Consumer inquiries — press 1 and leave a message", number: "1-888-564-9963" }],
    emailNote: "For consumer help, use the official online complaint and self-help route. The operations inbox listed on its site is for licensed businesses.",
    address: "Mailing only: PO Box 9244, Victoria, BC V8W 9J2.", accessNote: "Serves Vancouver residents. Calls go to voicemail; callbacks may take a few days.",
    website: "https://www.consumerprotectionbc.ca/contact-us/",
  },
  {
    id: "qmunity", name: "QMUNITY", category: "Community support", kind: "Independent 2SLGBTQIA+ organization",
    description: "Peer support, counselling, youth and older-adult programs, a legal clinic and Trans ID support. Reception can connect you with the appropriate program.",
    phones: [{ label: "Reception", number: "604-684-5307" }],
    email: "reception@qmunity.ca", emailNote: "General inquiries and program referrals.",
    address: "1170 Bute Street, Vancouver, BC V6G 1Z6.", accessNote: "Second-floor office with 23 stairs. Meetings in an accessible space can be requested.",
    website: "https://www.qmunity.ca/contact",
  },
  {
    id: "indigenous-justice", name: "Vancouver Indigenous Justice Centre", category: "Legal & rights", kind: "BC First Nations Justice Council",
    description: "Free legal and outreach support for Indigenous people dealing with criminal or child-protection matters, plus culturally relevant support and referrals. Access is available regardless of legal-aid eligibility.",
    phones: [{ label: "Vancouver centre", number: "236-455-6565" }, { label: "Central intake", number: "1-866-786-0081" }],
    email: "vancouverinfo@bcfnjc.com", emailNote: "Contact the Vancouver centre to arrange support.",
    address: "510 Beatty Street, Vancouver, BC V6B 2L3.", accessNote: "Ask the centre about current intake arrangements.",
    website: "https://bcfnjc.com/services/vancouver-indigenous-justice-centre/",
    sources: [{ label: "Official local contact listing", url: "https://bcfnjc.com/resource-map/" }],
  },
  {
    id: "bwss", name: "Battered Women’s Support Services (BWSS)", category: "Community support", kind: "Independent violence-support organization",
    description: "Support for people experiencing gender-based violence or abuse, including safety planning, advocacy, legal support and referrals.",
    phones: [{ label: "Crisis and intake", number: "604-687-1867" }, { label: "Toll-free", number: "1-855-687-1868" }],
    email: "intake@bwss.org", emailNote: "Use the intake line or email for support; call to discuss safe contact arrangements.",
    address: "Mailing only: PO Box 21503, 1424 Commercial Drive, Vancouver, BC V5L 5G2.", accessNote: "This is a mailing address, not a walk-in support location. Call for service access.",
    website: "https://www.bwss.org/support/crisis-support/",
  },
];
