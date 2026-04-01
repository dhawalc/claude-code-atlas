import Link from "next/link";
import { LandingScene } from "@/components/landing-scene";
import {
  featureFlags,
  featuredFlags,
  formatNumber,
  sourceRepoUrl,
  subsystemLoc,
  summary,
} from "@/lib/atlas";

const kairosRefs = featureFlags.find((flag) => flag.flag === "KAIROS")?.count ?? 156;

const launchRoutes = [
  {
    href: "/maps",
    title: "Architecture Maps",
    eyebrow: "System Shapes",
    body: "Four visual maps for the runtime core, trust stack, control plane, and platform mesh hiding in the repo.",
    accent: "cobalt",
  },
  {
    href: "/lenses",
    title: "Three Lenses",
    eyebrow: "Public Read",
    body: "Translate the source dive into lessons, invisible inventions, and resolved tensions instead of a flat walkthrough.",
    accent: "sand",
  },
  {
    href: "/deep-cuts",
    title: "Deep Cuts",
    eyebrow: "Hidden Gems",
    body: "The buried product bets, weird outliers, and non-obvious systems nobody notices on a first read.",
    accent: "ember",
  },
  {
    href: "/control-plane",
    title: "Control Plane",
    eyebrow: "Agent OS",
    body: "How AgentTool, tasks, transcripts, worktrees, mailboxes, and remote sessions combine into a hidden operating system.",
    accent: "cobalt",
  },
  {
    href: "/futures",
    title: "Forked Futures",
    eyebrow: "Product Archaeology",
    body: "Kairos, split browser futures, remote runners, and the platform shape buried in the feature flags.",
    accent: "sand",
  },
  {
    href: "/xray",
    title: "Codebase X-Ray",
    eyebrow: "Structure",
    body: "See where the code mass actually sits and why the repo reads like a platform instead of a utility.",
    accent: "cobalt",
  },
  {
    href: "/safety",
    title: "Safety Engine",
    eyebrow: "Trust Boundaries",
    body: "Follow the parser, permission rules, classifier branches, and sandbox layers that make autonomy defensible.",
    accent: "ember",
  },
  {
    href: "/compare/claw-code",
    title: "Claude Code vs claw-code",
    eyebrow: "Comparison",
    body: "Contrast the full runtime artifact with the clean-room Python parity scaffold and why that distinction matters.",
    accent: "sand",
  },
];

const shockMetrics = [
  {
    label: "KAIROS Refs",
    value: formatNumber(kairosRefs),
    note: "ambient-agent footprint",
  },
  {
    label: "Tracked Lines",
    value: formatNumber(summary.metrics.totalTrackedLines),
    note: "public code mass",
  },
  {
    label: "Lens Cards",
    value: "24",
    note: "public analysis slices",
  },
  {
    label: "Build Flags",
    value: formatNumber(summary.metrics.buildFlags),
    note: "roadmap fossils",
  },
];

const tracePills = [
  "MAPS",
  "LESSONS",
  "INVENTIONS",
  "TENSIONS",
  "CONTROL PLANE",
  "SAFETY",
];

const ribbonWords = [
  "architecture maps from source",
  "lessons hidden in the tree",
  "invisible inventions and tradeoffs",
  "terminal-native agent runtime",
  "product archaeology in source form",
];

const revelationCards = [
  {
    eyebrow: "Not A Wrapper",
    title: "Chat is only the skin",
    body: "The code underneath is mostly tools, state machinery, permissions, transport layers, and agent placement logic.",
    value: formatNumber(summary.metrics.toolDirs),
    label: "tool directories",
    tone: "cobalt",
  },
  {
    eyebrow: "Not One Product",
    title: "The repo is leaking futures",
    body: "Kairos, browser forks, remote runners, team infrastructure, and platform packaging all point to a much wider product horizon than a CLI implies.",
    value: "8",
    label: "product families",
    tone: "ember",
  },
  {
    eyebrow: "Not Just Features",
    title: "The code teaches patterns",
    body: "This Atlas now extracts reusable lessons, hidden inventions, and resolved tensions instead of stopping at architecture screenshots.",
    value: "24",
    label: "analysis cards",
    tone: "sand",
  },
];

const runtimeSteps = [
  {
    step: "01",
    title: "Maps",
    body: "Start with the system shapes so the runtime core, trust stack, control plane, and platform mesh become legible immediately.",
  },
  {
    step: "02",
    title: "Lenses",
    body: "Read the same codebase through lessons, invisible inventions, and resolved tensions instead of a flat architecture tour.",
  },
  {
    step: "03",
    title: "Deep Cuts",
    body: "Drop into the strange material: dream memory, x402, Kairos, split browser futures, and buried product bets.",
  },
  {
    step: "04",
    title: "Control Plane",
    body: "Follow how one prompt expands into placement, tasks, sidecars, worktrees, teammates, and remote execution capsules.",
  },
  {
    step: "05",
    title: "Trust Stack",
    body: "Ground the spectacle in the part that matters most: how autonomy is constrained and made inspectable.",
  },
  {
    step: "06",
    title: "Evidence",
    body: "All evidence now resolves through the local source route because the original upstream repo disappeared.",
  },
];

const lensCards = [
  {
    href: "/lessons",
    title: "Lessons",
    eyebrow: "What The World Can Learn",
    body: "The design patterns other builders should steal: compositional safety, worktrees, shells, ecosystem layers, and memory as operations.",
    accent: "cobalt",
  },
  {
    href: "/inventions",
    title: "Invisible Inventions",
    eyebrow: "Hidden Mechanisms",
    body: "The non-obvious seams and runtime moves that make this codebase feel rarer than its surface frame suggests.",
    accent: "ember",
  },
  {
    href: "/tensions",
    title: "Resolved Tensions",
    eyebrow: "Tradeoffs",
    body: "Where the repo openly wrestles with autonomy vs control, local vs remote, chat vs runtime, and product vs platform.",
    accent: "sand",
  },
];

