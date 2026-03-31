const rows = [
  {
    axis: "Primary identity",
    claude: "Large terminal-native agent runtime",
    claw: "Clean-room Python parity scaffold",
  },
  {
    axis: "Execution depth",
    claude: "Broad runtime surfaces and live operational paths",
    claw: "Surface mirroring and structural reconstruction",
  },
  {
    axis: "Safety story",
    claude: "Deep permission, parsing, classifier, and sandbox stack",
    claw: "Much thinner permission and persistence model",
  },
  {
    axis: "Best public framing",
    claude: "How complex agent software is actually built",
    claw: "How to study and port that system from the outside",
  },
];

export default function ComparisonPage() {
  return (
    <div className="content-shell">
      <section className="content-hero">
        <span className="eyebrow">Comparison</span>
        <h1>Claude Code versus claw-code</h1>
        <p>
          The right comparison is not TypeScript versus Python. It is runtime
          artifact versus parity scaffold. That framing is more precise and much
          more useful.
        </p>
      </section>

      <section className="panel">
        <span className="eyebrow">Reading Lens</span>
        <h2>Two projects answering different questions</h2>
        <div className="comparison-grid">
          <article className="comparison-card comparison-card-left">
            <h3>Claude Code</h3>
            <p>
              Shows how a multi-surface coding agent is assembled: CLI, tools,
              permissions, sessions, browser surfaces, MCP, plugins, bridge
              mode, and feature-gated product experiments.
            </p>
          </article>
          <article className="comparison-card comparison-card-right">
            <h3>claw-code</h3>
            <p>
              Shows how to reconstruct, audit, and mirror a complex runtime from
              the outside without claiming runtime-equivalent completeness.
            </p>
          </article>
        </div>
      </section>

      <section className="panel">
        <span className="eyebrow">Axis By Axis</span>
        <h2>What the contrast actually reveals</h2>
        <div className="matrix-table">
          <div className="matrix-header">
            <span>Axis</span>
            <span>Claude Code</span>
            <span>claw-code</span>
          </div>
          {rows.map((row) => (
            <div className="matrix-row" key={row.axis}>
              <strong>{row.axis}</strong>
              <p>{row.claude}</p>
              <p>{row.claw}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-grid two-up">
        <article className="panel">
          <span className="eyebrow">Why It Matters</span>
          <h2>What gets lost in the wrong framing</h2>
          <p>
            If Claude Code is presented as a generic CLI, the safety engine and
            agent-control fabric disappear. If claw-code is presented as a full
            replacement, its actual value as a parity and study tool gets
            blurred. The sharper contrast makes both projects more legible.
          </p>
        </article>

        <article className="panel">
          <span className="eyebrow">External Links</span>
          <h2>Source material</h2>
          <div className="anchor-list">
            <a
              className="anchor-row"
              href="https://deepwiki.com/instructkr/claw-code"
              rel="noreferrer"
              target="_blank"
            >
              <strong>DeepWiki overview</strong>
              <span>High-level orientation for the claw-code project.</span>
            </a>
            <a
              className="anchor-row"
              href="https://github.com/instructkr/claw-code"
              rel="noreferrer"
              target="_blank"
            >
              <strong>GitHub repository</strong>
              <span>Source code for the clean-room porting scaffold.</span>
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
