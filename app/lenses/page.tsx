import Link from "next/link";
import { formatNumber, summary } from "@/lib/atlas";

const lensRoutes = [
  {
    href: "/lessons",
    title: "Lessons",
    eyebrow: "What The World Can Learn",
    body: "The design patterns this repo teaches about real agent systems: safety, worktrees, shells, memory, and substrate design.",
    accent: "cobalt",
    count: "8 lessons",
  },
  {
    href: "/inventions",
    title: "Invisible Inventions",
    eyebrow: "Hidden Patterns",
    body: "The non-obvious mechanisms buried in the tree that most people would never notice on a normal read-through.",
    accent: "ember",
    count: "8 inventions",
  },
  {
    href: "/tensions",
    title: "Resolved Tensions",
    eyebrow: "Tradeoffs",
    body: "Where the codebase wrestles with autonomy vs control, local vs remote, chat vs runtime, and platform vs product.",
    accent: "sand",
    count: "8 tensions",
  },
];

const readingOrder = [
  {
    title: "Lesson Lens",
    body: "Start here if you want to explain why this repo matters to builders, not just to repo tourists.",
  },
  {
    title: "Invention Lens",
    body: "Move here to spotlight the hidden mechanisms that make the architecture feel genuinely rare.",
  },
  {
    title: "Tension Lens",
    body: "End here to show the hard tradeoffs the code is trying to resolve in public.",
  },
  {
    title: "Map Lens",
    body: "Then loop back to the architecture maps so the prose and the system model reinforce each other.",
  },
];

export default function LensesPage() {
  return (
    <div className="content-shell">
      <section className="content-hero">
        <span className="eyebrow">Three Lenses</span>
        <h1>Three ways to make the beauty legible in public</h1>
        <p>
          The repo is too rich to be presented as a flat architecture walkthrough.
          These lenses turn the source dive into a better public story: lessons the
          world can learn, invisible inventions hidden in the tree, and the tensions
          this runtime is trying to resolve.
        </p>
      </section>

      <section className="note-strip">
        <div className="note-chip">
          <span>Tracked lines</span>
          <strong>{formatNumber(summary.metrics.totalTrackedLines)}</strong>
        </div>
        <div className="note-chip">
          <span>Lenses</span>
          <strong>3</strong>
        </div>
        <div className="note-chip">
          <span>Total cards</span>
          <strong>24</strong>
        </div>
        <div className="note-chip">
          <span>Reading mode</span>
          <strong>public-facing</strong>
        </div>
      </section>

      <section className="route-grid lens-route-grid">
        {lensRoutes.map((route) => (
          <Link className={`route-card route-card-${route.accent}`} href={route.href} key={route.href}>
            <span className="eyebrow">{route.eyebrow}</span>
            <h3>{route.title}</h3>
            <p>{route.body}</p>
            <div className="lens-count">{route.count}</div>
            <span className="route-arrow">Open lens</span>
          </Link>
        ))}
      </section>

      <section className="panel">
        <span className="eyebrow">Reading Order</span>
        <h2>How to turn source analysis into a better public artifact</h2>
        <div className="sequence-grid">
          {readingOrder.map((item) => (
            <article className="sequence-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-grid two-up">
        <article className="panel">
          <span className="eyebrow">Thesis</span>
          <h2>This codebase is teaching patterns, not just shipping features</h2>
          <p>
            The real value is that so many hard agent problems are visible at once in
            one public tree: trust boundaries, execution placement, long-lived state,
            multi-surface shells, worktree isolation, and platform externalization.
          </p>
        </article>

        <article className="panel">
          <span className="eyebrow">Pair It With</span>
          <h2>Read the architecture maps beside the lenses</h2>
          <div className="route-grid compact-route-grid">
            <Link className="route-card route-card-cobalt compact-route-card" href="/maps">
              <span className="eyebrow">Maps</span>
              <h3>System shapes</h3>
              <p>See the runtime, trust stack, control plane, and platform mesh rendered visually.</p>
              <span className="route-arrow">Open route</span>
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
