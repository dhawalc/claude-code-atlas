import Link from "next/link";
import { EvidenceLinks } from "@/components/evidence-links";
import {
  featureFlags,
  formatNumber,
  summary,
  type SourceAnchor,
} from "@/lib/atlas";

const kairosRefs = featureFlags.find((flag) => flag.flag === "KAIROS")?.count ?? 156;

const orbitNodes = [
  { slug: "cli", label: "CLI Shell", body: "entrypoint + query loop" },
  { slug: "pty", label: "PTY Web", body: "browser terminal runtime" },
  { slug: "workspace", label: "Web Workspace", body: "structured app shell" },
  { slug: "bridge", label: "Bridge / IDE", body: "editor and remote bridge" },
  { slug: "remote", label: "Remote", body: "CCR, runners, triggers" },
  { slug: "teams", label: "Teams", body: "teammates + worktrees" },
  { slug: "ecosystem", label: "Ecosystem", body: "MCP, plugins, skills" },
];

const surfaceSources: SourceAnchor[] = [
  { label: "CLI entrypoint", path: "src/entrypoints/cli.tsx", line: 1 },
  { label: "PTY server", path: "src/server/web/pty-server.ts", line: 40 },
  { label: "Web workspace shell", path: "web/WebApp.tsx", line: 4 },
  { label: "Bridge runtime", path: "src/bridge/bridgeMain.ts", line: 1 },
  { label: "MCP client", path: "src/services/mcp/client.ts", line: 1 },
];

const trustLayers = [
  {
    step: "01",
    title: "Intent split",
    body: "Human `!` shell usage and model-invoked tool execution are treated as different security principals.",
    tone: "sand",
  },
  {
    step: "02",
    title: "Structural parsing",
    body: "Shell input is parsed and normalized so policy is evaluating structure, not vibes.",
    tone: "cobalt",
  },
  {
    step: "03",
    title: "Permission logic",
    body: "Rule evaluation, allow/deny semantics, and optional classifier branches stay separate from parsing.",
    tone: "ember",
  },
  {
    step: "04",
    title: "Sandbox mediation",
    body: "Execution routes through explicit containment policies rather than assuming one global trust level.",
    tone: "cobalt",
  },
  {
    step: "05",
    title: "Execution capsule",
    body: "Commands finally land inside local, worktree, pane, or remote substrates with the envelope already rebuilt.",
    tone: "sand",
  },
];

const trustSources: SourceAnchor[] = [
  { label: "User shell split", path: "src/utils/processUserInput/processBashCommand.tsx", line: 68 },
  { label: "Bash permissions", path: "src/tools/BashTool/bashPermissions.ts", line: 1073 },
  { label: "Permission branching", path: "src/utils/permissions/permissions.ts", line: 518 },
  { label: "Sandbox adapter", path: "src/utils/sandbox/sandbox-adapter.ts", line: 230 },
  { label: "PowerShell path validation", path: "src/tools/PowerShellTool/pathValidation.ts", line: 1 },
];

const controlColumns = [
  {
    title: "Ingress",
    tone: "cobalt",
    chips: ["prompt", "query loop", "session ingress", "tool intents"],
  },
  {
    title: "Placement",
    tone: "ember",
    chips: ["AgentTool", "spawn routing", "worktree mode", "remote eligibility"],
  },
  {
    title: "Task Plane",
    tone: "sand",
    chips: ["LocalAgentTask", "RemoteAgentTask", "mailboxes", "resume handles"],
  },
  {
    title: "State Plane",
    tone: "cobalt",
    chips: ["task store", "team files", "sidecars", "session chains"],
  },
  {
    title: "Substrates",
    tone: "ember",
    chips: ["in-process", "pane", "worktree", "remote CCR"],
  },
];

const controlSources: SourceAnchor[] = [
  { label: "Agent placement", path: "src/tools/AgentTool/AgentTool.tsx", line: 282 },
  { label: "Local task projection", path: "src/tasks/LocalAgentTask/LocalAgentTask.tsx", line: 197 },
  { label: "Remote task restore", path: "src/tasks/RemoteAgentTask/RemoteAgentTask.tsx", line: 477 },
  { label: "Task store", path: "src/utils/tasks.ts", line: 190 },
  { label: "Worktree lifecycle", path: "src/utils/worktree.ts", line: 208 },
];

const platformCells = [
  {
    title: "MCP",
    body: "External tools and resources become first-class runtime surfaces.",
  },
  {
    title: "Plugins",
    body: "Marketplace-aware packaging shifts the repo toward platform behavior.",
  },
  {
    title: "Skills",
    body: "Prompted capabilities become reloadable assets instead of hard-coded flow only.",
  },
  {
    title: "LSP",
    body: "Code intelligence is normalized into the tool substrate.",
  },
  {
    title: "Remote",
    body: "Remote runners and scheduled agents turn execution into infrastructure.",
  },
  {
    title: "Browser",
    body: "Terminal-web and structured workspace both hang off the same runtime gravity.",
  },
];

const platformSources: SourceAnchor[] = [
  { label: "Plugin loader", path: "src/utils/plugins/pluginLoader.ts", line: 1 },
  { label: "Skills loader", path: "src/skills/loadSkillsDir.ts", line: 1 },
  { label: "MCP client", path: "src/services/mcp/client.ts", line: 1 },
  { label: "LSP manager", path: "src/services/lsp/manager.ts", line: 1 },
  { label: "Scheduled remote agents", path: "src/skills/bundled/scheduleRemoteAgents.ts", line: 174 },
];

