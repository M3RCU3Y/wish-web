You’ve got the bones. Now we sculpt the face. Beauty on the web is mostly hierarchy, contrast, rhythm, and restraint—then a pinch of stardust. Here’s a crisp plan and paste-in assets to take WISH from “fine” to “whoa.”

---

# Next 3 steps (do these now)

1. **Adopt a tokenized theme** (colors, spacing, radii) so everything looks intentional.
2. **Add a cinematic hero + aurora backdrop** with gentle motion; make the **Donate** button a jewel.
3. **Upgrade the Publications grid** to magazine-covers-as-cards with depth, tilt, and buttery hover.

Everything below is a ready-to-commit `design.md` you can drop in the repo root.

---

# design.md

## 1) Brand North Star

WISH = **joyful science for kids** with a night-sky heart. Visual voice: *luminous, soft, inclusive*. Use layered gradients (aurora), tiny starfield, warm accent CTAs, friendly type.

**Principles**

* **Hierarchy:** one big idea per screen; generous whitespace.
* **Contrast:** deep indigo canvas; warm gold CTA; cool teal/purple highlights.
* **Rhythm:** 8-pt spacing; consistent card shapes; 2–3 motion primitives reused.
* **Restraint:** two fonts, one shadow scale, one glow recipe.

---

## 2) Tokens (colors, radii, shadows, motion)

> Add these to `src/app/globals.css` near the top.

```css
:root {
  /* Brand */
  --indigo-950: #0b1020;
  --indigo-800: #121c3a;
  --teal-400:   #38c0b5;
  --violet-400: #8a7bfd;
  --gold-400:   #e3b341;
  --sky-300:    #7dd3fc;

  /* Theming */
  --bg-canvas:  var(--indigo-950);
  --bg-elev-1:  #0f1530cc; /* glass */
  --text-hi:    #eaf2ff;
  --text-lo:    #a7b0ca;
  --brand-cta:  var(--gold-400);
  --brand-accent: var(--teal-400);

  /* Radii & spacing */
  --radius-lg:  20px;
  --radius-xl:  28px;
  --pad-section: clamp(2rem, 4vw, 4rem);

  /* Shadows & glow */
  --shadow-soft: 0 10px 30px rgba(0,0,0,0.35);
  --glow-cta: 0 0 0 4px rgba(227,179,65,0.18), 0 12px 30px rgba(227,179,65,0.28);

  /* Motion */
  --dur-fast: 140ms;
  --dur-med:  240ms;
  --ease-out: cubic-bezier(.16,1,.3,1);
}
```

> Extend Tailwind so utility classes know about these.

`tailwind.config.ts`

```ts
theme: {
  extend: {
    colors: {
      canvas: 'var(--bg-canvas)',
      elev1: 'var(--bg-elev-1)',
      brand: {
        cta: 'var(--brand-cta)',
        accent: 'var(--brand-accent)',
      },
      text: { hi: 'var(--text-hi)', lo: 'var(--text-lo)' },
    },
    borderRadius: {
      lg: 'var(--radius-lg)',
      xl: 'var(--radius-xl)',
    },
    boxShadow: {
      soft: 'var(--shadow-soft)',
      glow: 'var(--glow-cta)',
    }
  }
}
```

---

## 3) Background magic: Aurora + starfield

**Goal:** cinematic depth without noise or jank. Keep it CSS-only.

Create `src/components/aurora-bg.tsx`:

```tsx
export default function AuroraBG() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-canvas" />
      {/* Aurora blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[70vh] w-[70vw] rounded-full blur-3xl opacity-60"
           style={{background: 'radial-gradient(60% 60% at 50% 50%, #1b3a8a55 0%, transparent 60%)'}} />
      <div className="pointer-events-none absolute -bottom-48 right-[-10%] h-[80vh] w-[55vw] rounded-full blur-3xl opacity-70"
           style={{background: 'radial-gradient(60% 60% at 50% 50%, #8a7bfd55 0%, transparent 60%)'}} />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[50vh] w-[40vw] rounded-full blur-3xl opacity-70"
           style={{background: 'radial-gradient(60% 60% at 50% 50%, #38c0b555 0%, transparent 60%)'}} />
      {/* Subtle stars */}
      <div className="absolute inset-0"
           style={{backgroundImage:'radial-gradient(1px 1px at 20% 30%, #ffffff55 50%, transparent 51%), radial-gradient(1px 1px at 60% 70%, #ffffff55 50%, transparent 51%), radial-gradient(1px 1px at 80% 20%, #ffffff55 50%, transparent 51%)', backgroundRepeat:'repeat', backgroundSize:'800px 800px'}} />
    </div>
  );
}
```

