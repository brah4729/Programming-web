"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./Icons";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsLight(document.documentElement.classList.contains("light"));
    setMounted(true);
  }, []);

  function toggle() {
    const root = document.documentElement;
    const next = !root.classList.contains("light");
    root.classList.toggle("light", next);
    try {
      localStorage.setItem("asm-theme", next ? "light" : "dark");
    } catch (e) {}
    setIsLight(next);
  }

  // Avoid a hydration mismatch: render a neutral placeholder until mounted.
  if (!mounted) {
    return <span className="icon-btn" aria-hidden="true" style={{ opacity: 0 }} />;
  }

  return (
    <button
      onClick={toggle}
      className="icon-btn"
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      {isLight ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
