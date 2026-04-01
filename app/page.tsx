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
    label: "Product Families",
    value: "8",
    note: "hidden inside one repo",
  },
  {
    label: "Build Flags",
    value: formatNumber(summary.metrics.buildFlags),
    note: "roadmap fossils",
  },
];

const tracePills = [
  "PROMPT",
  "TOOLS",
  "PERMISSION",
  "EXECUTION",
  "MEMORY",
  "SURFACES",
];

const ribbonWords = [
  "hidden gems and buried systems",
  "terminal-native agent runtime",
  "product archaeology in source form",
  "tool-governed autonomy",
  "remote sessions and swarms",
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
    title: "The flags read like archaeology",
    body: "Feature density and split surfaces show where the runtime was heading, where it forked, and which experiments mattered enough to leave deep traces.",
    value: formatNumber(summary.metrics.buildFlags),
    label: "feature flags",
    tone: "sand",
  },
];

const runtimeSteps = [
  {
    step: "01",
    title: "Deep Cuts",
    body: "Start with the hidden secrets, the dream agent, the x402 outlier, the buried product bets, and the weird capability clusters.",
  },
  {
    step: "02",
    title: "Control Plane",
    body: "See how one prompt expands into placement, tasks, sidecars, worktrees, teammates, and remote execution capsules.",
  },
  {
    step: "03",
    title: "Forked Futures",
    body: "Track the split browser story, Kairos, remote infrastructure, and the repo's drift toward a multi-surface agent runtime.",
  },
  {
    step: "04",
    title: "Trust Stack",
    body: "Ground the spectacle in the part that matters most: how autonomy is constrained and made inspectable.",
  },
  {
    step: "05",
    title: "Evidence",
    body: "Every route is source-backed and traceable into the public repo rather than floating on marketing copy.",
  },
];

export default function HomePage() {
  return (
    <div className="home-shell">
      <section className="spectacle-hero">
        <div className="hero-topline">
          <span>March 31, 2026 source dump</span>
          <span>war room drop 01</span>
          <span>hidden gems edition</span>
          <span>evidence over hype</span>
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
              The repo is not hiding one architecture diagram. It is hiding buried
              product bets, split futures, a control plane, a trust stack, a dream
              agent, and a few capabilities that have no business being in a normal CLI.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/deep-cuts">
                Read The Deep Cuts
              </Link>
              <Link className="button button-secondary" href="/control-plane">
                See The Control Plane
              </Link>
            </div>
            <div className="hero-caption">
              Source-backed from the public code dump and linked analysis in{" "}
              <a href={sourceRepoUrl} rel="noreferrer" target="_blank">
                the source repo
              </a>
              .
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
            This public Atlas now starts where the surprising material actually is:
            hidden gems, product archaeology, and the control fabric under the CLI.
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
          <h2>The story now escalates into the weird parts on purpose.</h2>
          <p className="section-copy">
            Instead of easing into structure, the first-scroll path jumps straight into
            the hidden material and only then cashes it out with evidence routes.
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
          <span className="eyebrow">Proof Surfaces</span>
          <h2>The next click cashes out the thesis</h2>
          <p className="section-copy">
            These routes are ordered by surprise value first, then by structural proof.
            Start with the hidden gems if you want the fastest path to the buried story.
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
          <h2>The roadmap leaks through the build gates</h2>
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
