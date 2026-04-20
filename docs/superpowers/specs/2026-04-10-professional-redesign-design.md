# BAL Law — Professional Redesign Spec
**Date:** 2026-04-10
**Direction:** Modern Corporate (clean, contemporary, lawyerly — Latham & Watkins meets well-funded tech)
**Stack:** Next.js 16, Tailwind v4, TypeScript

---

## 1. Design Tokens (globals.css)

### Colors — no changes to the palette, but use them with more discipline
```
--navy:     #0a1628   (primary background, headlines on light)
--gold:     #c9a84c   (single accent — CTAs, labels, highlights only)
--gold-dark: #b8943e  (hover state)
--cream:    #faf8f5   (section alternation)
--white:    #ffffff
--text-body: #4a4a5a
--text-light: #8a8a9a
--border:   #e5e5ea
```

**New token:** `--surface: #f4f4f6` — a neutral light-gray for card backgrounds (replaces white-card-on-cream which blurs)

### Typography
- Headings: DM Serif Display (keep — it's good)
- Body: Inter (keep)
- **Scale tighten:** h1 max `64px` desktop, h2 `40px`, h3 `24px`
- **Line-height:** headings `1.1`, body `1.65`
- **Letter-spacing:** headings `-0.02em` (tighter, more editorial)
- Body text `16px` base

### Spacing
- Section padding: `py-20 md:py-28` (tighter than current `py-24 md:py-32`)
- Container max-width: `1200px` (keep)
- Card padding: `p-6` or `p-8` (keep)

### Border radius
- Cards: `rounded-lg` (8px) — kill `rounded-xl` and `rounded-2xl` everywhere. Modern corporate is sharper.
- Buttons: `rounded-md` (6px — keep)
- Images: `rounded-lg` (keep one level only)

### Shadows
- Cards: `shadow-sm` only — no `shadow-lg` except the contact form
- Hover: `shadow-md` (subtle lift)

### Removed patterns
- NO `rounded-full` icon circles anywhere
- NO `text-center` on feature/section content (left-align everything except hero and testimonials)
- NO `mx-auto` on icons
- NO gradient blobs or wave dividers

---

## 2. Navbar

**Current:** navy-glass blur on scroll, small logo, nav links lack visual weight
**New:**
- On hero pages (homepage, contact): starts **transparent** → scrolls to **white** bg with `border-b border-border shadow-sm`
- On interior pages (services, about): starts **white** immediately
- Logo: `BAL` in DM Serif, gold square icon — keep, slightly larger (`text-2xl`)
- Nav links: `text-sm font-medium text-navy/70 hover:text-navy` — dark on white, not white on dark glass
- CTA button: `btn-primary` — gold, keep
- Mobile drawer: white background (not navy), dark text

---

## 3. Homepage (`/`)

### 3a. Hero
- Keep full-height dark hero with Unsplash background
- Remove `hero-parallax` (background-attachment: fixed is janky on mobile and causes performance issues)
- **New:** Add a bottom border / accent line in gold at the bottom of the hero section — `h-px bg-gradient-to-r from-transparent via-gold to-transparent`
- Headline: stays `"Trusted Legal Guidance"`
- Subline: stays, but `text-white/80` (brighter)
- CTAs: keep as-is

### 3b. Feature Strip — COMPLETE REDESIGN
**Kill:** 3-column icon-in-circle centered cards
**Replace with:** Horizontal stat/proof bar — `bg-navy` strip, 4 stats side-by-side

```
150+          15+           100%          24hr
Clients       Years         Confidential  Response
Served        Experience    Guarantee     Time
```

Layout: `grid grid-cols-2 md:grid-cols-4` dividers between, gold numbers in DM Serif, labels in Inter small caps

### 3c. Attorney Bio — keep structure, upgrade execution
- Left/right split: keep
- Remove `rounded-xl` on image → `rounded-lg`
- Stats below photo: remove centered rounded boxes → simple `flex gap-8` with gold number + label, no box/background
- Add a thin gold left border on the eyebrow label (`border-l-2 border-gold pl-3`)

### 3d. Services Section — upgrade to editorial grid
- Remove `text-center` heading
- Left-align section label + heading
- Service cards: remove `rounded-xl` → `rounded-lg`, keep image + text, but add a gold hover left-border accent instead of just color change

### 3e. Newsletter / Stay Informed — REPLACE
**Kill:** Newsletter form (weak signal, doesn't match a law firm)
**Replace with:** CTA band — `bg-navy`, large serif headline, single `"Schedule a Consultation"` button centered. No form.

```
Ready to protect your business?
[Schedule a Consultation →]
```

---

## 4. Services Page (`/services`)

### 4a. Hero — keep, but left-align text (remove `text-center`)

### 4b. Featured service blocks — upgrade
- Remove `rounded-2xl` → `rounded-lg`
- Add a thin `border border-border` instead of cream bg
- Move button to bottom, full-width on mobile

### 4c. Our Work grid — upgrade to list layout
- Remove card grid with images
- Replace with a clean **practice areas list** — full-width rows with:
  - Gold number (`01`, `02`, `03`, `04`)
  - Title in DM Serif
  - Description
  - "Learn more →" right-aligned
  - `border-b border-border` between rows
  - Hover: row bg goes `bg-cream`

### 4d. Reviews — upgrade cards
- Remove `rounded-xl` → `rounded-lg`
- Remove decorative quote SVG in top-right corner (too ornate)
- Keep stars, quote text, avatar initials
- `bg-surface` instead of `bg-cream`

---

## 5. About Page (`/about`)

### 5a. Hero — keep photo collage, left-align text

### 5b. Our Approach — keep but add left-border accent on paragraph

### 5c. Offices — SIMPLIFY
- Kill the 3-office grid (2 of the 3 addresses are fake)
- Replace with a single info block — address, hours, phone, email — clean list layout
- No icon circles

### 5d. FAQ — keep accordion, minor style upgrades
- `rounded-lg` instead of `rounded-xl`
- Stronger border color `border-border`
- Question font weight `font-semibold` → `font-medium text-navy`

---

## 6. Contact Page (`/contact`)

### 6a. Hero — keep, left-align text (kill `text-center`)

### 6b. Form — keep all fields, minor upgrades
- `rounded-md` on inputs (was `rounded-lg`)
- Submit button: `w-full` gold, keep
- Checkbox: wrap in proper label with padding for 44px tap target

### 6c. Location block — upgrade placeholder
- Current: cream box with icon — looks unfinished
- New: Replace with a `bg-navy` info panel matching footer style:
  - Address, hours, phone, email on left
  - Right side: a clean static map iframe OR a styled address card with a "Get Directions →" link pointing to Google Maps

---

## 7. Footer — SIMPLIFY

**Kill:** Quick Contact form (only collects name — no value)
**New:** 3-column clean footer
- Col 1: Logo + tagline + social icons
- Col 2: Quick links (Home, Services, About, Contact)
- Col 3: Contact (phone, email, address, hours)
- Bottom bar: credentials strip + copyright

---

## 8. Shared Component Upgrades

### ScrollReveal
- Keep as-is (prefers-reduced-motion fix already applied)

### Buttons
- `btn-primary`: keep gold, add `font-semibold`, letter-spacing `-0.01em`
- `btn-ghost`: keep, same upgrade
- NEW: `btn-text` — just text + arrow, no background. For inline CTAs like "Learn more →"

### Images
- All `rounded-xl` and `rounded-2xl` → `rounded-lg`
- All `aspect-[4/3]` → keep (good ratio)

---

## 9. 21st.dev Component Usage

Use the `mcp__magic__21st_magic_component_builder` tool to get inspiration/implementation for:
- **Stat bar** (homepage feature strip replacement)
- **Practice areas list** (services Our Work section)
- **Testimonial cards** (services reviews)
- **CTA band** (homepage newsletter replacement)
- **Contact info panel** (contact page location block)

For each: search 21st.dev, adapt the component to the BAL color system (navy/gold/cream), remove any patterns that conflict with the Modern Corporate direction.

---

## 10. Execution Order

**Phase 1 (sequential, shared):**
1. `globals.css` — token updates, border-radius standardization, new `btn-text` class, remove parallax
2. `Navbar.tsx` — white-on-scroll behavior
3. `Footer.tsx` — simplified 3-column

**Phase 2 (parallel agents):**
- Agent A: `src/app/page.tsx` (Homepage)
- Agent B: `src/app/services/page.tsx` (Services)
- Agent C: `src/app/about/page.tsx` (About)
- Agent D: `src/app/contact/page.tsx` (Contact)

Each agent reads this spec + the current page file + uses 21st.dev MCP for component patterns.

---

## 11. What We Are NOT Changing

- Color palette (navy/gold/cream is solid)
- Font pairing (DM Serif + Inter is solid)
- Page routing and URL structure
- ScrollReveal component
- All existing copy / content
- Contact form fields and validation logic
- Navbar mobile drawer behavior
- Metadata / SEO tags
