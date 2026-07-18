"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DotIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "color-mix(in srgb, var(--bg) 85%, transparent)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}>
          <span
            style={{
              width: 26,
              height: 26,
              borderRadius: 7,
              background: "var(--accent)",
              display: "grid",
              placeItems: "center",
            }}
          >
            <DotIcon />
          </span>
          <span className="font-display" style={{ fontWeight: 700, fontSize: 17, color: "var(--ink)" }}>
            Programming
          </span>
        </Link>

        {/* Desktop nav — hidden on mobile */}
        <div className="nav-links">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={`navlink ${pathname === l.href ? "active" : ""}`}>
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
          <a
            href="https://www.instagram.com/progaming_penus/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "9px 16px", fontSize: 13.5 }}
          >
            Join
          </a>
        </div>

        {/* Mobile right side — ThemeToggle + Join only */}
        <div className="nav-mobile-actions">
          <ThemeToggle />
          <a
            href="https://www.instagram.com/progaming_penus/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "9px 16px", fontSize: 13.5 }}
          >
            Join
          </a>
        </div>
      </div>
    </div>
  );
}
