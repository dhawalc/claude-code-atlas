import {
  formatNumber,
  resolveSourceAnchorHref,
  type SourceAnchor,
  summary,
} from "@/lib/atlas";

type Layer = {
  eyebrow: string;
  title: string;
  body: string;
  sources: SourceAnchor[];
};

type MatrixRow = {
  axis: string;
  left: string;
  right: string;
};

const layers: Layer[] = [
  {
    eyebrow: "Placement",
    title: "AgentTool behaves like a scheduler",
    body:
      "A single agent spawn can route into local foreground work, background tasks, worktree isolation, pane-backed teammates, or remote CCR execution. The important part is that worker tool and permission envelopes are rebuilt per placement.",
    sources: [
      { label: "Placement logic", path: "src/tools/AgentTool/AgentTool.tsx", line: 282 },
      { label: "Spawn routing", path: "src/tools/AgentTool/AgentTool.tsx", line: 430 },
      { label: "Isolation routing", path: "src/tools/AgentTool/AgentTool.tsx", line: 643 },
    ],
  },
  {
    eyebrow: "Task Plane",
    title: "Tasks are projections, not the runtime itself",
    body:
      "Local, in-process, and remote agents all surface through task objects. Those task records are how the UI, notifications, transcript links, and resume semantics stay coherent even when execution moves across substrates.",
    sources: [
      { label: "Local task projection", path: "src/tasks/LocalAgentTask/LocalAgentTask.tsx", line: 197 },
      { label: "Foreground to background migration", path: "src/tasks/LocalAgentTask/LocalAgentTask.tsx", line: 526 },
      { label: "Remote task restoration", path: "src/tasks/RemoteAgentTask/RemoteAgentTask.tsx", line: 477 },
    ],
  },
  {
    eyebrow: "State Plane",
    title: "The host machine acts like a control database",
    body:
      "Task lists, team files, transcript sidecars, session-ingress chains, and remote metadata are all persisted independently of any single turn. That is why the system reads more like a control plane than a one-process app.",
    sources: [
      { label: "Task store semantics", path: "src/utils/tasks.ts", line: 190 },
      { label: "Team cleanup path", path: "src/utils/swarm/teamHelpers.ts", line: 641 },
      { label: "Session ingress append chain", path: "src/services/api/sessionIngress.ts", line: 22 },
      { label: "Remote metadata restore", path: "src/tasks/RemoteAgentTask/RemoteAgentTask.tsx", line: 811 },
    ],
  },
  {
    eyebrow: "Substrates",
    title: "Execution capsules are meant to be swappable",
    body:
      "The code keeps normalizing in-process teammates, pane-backed swarms, worktree sessions, and remote CCR runs into the same control fabric. Even in-process mode still uses mailbox and task protocols, with only permissions taking a private shortcut.",
    sources: [
      { label: "In-process backend", path: "src/utils/swarm/backends/InProcessBackend.ts", line: 26 },
      { label: "Leader permission bridge", path: "src/utils/swarm/leaderPermissionBridge.ts", line: 1 },
      { label: "In-process runner", path: "src/utils/swarm/inProcessRunner.ts", line: 117 },
      { label: "Worktree lifecycle", path: "src/utils/worktree.ts", line: 208 },
    ],
  },
];

const runtimeSteps = [
  {
    step: "01",
    title: "A user turn enters the runtime",
    body:
      "The prompt does not go straight to one worker. It enters a system that can branch into local execution, teammate spawn, worktree creation, or remote session creation.",
  },
  {
    step: "02",
    title: "Placement decides the execution capsule",
    body:
      "AgentTool and its helpers choose substrate based on isolation, backgrounding, worktree mode, and remote eligibility rather than treating subagents as one mechanism.",
  },
  {
    step: "03",
    title: "Task objects project the work into UI and state",
    body:
      "Tasks become the stable public interface for work in flight. They hold IDs, statuses, transcripts, task output links, notifications, and resume handles.",
  },
  {
    step: "04",
    title: "State is persisted outside the worker",
    body:
      "Task JSON, team files, sidecars, and session append chains survive beyond any one process. That persistence is what makes the system resumable and distributable.",
  },
  {
    step: "05",
    title: "Execution can move without breaking the model",
    body:
      "Because the control fabric stays stable, the same user-facing session can absorb in-process work, pane-backed teammates, worktrees, and remote CCR jobs without changing its basic semantics.",
  },
];

