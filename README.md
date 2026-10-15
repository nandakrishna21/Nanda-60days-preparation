# Nanda 60-Days Preparation Dashboard

Frontend-only tracking website for 60-Day Government Exam + Full Stack Python + DSA + AI roadmap.

**Target:** APPSC Group 2 + SSC CGL + Banking (SBI/IBPS) + Railways RRB | 8-10 hrs/day | Beginner | Exam in 2-3 months

## Files
- `index.html` — structure + all plan content (Overview, Tracker, Timetable, Resources, Mocks+Project)
- `styles.css` — styling + dark mode (`body.dark`)
- `app.js` — 60-day PLAN data + localStorage tracker + charts
- `sixty_day_tracker.csv` — Google Sheets import version (same 60 days)

## Run locally
Double-click `index.html`, or:
```powershell
cd $PSScriptRoot
python -m http.server 5500
# open http://localhost:5500/
```

## Features
- 60-day editable tracker (Status, hours, attempted/correct, mock score, DSA solved, confidence, mistakes, next priority)
- Auto-saves in browser localStorage (`sixtyDayTrackerV1`)
- Overview: completion %, hours, accuracy, DSA count, avg mock, streak, phase bars
- Weekly bar chart W1-W9 + mock score chart + weak-areas list
- Filters by phase/status/search, Export CSV/JSON, Import JSON, Print
- Dark mode toggle (persisted as `sixtyDayTheme`)
- No build, no backend, works on `file://` and GitHub Pages

## Deploy as website (GitHub Pages)
This repo is Pages-ready (static root = `index.html`):
Settings → Pages → Deploy from branch → `main` / `/ (root)` → Save → open `https://nandakrishna21.github.io/Nanda-60days-preparation/`

## Install as phone app (PWA)
- `manifest.webmanifest` + `sw.js` + `icons/icon-192.png` + `icons/icon-512.png` included.
- Desktop Chrome/Edge: address bar Install icon or header **⬇️ Install App** button.
- Android: Chrome menu → Install app / Add to Home screen.
- iPhone: Share → Add to Home Screen (uses `apple-touch-icon` 180px).
- Works offline after first visit (service worker caches all files).

## Custom domain setup (optional)
1. Buy domain (e.g. `nanda60days.in`) from Cloudflare/Namecheap/GoDaddy.
2. GitHub repo → Settings → Pages → Custom domain → enter `www.nanda60days.in` → Save (creates `CNAME`).
3. DNS provider → add records:
   - `CNAME` `www` → `nandakrishna21.github.io`
   - `A` `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. Wait 10-60 min → check `https://www.nanda60days.in` → Enforce HTTPS in Pages settings.
5. Keep `CNAME` file in repo root — do not delete on next push.
