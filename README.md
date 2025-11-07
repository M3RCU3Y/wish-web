## WISH Website Scaffold

This repo houses the in-progress redesign for **WISH (Women In Science, Hope)** — a Trinidad & Tobago nonprofit founded by Prof. Shirin Haque. The MVP includes:

- Pages: Home, About, Programs, Publications, Events, Get Involved, Stories, Contact
- Publications library with filters for year, theme, and audience
- Reusable site chrome (header/footer), impact stats, and copy placeholders pulled from the planning brief

### Tech choices
- Next.js App Router + TypeScript
- Tailwind CSS v4 (PostCSS preset) with custom theme tokens
- Reusable data files under `src/data` for quick iteration; ready to swap for Sanity or Contentful later

### Running locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` for the site preview. Update content in `src/data/*` or individual page components.

### Next implementation tasks
- Replace placeholder PDFs and images (drop into `public/pubs` and `public/images`)
- Connect the Contact form to Formspree, Resend, or another provider
- Wire Donate/Volunteer actions to WiPay TT, Stripe, or approved forms
- Add analytics (Plausible/Umami) and SEO metadata (next-seo/JSON-LD)
# wish-web
