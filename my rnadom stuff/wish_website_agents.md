# WISH Website — agents.md

**Project**: WISH (Women In Science, Hope) — public website  
**Owner**: Prof. Shirin Haque (client); Brandon “Mercury” Deonarine (builder)  
**Mission**: Launch a beautiful, accessible site that showcases WISH’s story and a downloadable Publications Library (2023–2025 to start), with clear Donate/Volunteer paths.

---
## Tech stack (MVP)
- **Framework**: Next.js (App Router) + **TypeScript**
- **UI**: Tailwind CSS + shadcn/ui
- **Data v1**: Flat files (JSON/MDX in `/data` and `/content`) → *upgrade path*: Sanity CMS
- **Hosting**: Vercel (preview deployments, edge caching) maybe cloudflare idk
- **Assets**: `/public/pubs/` for PDFs → *upgrade path*: S3/R2 with signed links
- **Search/Filter**: Client-side Fuse.js
- **Analytics**: Plausible
- **Testing/QA**: Playwright (smoke), Lighthouse CI (perf+accessibility)
- **SEO**: next-seo + JSON‑LD schema (Organization, Article)

---
## Pages / IA
- **Home** – Mission, highlights, CTA (Donate/Volunteer), latest publication.
- **About** – Origin, team/board, partners, contact.
- **Programs** – Drives, Science Month, special projects (park renovation, astronomy kits).
- **Publications** – Download library (covers, theme, year, file size, blurb, tags/filters).
- **Events** – Key dates (e.g., Women & Girls in Science Day, fundraiser), upcoming.
- **Get Involved** – Donate, Volunteer, Partner, wishlist, form.
- **Stories** – Photo-stories and spotlights.
- **Contact** – Form + phone/email.

---
## Roles (agents)
- **A0 – Product Owner (Client)**: Approves copy, brand, donation provider, assets.
- **A1 – PM / IA**: Locks nav, page scopes, timelines; keeps backlog tidy.
- **A2 – UX/UI**: Hero, cards, color/typography, accessibility-first components.
- **A3 – Frontend**: Next.js pages, routing, components, state for filters.
- **A4 – Content Librarian**: Create `publications.json`, write blurbs, alt text, file sizes.
- **A5 – Publications Engineer**: PDF optimization, file hosting, download links.
- **A6 – Accessibility & QA**: WCAG AA, keyboard nav, screen-reader labels; Lighthouse.
- **A7 – DevOps/Infra**: Vercel project, env vars, analytics, domain & SSL.
- **A8 – SEO/Analytics**: next-seo, JSON‑LD, Plausible events (download, donate).
- **A9 – Legal/Permissions**: Copyright/credits, partner logos usage, privacy copy.

---
## Data contracts
### `data/publications.json`
```json
[
  {
    "id": "wish-2025",
    "year": 2025,
    "title": "WISH Upon a Star — Fifth Anniversary",
    "theme": "Exercise & Mental Health",
    "cover": "/images/pubs/2025-cover.jpg",
    "pdf": "/pubs/WISH-2025.pdf",
    "sizeMB": 18.6,
    "audience": ["Kids", "Teachers", "Donors"],
    "tags": ["Wellness", "Community", "Astronomy"],
    "highlights": [
      "Fifth anniversary issue",
      "Inaugural fundraiser",
      "UWI Principal’s Award"
    ]
  },
  {
    "id": "wish-2024",
    "year": 2024,
    "title": "WISH Upon a Star — Science of Nature",
    "theme": "Nature & Climate",
    "cover": "/images/pubs/2024-cover.jpg",
    "pdf": "/pubs/WISH-2024.pdf",
    "sizeMB": 22.4,
    "audience": ["Kids", "Teachers"],
    "tags": ["Nature", "Climate", "Poems"],
    "highlights": ["Binocular astronomy visits", "Poems by children"]
  },
  {
    "id": "wish-2023",
    "year": 2023,
    "title": "WISH Upon a Star — The Future",
    "theme": "Futures & Community",
    "cover": "/images/pubs/2023-cover.jpg",
    "pdf": "/pubs/WISH-2023.pdf",
    "sizeMB": 16.8,
    "audience": ["Kids", "Donors"],
    "tags": ["Future", "Park Renovation", "Data Science"],
    "highlights": ["Meet the WISH Foundation", "Play park refurbishment feature"]
  }
]
```

---
## Components (atoms → organisms)
- **Atoms**: Button (primary/secondary), Tag, Badge, VisuallyHidden, SkipLink.
- **Molecules**: PublicationCard, FilterBar, StatCard, PartnerLogo, Testimonial.
- **Organisms**: PublicationsGrid, Hero, Footer, DonateModal, Navbar.

---
## Workflows
### W1 – Publications ingestion
1. Optimize PDF → `/public/pubs/`  
2. Add cover image → `/public/images/pubs/`  
3. Append entry to `data/publications.json` with sizeMB and highlights  
4. Verify download, alt text, Lighthouse ≥ 90 (accessibility/perf)

### W2 – Page build
1. Spec → wireframe → implement with shadcn/ui  
2. Add responsive tests (Playwright)  
3. Add SEO meta + JSON‑LD  
4. Client review → copy tweaks → publish

### W3 – Release
1. Vercel preview → QA → fix  
2. Tag release `v0.1.0` (MVP)  
3. Announce to client, collect assets for v0.2 (photos, partner logos)

---
## Backlog (MVP → v0.2)
- [MVP] Home, About, Publications, Get Involved pages
- [MVP] Publications filters (year, theme, tags)
- [MVP] Basic donate/volunteer forms
- [MVP] Accessibility pass (keyboard, alt, ARIA)
- [v0.2] Events page + Stories
- [v0.2] Upgrade assets to S3/R2 + signed URLs
- [v0.2] Migrate content to Sanity & build authorable magazine pages

---
## Definition of Done (per page)
- Semantic HTML, keyboard accessible, alt text complete  
- Lighthouse: Perf ≥ 90, Access ≥ 95, Best Practices ≥ 95, SEO ≥ 95  
- Mobile-first, responsive at 360/768/1024/1440 widths  
- Copy reviewed by client; links validated; analytics events firing

---
## Risks & mitigations
- **Large PDFs** → compress + object storage + lazy-load previews.  
- **Scope creep** → lock MVP, schedule v0.2; use backlog.  
- **Brand ambiguity** → derive color/type from magazines, confirm with client.

