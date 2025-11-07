# WISH Website — Agents & Working Copy

## Project North Star
- **Client**: Prof. Shirin Haque · WISH (Women In Science, Hope)
- **Builder**: Brandon “Mercury” Deonarine + Codex (this agent)
- **Mission**: Launch a joyful, accessible site that tells the WISH story, highlights programs/events, and ships a premium Publications Library (2023–2025 to start) with clear Donate/Volunteer paths.

### Core Pillars
1. **Story & Trust** — Origin story, board bios, awards, partner credibility.
2. **Programs & Impact** — Quarterly drives, Science Month, special projects (park renovation, astronomy outreach).
3. **Publications Library** — Magazine downloads with filters, alt text, and accessible summaries.
4. **Action** — Donate, volunteer, partner, wishlist, and contact touch points.

## Roles & Agents
| ID | Role | Lead | Notes |
|----|------|------|-------|
| A0 | Product Owner (Client) | Prof. Shirin Haque | Approves copy/brand, donation processor, final launch. |
| A1 | PM / IA | Brandon | Locks navigation, prioritizes backlog, syncs with client. |
| A2 | UX/UI | Codex + Brandon | Night-sky visual language, typography, component library, accessibility-first. |
| A3 | Frontend Engineer | Codex | Next.js App Router, Tailwind, shadcn/ui, component scaffolding. |
| A4 | Content Librarian | Brandon | Publications data, blurbs, alt descriptions, file sizes. |
| A5 | Publications Engineer | Codex (support) | PDF optimization, hosting path, download analytics. |
| A6 | Accessibility & QA | Codex | WCAG AA, keyboard nav, Lighthouse ≥ 90/95 targets. |
| A7 | DevOps/Infra | Brandon (handoff) | Vercel project, domains, analytics, env secrets. |
| A8 | SEO/Insights | Codex | next-seo, JSON-LD, Plausible events (downloads, donate). |
| A9 | Legal/Permissions | Brandon | Partner approvals, copyright, privacy policy. |

## Workstreams
1. **WS1 – Foundations**: Repo setup, Next.js + TS + Tailwind + shadcn/ui, base layout (nav/footer), theme tokens.
2. **WS2 – Content Data**: `data/publications.ts` (or JSON), home hero copy, board roster, partner list.
3. **WS3 – Publications Library**: Cards with cover, theme, filters (year/theme/audience), modal scaffolding, download tracking.
4. **WS4 – Core Pages**: Home, About, Programs, Publications, Events, Get Involved, Contact scaffolds with placeholder copy from plan.
5. **WS5 – QA & Ops**: Accessibility pass, metadata, deploy to Vercel, connect analytics.

## Deliverables (MVP Sprint)
| Deliverable | Description | Owner |
|-------------|-------------|-------|
| D1 | Repo + project skeleton checked in | A3 |
| D2 | Publications library with 2023–2025 data + filters | A3/A4 |
| D3 | Home/About/Get Involved/Programs scaffolds with real copy placeholders | A2/A3 |
| D4 | Contact + CTA wiring (forms placeholder, mailto, phone) | A3 |
| D5 | Accessibility + Lighthouse baseline report | A6 |

## Backlog Snapshot
- MVP: Pages (Home, About, Programs, Publications, Events, Get Involved, Stories, Contact)
- MVP: Publications filters, download buttons, file sizes, alt text
- MVP: Donate + Volunteer CTAs/forms, partner strip, impact stats
- v0.2: Events calendar, Stories photo essays, Sanity CMS migration, R2/S3 asset hosting
- v0.2: Search/pagination for Publications, hero starfield animation, Dr. Dingolay illustrations

## Immediate Next Steps
1. Create Next.js App Router project (`wish-web`) with Tailwind + shadcn/ui.
2. Stand up shared layout (nav, footer, starry theme tokens).
3. Build data layer for publications + placeholder assets routing.
4. Scaffold key pages with copy hooks from `plan thing.md`.
5. Prep instructions for asset collection (logo/colors, PDFs hosting, donation processor).

