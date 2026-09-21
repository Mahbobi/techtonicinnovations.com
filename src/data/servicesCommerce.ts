import type { ServiceDef } from "./services";
import { DISCOVERY_CALL, PRICING_ANSWER, TIMELINE_ANSWER } from "./serviceCopy";

/**
 * Commerce and mobile build services: Shopify stores and mobile apps.
 * See services.ts for the content rules that apply to every page.
 */
export const commerceServices: ServiceDef[] = [
  {
    slug: "shopify-development",
    navLabel: "Shopify Development",
    group: "build",
    related: ["web-application-development", "ai-automation-agency", "mobile-app-development", "ai-development-services"],
    metaTitle: "Shopify Development & AI for E-Commerce | Techtonic",
    metaDescription:
      "Shopify store builds, custom themes, headless storefronts, and custom apps — plus AI add-ons for search, support, and catalog content.",
    ogImageAlt: "Shopify development and e-commerce AI by Techtonic Innovations",
    eyebrow: "Shopify development",
    h1: "Shopify development, with AI where it earns its place",
    intro:
      "Techtonic Innovations builds and extends Shopify stores for brands that have outgrown a stock theme — custom themes, headless storefronts, custom apps and integrations — and adds practical AI features on top: better search, catalog content at scale, and support that can actually look up an order.",
    sections: [
      {
        h2: "Store builds and migrations",
        paragraphs: [
          "We build new Shopify stores and rebuild existing ones on Online Store 2.0 themes, with sections and blocks your merchandising team can rearrange without a developer. Custom themes are built for speed first: lean Liquid templates, responsive images, minimal third-party scripts, and Core Web Vitals checked before launch rather than after. For stores migrating from WooCommerce, Magento, BigCommerce, or a custom platform, we plan the product, customer, and order data migration, preserve URLs with redirects so search rankings carry over, and run the old and new stores side by side until the cut-over is verified.",
        ],
        bullets: [
          "Custom Online Store 2.0 themes and theme refactors",
          "Platform migrations with data mapping and URL redirects",
          "Performance and Core Web Vitals optimization",
          "Accessibility review against WCAG guidelines",
          "Structured data and technical SEO for product pages",
          "Analytics and conversion-event setup",
        ],
      },
      {
        h2: "Headless storefronts and custom apps",
        paragraphs: [
          "When a theme can't deliver the experience you need — complex product configurators, content-heavy storytelling, multiple regional storefronts, or a shared front end with a web app — we build headless storefronts on Shopify's Storefront API, using Hydrogen or Next.js depending on your team and hosting. Headless adds cost and complexity, so we recommend it only when a theme genuinely can't do the job, and say so when it can.",
          "For logic Shopify doesn't provide out of the box, we build custom and private apps with the Admin GraphQL API, Shopify Functions for discounts and delivery rules, and checkout UI extensions. We also build the integrations that keep a store running: ERP and inventory sync, 3PL and fulfillment, CRM and email platforms, subscriptions, and reporting pipelines into your data warehouse.",
        ],
      },
      {
        h2: "AI add-ons for Shopify stores",
        paragraphs: [
          "AI is most useful in e-commerce where it removes repetitive work or helps shoppers find the right product. Every AI feature we add is grounded in your own catalog and policies, and anything customer-facing is tested against real questions before launch.",
        ],
        subsections: [
          {
            h3: "Search and discovery",
            body: "Semantic search that understands what shoppers mean, not just the words they type, plus product recommendations and guided-selling flows that ask a few questions and suggest the right items.",
          },
          {
            h3: "Catalog content at scale",
            body: "Generated drafts of product descriptions, alt text, SEO titles, and attribute tags from your product data and brand guidelines, routed to your team for review before anything is published.",
          },
          {
            h3: "Support and order agents",
            body: "A support assistant that answers from your shipping, returns, and product policies, and — with the right permissions — can look up order status and start a return, handing off to a person for anything outside its scope. See [AI agent development](/ai-agent-development) for how we build and guard these.",
          },
          {
            h3: "Back-office automation",
            body: "Review summarization, inventory and demand forecasting, fraud-flag triage, and automated reporting — the operational work that grows with order volume. Our [AI automation agency](/ai-automation-agency) page covers this in more depth.",
          },
        ],
      },
      {
        h2: "How a Shopify engagement runs",
        paragraphs: [
          DISCOVERY_CALL +
            " We review your current store, apps, integrations, and analytics, then propose a scope — a full build, a migration, a set of custom features, or an AI add-on on its own. Work runs in two-week sprints on a development store or preview theme, so nothing touches your live store until you approve it, and launches are scheduled around your sales calendar. If you also need a companion app, we can deliver it alongside the store through our [mobile app development](/mobile-app-development) service.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you build new Shopify stores or work on existing ones?",
        a: "Both. We build new stores and custom themes, migrate stores from other platforms, and add custom features, apps, integrations, or AI capabilities to stores that are already live.",
      },
      {
        q: "Should our store go headless?",
        a: "Only if a theme can't deliver what you need — for example complex configurators, multiple regional storefronts, or a front end shared with a web app. Headless adds cost and maintenance, so for many stores a well-built Online Store 2.0 theme is the better choice, and we'll tell you so.",
      },
      {
        q: "What AI features can you add to a Shopify store?",
        a: "Semantic search and recommendations, AI-drafted product content with human review, support assistants grounded in your policies that can look up orders, and back-office automation such as review summaries and demand forecasting.",
      },
      {
        q: "How much does Shopify development cost?",
        a: PRICING_ANSWER,
      },
      {
        q: "How long does a Shopify build take?",
        a: TIMELINE_ANSWER,
      },
    ],
  },
  {
    slug: "mobile-app-development",
    navLabel: "Mobile App Development",
    group: "build",
    related: ["web-application-development", "custom-software-development", "shopify-development", "ai-development-services"],
    metaTitle: "Mobile App Development: Flutter & React Native | Techtonic",
    metaDescription:
      "Cross-platform mobile app development with Flutter and React Native, built alongside your web app and backend by one team, with AI features.",
    ogImageAlt: "Flutter and React Native mobile app development by Techtonic Innovations",
    eyebrow: "Mobile app development",
    h1: "Mobile apps with Flutter and React Native, built alongside your web platform",
    intro:
      "Techtonic Innovations builds cross-platform iOS and Android apps with Flutter and React Native — usually together with the web application and backend they depend on — so one team owns the whole product, the APIs stay consistent, and features ship to web and mobile on the same schedule.",
    sections: [
      {
        h2: "Why cross-platform, and why bundled with web",
        paragraphs: [
          "For most business apps, a single cross-platform codebase is the practical choice: one team, one set of features, and one release process for iOS and Android, instead of two native apps drifting apart. We still write native modules where a feature needs them — a specific hardware integration, a platform SDK, or performance-critical code.",
          "Building mobile and web together matters as much as the framework. When separate vendors build the app, the web front end, and the API, every feature needs three sets of coordination and the API gets shaped around whichever team shouted loudest. We design the backend and API once, for every client, and build the [web application](/web-application-development) and mobile app on top of it, so authentication, data models, and business rules stay consistent everywhere.",
        ],
      },
      {
        h2: "Flutter or React Native?",
        paragraphs: [
          "Both are mature, well-supported choices, and we recommend one per project rather than defaulting to either.",
        ],
        subsections: [
          {
            h3: "React Native",
            body: "Usually the better fit when your web app is built in React and TypeScript: types, validation, API clients, and business logic can be shared between web and mobile, and your web developers can contribute to the app. We typically build on Expo for faster builds and over-the-air updates.",
          },
          {
            h3: "Flutter",
            body: "Usually the better fit for highly custom, animation-heavy interfaces that must look identical on every device, or when the team doesn't already have a React codebase to share with. Flutter's rendering engine gives precise control over every pixel.",
          },
        ],
      },
      {
        h2: "What we build",
        paragraphs: [
          "Our mobile work covers customer-facing apps, companion apps for SaaS products and e-commerce stores, and internal field and operations tools. Whatever the category, the app is built for real-world conditions: unreliable networks, older devices, and users who expect it to work offline.",
        ],
        bullets: [
          "Customer apps and companion apps for SaaS and e-commerce",
          "Internal field-service and operations tools",
          "Offline-first data sync and background processing",
          "Push notifications, deep links, and in-app messaging",
          "Secure authentication, including SSO and biometrics",
          "App Store and Google Play submission and release management",
        ],
      },
      {
        h2: "AI features in mobile apps",
        paragraphs: [
          "Mobile apps are a natural home for AI features: an assistant grounded in your own content, document and receipt capture that extracts fields from a photo, voice input, smart search, and personalized recommendations. We decide per feature whether the model should run on the device — faster and more private, but limited — or on the server behind your API, where larger models and your data are available. Model calls always go through your backend, never with API keys shipped inside the app. Our [AI development services](/ai-development-services) team builds the models and pipelines behind these features.",
        ],
      },
      {
        h2: "How a mobile engagement runs",
        paragraphs: [
          DISCOVERY_CALL +
            " We design the API and data model first, then build the app in two-week sprints with test builds on real devices through TestFlight and Google Play internal testing, so stakeholders use the app from early on. We handle store submission, crash reporting, and analytics setup, and hand over the codebase, release process, and documentation — or keep maintaining it if you'd prefer. " +
            TIMELINE_ANSWER,
        ],
      },
    ],
    faqs: [
      {
        q: "Should we choose Flutter or React Native?",
        a: "If your web app is built with React and TypeScript, React Native usually wins because code and developers can be shared. For highly custom, animation-heavy interfaces or teams without a React codebase, Flutter is often the better fit. We recommend one per project.",
      },
      {
        q: "Can you build our web app and mobile app together?",
        a: "Yes, and we recommend it. One team designs the backend and API once and builds both clients on top of it, which keeps features, data, and business rules consistent across web, iOS, and Android.",
      },
      {
        q: "Do you publish the app to the App Store and Google Play?",
        a: "Yes. We prepare store listings and builds, handle review feedback, and set up the release process — usually under your own developer accounts so you own the listings.",
      },
      {
        q: "How much does mobile app development cost?",
        a: PRICING_ANSWER,
      },
      {
        q: "How long does it take to build a mobile app?",
        a: TIMELINE_ANSWER,
      },
    ],
  },
];
