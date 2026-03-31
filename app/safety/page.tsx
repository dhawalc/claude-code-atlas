import { featuredFlags, formatNumber, sourceRepoFileUrl } from "@/lib/atlas";

const safetyRefs = [
  {
    label: "bashPermissions.ts",
    path: "src/tools/BashTool/bashPermissions.ts",
    note: "Approval state machine and classifier-assisted shell gating.",
  },
  {
    label: "bashSecurity.ts",
    path: "src/tools/BashTool/bashSecurity.ts",
    note: "Additional shell safety logic and command hardening.",
  },
  {
    label: "bashParser.ts",
    path: "src/utils/bash/bashParser.ts",
    note: "Deep parsing layer rather than raw string matching.",
  },
  {
    label: "pathValidation.ts",
    path: "src/tools/PowerShellTool/pathValidation.ts",
    note: "Parallel Windows-side validation story.",
  },
  {
    label: "sandbox-adapter.ts",
    path: "src/utils/sandbox/sandbox-adapter.ts",
    note: "Execution boundary between request and host access.",
  },
];

const safetySteps = [
  {
    title: "Parse",
    body: "Commands are inspected structurally, not merely regex-checked. That matters because shell safety fails when everything is treated as a flat string.",
  },
  {
    title: "Classify",
    body: "Classifier gates such as BASH_CLASSIFIER and TRANSCRIPT_CLASSIFIER show that the system uses layered judgment before execution.",
  },
  {
    title: "Escalate",
    body: "The runtime can stop and ask, auto-approve narrow cases, or deny outright. That permission model is one of the strongest public stories in the codebase.",
  },
  {
    title: "Sandbox",
    body: "Execution is mediated through adapters and environment-specific guardrails rather than trusting the model to self-police.",
  },
];

export default function SafetyPage() {
  const classifierFlags = featuredFlags.filter((flag) =>
    ["BASH_CLASSIFIER", "TRANSCRIPT_CLASSIFIER"].includes(flag.flag),
  );

  return (
    <div className="content-shell">
      <section className="content-hero">
        <span className="eyebrow">Safety Engine</span>
        <h1>Permission-aware autonomy is the story</h1>
        <p>
          The repo is interesting because the agent can act. It is impressive
          because acting is wrapped in a layered safety stack: parsing,
          classification, escalation, and sandbox mediation.
        </p>
      </section>

      <section className="panel">
        <span className="eyebrow">Core Sequence</span>
        <h2>The approval stack in four moves</h2>
        <div className="sequence-grid">
          {safetySteps.map((step, index) => (
            <div className="sequence-card" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-grid two-up">
        <article className="panel">
          <span className="eyebrow">Classifier Signals</span>
          <h2>Flags that show safety is not decorative</h2>
          <div className="flag-stack">
            {classifierFlags.map((flag) => (
              <div className="flag-row" key={flag.flag}>
                <span>{flag.flag}</span>
                <div className="flag-rail">
                  <i style={{ width: `${Math.max(flag.count * 2.2, 18)}px` }} />
                </div>
                <strong>{formatNumber(flag.count)}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <span className="eyebrow">Source Anchors</span>
          <h2>Where to read the real thing</h2>
          <div className="anchor-list">
            {safetyRefs.map((ref) => (
              <a
                className="anchor-row"
                href={sourceRepoFileUrl(ref.path)}
                key={ref.path}
                rel="noreferrer"
                target="_blank"
              >
                <strong>{ref.label}</strong>
                <span>{ref.note}</span>
              </a>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
