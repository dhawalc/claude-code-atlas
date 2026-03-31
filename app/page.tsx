import Link from "next/link";
import { LandingScene } from "@/components/landing-scene";
import {
  featuredFlags,
  formatNumber,
  largestSourceFiles,
  sourceRepoUrl,
  subsystemLoc,
  summary,
  surfaceInventory,
} from "@/lib/atlas";

const launchRoutes = [
  {
    href: "/xray",
    title: "Codebase X-Ray",
    eyebrow: "Structure",
    body: "See where the code mass actually sits, which files dominate, and why the repo reads like a platform instead of a utility.",
    accent: "cobalt",
  },
  {
    href: "/safety",
    title: "Safety Engine",
    eyebrow: "Trust Boundaries",
    body: "Follow the shell parser, classifier gates, approval logic, and sandbox layers that make autonomy defensible.",
    accent: "ember",
  },
  {
    href: "/compare/claw-code",
    title: "Claude Code vs claw-code",
    eyebrow: "Comparison",
    body: "Contrast the full runtime artifact with the clean-room Python parity scaffold and explain why that distinction matters.",
    accent: "sand",
  },
];

const shockMetrics = [
  {
    label: "Tracked Lines",
    value: formatNumber(summary.metrics.totalTrackedLines),
    note: "public code mass",
  },
  {
    label: "Build Flags",
    value: formatNumber(summary.metrics.buildFlags),
    note: "roadmap fossils",
  },
  {
    label: "Largest File",
    value: formatNumber(largestSourceFiles[0]?.lines ?? 0),
    note: largestSourceFiles[0]?.path ?? "n/a",
  },
  {
    label: "TODO Markers",
    value: formatNumber(summary.metrics.todoMarkers),
    note: "visible unfinished edges",
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
  "terminal-native agent runtime",
  "tool-governed autonomy",
  "permission-aware execution",
  "browser and remote surfaces",
  "agent swarms and worktrees",
];

const revelationCards = [
  {
    eyebrow: "Not A Wrapper",
    title: "Chat is only the skin",
    body: "The UI reads conversationally. The repo underneath is mostly tools, safety logic, execution layers, and stateful system plumbing.",
    value: formatNumber(surfaceInventory.tools.count),
    label: "tool directories",
    tone: "cobalt",
  },
  {
    eyebrow: "Not Vibes",
    title: "Autonomy gets engineered",
    body: "Shell parsing, classifier gates, approval states, and sandbox adapters show up as real architectural mass rather than policy copy.",
    value: formatNumber(summary.metrics.buildFlags),
    label: "feature flags",
    tone: "ember",
  },
  {
    eyebrow: "Not Just One Surface",
    title: "A session can leak into a system",
    body: "Browser routes, remote sessions, PTY infrastructure, bridge mode, and swarm behavior make the runtime feel more like a platform than a command.",
    value: formatNumber(summary.metrics.webApiRoutes),
    label: "web API routes",
    tone: "sand",
  },
];

const runtimeSteps = [
  {
    step: "01",
    title: "Ingress",
    body: "A prompt enters through the CLI or another surface, then lands in query orchestration rather than a thin request wrapper.",
  },
  {
    step: "02",
    title: "Tool Routing",
    body: "Capabilities are declared, selected, and executed as first-class runtime actions. The system is built around tool use, not around pretending text is enough.",
  },
  {
    step: "03",
    title: "Permission Gates",
    body: "Risky actions pass through parsing, classification, allow or deny logic, and escalation states before they touch the machine.",
  },
  {
    step: "04",
    title: "Execution",
    body: "Approved actions fan into shells, sandboxes, worktrees, servers, and other operating surfaces that make the agent materially effective.",
  },
  {
    step: "05",
    title: "Continuity",
    body: "Memory, tasks, sessions, and remote state accumulate, which is why the runtime starts behaving like an ongoing system instead of a turn-based toy.",
  },
];

export default function HomePage() {
  return (
    <div className="home-shell">
      <section className="spectacle-hero">
        <div className="hero-topline">
          <span>March 31, 2026 source dump</span>
          <span>public atlas</span>
          <span>evidence over hype</span>
        </div>

        <div className="hero-heading">
          <div className="hero-heading-copy">
            <h1>
              Cut Open
              <br />
              The CLI.
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
              When the wrapper breaks, the runtime spills out: shell parsing,
              permission gates, tool execution, browser surfaces, memory,
              remote sessions, and agent swarms.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/xray">
                See The Internal X-Ray
              </Link>
              <Link className="button button-secondary" href="/safety">
                Read The Safety Stack
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
          <h2>This stops reading like a CLI the moment you look at the internals.</h2>
          <p className="section-copy">
            The page has to earn its drama. These are the three claims the codebase
            can actually support in public, with source-backed routes right after.
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
          <span className="eyebrow">One Turn, Many Systems</span>
          <h2>A single prompt immediately fans out into governed software.</h2>
          <p className="section-copy">
            What looks simple from the terminal is only simple because a surprising
            amount of machinery absorbs the complexity underneath it.
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
            Spectacle without evidence collapses fast. These routes are the public
            proof points that make the homepage claims defensible.
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
          <h2>The code mass sits in utilities, UI surfaces, and services</h2>
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
