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
          {["GitHub", "Discord", "Instagram"].map((s) => (
            <a
              key={s}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="font-mono"
              style={{ fontSize: 12.5, color: "var(--ink-faint)", textDecoration: "none" }}
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