Inject in `layout.tsx` right inside `<body>`:

```tsx
<AuroraBG />
```

---

## 4) Type system

* **Headings:** Fraunces or Source Serif (weight 600).
* **UI/Body:** Inter or Manrope (400/600).
* **Scale:** clamp to viewport for the hero.

Example in `globals.css`:

```css
h1 { font-family: 'Fraunces', ui-serif, Georgia, serif; letter-spacing: -0.01em; }
h2,h3 { font-family: 'Fraunces', ui-serif; }
body, button, input { font-family: Inter, ui-sans-serif, system-ui; }
```

Hero title:

```css
.hero-title { 
  font-size: clamp(2.2rem, 4.2vw, 4.2rem);
  line-height: 1.08;
}
```

---

## 5) Buttons & chips (the “jewel” rule)

Create `src/components/ui/cta.tsx`:

```tsx
export function CTA({children, href}:{children:React.ReactNode; href:string}) {
  return (
    <a href={href}
       className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-black bg-brand-cta shadow-glow hover:scale-[1.02] active:scale-[0.99] transition-transform duration-[var(--dur-fast)] ease-[var(--ease-out)]">
      {children}
    </a>
  );
}
export function Ghost({children, href}:{children:React.ReactNode; href:string}) {
  return (
    <a href={href}
       className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-text-hi border border-white/15 hover:bg-white/5 transition-colors">
      {children}
    </a>
  );
}
```

Use on the home hero: **Donate** (CTA) and **Volunteer** (Ghost).

---

## 6) Hero section: composition

Replace the hero with a tight grid and a glass stats panel.

```tsx
<section className="relative mx-auto max-w-6xl px-6 pt-[8vh] pb-16">
  <div className="grid md:grid-cols-12 gap-8">
    <div className="md:col-span-7">
      <p className="text-xs tracking-[.25em] text-sky-300/90 mb-4">WOMEN IN SCIENCE, HOPE</p>
      <h1 className="hero-title text-text-hi mb-6">
        Science kits, mentorship, and joyful outreach for children across Trinidad & Tobago.
      </h1>
      <p className="text-text-lo max-w-prose mb-8">
        Founded by Prof. Shirin Haque, WISH keeps curiosity alive with year-round drives, astronomy nights, and our annual <em>WISH Upon a Star</em> magazine.
      </p>
      <div className="flex flex-wrap gap-3">
        <CTA href="/get-involved#donate">Donate</CTA>
        <Ghost href="/get-involved#volunteer">Volunteer</Ghost>
        <a className="text-sky-300 underline/30 hover:underline" href="/publications">Download magazines →</a>
      </div>
    </div>
    <aside className="md:col-span-5">
      <div className="rounded-xl bg-elev1 p-6 shadow-soft backdrop-blur-md">
        <p className="text-xs tracking-widest text-text-lo mb-3">IMPACT IN MOTION</p>
        <ul className="grid grid-cols-2 gap-4">
          <li><div className="text-3xl font-bold text-text-hi">18</div><div className="text-text-lo text-sm">Homes supported</div></li>
          <li><div className="text-3xl font-bold text-text-hi">420+</div><div className="text-text-lo text-sm">Science kits delivered</div></li>
          <li><div className="text-3xl font-bold text-text-hi">75</div><div className="text-text-lo text-sm">Volunteers activated</div></li>
          <li><div className="text-3xl font-bold text-text-hi">5</div><div className="text-text-lo text-sm">Years of WISH</div></li>
        </ul>
      </div>
    </aside>
  </div>
</section>
```

---

## 7) Card system

Create a unified “glass card” with soft glow and on-hover lift.

```tsx
export function GlassCard({children}:{children:React.ReactNode}) {
  return (
    <div className="rounded-xl bg-elev1 shadow-soft backdrop-blur-md ring-1 ring-white/8 transition-transform duration-[var(--dur-med)] ease-[var(--ease-out)] hover:-translate-y-0.5 hover:ring-white/20">
      {children}
    </div>
  );
}
```

