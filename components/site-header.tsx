import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/deep-cuts", label: "Deep Cuts" },
  { href: "/control-plane", label: "Control Plane" },
  { href: "/futures", label: "Futures" },
  { href: "/safety", label: "Safety" },
  { href: "/xray", label: "X-Ray" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand-lockup" href="/">
        <div className="brand-mark" />
        <div className="brand-copy">
          <strong>Claude Code Atlas</strong>
          <span>Agent runtime, not just a CLI</span>
        </div>
      </Link>

      <nav className="site-nav" aria-label="Primary">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
