export const TRACKS = [
  { name: "Laravel", desc: "A PHP framework for web artisans.", tag: "fullstack" },
  { name: "HTML/CSS/JS", desc: "The building blocks of the web.", tag: "frontend" },
  { name: "Python", desc: "A high-level programming language.", tag: "backend" },
  { name: "PHP", desc: "A server-side scripting language.", tag: "backend" }
];

export const STATS = [
  { label: "members", value: "120+" },
  { label: "projects.shipped", value: "40+" },
  { label: "workshops/yr", value: "15" },
  { label: "hackathons", value: "3" },
];

export const EVENTS = [
  { date: "Jul 22", title: "Intro to React Server Components", type: "Workshop" },
  { date: "Jul 29", title: "Build Night: Ship in a weekend", type: "Build Night" },
  { date: "Aug 05", title: "How Campus Eats scaled to 2k users", type: "Talk" },
  { date: "Aug 19", title: "Prompt engineering for real apps", type: "Workshop" },
];

export const TEAM = [
  { name: "Dimas Maulana Ishaq, S.Kom", role: "President", color: "#355872" },
  { name: "Sahsi Kirana Salsabila, S.TR.KOM", role: "Web Lead", color: "#FF9C57" },
];

export type Project = {
  name: string;
  cat: "Web" | "AI+ML" | "Systems" | "Mobile";
  status: "Live" | "In progress";
  desc: string;
  stack: string[];
  url: string;
};

export const PROJECTS: Project[] = [
  { name: "Portfolio", cat: "Web", status: "Live", desc: "A personal portfolio website of a student built with Next.js and Tailwind CSS.", stack: ["Next.js", "Tailwind CSS"], url: "#" },
  { name: "Landing Page", cat: "Web", status: "Live", desc: "A landing page for an organization of a student built with Next.js and Tailwind CSS.", stack: ["Next.js", "Tailwind CSS", "Typescript"], url: "#" },
];