Use this for Programs, Events, Stories.

---

## 8) Publications grid (make it delightful)

* Large **cover image** (next/image), slight **3D tilt** on hover.
* Bottom gradient strip with title + tags + Download button.
* Focus states match hover behavior (keyboard users get the same fun).

`src/components/publication-card.tsx` (core idea):

```tsx
import Image from "next/image";
import { CTA } from "./ui/cta";
import { GlassCard } from "./ui/glass-card";

export function PublicationCard({pub}:{pub:{
  title:string; year:number; theme:string[]; cover:string; href:string; size?:string;
}}) {
  return (
    <GlassCard>
      <a href={pub.href} className="group block relative rounded-xl overflow-hidden">
        <div className="relative aspect-[4/5]">
          <Image src={pub.cover} alt={`${pub.title} cover`} fill sizes="(min-width: 768px) 320px, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" priority />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <div className="text-text-hi font-semibold">{pub.title}</div>
          <div className="text-text-lo text-sm">{pub.year} · {pub.theme.join(" · ")}</div>
          <div className="mt-3">
            <CTA href={pub.href}>Download{pub.size ? ` (${pub.size})` : ""}</CTA>
          </div>
        </div>
      </a>
    </GlassCard>
  );
}
```

Grid container:

```tsx
<section className="mx-auto max-w-6xl px-6 py-[var(--pad-section)]">
  <h2 className="text-2xl md:text-3xl text-text-hi mb-6">Publications</h2>
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {/* map <PublicationCard/> over your data */}
  </div>
</section>
```

---

## 9) Motion etiquette

* **Use sparingly:** scale 1.02 on hover, 140–240 ms, same easing everywhere (`--ease-out`).
* **Framer Motion** only for section entrances (fade+rise 8–12px) and hero star glints (opacity pulse).
* **No parallax for content**; keep it for the aurora only.

---

## 10) Imagery & mascots

* Place **Dr. Dingolay** + **Ramajay** as small line sketches at section starts (SVG, single color, 40–72px).
* Use **AVIF/WebP** for photos; add concise alt text like “WISH volunteers deliver kits to…”.

---

## 11) Accessibility & polish

* Color contrast ≥ WCAG AA. Test CTA gold on dark with bold black text (it passes).
* Focus rings: `outline: 2px solid color(display-p3 1 0.8 0 / .9)` fallback to `#e3b341`.
* Reduce motion option: respect `prefers-reduced-motion` (disable hero pulses/tilt).

---

## 12) Page-by-page quick wins

* **Home:** new hero + impact glass panel; “Programs” as 2×2 GlassCards with mini-icons; “Latest magazine” as a big PublicationCard.
* **About:** timeline stripe (2020→2025); executive cards with small headshots and role chips.
* **Programs:** each program card with emoji-like icon: 🎁 (Dec), 🛒 (Apr), 🧪 (Sep), 🔭 (Stars).
* **Get Involved:** split CTA blocks: Donate (gold), Volunteer (teal), Partner (violet).
* **Publications:** above grid add filters (Year, Theme) as pill toggles.
* **Footer:** add a soft top gradient and a single-line mission reminder.

---

## 13) Implementation checklist (1-day sprint)

* [ ] Add tokens to Tailwind + globals.
* [ ] Drop in `AuroraBG` and replace hero with the grid layout.
* [ ] Replace buttons with `CTA`/`Ghost`.
* [ ] Convert Programs/Events/Stories to `GlassCard`.
* [ ] Swap Publications to `PublicationCard` and wire real covers + file sizes.
* [ ] Tighten spacing: section padding to `var(--pad-section)`.
* [ ] Accessibility pass (tab order, focus styles, alt text).
* [ ] Lighthouse pass (≥90 across the board).

---

## 14) Visual QA rubric

If a screenshot at 50% zoom still communicates the hierarchy (hero → CTA → featured mag → programs), ship it. If your eye doesn’t know where to go in 1 second, simplify.

---

That’s the blueprint. Implement the tokens + aurora + card system first; those three shifts alone will make the site feel premium. After that, the Publications grid becomes your unmistakable showpiece, and the Donate button looks like it actually matters.
