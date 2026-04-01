import {
  featureFlags,
  formatNumber,
  resolveSourceAnchorHref,
  type SourceAnchor,
  sourceRepoFileUrl,
} from "@/lib/atlas";

type FutureCard = {
  eyebrow: string;
  title: string;
  signal: string;
  body: string;
  sources: SourceAnchor[];
};

type MatrixRow = {
  axis: string;
  claude: string;
  future: string;
};

const kairosRefs = featureFlags.find((flag) => flag.flag === "KAIROS")?.count ?? 156;

const futureCards: FutureCard[] = [
  {
    eyebrow: "Ambient Future",
    title: "Kairos points toward an always-on agent",
    signal: `${formatNumber(kairosRefs)} refs`,
    body:
      "Kairos, channels, proactive ticks, and Brief together suggest a runtime that was drifting toward ambient, event-driven operation rather than turn-based REPL chat.",
    sources: [
      { label: "Flag density", path: "docs/atlas/data/feature-flags.json" },
      { label: "Channels gate", path: "src/main.tsx", line: 1635 },
      { label: "Proactive system prompt", path: "src/main.tsx", line: 2203 },
      { label: "Brief UX role", path: "src/tools/BriefTool/BriefTool.ts", line: 136 },
    ],
  },
  {
    eyebrow: "Browser Future",
    title: "The web story forked in two",
    signal: "PTY service vs structured workspace",
    body:
      "The repo contains both a terminal-in-browser product and a newer structured app shell with file APIs, collaboration, and even Ink compatibility. That is a strategic fork, not a gradual refactor.",
    sources: [
      { label: "PTY server", path: "src/server/web/pty-server.ts", line: 40 },
      { label: "Terminal stack", path: "src/server/web/terminal.ts", line: 24 },
      { label: "WebApp shell", path: "web/WebApp.tsx", line: 4 },
      { label: "Vite standalone web build", path: "web/vite.config.ts", line: 8 },
    ],
  },
  {
    eyebrow: "Remote Future",
    title: "Remote agents were becoming infrastructure",
    signal: "scheduled CCR + BYOC",
    body:
      "Remote sessions are not a bolt-on. The repo supports scheduled remote agents, environment setup, persistent remote task types, remote plan/review flows, and self-hosted execution paths.",
    sources: [
      { label: "Scheduled remote agents", path: "src/skills/bundled/scheduleRemoteAgents.ts", line: 174 },
      { label: "Ultraplan remote planning", path: "src/commands/ultraplan.tsx", line: 25 },
      { label: "Remote task types", path: "src/tasks/RemoteAgentTask/RemoteAgentTask.tsx", line: 60 },
      { label: "Remote setup flow", path: "src/commands/remote-setup/remote-setup.tsx", line: 127 },
    ],
  },
  {
    eyebrow: "Team Future",
    title: "Subagents had already crossed into team infrastructure",
    signal: "coordinator + teammates + team memory",
    body:
      "Coordinator mode, teammate mailboxes, agent teams, and team-memory sync all suggest a system thinking in terms of coordinated worker organizations instead of one assistant process.",
    sources: [
      { label: "Coordinator mode", path: "src/coordinator/coordinatorMode.ts", line: 111 },
      { label: "Agent teams gate", path: "src/utils/agentSwarmsEnabled.ts", line: 15 },
      { label: "Teammate mailbox", path: "src/utils/teammateMailbox.ts", line: 1 },
      { label: "Team memory sync watcher", path: "src/services/teamMemorySync/watcher.ts", line: 1 },
    ],
  },
  {
    eyebrow: "Platform Future",
    title: "Plugins and skills were escaping the CLI",
    signal: "marketplace + MCP + skill improvement",
    body:
      "Marketplace-aware plugins, MCP-native skills, and skill self-improvement all point toward a programmable agent platform that happens to ship as a CLI binary.",
    sources: [
      { label: "Plugin loader", path: "src/utils/plugins/pluginLoader.ts", line: 1 },
      { label: "Marketplace manager", path: "src/utils/plugins/marketplaceManager.ts", line: 1 },
      { label: "Bundled app-building skill", path: "src/skills/bundled/claudeApi.ts", line: 180 },
      { label: "Skill improvement hook", path: "src/utils/hooks/skillImprovement.ts", line: 184 },
    ],
  },
];

