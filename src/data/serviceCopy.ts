/**
 * Shared, reusable service-page copy. Kept in its own module so every
 * service data file can import it without a runtime import cycle through
 * services.ts. No prices, clients, or metrics are stated anywhere here.
 */
export const DISCOVERY_CALL =
  "Every engagement starts with a free discovery call, where we learn your goals, systems, and constraints before proposing a scope.";

export const PRICING_ANSWER =
  "Pricing depends on scope, team composition, and engagement model (fixed-scope project, dedicated team, or staff augmentation). We don't publish flat rates because a two-week automation and a multi-quarter platform build cost very differently — instead, we scope your specific project on a free discovery call and follow up with a transparent, itemized estimate.";

export const TIMELINE_ANSWER =
  "We work in agile two-week sprints with visible progress every cycle. Many MVPs and first production releases ship in 6 to 12 weeks depending on scope; larger platforms are broken into sprint-sized milestones so you see working software early and often.";

/** Used where a fixed-price package would otherwise show a dollar figure. */
export const FIXED_PRICE_ANSWER =
  "It's a fixed price, scoped on a free call. We don't publish a rate card because the price depends on how many systems, teams, and workflows are in scope — after the discovery call you get a written proposal with a single fixed fee, the exact deliverables, and the dates, so there are no open-ended hourly surprises.";
