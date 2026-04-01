import Link from "next/link";
import { EvidenceLinks } from "@/components/evidence-links";
import { formatNumber, summary, type SourceAnchor } from "@/lib/atlas";

type Tension = {
  eyebrow: string;
  title: string;
  signal: string;
  body: string;
  sources: SourceAnchor[];
};

const tensions: Tension[] = [
  {
    eyebrow: "Tension 01",
    title: "Autonomy vs control",
    signal: "resolved by layers",
    body:
      "The runtime wants to act, but not recklessly. The codebase resolves that by keeping parser logic, permission rules, optional classifier judgment, and sandbox mediation as separate authorities.",
    sources: [
      { label: "Bash permissions", path: "src/tools/BashTool/bashPermissions.ts", line: 1073 },
      { label: "Permission engine", path: "src/utils/permissions/permissions.ts", line: 518 },
      { label: "Sandbox adapter", path: "src/utils/sandbox/sandbox-adapter.ts", line: 230 },
    ],
  },
  {
    eyebrow: "Tension 02",
    title: "Human freedom vs model risk",
    signal: "split security principals",
    body:
      "The code makes a hard distinction between what a human may do directly and what the model may do through tools. That preserves user power without naively granting the same trust to generated actions.",
    sources: [
      { label: "User shell path", path: "src/utils/processUserInput/processBashCommand.tsx", line: 68 },
      { label: "Bash tool surface", path: "src/tools/BashTool/BashTool.tsx", line: 1 },
      { label: "Permission branching", path: "src/utils/permissions/permissions.ts", line: 518 },
    ],
  },
  {
    eyebrow: "Tension 03",
    title: "One assistant vs coordinated workers",
    signal: "reframed as control plane",
    body:
      "Instead of pretending the agent is singular, the repo reinterprets collaboration as placement, mailboxes, tasks, worktrees, and resume semantics. The result is more like a host-local swarm manager than a single assistant loop.",
    sources: [
      { label: "AgentTool", path: "src/tools/AgentTool/AgentTool.tsx", line: 282 },
      { label: "Teammate mailbox", path: "src/utils/teammateMailbox.ts", line: 1 },
      { label: "Local task projection", path: "src/tasks/LocalAgentTask/LocalAgentTask.tsx", line: 197 },
    ],
  },
  {
    eyebrow: "Tension 04",
    title: "Local execution vs remote infrastructure",
    signal: "abstracted into substrates",
    body:
      "Remote work is not bolted on as a separate product. It is normalized into the same task and session fabric, which lets the runtime move work off-host without losing its basic semantics.",
    sources: [
      { label: "Remote session manager", path: "src/remote/RemoteSessionManager.ts", line: 1 },
      { label: "Remote task", path: "src/tasks/RemoteAgentTask/RemoteAgentTask.tsx", line: 60 },
      { label: "Remote trigger tool", path: "src/tools/RemoteTriggerTool/RemoteTriggerTool.ts", line: 44 },
    ],
  },
  {
    eyebrow: "Tension 05",
    title: "Terminal purity vs structured workspace UX",
    signal: "not fully resolved",
    body:
      "The repo visibly forks here. One future leans into PTY-in-browser and terminal continuity, while another leans into a structured web workspace with richer file and collaboration models.",
    sources: [
      { label: "PTY server", path: "src/server/web/pty-server.ts", line: 40 },
      { label: "Terminal runtime", path: "src/server/web/terminal.ts", line: 24 },
      { label: "Web workspace shell", path: "web/WebApp.tsx", line: 4 },
    ],
  },
  {
    eyebrow: "Tension 06",
    title: "Product vs platform",
    signal: "externalized through substrate",
    body:
      "The repo keeps crossing the line from product feature to platform layer. Plugins, skills, MCP, LSP, and remote scheduling all suggest a system that wants to be extended, not just used.",
    sources: [
      { label: "Plugin loader", path: "src/utils/plugins/pluginLoader.ts", line: 1 },
      { label: "Skills loader", path: "src/skills/loadSkillsDir.ts", line: 1 },
      { label: "MCP client", path: "src/services/mcp/client.ts", line: 1 },
      { label: "LSP manager", path: "src/services/lsp/manager.ts", line: 1 },
    ],
  },
  {
    eyebrow: "Tension 07",
    title: "Transcript history vs long-lived memory",
    signal: "handled as lifecycle",
    body:
      "The code does not treat context as a single giant transcript. It starts to separate remembered state, task sidecars, compacted history, and explicit memory maintenance into different layers.",
    sources: [
      { label: "Dream task", path: "src/tasks/DreamTask/DreamTask.ts", line: 1 },
      { label: "Session ingress", path: "src/services/api/sessionIngress.ts", line: 22 },
      { label: "Task store", path: "src/utils/tasks.ts", line: 190 },
    ],
  },
  {
    eyebrow: "Tension 08",
    title: "Turn-based chat vs ambient runtime",
    signal: "still emerging",
    body:
      "Kairos, channels, proactive ticks, and Brief suggest the repo was moving toward a more ambient operating model, but that future coexists with classic turn-by-turn interaction instead of replacing it cleanly.",
    sources: [
      { label: "Flag density", path: "docs/atlas/data/feature-flags.json" },
      { label: "Channel gate", path: "src/main.tsx", line: 1635 },
      { label: "Proactive prompt", path: "src/main.tsx", line: 2203 },
      { label: "Brief tool", path: "src/tools/BriefTool/BriefTool.ts", line: 136 },
    ],
  },
];

