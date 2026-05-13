# Declarație privind utilizarea Inteligenței Artificiale (Statement of AI Use)

## 1. Introducere și Instrumente Utilizate
În cadrul procesului de realizare a proiectului, am utilizat asistentul conversațional inteligent **Gemini** (Google) ca suport pentru structurarea livrabilelor UX și generarea de idei. Utilizarea AI a fost una colaborativă, bazată pe un flux constant de informații și feedback.

## 2. Context și Metodologie
Este important de menționat că **AI-ul a primit un context extrem de bogat** pentru a înțelege profunzimea și specificul proiectului nostru. Pentru a asigura un output de calitate, au fost furnizate:
* Documente de cercetare detaliate (**Literature Review** și **Competitor Analysis**).
* Capturi de ecran ale interfețelor aplicațiilor specifice (Sitemap Builder, User Flow Builder, Sketch Tool).
* Indicații specifice despre hardware-ul utilizat (Ochelari AR, Tabletă, Smartwatch).
* Feedback în timp real pe baza cerințelor academice primite de la curs.

---

## 3. Procesul de Lucru și Validarea Umană
Toate materialele generate de AI au trecut printr-un proces riguros de **verificare continuă și modificare**. Tabelul de mai jos descrie modul în care am interacționat pentru fiecare etapă, subliniind faptul că output-ul a fost adaptat manual ori de câte ori a fost necesar:

| Etapa Proiectului | Contribuția AI | Validare și Modificare Umană |
| :--- | :--- | :--- |
| **Persona Profiles** | Structurarea datelor din research în profile psihologice detaliate. | Verificarea conformității cu datele din Literature Review; ajustarea obiectivelor fiecărei persoane. |
| **Storyboards** | Descrierea cadrelor vizuale și sugestii de iconițe pentru contextul sportiv. | Monitorizarea fluxului narativ și modificarea acțiunilor pentru a asigura realismul pe stadion. |
| **User Flows** | Definirea pașilor logici (Ryan Singer notation) pentru cele 3 platforme. | Revizuirea fiecărei interacțiuni; modificarea punctelor de decizie pentru a asigura un flow intuitiv. |
| **Sitemaps** | Organizarea ierarhică a arhitecturii informaționale. | Restructurarea meniurilor pentru a respecta limitările fizice ale fiecărui dispozitiv (ex. ceas vs tabletă). |
| **Sketches** | Instrucțiuni detaliate pentru desenarea elementelor de UI low-fidelity. | Execuția desenelor în aplicația Sketch și modificarea așezării elementelor pentru vizibilitate optimă. |
| **Style Guide** | Recomandări pentru tipografie și culori bazate pe accesibilitate. | Selectarea finală a paletei cromatice și validarea contrastului conform standardelor W3C AA. |

---

## 4. Mostre de Prompts (Prompt Samples)
Colaborarea a fost ghidată de instrucțiuni specifice care au evoluat pe măsură ce proiectul a avansat, demonstrând procesul de rafinare:

> **Exemplu de solicitare a contextului:** *"Salut, avem următorul proiect de realizat... Design for: Tablet/Mobile Phone, AR Headset, Smartwatch. Îți atașez cercetarea noastră (Literature Review și Competitor Analysis) pentru a avea o idee cât mai bună despre proiect."*

> **Exemplu de rafinare tehnică:** *"Output-ul dat de tine pentru flow-ul tabletei a fost verificat, dar te rog să modifici pasul 3 pentru a include instrumentele specifice de desen pe care le-am identificat în research-ul nostru."*

## 5. Concluzie privind Integritatea
Deși inteligența artificială a servit drept motor de accelerare a producției și de organizare a informației, **viziunea strategică, direcția creativă și deciziile finale aparțin în totalitate echipei de proiect**. Fiecare sugestie oferită de AI a fost analizată critic, verificată continuu și modificată pentru a corespunde exact cerințelor proiectului și viziunii noastre asupra ecosistemului sportiv inteligent.


# Another Statement of AI Use — COACHR-HCI

This document discloses the use of AI tools during the development of the COACHR-HCI deliverables (a tactical football ecosystem covering Tablet · AR Glasses · Smartwatch). It is provided in fulfilment of deliverable #8 of `project_requirements.md`.

