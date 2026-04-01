# War Room Handoff

## Core Thesis

The source says Claude Code is not best framed as a coding CLI. The stronger public story is that it is a terminal-native agent runtime with hidden product futures, a host-local control plane, and a layered trust stack.

## What Is Live

- `/deep-cuts`
  - buried product bets
  - dream agent and x402 outlier
  - browser split
  - remote control plane
  - compositional safety
- `/control-plane`
  - placement engine thesis
  - task plane and state plane
  - substrate matrix
  - architectural tensions
- `/futures`
  - Kairos as ambient-agent direction
  - two browser futures
  - remote infrastructure direction
  - team/platform future

## Best Next Build

1. Trust Boundary Explorer
   - step-through flow from tool proposal to permission result to sandbox execution
   - interactive toggles for auto mode, accept edits, sandbox, and shell type
2. Control Plane Replay
   - animate one prompt becoming local task, worktree task, teammate, or remote task
   - show writes to tasks, teams, transcripts, and remote metadata as a synchronized state plane
3. Surface Convergence Map
   - transit-map view of CLI, PTY web, structured web, IDE bridge, remote runner, Explorer MCP, and Chrome bridges
   - overlay transport types and feature gates

## Research Angles Worth Preserving

- Kairos appears to be the strongest product-facing flag cluster.
- The repo contains two separate browser futures, not one clean web migration.
- Remote execution is infrastructure, not a convenience feature.
- AgentTool behaves more like a scheduler than a helper.
- Safety is compositional rather than centralized.
- The x402 path is the strangest capability outlier in the tree.

## Source Anchors

- `src/main.tsx`
- `src/tools/AgentTool/AgentTool.tsx`
- `src/tasks/LocalAgentTask/LocalAgentTask.tsx`
- `src/tasks/RemoteAgentTask/RemoteAgentTask.tsx`
- `src/utils/permissions/permissions.ts`
- `src/utils/sandbox/sandbox-adapter.ts`
- `src/server/web/pty-server.ts`
- `web/WebApp.tsx`
- `src/skills/bundled/scheduleRemoteAgents.ts`
- `src/commands/x402/x402.ts`