export default function TensionsPage() {
  return (
    <div className="content-shell">
      <section className="content-hero">
        <span className="eyebrow">Resolved Tensions</span>
        <h1>The hard tradeoffs this runtime is trying to solve in public</h1>
        <p>
          What makes the repo compelling is that you can see the difficult choices
          directly in the implementation. It is not just shipping features. It is
          wrestling with autonomy, isolation, memory, surfaces, and platform shape.
        </p>
      </section>

      <section className="note-strip">
        <div className="note-chip">
          <span>Tensions</span>
          <strong>{tensions.length}</strong>
        </div>
        <div className="note-chip">
          <span>Tracked roots</span>
          <strong>{formatNumber(summary.metrics.trackedRoots)}</strong>
        </div>
        <div className="note-chip">
          <span>Signal type</span>
          <strong>tradeoffs</strong>
        </div>
        <div className="note-chip">
          <span>Read mode</span>
          <strong>architecture criticism</strong>
        </div>
      </section>

      <section className="signal-grid">
        {tensions.map((item) => (
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
          <span className="eyebrow">What This Reveals</span>
          <h2>The repo is beautiful because it is not ducking the hard parts</h2>
          <p>
            The codebase keeps exposing hard agent tradeoffs instead of hiding them
            behind a smooth UI. That makes it much more valuable as an artifact for
            builders, because the difficult architectural decisions remain legible.
          </p>
        </article>

        <article className="panel">
          <span className="eyebrow">Continue</span>
          <h2>Loop back to lessons and maps</h2>
          <div className="route-grid compact-route-grid">
            <Link className="route-card route-card-cobalt compact-route-card" href="/lessons">
              <span className="eyebrow">Lessons</span>
              <h3>Extract the design patterns</h3>
              <p>Move from tradeoffs to the principles other builders can actually reuse.</p>
              <span className="route-arrow">Open route</span>
            </Link>
            <Link className="route-card route-card-ember compact-route-card" href="/maps">
              <span className="eyebrow">Maps</span>
              <h3>Reconnect tension to system shape</h3>
              <p>See how the tradeoffs materialize in the runtime, trust stack, and platform mesh.</p>
              <span className="route-arrow">Open route</span>
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
