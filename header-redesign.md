# Header Redesign Blueprint

## 1. Experience Goals
- Feel like stepping into Dr. Haque’s night lab: polished observatory tech, soft human warmth.
- Energize girls, teens, and donors with a confident, future-forward first impression.
- Instantly surface the mission (Women in Science, Trinidad & Tobago, mentorship + outreach) plus clear Donate/Volunteer CTAs.
- Ensure legibility at AA contrast, touch-friendly targets, and graceful behavior on phones.

## 2. Narrative Hooks & Copy Direction
- **Primary headline:** “Women lighting the night sky of science in Trinidad & Tobago.”
- **Secondary line:** “WISH mentors girls, equips children’s homes, and shares telescopes, books, and brilliance across the islands.”
- **CTA microcopy:** “Donate · Fuel a Lab-in-a-Box”, “Volunteer · Lead a Star Party”, “Download · 2024 Magazine”.
- **Tagline belt (top bar):** “Women In Science for Hope · Est. 2004 · Led by Prof. Shirin Haque.”
- Hero photo/illustration should show girls observing stars, Prof. Haque with telescope, or a stylized star map overlay.
- Embed small narrative chips: “3,500+ books placed”, “12 observatory nights hosted”, “8 children’s homes supported”.

## 3. Visual System
### Palette & Light
- Base gradient: deep indigo (#040714 → #111B3F) with aurora ribbons (teal #38C0B5, violet #7C6FF5) and a golden sunlit rim (#E3B341) behind Donate.
- Add a faint Milky Way sweep using a semi-transparent PNG/SVG dust texture layered over the gradient.
- Glow discipline: only CTAs and key nav items get the warm halo.

### Type
- **Display:** Fraunces 600 or Source Serif 600 for the hero headline (serif adds editorial gravitas).
- **UI:** Manrope or Inter 500/600 for nav, stats, and buttons.
- Responsive scale: clamp 2.5rem–4.8rem hero headline, 1rem–1.25rem nav.

### Layout & Components
1. **Celestial masthead bar** (top 64px): starfield background, slim tagline, social icons.
2. **Hero block** (min 480px tall on desktop): split layout with text left, floating photo or illustrated planetarium right.
3. **Pill navigation**: glassmorphism bar with rounded chips; highlight active page with subtle gradient stroke.
4. **CTA cluster**: Donate (gold filled) + Volunteer (outline) + small “Download 2024 Magazine” ghost button.
5. **Impact stats strip** below nav using glowing chips that scroll on mobile.

### Hero Layout Blueprint
- **Left column (max 560px):**
  - Tag chip “Astronomy-led mentorship”.
  - Headline + secondary text.
  - CTA cluster and stat chips in a 2x2 grid with orbital dividers.
- **Right column (min 400px):**
  - Circular frame containing blended illustration/photo.
  - Floating badges (“Prof. Haque”, “Youth Lab”) orbiting the frame with subtle rotation.
- **Bottom edge:** Capsule nav stretching nearly full width with aurora sheen; active page indicated by 1px gold outer stroke plus inner glow.

### Astral Composition Concept
- **Constellation spine:** run a gentle diagonal line of micro stars from top-left logo to bottom-right CTA cluster; connect key points with 1px lines so the layout mimics a telescope chart.
- **Planetary focal asset:** hero artwork shows Prof. Haque silhouette guiding two girls at a telescope with a luminous planet rising behind them. Blend photo edges into illustrated gradients for a dreamy, uncluttered finish.
- **Floating nebula cards:** each nav pill sits on a soft, semi-transparent blob that resembles interstellar gas—keeps it playful without busy graphics.
- **Horizon glow:** add a thin golden arc behind the Donate button, as if a new sun is cresting; this draws the eye without extra elements.
- **Star parallax:** layer three star maps (large, medium, micro) with slight parallax offsets on scroll; keep density low so the hero remains spacious.

### Imagery & Motifs
- Use overlapping circles mimicking telescope lenses.
- Scatter small constellations made from minimalist dots + lines near the edges to keep the center clean.
- Consider a hand-drawn orbit path that guides eye from headline to CTAs.
- Alternate hero scenes:
  - **Observatory Night:** rooftop silhouette of Dr. Haque and students framed by silver telescope hardware, stars reflected in glass panels.
  - **Cosmic Collage:** blend NASA nebula photography with illustrated flora indigenous to Trinidad & Tobago, showing science rooted in place.
  - **Star Map Interface:** abstract UI overlay with labeled constellations named after WISH programs; animate nodes pulsing gently like data points.
- **Star sprites:** design three sizes of star glyphs (1px, 2px, 3px) each with optional cross lens flare; sprinkle with calculated randomness to avoid clusters.

### Mobile Treatment
- Stack hero columns; place illustration behind blurred glass with drop shadow to maintain depth without clutter.
- Convert nav pills to horizontal scroll with snap points; show 40% of next pill as affordance.
- Keep CTA buttons full-width (Donate first) and reuse star spine as animated divider between hero text and nav.

## 4. Motion & Interaction
- **Aurora drift:** very subtle background gradient animation (20–30s loop) to create life without distraction.
- **Hover states:** buttons rise 2px with glow; nav pills get a “shooting star” underline that animates left→right.
- **Micro-interaction:** when user hovers Donate, a comet tail briefly trails toward the button.
- **Scroll cue:** pulsating chevron or orbit icon at bottom of hero hinting to scroll to Programs.
- **Constellation spark:** every 12 seconds a single star in the spine twinkles brighter, guiding the eye without feeling busy.
- **Focus handling:** keyboard focus triggers teal ring + soft white bloom so components stay visible even over busy gradients.

## 5. Accessibility Guardrails
- Maintain ≥4.5:1 contrast for nav text on glass background (use rgba(255,255,255,0.92)).
- Ensure motion is subtle and respect prefers-reduced-motion (pause aurora and comet effects when set).
- Provide descriptive alt text for hero imagery (e.g., “Prof. Shirin Haque guiding girls at a rooftop observatory”).
- CTA buttons: 48px min touch height, clear focus ring using teal accent.

## 6. Implementation Checklist
1. **Background layer**
   - Add `AuroraBG` component and starfield texture under `app/layout.tsx`.
   - Define `prefers-reduced-motion` media queries to freeze gradients + twinkles.
2. **Header shell**
   - Create `HeaderShell` component with subcomponents: TopBar, HeroContent, NavBar, CTAGroup, StatChips.
   - Use CSS grid for two-column hero with graceful collapse to single column.
3. **Design tokens**
   - Introduce CSS variables for gradient stops, glow, blur radius, and apply to Tailwind theme.
   - Build star glyph utility classes (`bg-star-sm`, `bg-star-lg`) for reuse.
4. **Data layer**
   - Wire chips and stats via `data/site.ts` so marketing can update copy easily.
   - Provide fallback text for missing stats to avoid empty chips.
5. **Interactions**
   - Implement nav underline animation using `::after` pseudo-element and keyframes.
   - Add comet tail on Donate hover with SVG filter + GSAP or CSS animation; ensure throttled for performance.
6. **Responsive polish**
   - Stack nav under hero on <768px, convert stat chips into horizontally scrollable list with focusable buttons.
   - Test on 320px width to confirm CTAs remain tappable.
7. **Instrumentation**
   - Integrate `Donate` → `/get-involved?intent=donate` and `Volunteer` → mailto/form anchor; track clicks via Plausible events.
   - Emit custom analytics event when hero download CTA is clicked (`hero_download_magazine`).
8. **QA sweep**
   - Run Lighthouse desktop + mobile focusing on color contrast, layout shift, tap targets.
   - Keyboard test (Tab/Shift+Tab) to ensure no focus traps inside pill nav.

## 7. Assets & Inputs Needed
- High-res portrait or lab photo of Prof. Haque (or commission illustration).
- Kids-in-science photo with release or use NASA/ESA open-source imagery with attribution.
- SVG constellation set (3–4 shapes) + dotted orbit path asset.
- Updated logo lockup (full color + monochrome) for top-left placement.
- Latest stats copy + CTA destinations from Brandon/Prof. Haque.

## 8. Future Enhancements (optional backlog)
- Parallax star layers reacting to scroll.
- Audio toggle for subtle observatory ambiance.
- Live “Next Event” ticker pulling from Events page data.
- Animated shooting star triggered on first visit.
