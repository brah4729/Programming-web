# Running Assembly

```bash
npm install
npm run dev
```

Then open http://localhost:3000. The "Projects" page is a real route at `/projects`.

## Dark mode
Dark is the default theme (set via CSS variables on `:root` in `app/globals.css`).
The sun/moon icon in the nav toggles a `.light` class on `<html>` and remembers the
choice in `localStorage` — a small inline script in `app/layout.tsx` applies it
before paint so there's no flash on reload.

## Structure
- `app/page.tsx` — home / landing page
- `app/projects/page.tsx` — projects page (filterable)
- `components/` — Nav, Footer, BuilderCanvas illustration, ThemeToggle, icons
- `lib/data.ts` — all club content (tracks, stats, events, team, projects) — edit this to make it your own
