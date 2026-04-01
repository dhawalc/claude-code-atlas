import {
  formatSourceAnchorPath,
  resolveSourceAnchorHref,
  type SourceAnchor,
} from "@/lib/atlas";

export function EvidenceLinks({ sources }: { sources: SourceAnchor[] }) {
  return (
    <div className="source-list">
      {sources.map((source) => {
        const href = resolveSourceAnchorHref(source);
        const isInternal = href.startsWith("/");

        return (
          <a
            className="source-link"
            href={href}
            key={source.label}
            rel={isInternal ? undefined : "noreferrer"}
            target={isInternal ? undefined : "_blank"}
          >
            <div className="source-link-copy">
              <strong>{source.label}</strong>
              <code>{formatSourceAnchorPath(source)}</code>
            </div>
            <span>{isInternal ? "Local source" : "Open source"}</span>
          </a>
        );
      })}
    </div>
  );
}
