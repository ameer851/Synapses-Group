
## Synapses Group — Holding Company Website

A multi-page, dark editorial site built directly from the supplied brand kit. Same palette (`#080808` bg, silver text, Rajdhani + Cormorant Garamond + monospace tagline), same SVG logo system, and the canvas neural-pulse animation as the centerpiece of the homepage hero.

### Pages (TanStack Router routes, each with its own SEO meta)

1. **/** — Home
   - Browser-style hero with grid + radial fade background
   - **Animated neural logo canvas** (auto-cycles Pulse → Flow → Wave → Burst every ~8s, no visible controls)
   - Tagline, eyebrow, primary/secondary CTAs linking to /companies and /contact
   - Marquee ticker (InwitClipps · InwitHQ · Inwit AI · …)
   - "Our Companies" 3-card grid (preview of subsidiaries)
   - "The Ecosystem" pipeline diagram (5-step flow with accent colors)
   - Manifesto block + footer

2. **/companies** — Portfolio overview, full subsidiary cards linking to detail pages

3. **/companies/inwitclipps** — Purple accent, "Clipping Platform" detail page (overview, what it does, TrendSync, status)
4. **/companies/inwithq** — Pink accent, "Media Company" detail page
5. **/companies/inwit-ai** — Cyan accent, "AI CEO" detail page

6. **/about** — Founder/Chairman (Ameer), thesis, "Three entities. One autonomous executive.", est. 2025

7. **/contact** — Static directory of all 8 emails (Board, CEO, Hello, Press, Partnerships, Careers, InwitClipps Support, InwitHQ Media) as `mailto:` links with copy-to-clipboard buttons. Priority emails highlighted.

### Shared layout
- Sticky top nav: small NodeMark + "SYNAPSES" wordmark on left; Companies / About / Contact on right
- Footer: full LogoFull lockup, email column, "AUTONOMOUS INTELLIGENCE · EST. 2025" tagline
- Subtle ticker repeats across page bottoms

### Components
- `NodeMark` and `LogoFull` ported from the brand kit JSX as reusable React components
- `NeuralPulseCanvas` — the canvas animation extracted from the HTML, with auto-cycling modes and a `prefers-reduced-motion` static fallback
- `Ticker`, `SubsidiaryCard`, `PipelineStep`, `EmailRow`, `Header`, `Footer`

### Design tokens
- Brand palette wired into `src/styles.css` as CSS variables (bg, card, border, silver, light, dim, ghost, plus per-subsidiary accents)
- Fonts via Google Fonts: Rajdhani (display), Cormorant Garamond (serif italic body), system mono for tagline rows
- Per-route `head()` with unique title, description, og:title, og:description

### Out of scope (for now)
- Functional contact form / database
- Subsidiary product screenshots beyond stylized mock blocks
- Auth / dashboard