export default function MapsPage() {
  return (
    <div className="content-shell">
      <section className="content-hero">
        <span className="eyebrow">Architecture Maps</span>
        <h1>The codebase rendered as systems, not screenshots</h1>
        <p>
          These maps compress the repo into the four shapes that matter most: one
          runtime with many shells, a compositional trust stack, a hidden control
          plane, and a platform mesh that keeps leaking out of the CLI frame.
        </p>
      </section>

      <section className="note-strip">
        <div className="note-chip">
          <span>Tracked lines</span>
          <strong>{formatNumber(summary.metrics.totalTrackedLines)}</strong>
        </div>
        <div className="note-chip">
          <span>Maps</span>
          <strong>4</strong>
        </div>
        <div className="note-chip">
          <span>Product families</span>
          <strong>8</strong>
        </div>
        <div className="note-chip">
          <span>KAIROS refs</span>
          <strong>{formatNumber(kairosRefs)}</strong>
        </div>
      </section>

      <section className="panel map-panel">
        <div className="map-panel-copy">
          <span className="eyebrow">Map 01</span>
          <h2>Surface Convergence</h2>
          <p>
            Claude Code is easiest to misunderstand when you look at one interface at
            a time. The repo only clicks when you see terminal, browser, bridge,
            remote, teams, and ecosystem layers orbiting the same runtime core.
          </p>
        </div>
        <div className="map-visual surface-orbit-map">
          <div className="orbit-core">
            <span>Runtime Core</span>
            <strong>Tool-Governed Autonomy</strong>
            <p>query loop, permissions, memory, tasks, transport</p>
          </div>
          {orbitNodes.map((node) => (
            <article className={`orbit-node orbit-node-${node.slug}`} key={node.slug}>
              <strong>{node.label}</strong>
              <span>{node.body}</span>
            </article>
          ))}
        </div>
        <EvidenceLinks sources={surfaceSources} />
      </section>

      <section className="panel map-panel">
        <div className="map-panel-copy">
          <span className="eyebrow">Map 02</span>
          <h2>Trust Boundary Stack</h2>
          <p>
            The safety story is beautiful because it refuses to trust any single
            mechanism. Parsing, permissions, sandboxes, and execution substrates stay
            distinct, which is exactly what real autonomy requires.
          </p>
        </div>
        <div className="map-visual trust-map">
          {trustLayers.map((layer) => (
            <article className={`trust-layer trust-layer-${layer.tone}`} key={layer.step}>
              <span>{layer.step}</span>
              <strong>{layer.title}</strong>
              <p>{layer.body}</p>
            </article>
          ))}
        </div>
        <EvidenceLinks sources={trustSources} />
      </section>

      <section className="panel map-panel">
        <div className="map-panel-copy">
          <span className="eyebrow">Map 03</span>
          <h2>Control Plane Flow</h2>
          <p>
            The subagent story is not “spawn helper process.” It is placement, task
            projection, state persistence, and substrate switching. That is why the
            repo feels like an operating system hiding inside a CLI.
          </p>
        </div>
        <div className="map-visual control-map">
          {controlColumns.map((column) => (
            <article className={`control-column control-column-${column.tone}`} key={column.title}>
              <h3>{column.title}</h3>
              <div className="control-chip-list">
                {column.chips.map((chip) => (
                  <span className="control-chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <EvidenceLinks sources={controlSources} />
      </section>

      <section className="panel map-panel">
        <div className="map-panel-copy">
          <span className="eyebrow">Map 04</span>
          <h2>Platform Mesh</h2>
          <p>
            The repo is beautiful in part because it keeps turning internal capability
            into reusable substrate. MCP, plugins, skills, LSP, remote, and browser
            layers all point to a runtime that wants to be an ecosystem.
          </p>
        </div>
        <div className="map-visual platform-mesh-map">
          <div className="platform-core">
            <span>Platform Drift</span>
            <strong>CLI Binary, Ecosystem Shape</strong>
          </div>
          {platformCells.map((cell) => (
            <article className="platform-cell" key={cell.title}>
              <strong>{cell.title}</strong>
              <p>{cell.body}</p>
            </article>
          ))}
        </div>
        <EvidenceLinks sources={platformSources} />
      </section>

      <section className="content-grid two-up">
        <article className="panel">
          <span className="eyebrow">Why These Maps Matter</span>
          <h2>The beauty is structural, not cosmetic</h2>
          <p>
            What makes this codebase special is not that every edge is polished. It is
            that the architecture is trying to solve real agent problems in the open:
            safe autonomy, substrate switching, long-lived memory, team coordination,
            and platform externalization.
          </p>
        </article>

        <article className="panel">
          <span className="eyebrow">Next Layer</span>
          <h2>Read the same repo through three editorial lenses</h2>
          <div className="route-grid compact-route-grid">
            <Link className="route-card route-card-cobalt compact-route-card" href="/lenses">
              <span className="eyebrow">Lenses</span>
              <h3>Lessons, inventions, tensions</h3>
              <p>Translate the maps into public-facing insights instead of architecture jargon.</p>
              <span className="route-arrow">Open route</span>
            </Link>
            <Link className="route-card route-card-ember compact-route-card" href="/deep-cuts">
              <span className="eyebrow">Deep Cuts</span>
              <h3>Go back to the strange stuff</h3>
              <p>Use the maps as context, then return to the gems and buried systems.</p>
              <span className="route-arrow">Open route</span>
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
