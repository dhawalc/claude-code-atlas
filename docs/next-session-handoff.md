# Next Session Handoff

Date: March 31, 2026  
Owner context: Atlas buildout for `claude-code` research + public presentation

## Scope

This handoff covers two separate repos:

- Source repo: `/home/dhawal/CC CLI/claude-code`
- Public Atlas app: `/home/dhawal/claude-code-atlas`

The current public artifact is the Atlas app. The source repo contains the research docs, generated data, and codebase analysis inputs that informed the app.

## Current Status

### Atlas app repo

Repo:

- `https://github.com/dhawalc/claude-code-atlas`

Live site:

- `https://dhawalc.github.io/claude-code-atlas/`

Important routes:

- `/`
- `/deep-cuts`
- `/control-plane`
- `/futures`
- `/xray`
- `/safety`
- `/compare/claw-code`

Latest deployed commit:

- `dfead6c` `Ship the war-room Atlas routes`

Earlier key commit:

- `1e8c170` `Make the landing page cinematic`

Working tree status at handoff:

- clean

### Source repo

Repo path:

- `/home/dhawal/CC CLI/claude-code`

Working tree status at handoff:

- modified `README.md`
- modified `package.json`
- untracked `docs/atlas/`
- untracked `scripts/generate-atlas-data.mjs`

Important note:

- The source repo Atlas research work has **not** been committed or pushed.
- Do not accidentally discard those changes. They contain the supporting docs and generated data that back the Atlas concept.

## What Is Already Built

### In the Atlas app repo

Built and pushed:

- aggressive landing page with stronger editorial look
- hidden-gems / product-archaeology framing
- `deep-cuts` route for buried systems and weird signals
- `control-plane` route for agent/task/worktree/remote architecture
- `futures` route for roadmap leakage and forked product directions
- supporting routes from earlier phase:
  - `xray`
  - `safety`
  - `compare/claw-code`
- dev handoff doc:
  - `docs/war-room-handoff.md`

### In the source repo

Created but not committed:

- `docs/atlas/README.md`
- `docs/atlas/sitemap.md`
- `docs/atlas/app-spec.md`
- `docs/atlas/diagrams.md`
- `docs/atlas/go-to-market.md`
- `docs/atlas/claw-code-comparison.md`
- `docs/atlas/data/*`
- `scripts/generate-atlas-data.mjs`

Generator facts from the source snapshot:

- tracked files: `2417`
- tracked lines: `606648`
- command dirs: `87`
- tool dirs: `42`
- component dirs: `31`
- hook files: `104`
- web API routes: `27`
- build flags: `90`
- TODO/FIXME/HACK markers: `113`
- largest authored file: `src/cli/print.ts` at `5597` lines

## Core Thesis

The strongest public framing so far is:

- `claude-code` is not just a CLI.
- It is a terminal-native agent runtime that mutated toward an agent operating system.
- The repo leaks multiple futures at once.

The Atlas should keep emphasizing:

- hidden systems
- product archaeology
- control-plane behavior
- extensibility stack
- safety stack
- divergent futures inside one tree

## Highest-Signal Findings From The Research

### Claude Code

The most important findings from the source dive:

- it spans CLI, browser PTY, newer web workspace, IDE bridge, MCP server mode, plugins, skills, remote sessions, and multi-agent/team orchestration
- the safety story is unusually deep in the application layer
- multi-agent behavior is real, not a cosmetic wrapper
- the repo leaks multiple product futures through flags and dormant-looking paths
- the strangest gems are the ones that make people stop scrolling

Best examples of those gems:

- `DreamTask` memory consolidation
- `x402` payment path
- Kairos density in flags / roadmap clues
- two browser futures
- remote execution becoming control plane
- worktree + teammate substrate

### Claw Code

`claw-code` is best framed as:

- a clean-room Python mirror / parity scaffold
- not yet a runtime-equivalent peer of the main TypeScript codebase
- useful as a comparison object, especially for “what survived the port” and “what got simplified”

## Codex vs Claude Code Comparison

This changed after reading the actual Codex source tree.

### Initial assumption that turned out too weak

Before checking the public Codex source, the harness visible in-session looked like a narrow operator cockpit.

That was incomplete.

### Updated read after source dive

Codex source path inspected:

- cloned to `/tmp/openai-codex`

Local installed Codex version observed:

- `codex-cli 0.118.0`

Updated comparison:

- `claude-code` = more product-weird, exploratory, multi-future, agent-OS flavored
- Codex = more kernelized, protocolized, systems-engineered runtime substrate

Useful one-liners:

- `claude-code` is the more ambitious product organism
- Codex is the more disciplined runtime substrate

- `claude-code` thinks from the surface inward
- Codex thinks from the runtime outward

Safety split:

- `claude-code`: policy + parser heavy
- Codex: runtime-boundary + systems-control heavy

## War Room Subagent Findings Worth Preserving

Four subagents were used and their findings should not be lost.

### Product archaeology

Main thesis:

- the runtime was being reshaped into a multi-surface, policy-governed agent runtime / control plane, not just a better CLI

Highlights:

- Kairos appears to have been a major internal/product bet
- multiple browser futures coexist
- remote execution trends toward control plane
- extensibility becomes external platform surface

### Agent systems / control plane

Main thesis:

- this is effectively a host-local distributed control plane with pluggable execution substrates

Highlights:

- `AgentTool` is closer to a placement engine than a simple spawn wrapper
- worktrees and remote sessions act like durable execution capsules
- task namespace seams expose architectural tension

### Safety / trust boundaries

Main thesis:

- safety is compositional, not centralized

Highlights:

- strong distinction between human `!` shell commands and model-invoked tools
- shell hardening is about parser-differential risk, not just deny-lists
- PowerShell defaults appear stricter and less autonomous

### Surface convergence

Main thesis:

- the repo behaves like a runtime kernel with many shells

Highlights:

- the CLI is a mode switchboard
- web is split into at least two product directions
- IDE paths converge into MCP paths

## Best Next Build

The next jump should not be more polish. It should be an interactive centerpiece.

Highest-value candidates:

1. `Trust Boundary Explorer`
   Show how shell/tool requests move through approvals, policy, sandboxing, and escalation.

2. `Control Plane Replay`
   Animate one session fanning into teammate/worktree/remote substrates.

3. `Surface Convergence Map`
   Show CLI, browser PTY, web workspace, bridge, MCP, remote, and plugins as one system.

4. `Tool Loop Theater`
   Animate prompt -> routing -> permission -> execution -> result -> memory.

5. `Feature Flag Archaeology`
   Turn the flag surface into a roadmap / futures explorer.

If only one thing gets built next, build `Trust Boundary Explorer` or `Control Plane Replay`.

## Recommended Execution Order

1. Preserve and commit the uncommitted source repo Atlas research work.
2. Sync any needed generated JSON from source repo into the Atlas app repo.
3. Build one interactive shock-value route instead of adding more static explanation pages.
4. Add custom diagrams / bespoke visual assets after the interaction model is locked.
5. Revisit the landing page once the centerpiece exists, not before.

## Commands / Paths To Remember

Atlas app repo:

- repo path: `/home/dhawal/claude-code-atlas`
- build: `npm run build`

Source repo:

- repo path: `/home/dhawal/CC CLI/claude-code`
- atlas data generator: `node scripts/generate-atlas-data.mjs`
- npm alias that was added: `npm run atlas:data`

Codex source used for comparison:

- `/tmp/openai-codex`

## Public Thread Draft

Best opener developed so far:

> the `claude-code` source leaked so naturally i asked `codex` to compare it against its own harness/source tree lol
>
> turns out these are not “2 coding CLIs”  
> they’re 2 completely different religions for software agents
>
> `claude-code` = weirder agent OS  
> `codex` = cleaner agent kernel
>
> thread

This framing works because it combines:

- leaked-source hook
- self-comparison hook
- strong thesis
- immediate contrast

## Risks / Caveats

- The source repo Atlas work is still uncommitted.
- The public Atlas app is live, but the next meaningful leap requires interaction, not more prose.
- Codex comparison claims should stay grounded in the public source tree and observed local harness behavior, not hand-wavy branding assumptions.
- Avoid turning the Atlas into generic docs. The value is in hidden structure, not completeness theater.

## Clean Restart Prompt For The Next Session

Use something close to this:

> Read `docs/next-session-handoff.md` in `/home/dhawal/claude-code-atlas` and `docs/war-room-handoff.md`. Then inspect the uncommitted Atlas research work in `/home/dhawal/CC CLI/claude-code`. Preserve those changes, sync any needed data, and build the next interactive centerpiece for the Atlas. Prioritize either Trust Boundary Explorer or Control Plane Replay.
