# Angel Law — Homepage Implementation Plan

## Approved Design Direction

**Variant A: Classic Authority** (approved 2026-04-20)
- Mockup: `~/.gstack/projects/angellaw/designs/full-homepage-20260420/variant-A.html`
- Direction: Traditional law firm gravitas, full-bleed dark hero, gold accent stat bar, bordered service cards with gold top lines

### Design Characteristics
- Full-bleed hero with dark navy overlay on photography background
- Centered headline layout: "Trusted Legal Guidance" with gold accent
- Eyebrow text: "Civil · Business · Commercial Litigation"
- Dual CTAs (gold primary + ghost outline)
- Stat bar (4-col) with navy background, gold serif numbers
- About section: 2-column split (text left, photo right)
- Services: 3 cards with image tops and gold top-border accent
- CTA band: navy with grain texture, centered

### Color Palette
- Navy: #0a1628
- Gold: #c9a84c / Dark: #b8943e
- Cream: #faf8f5
- White: #ffffff
- Body text: #4a4a5a

### Typography
- Headlines: Cormorant Garamond (weight 500-600)
- Body: Inter (weight 300-500)

## Tasks

- [x] Implement approved design direction into Next.js codebase
- [x] Ensure hero matches Classic Authority mockup (already matched)
- [x] Verify services cards have gold top-border accent (added to homepage + services page)
- [x] Test responsive behavior (mobile/tablet) — verified, stacks correctly
- [x] Run /qa to verify final implementation — health score 91.5/100, 0 console errors
