"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Eyebrow, CornerHandles } from "@/components/Bits";
import { ArrowIcon, GithubIcon, ExternalIcon } from "@/components/Icons";
import { PROJECTS, Project } from "@/lib/data";

const CATS: Array<Project["cat"] | "All"> = ["All", "Web", "AI+ML", "Systems", "Mobile"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof CATS)[number]>("All");
  const shown = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <>
      <Nav />

      <section className="section" style={{ paddingBottom: 40 }}>
        <Link
          href="/"
          className="font-mono"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            color: "var(--ink-faint)",
            fontSize: 12.5,
            marginBottom: 22,
            textDecoration: "none",
          }}
        >
          <span style={{ transform: "rotate(180deg)", display: "inline-flex" }}>
            <ArrowIcon />
          </span>
          back to home
        </Link>
        <Eyebrow>shipped by members</Eyebrow>
        <h1 className="font-display" style={{ fontSize: "clamp(30px, 4.5vw, 42px)", fontWeight: 700, margin: "0 0 14px" }}>
          Projects.
        </h1>
        <p style={{ color: "var(--ink-soft)", fontSize: 15.5, maxWidth: 560, margin: "0 0 30px" }}>
          Everything here started as a build-night idea. Some are live and in daily use, others are still in
          progress — clone one, or come build the next.
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className="font-mono"
              style={{
                fontSize: 12.5,
                padding: "7px 13px",
                borderRadius: 8,
                border: `1.5px solid ${filter === c ? "var(--accent)" : "var(--line)"}`,
                background: filter === c ? "var(--accent-tint)" : "var(--bg-elevated)",
                color: filter === c ? "var(--accent-deep)" : "var(--ink-soft)",
                fontWeight: 500,
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {shown.map((p) => (
            <div key={p.name} className="card" style={{ padding: 24 }}>
              <CornerHandles />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 className="font-display" style={{ fontSize: 18.5, margin: 0 }}>
                  {p.name}
                </h3>
                <span className="font-mono" style={{ fontSize: 10.5, color: p.status === "Live" ? "var(--live)" : "var(--amber)" }}>
                  ● {p.status}
                </span>
              </div>
              <p style={{ color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.6, margin: "12px 0 16px" }}>{p.desc}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
                {p.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 16, borderTop: "1px solid var(--line)", paddingTop: 14 }}>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--ink-soft)", textDecoration: "none" }}
                >
                  <GithubIcon /> Source
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--ink-soft)", textDecoration: "none" }}
                >
                  <ExternalIcon /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
