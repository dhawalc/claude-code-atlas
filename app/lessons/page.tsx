import Link from "next/link";
import { EvidenceLinks } from "@/components/evidence-links";
import { formatNumber, summary, type SourceAnchor } from "@/lib/atlas";

type Lesson = {
  eyebrow: string;
  title: string;
  signal: string;
  body: string;
  sources: SourceAnchor[];
};

const lessons: Lesson[] = [
  {
    eyebrow: "Lesson 01",
    title: "Build an agent OS, not a chatbot skin",
    signal: "runtime worldview",
    body:
      "The repo keeps teaching the same thing: once an agent touches files, shells, memory, remote sessions, and multiple surfaces, the real problem stops being chat UX and becomes runtime design.",
    sources: [
      { label: "CLI entrypoint", path: "src/entrypoints/cli.tsx", line: 1 },
      { label: "Web workspace shell", path: "web/WebApp.tsx", line: 4 },
      { label: "PTY web server", path: "src/server/web/pty-server.ts", line: 40 },
      { label: "Bridge runtime", path: "src/bridge/bridgeMain.ts", line: 1 },
    ],
  },
  {
    eyebrow: "Lesson 02",
    title: "Safety should be compositional",
    signal: "multiple authorities",
    body:
      "The beautiful part of the trust stack is that no single layer pretends to be enough. Parsing, permission logic, classifier branches, and sandboxing stay distinct, which makes the system more inspectable and harder to fool.",
    sources: [
      { label: "Bash permissions", path: "src/tools/BashTool/bashPermissions.ts", line: 1073 },
      { label: "Permission engine", path: "src/utils/permissions/permissions.ts", line: 518 },
      { label: "Sandbox adapter", path: "src/utils/sandbox/sandbox-adapter.ts", line: 230 },
      { label: "PowerShell validation", path: "src/tools/PowerShellTool/pathValidation.ts", line: 1 },
    ],
  },
  {
    eyebrow: "Lesson 03",
    title: "Humans and models are different security principals",
    signal: "deep security lesson",
    body:
      "One of the strongest ideas in the tree is the split between a human typing `!` commands and a model invoking tools. Treating them differently is not UX trivia. It is a major architectural decision.",
    sources: [
      { label: "User shell path", path: "src/utils/processUserInput/processBashCommand.tsx", line: 68 },
      { label: "Bash tool surface", path: "src/tools/BashTool/BashTool.tsx", line: 1 },
      { label: "Permission branching", path: "src/utils/permissions/permissions.ts", line: 518 },
    ],
  },
  {
    eyebrow: "Lesson 04",
    title: "Worktrees are a missing primitive for agentic coding",
    signal: "parallelism with isolation",
    body:
      "The repo suggests that safe parallel coding is less about clever prompting and more about giving workers their own checkout, branch state, and cleanup lifecycle while keeping them inside one control fabric.",
    sources: [
      { label: "Enter worktree tool", path: "src/tools/EnterWorktreeTool/EnterWorktreeTool.ts", line: 1 },
      { label: "Worktree lifecycle", path: "src/utils/worktree.ts", line: 208 },
      { label: "Agent placement", path: "src/tools/AgentTool/AgentTool.tsx", line: 282 },
    ],
  },
  {
    eyebrow: "Lesson 05",
    title: "Subagents are a control-plane problem",
    signal: "placement > prompts",
    body:
      "What matters is not merely spawning helpers. It is deciding where work lands, how envelopes are rebuilt, how tasks survive, and how execution moves between local, worktree, pane, and remote substrates.",
    sources: [
      { label: "AgentTool", path: "src/tools/AgentTool/AgentTool.tsx", line: 282 },
      { label: "Local task projection", path: "src/tasks/LocalAgentTask/LocalAgentTask.tsx", line: 197 },
      { label: "Remote session manager", path: "src/remote/RemoteSessionManager.ts", line: 1 },
    ],
  },
  {
    eyebrow: "Lesson 06",
    title: "One runtime can support many shells",
    signal: "surface convergence",
    body:
      "Terminal, browser PTY, newer web workspace, IDE bridge, remote control, and MCP are not side quests here. The repo shows how one runtime starts expressing itself through many clients.",
    sources: [
      { label: "CLI shell", path: "src/entrypoints/cli.tsx", line: 1 },
      { label: "PTY terminal", path: "src/server/web/terminal.ts", line: 24 },
      { label: "Web app", path: "web/WebApp.tsx", line: 4 },
      { label: "Bridge main", path: "src/bridge/bridgeMain.ts", line: 1 },
    ],
  },
  {
    eyebrow: "Lesson 07",
    title: "Extensibility should be substrate, not garnish",
    signal: "ecosystem shape",
    body:
      "MCP, plugins, skills, and LSP are treated like first-class layers. The lesson is that agents become useful when they become ecosystems, not when they accumulate one-off integrations.",
    sources: [
      { label: "MCP client", path: "src/services/mcp/client.ts", line: 1 },
      { label: "Plugin loader", path: "src/utils/plugins/pluginLoader.ts", line: 1 },
      { label: "Skills loader", path: "src/skills/loadSkillsDir.ts", line: 1 },
      { label: "LSP manager", path: "src/services/lsp/manager.ts", line: 1 },
    ],
  },
  {
    eyebrow: "Lesson 08",
    title: "Memory becomes an operating concern",
    signal: "lifecycle, not just context",
    body:
      "The existence of `DreamTask` is a blunt reminder that long-lived agents need memory maintenance as an operational concern. The code treats memory as something to consolidate, surface, and manage over time.",
    sources: [
      { label: "Dream task", path: "src/tasks/DreamTask/DreamTask.ts", line: 1 },
      { label: "Agent memory", path: "src/tools/AgentTool/agentMemory.ts", line: 1 },
      { label: "Memory file selector", path: "src/components/memory/MemoryFileSelector.tsx", line: 29 },
    ],
  },
];

