# COACHR — Tactical Football Ecosystem

A multi-device tactical ecosystem for an elite football head coach: live data analysis on a **tablet**, real-time tactical overlays through **MR/AR glasses**, and glanceable haptic communication via **smartwatch**. Built for the moment a coach has 90 seconds to read a match in glare, noise, and high-pressure decision time.

> Live demo fixture rendered across all three devices: **FC Barcelona vs Real Madrid** · El Clásico · 73' · 1–1 · Spotify Camp Nou.

---

## View the prototypes

Open `prototypes/index.html` in any modern browser (Firefox, Chrome, Edge, Safari):

```bash
# from the repo root
xdg-open prototypes/index.html      # Linux
open prototypes/index.html          # macOS
start prototypes/index.html         # Windows
```

Or serve locally for the smoothest experience:

```bash
cd prototypes && python3 -m http.server 8080
# then open http://localhost:8080
```

The hub page lets you launch each of the three device prototypes; every screen is clickable, with automatic transitions where the gesture is non-tap (e.g. an incoming LTE tactical packet on the smartwatch).

---

## Video walk-through link

https://drive.google.com/file/d/1gKWDmA5tNpUhRJNC1ygushqH4Vqab_CW/view?usp=sharing



## Repository structure

| Path | Contents |
| :--- | :--- |
| `personas/` | Three persona profiles (PNG) — Victor Munteanu (head coach), Andrei Popa (assistant), Adrian Cristea (captain) |
| `flow/` | User flow JSONs for each of the three devices |
| `sitemaps/` | Information-architecture maps (PNG) per device |
| `sketch/` | Hand-drawn wireframes (PNG) per device |
| `story_board/` | Storyboards (PNG) per device showing the use moment |
| `research/` | Literature Review and Competitive Analysis (PDF) |
| `Ghid de Stil Vizual ... V3.{md,pdf}` | Visual style guide — colour palette, typography, iconography, accessibility rules |
| `prototypes/` | The three high-fidelity clickable prototypes (HTML/CSS/JS) plus the hub page |
| `project_requirements.md` | Course-brief scenario, target platforms, and the deliverables checklist |
| `Statement_of_AI_Use.md` | Disclosure of AI tools used during development |

---

## Deliverables map

This repository satisfies the nine deliverables defined in `project_requirements.md`:

| # | Deliverable | Where |
| :--- | :--- | :--- |
| 1 | 3 persona profiles | `personas/` |
| 2 | ≥ 2 research tactics | `research/` (Literature Review + Competitive Analysis) |
| 3 | Storyboards, flows, sitemaps, sketches per device | `story_board/`, `flow/`, `sitemaps/`, `sketch/` |
| 4 | Single-page style guide | `Ghid de Stil Vizual - Ecosistem Tactic Sportiv V3.{md,pdf}` |
| 5 | 3 high-fidelity clickable prototypes | `prototypes/{tablet, ar-glasses, smartwatch}/` |
| 6 | Video walkthrough | (recorded separately, link in the submission form) |
| 7 | User guide | (separate document) |
| 8 | Statement of AI Use | `Statement_of_AI_Use.md` |
| 9 | Project URL | this repository |

---

## Design system at a glance

| Token | Value | Purpose |
| :--- | :--- | :--- |
| Carbon Black | `#0A0A0A` | Primary background · transparency sentinel on AR Glasses |
| Athletic Grey | `#1C1C1E` | Surfaces, cards, banners |
| Volt Yellow | `#D4FF00` | Primary accent · active states · confirmations |
| Energy Orange | `#FF4500` | Alerts · positioning errors · fatigue spikes |
| Pure White | `#FFFFFF` | Body text, numerals, icons (AAA contrast on Carbon Black) |
| Montserrat (Bold / SemiBold) | — | Titles, numerals, jersey numbers, primary CTAs |
| Atkinson Hyperlegible (Regular) | — | Body text, captions, microcopy |

The system enforces a **48 × 48 px minimum touch target**, **2 px stroke** for all icons, **flat UI** (no shadows or gradients on interactive elements), and **tabular numerals** so timestamps align across all three devices.

---

## Narrative thread across the three devices

The same moment of the match (`73'42″`) appears on every device, from a different perspective:

1. **AR Glasses** — Victor identifies a defensive-line positioning error (`#3 Balde · LB out of line`) and captures the frame.
2. **Tablet** — the captured tactical moment arrives via private LTE; Victor draws a defensive reshuffle in TacticPad Studio and hits `SEND TACTIC`.
3. **Smartwatch** — Andrei Popa, the assistant coach on the touchline, feels a haptic alert, glances at his wrist, sees the substitution `IN: 9 ↓ OUT: 10`, confirms.

The timeline (`73'42″ → 73'45″ → 73'47″`) is threaded into the UI of all three devices and visible on the comms log at `Tablet T8`.

---

## Tech notes

- **No framework** — vanilla HTML, CSS, and JavaScript. Each prototype is a single HTML file with hash-routed screen switching and CSS transitions.
- **Webfonts** — Montserrat and Atkinson Hyperlegible from Google Fonts.
- **Icons** — inlined SVG sprites, 24 × 24 grid, 2 px stroke.
- **Browsers** — tested on current Firefox; should work in Chrome / Edge / Safari without modification.
- **Accessibility** — `:focus-visible` outlines on every interactive element, `prefers-reduced-motion` honoured, all clickable elements use semantic `<button>` or `<a>` tags, every alert chip meets WCAG AA contrast.

---

## Project metadata

- **Course**: Human–Computer Interaction
- **Date**: May 2026
- **Sport scope**: Association football (locked early in the design process — see `project_requirements.md`)
- **Languages**: Project documentation in Romanian and English; prototype UI strings in English
