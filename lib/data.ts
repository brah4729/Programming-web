export const TRACKS = [
  { name: "Web & Product", desc: "React, design systems, and shipping real product UI end to end.", tag: "frontend" },
  { name: "AI & ML", desc: "Models, agents, and applied projects — from fine-tuning to eval.", tag: "ml" },
  { name: "Systems & Infra", desc: "Backends, databases, and the plumbing that keeps things running.", tag: "backend" },
  { name: "Open Source", desc: "Contributing to real repos and maintaining our own club tools.", tag: "oss" },
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
  { name: "Rin Okafor", role: "President", color: "#355872" },
  { name: "Leo Marsh", role: "Web Lead", color: "#FF9C57" },
  { name: "Priya Nandan", role: "AI/ML Lead", color: "#2FBF8F" },
  { name: "Dario Reyes", role: "Infra Lead", color: "#FF5C7A" },
  { name: "Mei Tanaka", role: "Events", color: "#4FA3C7" },
  { name: "Sam Okoye", role: "Open Source", color: "#5A97BA" },
];

export type Project = {
  name: string;
  cat: "Web" | "AI+ML" | "Systems" | "Mobile";
  status: "Live" | "In progress";
  desc: string;
  stack: string[];
};

export const PROJECTS: Project[] = [
  { name: "Campus Eats", cat: "Web", status: "Live", desc: "Group food ordering for dorms, built by 6 members over one semester.", stack: ["Next.js", "Postgres", "Stripe"] },
  { name: "StudyGraph", cat: "AI+ML", status: "Live", desc: "An AI study planner that turns a syllabus PDF into a spaced-repetition schedule.", stack: ["Python", "LangChain", "React"] },
  { name: "Portfolio Kit", cat: "Web", status: "Live", desc: "Open-source component library students use to spin up portfolio sites fast.", stack: ["React", "Tailwind", "Storybook"] },
  { name: "RouteOptimizer", cat: "Systems", status: "In progress", desc: "A pathfinding service for the campus shuttle, cutting average wait time.", stack: ["Go", "Redis", "gRPC"] },
  { name: "PeerReview Bot", cat: "AI+ML", status: "Live", desc: "A Discord bot that pairs members for code review based on tech stack.", stack: ["TypeScript", "OpenAI", "Discord.js"] },
  { name: "Clubhouse OS", cat: "Systems", status: "In progress", desc: "Internal tooling for events, attendance, and project tracking.", stack: ["Rails", "Postgres"] },
  { name: "Assembly Mobile", cat: "Mobile", status: "In progress", desc: "A companion app for event check-ins and build night RSVPs.", stack: ["React Native", "Expo"] },
  { name: "Grantfinder", cat: "AI+ML", status: "Live", desc: "Scrapes and ranks student grant opportunities using a small classifier.", stack: ["Python", "FastAPI"] },
];