export default function HomePage() {
  return (
    <div className="home-shell">
      <section className="spectacle-hero">
        <div className="hero-topline">
          <span>March 31, 2026 source dump</span>
          <span>war room drop 02</span>
          <span>architecture maps edition</span>
          <span>local evidence route</span>
        </div>

        <div className="hero-heading">
          <div className="hero-heading-copy">
            <h1>
              Hidden
              <br />
              In Plain Sight.
            </h1>
            <div className="hero-trace">
              {tracePills.map((pill) => (
                <span className="trace-pill" key={pill}>
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-subcopy">
            <p>
              The repo is not hiding one architecture diagram. It is hiding system
              shapes, reusable lessons, invisible inventions, resolved tensions, a
              control plane, a trust stack, and a few capabilities that have no
              business being in a normal CLI.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/maps">
                See The Maps
              </Link>
              <Link className="button button-secondary" href="/lenses">
                Read The Lenses
              </Link>
            </div>
            <div className="hero-caption">
              Source evidence currently resolves through the <Link href={sourceRepoUrl}>local source route</Link>.
            </div>
          </div>
        </div>

        <LandingScene metrics={shockMetrics} />

        <div className="shock-metric-strip">
          {shockMetrics.map((metric) => (
            <div className="shock-metric" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <p>{metric.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="signal-marquee" aria-label="Thesis ribbon">
        <div className="signal-track">
          {[...ribbonWords, ...ribbonWords].map((word, index) => (
            <span key={`${word}-${index}`}>{word}</span>
          ))}
        </div>
      </section>

      <section className="thesis-breaker">
        <div className="section-heading section-heading-breaker">
          <span className="eyebrow">The Reveal</span>
          <h2>The codebase looks ordinary only until you follow its buried seams.</h2>
          <p className="section-copy">
            The Atlas now starts with architecture maps and editorial lenses so the
            hidden structure becomes legible before you dive into the weird details.
          </p>
        </div>

        <div className="breaker-grid">
          {revelationCards.map((card) => (
            <article className={`breaker-card breaker-card-${card.tone}`} key={card.title}>
              <span className="eyebrow">{card.eyebrow}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <div className="breaker-stat">
                <strong>{card.value}</strong>
                <span>{card.label}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="runtime-path">
        <div className="runtime-path-copy">
          <span className="eyebrow">Atlas Sequence</span>
          <h2>The story now starts with system shapes, not just surprise.</h2>
          <p className="section-copy">
            The new first-scroll path establishes the maps and lenses first, then drops
            into hidden gems, control-plane behavior, and source-backed proof.
          </p>
        </div>

        <div className="runtime-ladder">
          {runtimeSteps.map((step) => (
            <article className="runtime-step" key={step.step}>
              <span>{step.step}</span>
              <strong>{step.title}</strong>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <span className="eyebrow">Three Lenses</span>
          <h2>The public story is now split into three sharper readings</h2>
          <p className="section-copy">
            Instead of flattening everything into one architecture tour, these lenses
            turn the source dive into reusable lessons, hidden inventions, and visible
            tradeoffs.
          </p>
        </div>
        <div className="route-grid lens-route-grid">
          {lensCards.map((route) => (
            <Link className={`route-card route-card-${route.accent}`} href={route.href} key={route.href}>
              <span className="eyebrow">{route.eyebrow}</span>
              <h3>{route.title}</h3>
              <p>{route.body}</p>
              <span className="route-arrow">Open lens</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <span className="eyebrow">Proof Surfaces</span>
          <h2>The rest of the Atlas cashes out the thesis</h2>
          <p className="section-copy">
            These routes are ordered by structural value first, then by supporting
            evidence and comparison.
          </p>
        </div>
        <div className="route-grid">
          {launchRoutes.map((route) => (
            <Link
              className={`route-card route-card-${route.accent}`}
              href={route.href}
              key={route.href}
            >
              <span className="eyebrow">{route.eyebrow}</span>
              <h3>{route.title}</h3>
              <p>{route.body}</p>
              <span className="route-arrow">Open route</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="split-showcase">
        <div className="showcase-panel showcase-panel-light">
          <span className="eyebrow">Feature Flag Constellation</span>
          <h2>The roadmap still leaks through the build gates</h2>
          <div className="flag-stack">
            {featuredFlags.slice(0, 6).map((flag, index) => (
              <div className="flag-row" key={flag.flag}>
                <span>{flag.flag}</span>
                <div className="flag-rail">
                  <i style={{ width: `${Math.max(flag.count * 1.8, 18)}px` }} />
                </div>
                <strong>{flag.count}</strong>
                <em>#{index + 1}</em>
              </div>
            ))}
          </div>
        </div>

        <div className="showcase-panel showcase-panel-dark">
          <span className="eyebrow">Subsystem Gravity</span>
          <h2>The code mass still sits in utilities, UI surfaces, and services</h2>
          <div className="gravity-list">
            {subsystemLoc.slice(0, 6).map((item) => (
              <div className="gravity-row" key={item.name}>
                <div className="gravity-copy">
                  <strong>{item.name}</strong>
                  <span>{item.files} files</span>
                </div>
                <div className="gravity-bar">
                  <i style={{ width: `${Math.max(item.lines / 2000, 14)}%` }} />
                </div>
                <b>{formatNumber(item.lines)}</b>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