const surfaceRows: MatrixRow[] = [
  {
    axis: "CLI",
    claude: "Looks like the product from the outside",
    future: "Actually behaves like a launcher and runtime shell for several products",
  },
  {
    axis: "Web",
    claude: "Seems like one browser companion story",
    future: "Contains two distinct browser futures with different product assumptions",
  },
  {
    axis: "Remote",
    claude: "Appears to be session resume and remote control",
    future: "Expands into scheduled agents, remote review, remote planning, and environment provisioning",
  },
  {
    axis: "Extensibility",
    claude: "Feels like optional plugin garnish",
    future: "Acts more like platform packaging for commands, MCP, LSP, and skill surfaces",
  },
  {
    axis: "Teams",
    claude: "Reads like subagent convenience",
    future: "Looks more like a manager-worker control fabric with memory and coordination modes",
  },
];

const productFamilies = [
  "CLI shell",
  "PTY web terminal",
  "Structured web workspace",
  "Bridge and claude.ai remote control",
  "IDE bridge over MCP",
  "Remote runners and scheduled agents",
  "Explorer MCP server",
  "Chrome and native host bridges",
];

function EvidenceLinks({ sources }: { sources: SourceAnchor[] }) {
  return (
    <div className="source-list">
      {sources.map((source) => (
        <a
          className="source-link"
          href={resolveSourceAnchorHref(source)}
          key={source.label}
          rel="noreferrer"
          target="_blank"
        >
          <strong>{source.label}</strong>
          <span>Open source</span>
        </a>
      ))}
    </div>
  );
}

export default function FuturesPage() {
  return (
    <div className="content-shell">
      <section className="content-hero">
        <span className="eyebrow">Forked Futures</span>
        <h1>Where the codebase thought it was going</h1>
        <p>
          Feature archaeology says this runtime was being stretched in several directions
          at once: ambient operation, browser workspaces, remote infrastructure, team
          orchestration, and platform externalization. The interesting part is where
          those futures overlap and where they never fully collapse into one product.
        </p>
      </section>

      <section className="note-strip">
        <div className="note-chip">
          <span>KAIROS refs</span>
          <strong>{formatNumber(kairosRefs)}</strong>
        </div>
        <div className="note-chip">
          <span>Browser futures</span>
          <strong>2</strong>
        </div>
        <div className="note-chip">
          <span>Product families</span>
          <strong>8</strong>
        </div>
        <div className="note-chip">
          <span>Platform layers</span>
          <strong>plugins + skills</strong>
        </div>
      </section>

      <section className="signal-grid">
        {futureCards.map((item) => (
          <article className="signal-card" key={item.title}>
            <span className="eyebrow">{item.eyebrow}</span>
            <h2>{item.title}</h2>
            <div className="signal-value">{item.signal}</div>
            <p>{item.body}</p>
            <EvidenceLinks sources={item.sources} />
          </article>
        ))}
      </section>

      <section className="panel">
        <span className="eyebrow">Surface Matrix</span>
        <h2>What each product surface secretly reveals</h2>
        <div className="matrix-table">
          <div className="matrix-header">
            <span>Surface</span>
            <span>Obvious reading</span>
            <span>Hidden direction</span>
          </div>
          {surfaceRows.map((row) => (
            <div className="matrix-row" key={row.axis}>
              <strong>{row.axis}</strong>
              <p>{row.claude}</p>
              <p>{row.future}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-grid two-up">
        <article className="panel">
          <span className="eyebrow">Families</span>
          <h2>The repo already behaves like a product portfolio</h2>
          <div className="facts-list dense-facts-list">
            {productFamilies.map((family) => (
              <div key={family}>{family}</div>
            ))}
          </div>
        </article>

        <article className="panel">
          <span className="eyebrow">Source Trail</span>
          <h2>Research anchors</h2>
          <div className="anchor-list atlas-inline-links">
            <a className="anchor-row" href={sourceRepoFileUrl("docs/atlas/app-spec.md")} rel="noreferrer" target="_blank">
              <strong>Atlas app spec</strong>
              <span>The original brief for turning this research into a museum-plus-lab public app.</span>
            </a>
            <a className="anchor-row" href={sourceRepoFileUrl("docs/atlas/diagrams.md")} rel="noreferrer" target="_blank">
              <strong>Diagram backlog</strong>
              <span>The source list of visuals implied by these forked futures.</span>
            </a>
            <a className="anchor-row" href={sourceRepoFileUrl("docs/atlas/data/feature-flags.json")} rel="noreferrer" target="_blank">
              <strong>Feature-flag inventory</strong>
              <span>The raw dataset behind the futures and product-archaeology read.</span>
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
