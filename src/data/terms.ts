/**
 * Terms of Service content for /terms. Covers use of the website only;
 * client work is governed by a signed MSA / SOW. Keep the contact address
 * in sync with SITE.email and the privacy policy. Changes to the dispute
 * section should be reviewed by counsel before publishing.
 */
import type { LegalSection } from "../components/LegalDocument";
import { SITE } from "./site";

export const TERMS_EFFECTIVE_DATE = "September 21, 2026";
export const TERMS_OPERATOR = "Techtonic Innovations LLC";

const HOST = SITE.url.replace("https://", "");

export const termsIntro = `These Terms of Service ("Terms") govern your use of ${HOST} and its pages (the "Site"), operated by ${TERMS_OPERATOR}, a Virginia limited liability company based in Reston, Virginia, USA ("Techtonic Innovations", "we", "us"). By using the Site you agree to these Terms. If you don't agree, please don't use the Site. The "Dispute resolution" section below contains a binding arbitration agreement and class-action and jury-trial waivers that affect your legal rights — please read it carefully.`;

export const termsSections: LegalSection[] = [
  {
    h2: "Using the website",
    paragraphs: [
      "You may use the Site for lawful purposes, including learning about our services and contacting us. You agree not to:",
    ],
    bullets: [
      "use the Site in a way that violates any law or the rights of others;",
      "attempt to gain unauthorized access to the Site, its hosting, or related systems, or probe, scan, or test their vulnerability without our written permission;",
      "interfere with the Site's operation, including by overloading it, introducing malware, or circumventing security or rate-limiting measures;",
      "submit false, misleading, or unlawful content through the contact form or by email, or impersonate anyone; or",
      "scrape or copy the Site's content in bulk for republication, or use it to create a competing service, except as allowed by these Terms or by law.",
    ],
  },
  {
    h2: "No professional-services relationship",
    paragraphs: [
      "Visiting the Site, submitting the contact form, emailing or calling us, or having a discovery call does not create a client, consulting, agency, employment, partnership, or fiduciary relationship. A professional-services relationship exists only when we and you both sign a written agreement — a Master Services Agreement (MSA), Statement of Work (SOW), or similar contract. That signed agreement, not these Terms or anything on the Site, governs the services, deliverables, fees, warranties, intellectual property, confidentiality, and liability for that engagement. If a signed agreement conflicts with these Terms, the signed agreement controls for that engagement.",
      "Please don't send us confidential or sensitive information before an agreement (including any confidentiality terms) is in place. Unless we've agreed otherwise in writing, information you send before then is not treated as confidential.",
    ],
  },
  {
    h2: "Estimates, proposals, and site content are informational",
    paragraphs: [
      "Descriptions of services, timelines, engagement models, examples, and any estimates, quotes, or proposals we share on the Site or before a signed agreement are for general information and discussion only. Estimates are non-binding: actual scope, schedule, and cost depend on requirements discovered during the work and are set only in a signed SOW. Proposals expire as stated in them, or after 30 days if no period is stated.",
      "Content on the Site — including articles, service pages, FAQs, and technology descriptions — is general information, not professional, legal, financial, security, or compliance advice for your situation. We may change or remove services, content, or features at any time without notice.",
    ],
  },
  {
    h2: "AI-related services and information",
    paragraphs: [
      "Much of our work involves artificial intelligence, including large language models, AI agents, and automation. AI systems can produce output that is inaccurate, incomplete, biased, outdated, or inappropriate, and can behave unpredictably with new inputs. Information on the Site about AI capabilities describes what the technology can do in general; it is not a promise of any specific result.",
      "Where we build or advise on AI systems, you remain responsible for reviewing AI output before relying on it; for maintaining appropriate human oversight of decisions that affect people; and for ensuring that your use of AI complies with the laws, regulations, industry rules, and third-party terms (including AI-provider terms) that apply to you. The allocation of responsibilities for any engagement is set out in the signed agreement for it.",
    ],
  },
  {
    h2: "Case studies and results",
    paragraphs: [
      "Our case studies describe past projects and products, including products that Techtonic Innovations itself operates. They reflect the facts of those projects at the time of writing and are provided for illustration. Results vary with each project's goals, scope, budget, data, timeline, and many factors outside our control. Past work does not guarantee future results, and nothing on the Site is a promise that your project will achieve similar outcomes.",
      "Screenshots in case studies are our own captures of publicly accessible websites. Names, marks, and site content shown belong to their respective owners and appear only to identify the project.",
    ],
  },
  {
    h2: "Intellectual property",
    paragraphs: [
      `The Site and its content — including text, graphics, code, design, and the Techtonic Innovations name and logo — are owned by ${TERMS_OPERATOR} or its licensors and are protected by copyright, trademark, and other laws. We grant you a limited, revocable, non-exclusive, non-transferable license to view and use the Site for your personal or internal business purposes, such as evaluating our services. You may share links to the Site. Any other use, including reproducing, modifying, or distributing the content, requires our prior written permission. Third-party names and trademarks belong to their owners and don't imply endorsement.`,
      "If you send us ideas, feedback, or suggestions about the Site or our services, you grant us a free, perpetual, worldwide right to use them without obligation to you. This doesn't apply to materials you provide under a signed agreement, which that agreement governs.",
    ],
  },
  {
    h2: "Third-party websites and services",
    paragraphs: [
      "The Site links to websites we don't control, including project sites featured in case studies, and relies on third-party services such as hosting, analytics, fonts, and form delivery (described in our privacy policy). We aren't responsible for third-party websites, their content, availability, security, or privacy practices, and a link isn't an endorsement. Your use of third-party websites is at your own risk and subject to their terms.",
    ],
  },
  {
    h2: "Privacy",
    paragraphs: [
      `Our privacy policy at ${SITE.url}/privacy explains how we handle information collected through the Site. It is part of these Terms.`,
    ],
  },
  {
    h2: "No warranty",
    paragraphs: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SITE AND ALL CONTENT ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE\", WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE. WE DON'T WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF HARMFUL COMPONENTS, OR THAT ITS CONTENT IS COMPLETE OR CURRENT.",
      "Some jurisdictions don't allow the exclusion of certain warranties, so some of these exclusions may not apply to you.",
    ],
  },
  {
    h2: "Limitation of liability",
    paragraphs: [
      `TO THE MAXIMUM EXTENT PERMITTED BY LAW, ${TERMS_OPERATOR.toUpperCase()} AND ITS MEMBERS, MANAGERS, EMPLOYEES, CONTRACTORS, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS OPPORTUNITY, ARISING OUT OF OR RELATING TO THE SITE OR THESE TERMS, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER THEORY, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.`,
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO YOUR USE OF THE SITE OR THESE TERMS IS LIMITED TO ONE HUNDRED U.S. DOLLARS (US$100).",
      "These limits don't apply to liability that can't be limited under applicable law. Liability for services performed under a signed agreement is governed by that agreement.",
    ],
  },
  {
    h2: "Indemnity",
    paragraphs: [
      `To the extent permitted by law, you agree to defend, indemnify, and hold harmless ${TERMS_OPERATOR} and its members, managers, employees, contractors, and agents from any claims, losses, liabilities, damages, costs, and expenses (including reasonable attorneys' fees) arising out of your misuse of the Site, your violation of these Terms, or your violation of any law or third-party right.`,
    ],
  },
  {
    h2: "Suspension and termination",
    paragraphs: [
      "We may suspend or block access to the Site, or any part of it, at any time and for any reason, including a suspected violation of these Terms. Sections that by their nature should survive — including those on intellectual property, no warranty, limitation of liability, indemnity, governing law, and dispute resolution — survive any termination.",
    ],
  },
  {
    h2: "Governing law",
    paragraphs: [
      "These Terms and any dispute arising out of or relating to them or the Site are governed by the laws of the Commonwealth of Virginia, USA, without regard to its conflict-of-laws rules, and, where applicable, the Federal Arbitration Act.",
    ],
  },
  {
    h2: "Dispute resolution: binding arbitration and class-action waiver",
    paragraphs: [
      `Informal resolution first. Before starting arbitration or a court case, you agree to email ${SITE.email} with a description of the dispute and the relief you want, and to try in good faith to resolve it with us for at least 30 days.`,
      "Binding individual arbitration. Except as stated below, any dispute, claim, or controversy arising out of or relating to these Terms or the Site (including their formation, scope, or enforceability) will be resolved by final and binding arbitration administered by the American Arbitration Association (AAA) under its Consumer Arbitration Rules or, if you use the Site on behalf of a business, its Commercial Arbitration Rules, before a single arbitrator. Unless you and we agree otherwise, the arbitration will take place in Fairfax County, Virginia, or by video conference or written submissions. The arbitrator may award the same individual relief a court could, and judgment on the award may be entered in any court with jurisdiction. Fees are allocated according to the AAA rules that apply.",
      "Class-action and jury-trial waiver. You and we each agree to bring claims only in an individual capacity, and not as a plaintiff or class member in any purported class, collective, consolidated, or representative proceeding. The arbitrator may not consolidate claims of more than one person or preside over any form of class or representative proceeding. YOU AND WE EACH WAIVE THE RIGHT TO A JURY TRIAL. If this class-action waiver is found unenforceable as to a particular claim, that claim (and only that claim) must be severed and brought in court, and the rest of this section still applies.",
      "Small-claims exception. Either of us may instead bring an individual claim in a small-claims court with jurisdiction, as long as it stays there and proceeds only on an individual basis. Either of us may also seek injunctive relief in court to stop infringement or misuse of intellectual property or unauthorized access to systems.",
      `30-day opt-out. You may opt out of this arbitration agreement by emailing ${SITE.email} within 30 days after you first use the Site or first accept these Terms (whichever is later), with the subject line "Arbitration opt-out" and your name and email address. Opting out doesn't affect any other part of these Terms.`,
      "Venue for non-arbitrable claims. Any claim that is not subject to arbitration (including if you opt out) must be brought exclusively in the state or federal courts located in or serving Fairfax County, Virginia, and you and we consent to the personal jurisdiction of those courts.",
    ],
  },
  {
    h2: "Changes to these terms",
    paragraphs: [
      "We may update these Terms from time to time. When we do, we'll post the updated Terms on this page and change the effective date above. Changes apply from the effective date and don't apply retroactively to disputes we already knew about. Continuing to use the Site after changes take effect means you accept them.",
    ],
  },
  {
    h2: "General",
    paragraphs: [
      "These Terms, together with our privacy policy, are the entire agreement between you and us about the Site. If any provision is found unenforceable, it will be enforced to the maximum extent permissible and the rest will remain in effect. Our failure to enforce a provision isn't a waiver. You may not assign these Terms without our consent; we may assign them in connection with a merger, acquisition, or sale of assets. Headings are for convenience only.",
    ],
  },
  {
    h2: "Contact",
    paragraphs: [
      `Questions about these Terms: email ${SITE.email} or call ${SITE.phoneDisplay}. ${TERMS_OPERATOR}, ${SITE.addressLocality}, Virginia, United States.`,
    ],
  },
];
