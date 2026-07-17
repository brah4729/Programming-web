import { CursorIcon } from "./Icons";

export default function BuilderCanvas() {
  return (
    <div className="floaty" style={{ position: "relative" }}>
      <div
        style={{
          background: "var(--bg-elevated)",
          border: "1px solid var(--line)",
          borderRadius: 16,
          boxShadow: "0 30px 60px -30px var(--shadow)",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 14px", borderBottom: "1px solid var(--line)" }}>
          <span style={{ width: 8, height: 8, borderRadius: 8, background: "#FF6B6B" }} />
          <span style={{ width: 8, height: 8, borderRadius: 8, background: "#FFC84B" }} />
          <span style={{ width: 8, height: 8, borderRadius: 8, background: "#3FC97A" }} />
          <span className="font-mono" style={{ marginLeft: 10, fontSize: 11.5, color: "var(--ink-faint)" }}>
            programming.build
          </span>
        </div>
        <div className="dotgrid" style={{ padding: 22, display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: "var(--bg-elevated)", border: "1.5px dashed var(--indigo)", borderRadius: 10, padding: "10px 12px" }}>
            <span className="tag">component: navbar</span>
          </div>
          <div style={{ background: "var(--bg-elevated)", border: "1px solid var(--line)", borderRadius: 10, padding: "16px 14px" }}>
            <div style={{ height: 9, width: "60%", background: "var(--line)", borderRadius: 4, marginBottom: 8 }} />
            <div style={{ height: 9, width: "40%", background: "var(--line)", borderRadius: 4 }} />
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ flex: 1, background: "var(--bg-elevated)", border: "1px solid var(--line)", borderRadius: 10, height: 46 }} />
            <div style={{ flex: 1, background: "var(--bg-elevated)", border: "1px solid var(--line)", borderRadius: 10, height: 46 }} />
          </div>
        </div>
      </div>

      <div
        className="font-mono"
        style={{
          position: "absolute",
          top: -14,
          right: -18,
          background: "var(--ink)",
          color: "var(--bg)",
          fontSize: 11,
          padding: "6px 10px",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          gap: 6,
          boxShadow: "0 10px 20px -10px var(--shadow)",
        }}
      >
        <CursorIcon /> mei is building
      </div>

      <div
        className="font-mono blinker"
        style={{
          position: "absolute",
          bottom: -16,
          left: -14,
          background: "var(--amber)",
          color: "#fff",
          fontSize: 11,
          padding: "6px 10px",
          borderRadius: 8,
          boxShadow: "0 10px 20px -10px var(--shadow)",
        }}
      >
        + add block
      </div>
    </div>
  );
}