## 1. Tools used

| Tool | Role |
| :--- | :--- |
| **Claude Code** (Anthropic's CLI) | Primary AI assistant. Model: Claude Opus 4.7 (1M-context window). Accessed via the `claude` command in a Linux terminal. |
| Claude skills invoked during the session | `superpowers:brainstorming`, `superpowers:writing-plans`, `superpowers:executing-plans`, `frontend-design`, `ui-ux-pro-max`, `redesign-existing-projects`, `figma:figma-use` (later abandoned). |
| Google Fonts (Montserrat, Atkinson Hyperlegible) | Webfonts loaded by the prototype CSS — not AI-generated. |

No image-generation, video-generation, or text-to-design models (e.g., Midjourney, DALL·E, Sora, Galileo AI, Uizard, Magician) were used at any point. All hand-authored visual artefacts in the repository (personas, sketches, sitemaps, storyboards, style guide) were produced by the student before the AI session began.

## 2. Authorial split

| Artefact | Author |
| :--- | :--- |
| 3 persona profiles (`personas/*.png`) | Student — authored before the AI session |
| User flow JSONs (`flow/{tablet, ar_glasses, smartwatch}.json`) | Student — exported from a flow-diagram editor |
| Sitemaps (`sitemaps/*.png`) | Student |
| Storyboards (`story_board/*.png`) | Student |
| Sketches (`sketch/*.png`) | Student |
| Visual style guide (`Ghid de Stil Vizual ... V3.md` + PDF) | Student |
| Research artefacts (`research/Literature review`, `Competitive Analysis`) | Student |
| `project_requirements.md` | Course instructor (template), with the *Scenario* and *Target Platforms* sections refined collaboratively with AI assistance |
| HTML / CSS / JS prototypes (`prototypes/`) | AI-authored under continuous student direction, with multiple rounds of student-driven feedback and manual student edits to the CSS (notably the `.t3-network` height and the `.t3-pitch-block` wrapper) |

## 3. How the work was done

1. **Repository audit.** The student opened a Claude Code session in the repo. The AI scanned the existing artefacts (personas, flows, sitemaps, etc.) and produced `CLAUDE.md`, a guidance file documenting the project's structure and conventions for future sessions.
2. **Project framing.** The student asked the AI to commit the previously generic sport scenario specifically to **football** and to incorporate the three target devices into `project_requirements.md`.
3. **Brainstorming.** A six-section structured dialog refined the prototype build approach. The student approved each section (Figma file architecture · screen inventory · clickable wiring · sample data & microcopy · build sequence · asset/icon inventory) before the next was presented.
4. **Specification authoring.** The AI translated the approved decisions into a 350-line design specification at `docs/superpowers/specs/...`. The student reviewed and approved the spec before any implementation work began.
5. **Plan authoring.** An 850-line implementation plan was written, decomposing the build into 5 phases and ~40 tasks.
6. **Figma attempt (abandoned).** The AI began building the Figma file via the Figma MCP `use_figma` tool. After multiple successful tool calls (variables, text styles, icons, components), the session was halted by the Figma plan's MCP rate limit. The student tried a second Figma account; the same limit was reached.
7. **Pivot to HTML.** The student decided to deliver the prototypes as web-based HTML/CSS/JS instead of Figma. The AI invoked the `frontend-design` skill to set an aesthetic direction ("Stadium Telemetry") and built the prototype set under `prototypes/`.
8. **Iterative review.** The student opened the prototypes in a Firefox browser via VS Code Live Server. Over many exchanges, they identified visual bugs (chip stretching, font contrast, dead clicks, broken AR menu navigation, asymmetric panel heights) and microcopy issues (jargon like "GAZE + dwell 600ms" and "ACK"). The AI applied targeted fixes.
9. **Design system additions.** The student requested device chrome (Apple Watch Ultra-style body for the Smartwatch, then iPad bezel for the Tablet and lens/temple frame for the AR Glasses). All were authored in CSS via pseudo-elements.

## 4. Examples of decision gates

The following decisions were made by the student, not the AI. These are the authorial moments that shaped the project:

| Quote | Effect |
| :--- | :--- |
| *"let's commit to football explicitly"* | Locked the sport scope, allowed concrete fixture data (El Clásico) |
| *"these should be buttons? alerts? what should their functionality be?"* | Forced explicit semantic decisions about chip interactivity |
| *"yes, fix the communication dead-click"* | Approved adding the T8 Comms Relay screen |
| *"make these 2 symmetrical in height"* | Directed the T3 layout symmetry fix |
| *"this text is not visible enough, improve it"* | Directed the T4 alert chip typography upgrade |
| *"one thing i would like us to have covered in these prototypes, is having them feel natural, and easy to use for most end users"* | Triggered the auto-advance progress bar, hover hints on gesture hotspots, real long-press on AR capture, toolbar interactivity |

## 5. Representative prompts

A selection of student prompts during the session — full chronology preserved in the local Claude Code session log:

- *"Could you assess the current state of the project against the requirements?"*
- *"Do these prototypes respect everything we mentioned our project would have as features — the personas, flows, sitemaps, and storyboards?"*
- *"On the AR Glasses view, only the Field Radar interaction is implemented — is that intentional?"*
- *"Are there improvements we can make to the prototypes while remaining faithful to the sitemaps, flows, storyboards, personas, and style guide?"*

Each prompt resulted in proposals from the AI which the student then accepted, refined, or rejected.

## 6. Manual student contributions to styling

Several visual issues that the AI was unable to resolve on its own were corrected manually by the student through direct edits to the CSS. Representative examples:

- **Pane height symmetry on T3** — the AI produced repeated proposals using `max-content`, `inline-flex`, and various flex-sizing strategies, none of which produced consistent results across the two panes. The student resolved this by setting `.t3-network { height: 88% }` directly and introducing a new `.t3-pitch-block` wrapper around the right pane's pitch + CTA bar so both sides terminate at the same vertical line.
- **Structural HTML refactor on T3 right pane** — the student manually inserted a wrapper `<div>` grouping `.t3-pitch-wrap` and `.t3-cta-bar` together, enabling consistent height management. The AI then provided supporting CSS for the new class.
- **Microcopy and jargon hunts** — the student spotted opaque shorthand the AI had let through (`ACK` → `Acknowledged`; `GAZE + dwell 600ms` → plain English), citing readability for non-AR-familiar reviewers.
- **Spatial and proportion judgements** — the student called out visually broken states (stretched alert chip, sparse right pane, awkward "Communi-cation" label wrap) that read as bugs in screenshots but were not detectable by the AI working without a rendered view.

These manual edits remain in the working tree and form a meaningful share of the prototype's final polish.

## 7. Limitations and honest disclosures

- **Visual verification** depended entirely on the student opening the prototypes in a browser and reporting results. The AI could not see the rendered prototypes in real time and at several points produced bugs (chip-width stretching, SVG intrinsic-size defaults, alert chip overflow) that took multiple iterations to diagnose.
- **Figma rate limits** were not anticipated. The AI began a Figma build that was halted by Figma's plan-tier MCP quota. This wasted approximately 30 minutes of the session.
- **A scope deviation** that should be flagged honestly: the persona PNG for the supplemental persona ("Adrian Cristea") contains a scenario paragraph that refers to the player as "Mihai" — a name mismatch present in the original persona artefact and not introduced by the AI. The HTML prototypes use the canonical "Adrian" form throughout, but the source PNG was not edited.
- **The AI was given strict instructions not to commit to git** until explicitly asked. All work in this session remains in the working tree; commits will be authored by the student when the project is ready to submit.

## 8. Academic integrity declaration

The substantive design choices in COACHR-HCI — *who* the personas are, *what* user flows they take, *what* the visual language looks like, *which* features the ecosystem includes, *how* the three devices interact narratively, *which* moments of the match are shown — were made by the student before and during the AI engagement. AI tools were used to accelerate implementation (HTML/CSS/JS code) and to articulate the design as a written specification.

No AI tool authored the personas, the sketches, the sitemaps, the storyboards, the style guide, the user flows, or the research. These remain entirely the student's work.

The student takes full authorial responsibility for the submitted deliverables.

---

**Project**: COACHR — Tactical Football Ecosystem (Tablet · AR Glasses · Smartwatch)
**Student**: Ioan
**AI session date**: 13–14 May 2026
**Statement compiled**: 14 May 2026
