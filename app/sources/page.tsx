import Link from "next/link";
import {
  formatNumber,
  localSourceRepoPath,
  summary,
} from "@/lib/atlas";

const sourceFacts = [
  {
    label: "Local source repo",
    value: localSourceRepoPath,
  },
  {
    label: "Atlas app repo",
    value: "/home/dhawal/claude-code-atlas",
  },
  {
    label: "Mirrored data snapshot",
    value: "data/atlas/*",
  },
  {
    label: "Uncommitted research work",
    value: "docs/atlas/* + scripts/generate-atlas-data.mjs",
  },
];

export default function SourcesPage() {
  return (
    <div className="content-shell">
      <section className="content-hero">
        <span className="eyebrow">Source Route</span>
        <h1>The original upstream repo is gone, so Atlas evidence resolves locally</h1>
        <p>
          The app no longer points at the vanished public source repo. Evidence cards
          now route here and show the exact local file path and optional line anchor
          they came from. Use the displayed path against the local source checkout.
        </p>
      </section>

      <section className="note-strip">
        <div className="note-chip">
          <span>Tracked files</span>
          <strong>{formatNumber(summary.metrics.totalTrackedFiles)}</strong>
        </div>
        <div className="note-chip">
          <span>Tracked lines</span>
          <strong>{formatNumber(summary.metrics.totalTrackedLines)}</strong>
        </div>
        <div className="note-chip">
          <span>Source mode</span>
          <strong>local-only</strong>
        </div>
        <div className="note-chip">
          <span>What changed</span>
          <strong>dead upstream removed</strong>
        </div>
      </section>

      <section className="panel">
        <span className="eyebrow">Where The Evidence Lives</span>
        <h2>Use these roots when following Atlas source anchors</h2>
        <div className="facts-list dense-facts-list">
          {sourceFacts.map((fact) => (
            <div key={fact.label}>
              <strong>{fact.label}</strong>
              <br />
              {fact.value}
            </div>
          ))}
        </div>
      </section>

      <section className="content-grid two-up">
        <article className="panel">
          <span className="eyebrow">How To Read It</span>
          <h2>The path label on each evidence card is now the important part</h2>
          <p>
            Each source card shows the local repo-relative file path and line anchor.
            That keeps the Atlas legible even without a live public code mirror. The
            checked-in Atlas JSON snapshot in this repo remains the public proof layer.
          </p>
        </article>

        <article className="panel">
          <span className="eyebrow">Continue</span>
          <h2>Go back into the Atlas</h2>
          <div className="route-grid compact-route-grid">
            <Link className="route-card route-card-cobalt compact-route-card" href="/maps">
              <span className="eyebrow">Maps</span>
              <h3>Architecture maps</h3>
              <p>Return to the structural view now that the source route is fixed.</p>
              <span className="route-arrow">Open route</span>
            </Link>
            <Link className="route-card route-card-ember compact-route-card" href="/lenses">
              <span className="eyebrow">Lenses</span>
              <h3>Lessons, inventions, tensions</h3>
              <p>Read the public-facing analysis layers that sit on top of the local evidence.</p>
              <span className="route-arrow">Open route</span>
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
