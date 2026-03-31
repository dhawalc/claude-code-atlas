import Link from "next/link";
import {
  featuredFlags,
  formatNumber,
  sourceRepoUrl,
  subsystemLoc,
  summary,
} from "@/lib/atlas";

const launchRoutes = [
  {
    href: "/xray",
    title: "Codebase X-Ray",
    eyebrow: "Structure",
    body: "Treemaps by proxy, authored hotspots, largest files, route counts, and subsystem gravity wells.",
    accent: "cobalt",
  },
  {
    href: "/safety",
    title: "Safety Engine",
    eyebrow: "Trust Boundaries",
    body: "Shell parsing, classifier-assisted approvals, PowerShell validation, and sandbox mediation.",
    accent: "ember",
  },
  {
    href: "/compare/claw-code",
    title: "Claude Code vs claw-code",
    eyebrow: "Comparison",
    body: "Runtime artifact versus clean-room parity scaffold, with a more honest framing than a Python rewrite.",
    accent: "sand",
  },
];

const heroMetrics = [
  {
    label: "Tracked Lines",
    value: formatNumber(summary.metrics.totalTrackedLines),
  },
  {
    label: "Build Flags",
    value: formatNumber(summary.metrics.buildFlags),
  },
  {
    label: "Command Dirs",
    value: formatNumber(summary.metrics.commandDirs),
  },
  {
    label: "Tool Dirs",
    value: formatNumber(summary.metrics.toolDirs),
  },
];

export default function HomePage() {
  return (
    <div className="home-shell">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow eyebrow-hot">This is not a CLI.</span>
          <h1>
            Claude Code
            <br />
            Agent Runtime Atlas
          </h1>
          <p className="hero-lead">
            A public x-ray of the safety engine, tool loop, browser split,
            feature-flag archaeology, and multi-agent control plane inside
            Claude Code.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/xray">
              Explore The X-Ray
            </Link>
            <Link className="button button-secondary" href="/safety">
              Read The Safety Story
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

        <div className="hero-stage">
          <div className="hero-ring" />
          <div className="hero-card hero-card-tall">
            <span className="eyebrow">Launch Thesis</span>
            <p className="card-quote">
              Claude Code is better understood as a terminal-native agent
              runtime with a serious permission system than as just a CLI.
            </p>
            <div className="mini-bars">
              {subsystemLoc.slice(0, 4).map((item) => (
                <div className="mini-bar-row" key={item.name}>
                  <span>{item.name}</span>
                  <div>
                    <i style={{ width: `${Math.max(item.lines / 2200, 10)}px` }} />
                  </div>
                  <strong>{formatNumber(item.lines)}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-card hero-card-float">
            <span className="eyebrow">Most Repeated Flag</span>
            <strong className="card-figure">{featuredFlags[0]?.flag}</strong>
            <p>{formatNumber(featuredFlags[0]?.count ?? 0)} explicit references</p>
          </div>
          <div className="hero-card hero-card-metric-grid">
            {heroMetrics.map((metric) => (
              <div key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <span className="eyebrow">Launch Routes</span>
          <h2>Start with the loudest signals</h2>
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
