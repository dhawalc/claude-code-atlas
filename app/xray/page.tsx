import {
  formatNumber,
  largestSourceFiles,
  sourceRepoFileUrl,
  subsystemLoc,
  summary,
  surfaceInventory,
  todoHotspots,
  topLevelRoots,
} from "@/lib/atlas";

export default function XrayPage() {
  return (
    <div className="content-shell">
      <section className="content-hero">
        <span className="eyebrow">Codebase X-Ray</span>
        <h1>Where the runtime gets heavy</h1>
        <p>
          The public dump tracks {formatNumber(summary.metrics.totalTrackedLines)}{" "}
          lines across {formatNumber(summary.metrics.totalTrackedFiles)} files.
          The shape is clear: utilities dominate, UI is large, services are
          dense, and several single files carry real architectural weight.
        </p>
      </section>

      <section className="content-grid two-up">
        <article className="panel">
          <span className="eyebrow">Top-Level Roots</span>
          <h2>Repository mass by root</h2>
          <div className="stack-list">
            {topLevelRoots.map((root) => (
              <div className="stack-row" key={root.root}>
                <div>
                  <strong>{root.root}</strong>
                  <span>{root.files} files</span>
                </div>
                <div className="stack-bar">
                  <i style={{ width: `${Math.max(root.lines / 7000, 10)}%` }} />
                </div>
                <b>{formatNumber(root.lines)}</b>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <span className="eyebrow">Subsystem Density</span>
          <h2>Internal hotspots</h2>
          <div className="stack-list">
            {subsystemLoc.map((item) => (
              <div className="stack-row" key={item.name}>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.files} files</span>
                </div>
                <div className="stack-bar">
                  <i style={{ width: `${Math.max(item.lines / 2200, 10)}%` }} />
                </div>
                <b>{formatNumber(item.lines)}</b>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="panel">
        <span className="eyebrow">Largest Authored Files</span>
        <h2>Single-file complexity carries real weight here</h2>
        <div className="file-table">
          {largestSourceFiles.slice(0, 12).map((file) => (
            <a
              className="file-row"
              href={sourceRepoFileUrl(file.path)}
              key={file.path}
              rel="noreferrer"
              target="_blank"
            >
              <span>{file.path}</span>
              <strong>{formatNumber(file.lines)} lines</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="content-grid two-up">
        <article className="panel">
          <span className="eyebrow">Surface Inventory</span>
          <h2>Externally legible breadth</h2>
          <ul className="facts-list">
            <li>{surfaceInventory.commands.count} command directories</li>
            <li>{surfaceInventory.tools.count} tool directories</li>
            <li>{surfaceInventory.components.count} component directories</li>
            <li>{surfaceInventory.hooks.count} hook files</li>
            <li>{surfaceInventory.webApiRoutes.count} web API routes</li>
          </ul>
        </article>

        <article className="panel">
          <span className="eyebrow">TODO Hotspots</span>
          <h2>Visible unfinished edges</h2>
          <div className="todo-list">
            {todoHotspots.slice(0, 8).map((item) => (
              <div className="todo-row" key={item.path}>
                <div>
                  <strong>{item.path}</strong>
                  <span>{item.samples[0]?.text ?? "No sample available"}</span>
                </div>
                <b>{item.total}</b>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