const substrateRows: MatrixRow[] = [
  {
    axis: "In-process teammate",
    left: "Shares task and mailbox protocol with the rest of the swarm",
    right: "Short-circuits permissions through a leader-side bridge",
  },
  {
    axis: "Pane-backed teammate",
    left: "Uses the same team files and task tracking model",
    right: "Materializes as tmux or iTerm execution instead of same-process work",
  },
  {
    axis: "Worktree session",
    left: "Still belongs to the same control fabric and resume story",
    right: "Gets its own checkout, branch state, and cleanup lifecycle",
  },
  {
    axis: "Remote CCR task",
    left: "Registers locally and restores into the same UI/task system",
    right: "Runs outside the host and is polled through remote status channels",
  },
];

const tensions = [
  {
    title: "Task namespace seam",
    body:
      "The strongest architectural tension is that task-list ownership appears to straddle two IDs: team-name oriented cleanup on one side and parent-session-ID logic on the other. That looks like migration sediment and a real split-brain risk.",
    sources: [
      { label: "Task store", path: "src/utils/tasks.ts", line: 284 },
      { label: "Team cleanup", path: "src/utils/swarm/teamHelpers.ts", line: 641 },
      { label: "Runner namespace use", path: "src/utils/swarm/inProcessRunner.ts", line: 1015 },
    ],
  },
  {
    title: "Permission neutrality breaks in one place",
    body:
      "The whole design pushes toward substrate interchangeability, then permissions punch a deliberate hole through that neutrality. In-process workers still need a module-level bridge into the leader's permission queue.",
    sources: [
      { label: "Leader bridge", path: "src/utils/swarm/leaderPermissionBridge.ts", line: 1 },
      { label: "In-process backend behavior", path: "src/utils/swarm/backends/InProcessBackend.ts", line: 148 },
      { label: "Runner integration", path: "src/utils/swarm/inProcessRunner.ts", line: 1175 },
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

export default function ControlPlanePage() {
  return (
    <div className="content-shell">
      <section className="content-hero">
        <span className="eyebrow">Control Plane</span>
        <h1>The hidden operating system inside the CLI</h1>
        <p>
          The non-obvious reading is that this repo behaves like a single-user,
          host-local distributed control plane. Placement, task projection, state
          persistence, and substrate switching matter as much as the model loop.
        </p>
      </section>

      <section className="note-strip">
        <div className="note-chip">
          <span>Tracked files</span>
          <strong>{formatNumber(summary.metrics.totalTrackedFiles)}</strong>
        </div>
        <div className="note-chip">
          <span>Tool dirs</span>
          <strong>{formatNumber(summary.metrics.toolDirs)}</strong>
        </div>
        <div className="note-chip">
          <span>Task substrates</span>
          <strong>4</strong>
        </div>
        <div className="note-chip">
          <span>Core seam</span>
          <strong>namespace split</strong>
        </div>
      </section>

      <section className="signal-grid">
        {layers.map((layer) => (
          <article className="signal-card" key={layer.title}>
            <span className="eyebrow">{layer.eyebrow}</span>
            <h2>{layer.title}</h2>
            <p>{layer.body}</p>
            <EvidenceLinks sources={layer.sources} />
          </article>
        ))}
      </section>

      <section className="panel">
        <span className="eyebrow">Runtime Trace</span>
        <h2>How one prompt fans out into many execution capsules</h2>
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

      <section className="panel">
        <span className="eyebrow">Substrate Matrix</span>
        <h2>What stays stable versus what actually changes</h2>
        <div className="matrix-table">
          <div className="matrix-header">
            <span>Substrate</span>
            <span>What stays the same</span>
            <span>What changes</span>
          </div>
          {substrateRows.map((row) => (
            <div className="matrix-row" key={row.axis}>
              <strong>{row.axis}</strong>
              <p>{row.left}</p>
              <p>{row.right}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-grid two-up">
        {tensions.map((tension) => (
          <article className="panel" key={tension.title}>
            <span className="eyebrow">Architectural Tension</span>
            <h2>{tension.title}</h2>
            <p>{tension.body}</p>
            <EvidenceLinks sources={tension.sources} />
          </article>
        ))}
      </section>
    </div>
  );
}
