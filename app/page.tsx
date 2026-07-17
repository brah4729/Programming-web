import Link from "next/link";
import BuilderCanvas from "@/components/BuilderCanvas";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import JoinForm from "@/components/JoinForm";
import { Eyebrow, CornerHandles } from "@/components/Bits";
import { ArrowIcon } from "@/components/Icons";
import { TRACKS, STATS, EVENTS, TEAM, PROJECTS } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />

      <section className="dotgrid" style={{ paddingTop: 8 }}>
        <div className="section grid-hero">
          <div>
            <Eyebrow>student programming club · est. 2019</Eyebrow>
            <h1
              className="font-display"
              style={{ fontSize: "clamp(34px, 5vw, 54px)", lineHeight: 1.06, fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}
            >
              We build the web,
              <br />
              together.
            </h1>
            <p style={{ color: "var(--ink-soft)", fontSize: 16.5, lineHeight: 1.6, marginTop: 20, maxWidth: 480 }}>
              Programming adalah sebuah komunitas pemrograman untuk siswa yang ingin belajar dan membangun proyek nyata. Kami menyediakan bimbingan, sumber daya, dan kesempatan untuk berkolaborasi dengan sesama anggota.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 30, flexWrap: "wrap" }}>
              <Link href="/#join" className="btn-primary">
                Join Programming <ArrowIcon />
              </Link>
              <Link href="/projects" className="btn-ghost">
                View Projects <ArrowIcon />
              </Link>
            </div>
          </div>
          <div className="hero-canvas-hide">
            <BuilderCanvas />
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", background: "var(--bg-elevated)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "30px 24px" }} className="stats-grid">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display" style={{ fontSize: 26, fontWeight: 700 }}>
                {s.value}
              </div>
              <div className="font-mono" style={{ fontSize: 12, color: "var(--ink-faint)", marginTop: 4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <Eyebrow>what we build</Eyebrow>
        <h2 className="font-display" style={{ fontSize: 30, margin: "0 0 34px", fontWeight: 700 }}>
          Pick your stack.
        </h2>
        <div className="grid-4">
          {TRACKS.map((t) => (
            <div key={t.name} className="card" style={{ padding: 22 }}>
              <CornerHandles />
              <span className="tag">{t.tag}</span>
              <h3 className="font-display" style={{ fontSize: 17, margin: "14px 0 8px" }}>
                {t.name}
              </h3>
              <p style={{ color: "var(--ink-soft)", fontSize: 13.8, lineHeight: 1.55, margin: 0 }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 34, flexWrap: "wrap", gap: 12 }}>
          <div>
            <Eyebrow>shipped by members</Eyebrow>
            <h2 className="font-display" style={{ fontSize: 30, margin: 0, fontWeight: 700 }}>
              Featured projects.
            </h2>
          </div>
          <Link
            href="/projects"
            className="font-mono"
            style={{ fontSize: 13.5, display: "flex", alignItems: "center", gap: 6, color: "var(--accent-deep)", fontWeight: 500, textDecoration: "none" }}
          >
            See all projects <ArrowIcon />
          </Link>
        </div>
        <div className="grid-3">
          {PROJECTS.slice(0, 3).map((p) => (
            <Link
              key={p.name}
              href={p.url}
              target={p.url.startsWith("http") ? "_blank" : undefined}
              rel={p.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card project-card"
              style={{ padding: 22, textDecoration: "none", color: "inherit", display: "block" }}
            >
              <CornerHandles />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 className="font-display" style={{ fontSize: 17, margin: 0 }}>
                  {p.name}
                </h3>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span className="font-mono" style={{ fontSize: 10.5, color: p.status === "Live" ? "var(--live)" : "var(--amber)" }}>
                    ● {p.status}
                  </span>
                  <span className="project-arrow" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </div>
              </div>
              <p style={{ color: "var(--ink-soft)", fontSize: 13.8, lineHeight: 1.55, margin: "10px 0 14px" }}>{p.desc}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {p.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="section">
        <Eyebrow>core team</Eyebrow>
        <h2 className="font-display" style={{ fontSize: 30, margin: "0 0 34px", fontWeight: 700 }}>
          Guru di balik layar.
        </h2>
        <div className="grid-6">
          {TEAM.map((m) => (
            <div key={m.name} className="card" style={{ padding: "18px 14px", textAlign: "center" }}>
              <CornerHandles />
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: m.color,
                  margin: "0 auto 12px",
                  display: "grid",
                  placeItems: "center",
                  color: "#fff",
                  fontWeight: 700,
                }}
                className="font-display"
              >
                {m.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div style={{ fontWeight: 600, fontSize: 13.5 }}>{m.name}</div>
              <div className="font-mono" style={{ fontSize: 11, color: "var(--ink-faint)", marginTop: 3 }}>
                {m.role}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="join" style={{ background: "var(--emphasis-bg)", padding: "90px 24px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <div className="font-mono eyebrow" style={{ justifyContent: "center" }}>
            <span style={{ color: "var(--amber)" }}>ready when you are</span>
          </div>
          <h2 className="font-display" style={{ color: "#fff", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 700, margin: "0 0 14px" }}>
            Ready to build something?
          </h2>
          <p style={{ color: "var(--emphasis-ink-soft)", fontSize: 15.5, margin: "0 0 30px" }}>
            No experience required — just curiosity. We&apos;ll teach you the rest.
          </p>
          <JoinForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
