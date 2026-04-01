import Link from "next/link";
import {
  featureFlags,
  formatNumber,
  resolveSourceAnchorHref,
  type SourceAnchor,
  sourceRepoFileUrl,
  summary,
} from "@/lib/atlas";

type DeepCut = {
  eyebrow: string;
  title: string;
  signal: string;
  body: string;
  sources: SourceAnchor[];
};

const kairosRefs = featureFlags.find((flag) => flag.flag === "KAIROS")?.count ?? 156;

const deepCuts: DeepCut[] = [
  {
    eyebrow: "Product Bet",
    title: "Kairos was probably the real bet",
    signal: `${formatNumber(kairosRefs)} flag refs`,
    body:
      "The code keeps pointing away from simple chat turns and toward an ambient agent that can receive channel events, wake on ticks, and use Brief as its primary visible output instead of raw transcript spam.",
    sources: [
      { label: "KAIROS flag density", path: "docs/atlas/data/feature-flags.json" },
      { label: "Inbound channels", path: "src/main.tsx", line: 1635 },
      { label: "Proactive mode prompt", path: "src/main.tsx", line: 2197 },
      { label: "Brief as output channel", path: "src/tools/BriefTool/BriefTool.ts", line: 136 },
    ],
  },
  {
    eyebrow: "Browser Split",
    title: "There were two browser futures",
    signal: "terminal web + structured web",
    body:
      "One branch built a multi-user PTY terminal service with auth, metrics, and resumable sessions. Another built a structured workspace with editor, file APIs, collaboration roles, and even a browser-side Ink compatibility layer.",
    sources: [
      { label: "PTY server", path: "src/server/web/pty-server.ts", line: 40 },
      { label: "Terminal session stack", path: "src/server/web/terminal.ts", line: 24 },
      { label: "Modern WebApp shell", path: "web/WebApp.tsx", line: 4 },
      { label: "Ink in the browser", path: "web/app/ink-app/page.tsx", line: 4 },
    ],
  },
  {
    eyebrow: "Remote Plane",
    title: "Remote execution was turning into a control plane",
    signal: "CCR + triggers + BYOC",
    body:
      "This repo is not just a remote-login feature. It has scheduled remote agents, persisted remote task types, a remote setup flow that uploads GitHub auth and provisions environments, and separate self-hosted/BYOC entrypoints.",
    sources: [
      { label: "Scheduled remote agents", path: "src/skills/bundled/scheduleRemoteAgents.ts", line: 174 },
      { label: "Remote trigger tool", path: "src/tools/RemoteTriggerTool/RemoteTriggerTool.ts", line: 44 },
      { label: "Persisted remote tasks", path: "src/tasks/RemoteAgentTask/RemoteAgentTask.tsx", line: 60 },
      { label: "Self-hosted runner entry", path: "src/entrypoints/cli.tsx", line: 224 },
    ],
  },
  {
    eyebrow: "Hidden OS",
    title: "AgentTool is a placement engine",
    signal: "local, worktree, pane, remote",
    body:
      "The subagent system is not a helper. It is a scheduler that decides where work lands, rebuilds tool and permission envelopes for workers, and treats worktrees, in-process agents, tmux panes, and remote CCR sessions as interchangeable execution capsules.",
    sources: [
      { label: "Placement decisions", path: "src/tools/AgentTool/AgentTool.tsx", line: 282 },
      { label: "Spawn routing", path: "src/tools/AgentTool/AgentTool.tsx", line: 430 },
      { label: "Isolation and envelope rebuild", path: "src/tools/AgentTool/AgentTool.tsx", line: 567 },
      { label: "Shared worker runtime", path: "src/tools/AgentTool/runAgent.ts", line: 248 },
    ],
  },
  {
    eyebrow: "Trust Stack",
    title: "Safety is compositional, not centralized",
    signal: "parser + rules + classifier + sandbox",
    body:
      "The surprising part is not that there is a safety gate. It is that the system refuses to trust any single layer. Tool exposure, structural parsing, rule-based permissions, optional classifier judgment, and sandbox mediation all remain distinct authorities.",
    sources: [
      { label: "User shell vs model tool split", path: "src/utils/processUserInput/processBashCommand.tsx", line: 68 },
      { label: "Permission branching", path: "src/utils/permissions/permissions.ts", line: 518 },
      { label: "Bash parser risk handling", path: "src/tools/BashTool/bashPermissions.ts", line: 1073 },
      { label: "Sandbox boundary", path: "src/utils/sandbox/sandbox-adapter.ts", line: 230 },
    ],
  },
  {
    eyebrow: "Memory",
    title: "There is a dream agent hiding in the task system",
    signal: "auto-dream memory consolidation",
    body:
      "The code explicitly surfaces a background dream task whose job is memory consolidation. It reviews sessions, tracks files touched, and exists mainly so an otherwise invisible memory-reflection subagent becomes legible in the UI.",
    sources: [
      { label: "Dream task entry", path: "src/tasks/DreamTask/DreamTask.ts", line: 1 },
      { label: "Dream phases and touched files", path: "src/tasks/DreamTask/DreamTask.ts", line: 20 },
      { label: "Dream skill registration", path: "src/skills/bundled/index.ts", line: 37 },
      { label: "Memory field selector", path: "src/components/memory/MemoryFileSelector.tsx", line: 29 },
    ],
  },
  {
    eyebrow: "Outlier",
    title: "The client contains an x402 crypto payment path",
    signal: "HTTP 402 + wallet management",
    body:
      "This is the strangest buried capability in the tree. The CLI can configure wallets, track per-session spend, and transparently retry requests after signing x402 payment authorizations for HTTP 402 responses.",
    sources: [
      { label: "x402 command", path: "src/commands/x402/x402.ts", line: 1 },
      { label: "402 fetch wrapper", path: "src/services/x402/paymentFetch.ts", line: 1 },
      { label: "Attestation plumbing", path: "src/services/api/client.ts", line: 365 },
      { label: "Native client attestation constants", path: "src/constants/system.ts", line: 64 },
    ],
  },
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

export default function DeepCutsPage() {
  return (
    <div className="content-shell">
      <section className="content-hero">
        <span className="eyebrow">Deep Cuts</span>
        <h1>Hidden secrets and codebase gems</h1>
        <p>
          The interesting part of this repo is not the obvious architecture. It is the
          buried product bets, half-collapsed futures, strange capability clusters,
          and the subsystems that read like internal strategy leaking into source.
        </p>
      </section>

      <section className="note-strip">
        <div className="note-chip">
          <span>Tracked lines</span>
          <strong>{formatNumber(summary.metrics.totalTrackedLines)}</strong>
        </div>
        <div className="note-chip">
          <span>KAIROS refs</span>
          <strong>{formatNumber(kairosRefs)}</strong>
        </div>
        <div className="note-chip">
          <span>Product families</span>
          <strong>8</strong>
        </div>
        <div className="note-chip">
          <span>Oddest outlier</span>
          <strong>x402</strong>
        </div>
      </section>

      <section className="signal-grid">
        {deepCuts.map((item) => (
          <article className="signal-card" key={item.title}>
            <span className="eyebrow">{item.eyebrow}</span>
            <h2>{item.title}</h2>
            <div className="signal-value">{item.signal}</div>
            <p>{item.body}</p>
            <EvidenceLinks sources={item.sources} />
          </article>
        ))}
      </section>

      <section className="content-grid two-up">
        <article className="panel">
          <span className="eyebrow">War Room Thesis</span>
          <h2>The repo is leaking futures, not just features</h2>
          <p>
            Read together, these findings point to one larger conclusion: Claude Code
            was being pulled toward a multi-surface agent runtime and control plane,
            not merely a better terminal chatbot. Ambient Kairos behavior, split browser
            futures, substrate-neutral agent placement, dream-based memory maintenance,
            and even payment plumbing all suggest a much wider product horizon than the
            CLI frame implies.
          </p>
        </article>

        <article className="panel">
          <span className="eyebrow">Continue</span>
          <h2>Follow the hidden threads</h2>
          <div className="route-grid compact-route-grid">
            <Link className="route-card route-card-cobalt compact-route-card" href="/control-plane">
              <span className="eyebrow">Control Plane</span>
              <h3>The hidden operating system</h3>
              <p>How tasks, transcripts, worktrees, mailboxes, and remote sessions line up.</p>
              <span className="route-arrow">Open route</span>
            </Link>
            <Link className="route-card route-card-ember compact-route-card" href="/futures">
              <span className="eyebrow">Forked Futures</span>
              <h3>The futures buried in the tree</h3>
              <p>Browser split, Kairos, remote runners, and platform externalization.</p>
              <span className="route-arrow">Open route</span>
            </Link>
          </div>
          <div className="anchor-list atlas-inline-links">
            <a className="anchor-row" href={sourceRepoFileUrl("docs/atlas/README.md")} rel="noreferrer" target="_blank">
              <strong>Atlas research README</strong>
              <span>The internal source-backed thesis this public app is building on.</span>
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
