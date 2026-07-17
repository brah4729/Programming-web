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
              background: "var(--indigo)",
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

        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={`navlink ${pathname === l.href ? "active" : ""}`}>
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link href="/#join" className="btn-primary" style={{ padding: "9px 16px", fontSize: 13.5 }}>
            Join
          </Link>
        </div>
      </div>
    </div>
  );
}
