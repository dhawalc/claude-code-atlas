"use client";

import { useRef } from "react";

type LandingSceneProps = {
  metrics: Array<{
    label: string;
    value: string;
    note: string;
  }>;
};

const nodes = [
  {
    key: "prompt",
    className: "scene-node-prompt",
    label: "Ingress",
    title: "Prompt enters the machine",
    body: "The wrapper looks conversational. The internals immediately route into a governed system.",
  },
  {
    key: "tools",
    className: "scene-node-tools",
    label: "Tool Loop",
    title: "Capabilities are first-class",
    body: "This runtime is built around tools, not around chat bubbles pretending to be software.",
  },
  {
    key: "permissions",
    className: "scene-node-permissions",
    label: "Permission",
    title: "Autonomy gets checked",
    body: "Parsing, classification, escalation, and sandbox boundaries keep execution from becoming theatre.",
  },
  {
    key: "surfaces",
    className: "scene-node-surfaces",
    label: "Surfaces",
    title: "The runtime leaks everywhere",
    body: "CLI, PTY web stack, newer web app, bridge mode, MCP, remote sessions, and more.",
  },
  {
    key: "memory",
    className: "scene-node-memory",
    label: "Memory",
    title: "State accumulates",
    body: "Session storage, team memory, task state, and transcript-aware behavior make it a long-lived system.",
  },
  {
    key: "swarm",
    className: "scene-node-swarm",
    label: "Swarm",
    title: "The runtime can split",
    body: "Teammates, tasks, worktrees, and remote execution turn one session into a control plane.",
  },
];

export function LandingScene({ metrics }: LandingSceneProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    element.style.setProperty("--mx", x.toFixed(3));
    element.style.setProperty("--my", y.toFixed(3));
  }

  function handlePointerLeave() {
    const element = ref.current;
    if (!element) return;
    element.style.setProperty("--mx", "0");
    element.style.setProperty("--my", "0");
  }

  return (
    <div
      className="landing-scene"
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      ref={ref}
    >
      <div className="landing-scene-grid" />
      <div className="landing-scene-noise" />
      <div className="landing-wordmark">RUNTIME</div>
      <div className="landing-beam landing-beam-a" />
      <div className="landing-beam landing-beam-b" />
      <div className="landing-beam landing-beam-c" />

      <div className="landing-core-shell">
        <div className="landing-core-ring landing-core-ring-outer" />
        <div className="landing-core-ring landing-core-ring-middle" />
        <div className="landing-core-ring landing-core-ring-inner" />
        <div className="landing-core">
          <span>Runtime Core</span>
          <strong>Permission-Aware Autonomy</strong>
          <p>
            tool loop, memory, safety engine, browser surfaces, agent swarms
          </p>
        </div>
      </div>

      {nodes.map((node) => (
        <article className={`scene-node ${node.className}`} key={node.key}>
          <span>{node.label}</span>
          <strong>{node.title}</strong>
          <p>{node.body}</p>
        </article>
      ))}

      <div className="scene-metric-dock">
        {metrics.map((metric) => (
          <div className="scene-metric" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
