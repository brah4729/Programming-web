"use client";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", padding: "34px 24px" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 14,
        }}
      >
        <div className="font-mono" style={{ fontSize: 12.5, color: "var(--ink-faint)" }}>
          © {new Date().getFullYear()} Programming. Built by members, for members.
        </div>
        <div style={{ display: "flex", gap: 18 }}>
          {[
            { label: "GitHub", href: "#" },
            { label: "Discord", href: "#" },
            { label: "Instagram", href: "https://www.instagram.com/progaming_penus/" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={s.href === "#" ? (e) => e.preventDefault() : undefined}
              className="font-mono"
              style={{ fontSize: 12.5, color: "var(--ink-faint)", textDecoration: "none" }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
