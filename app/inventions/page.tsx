import Link from "next/link";
import { EvidenceLinks } from "@/components/evidence-links";
import { formatNumber, summary, type SourceAnchor } from "@/lib/atlas";

type Invention = {
  eyebrow: string;
  title: string;
  signal: string;
  body: string;
  sources: SourceAnchor[];
};

const inventions: Invention[] = [
  {
    eyebrow: "Invention 01",
    title: "Subagent spawning as a placement engine",
    signal: "local | pane | worktree | remote",
    body:
      "`AgentTool` is interesting because it does not just spawn helpers. It decides where work belongs, rebuilds execution envelopes, and treats several substrates as interchangeable capsules.",
    sources: [
      { label: "Agent placement", path: "src/tools/AgentTool/AgentTool.tsx", line: 282 },
      { label: "Spawn routing", path: "src/tools/AgentTool/AgentTool.tsx", line: 430 },
      { label: "Worker runtime", path: "src/tools/AgentTool/runAgent.ts", line: 248 },
    ],
  },
  {
    eyebrow: "Invention 02",
    title: "Tasks as the UI-facing projection of runtime work",
    signal: "projection layer",
    body:
      "The code keeps execution and presentation separate. Local, remote, and teammate work all surface through task objects that hold status, transcript links, notifications, and resume semantics.",
    sources: [
      { label: "Local task projection", path: "src/tasks/LocalAgentTask/LocalAgentTask.tsx", line: 197 },
      { label: "Remote task projection", path: "src/tasks/RemoteAgentTask/RemoteAgentTask.tsx", line: 60 },
      { label: "Task store", path: "src/utils/tasks.ts", line: 190 },
    ],
  },
  {
    eyebrow: "Invention 03",
    title: "Leader-side permission bridging for in-process workers",
    signal: "neutrality with one intentional hole",
    body:
      "The in-process substrate still wants to look like any other worker, but permissions need a deliberate bridge back into the leader. That seam is subtle and technically interesting.",
    sources: [
      { label: "Leader permission bridge", path: "src/utils/swarm/leaderPermissionBridge.ts", line: 1 },
      { label: "In-process backend", path: "src/utils/swarm/backends/InProcessBackend.ts", line: 26 },
      { label: "In-process runner", path: "src/utils/swarm/inProcessRunner.ts", line: 117 },
    ],
  },
  {
    eyebrow: "Invention 04",
    title: "DreamTask as explicit memory maintenance",
    signal: "auto-dream",
    body:
      "Very few public agent repos make memory consolidation this visible. Here it becomes a legible background task with phases, touched-file tracking, and UI presence.",
    sources: [
      { label: "Dream task", path: "src/tasks/DreamTask/DreamTask.ts", line: 1 },
      { label: "Bundled skill registration", path: "src/skills/bundled/index.ts", line: 37 },
      { label: "Memory selector", path: "src/components/memory/MemoryFileSelector.tsx", line: 29 },
    ],
  },
  {
    eyebrow: "Invention 05",
    title: "Append-only session ingress chains",
    signal: "durable turn ingress",
    body:
      "The runtime keeps a separate append chain for session ingress, which is a subtle way of preserving causality and resumability without pretending every event belongs to one flat transcript structure.",
    sources: [
      { label: "Session ingress", path: "src/services/api/sessionIngress.ts", line: 22 },
      { label: "Remote restore path", path: "src/tasks/RemoteAgentTask/RemoteAgentTask.tsx", line: 811 },
      { label: "Task store", path: "src/utils/tasks.ts", line: 284 },
    ],
  },
  {
    eyebrow: "Invention 06",
    title: "Team memory sync as a runtime service",
    signal: "shared memory fabric",
    body:
      "Team memory is not just a concept in prompt text here. It has a watcher and synchronization behavior, which means collective memory is treated like infrastructure.",
    sources: [
      { label: "Team memory watcher", path: "src/services/teamMemorySync/watcher.ts", line: 1 },
      { label: "Team helpers", path: "src/utils/swarm/teamHelpers.ts", line: 1 },
      { label: "Agent memory snapshot", path: "src/tools/AgentTool/agentMemorySnapshot.ts", line: 1 },
    ],
  },
  {
    eyebrow: "Invention 07",
    title: "Ink compatibility running in the browser",
    signal: "TUI logic in web form",
    body:
      "The browser-side Ink path is a small but revealing invention. It shows the team experimenting with keeping a terminal-native UI model legible even while crossing into structured browser surfaces.",
    sources: [
      { label: "Ink app page", path: "web/app/ink-app/page.tsx", line: 4 },
      { label: "Web app shell", path: "web/WebApp.tsx", line: 4 },
      { label: "Vite config", path: "web/vite.config.ts", line: 8 },
    ],
  },
  {
    eyebrow: "Invention 08",
    title: "x402 payment-aware request retry",
    signal: "402 + wallet + attestation",
    body:
      "This is the most bizarre buried mechanism in the tree: a client that can configure wallets, sign payment authorization, and retry 402 responses while living inside the same repo as subagents and shells.",
    sources: [
      { label: "x402 command", path: "src/commands/x402/x402.ts", line: 1 },
      { label: "Payment fetch wrapper", path: "src/services/x402/paymentFetch.ts", line: 1 },
      { label: "Client attestation plumbing", path: "src/services/api/client.ts", line: 365 },
    ],
  },
];

export default function InventionsPage() {
  return (
    <div className="content-shell">
      <section className="content-hero">
        <span className="eyebrow">Invisible Inventions</span>
        <h1>The hidden mechanisms most readers would miss</h1>
        <p>
          These are not necessarily patented inventions or industry firsts. They are
          the buried patterns, seams, and runtime moves that make this codebase feel
          much more original than its surface frame suggests.
        </p>
      </section>

      <section className="note-strip">
        <div className="note-chip">
          <span>Inventions</span>
          <strong>{inventions.length}</strong>
        </div>
        <div className="note-chip">
          <span>Tracked files</span>
          <strong>{formatNumber(summary.metrics.totalTrackedFiles)}</strong>
        </div>
        <div className="note-chip">
          <span>Signal type</span>
          <strong>hidden mechanisms</strong>
        </div>
        <div className="note-chip">
          <span>Read mode</span>
          <strong>discovery</strong>
        </div>
      </section>

      <section className="signal-grid">
        {inventions.map((item) => (
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
          <span className="eyebrow">Why This Lens Exists</span>
          <h2>Beauty often hides in the non-obvious seams</h2>
          <p>
            Most people will notice the CLI, the web app, and the agent talk. Fewer
            will notice the placement logic, the permission bridge, the append-only
            ingress chain, or the dream-task memory loop. Those are the details that
            make the architecture feel alive.
          </p>
        </article>

        <article className="panel">
          <span className="eyebrow">Continue</span>
          <h2>Read the tensions beside the inventions</h2>
          <div className="route-grid compact-route-grid">
            <Link className="route-card route-card-sand compact-route-card" href="/tensions">
              <span className="eyebrow">Tensions</span>
              <h3>See what the repo is wrestling with</h3>
              <p>Pair the hidden mechanisms with the tradeoffs they are trying to resolve.</p>
              <span className="route-arrow">Open route</span>
            </Link>
            <Link className="route-card route-card-cobalt compact-route-card" href="/maps">
              <span className="eyebrow">Maps</span>
              <h3>Ground the inventions visually</h3>
              <p>Use the architecture maps to make the hidden mechanisms easier to explain.</p>
              <span className="route-arrow">Open route</span>
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