export default function LessonsPage() {
  return (
    <div className="content-shell">
      <section className="content-hero">
        <span className="eyebrow">Lessons</span>
        <h1>What the world can learn from this codebase</h1>
        <p>
          The public value here is not “wow, a big repo.” It is that this tree exposes
          several hard-won design patterns for agent systems in one place, with enough
          source evidence to make them useful to other builders.
        </p>
      </section>

      <section className="note-strip">
        <div className="note-chip">
          <span>Lessons</span>
          <strong>{lessons.length}</strong>
        </div>
        <div className="note-chip">
          <span>Tracked lines</span>
          <strong>{formatNumber(summary.metrics.totalTrackedLines)}</strong>
        </div>
        <div className="note-chip">
          <span>Signal type</span>
          <strong>design patterns</strong>
        </div>
        <div className="note-chip">
          <span>Read mode</span>
          <strong>builder-facing</strong>
        </div>
      </section>

      <section className="signal-grid">
        {lessons.map((lesson) => (
          <article className="signal-card" key={lesson.title}>
            <span className="eyebrow">{lesson.eyebrow}</span>
            <h2>{lesson.title}</h2>
            <div className="signal-value">{lesson.signal}</div>
            <p>{lesson.body}</p>
            <EvidenceLinks sources={lesson.sources} />
          </article>
        ))}
      </section>

      <section className="content-grid two-up">
        <article className="panel">
          <span className="eyebrow">Meta-Lesson</span>
          <h2>The repo is showing how software agents stop being demos</h2>
          <p>
            Read together, these lessons say the same thing: once an agent becomes
            capable enough to touch the real world, the interesting problems move into
            runtime design, safety composition, state management, and execution
            placement.
          </p>
        </article>

        <article className="panel">
          <span className="eyebrow">Continue</span>
          <h2>Pair the lessons with maps and hidden inventions</h2>
          <div className="route-grid compact-route-grid">
            <Link className="route-card route-card-cobalt compact-route-card" href="/maps">
              <span className="eyebrow">Maps</span>
              <h3>See the system shapes</h3>
              <p>Use the architecture maps to ground the lessons in runtime structure.</p>
              <span className="route-arrow">Open route</span>
            </Link>
            <Link className="route-card route-card-ember compact-route-card" href="/inventions">
              <span className="eyebrow">Inventions</span>
              <h3>Find the hidden mechanisms</h3>
              <p>Shift from public lessons to the buried patterns that make the repo feel rare.</p>
              <span className="route-arrow">Open route</span>
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
