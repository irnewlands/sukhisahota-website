# Sukhi Sahota NDP Redesign — Design Ideas

## Context
Campaign landing page for Sukhi Sahota, NDP BC Regional Rep Executive candidate. The page covers: Welcome/hero, About Me, The Election of 2025, Why I'm Running, What I Will Bring to the Table, and The NDP Review and Renewal Report. The existing brand uses NDP orange as the primary colour.

---

<response>
<probability>0.08</probability>
<text>

## Idea A — Editorial Broadsheet

**Design Movement:** Swiss International Typographic Style meets modern editorial journalism (think The Guardian long-form or Jacobin Magazine)

**Core Principles:**
- Strict typographic hierarchy drives all layout decisions
- Content-first: imagery serves the text, not the other way around
- Asymmetric column grids create tension and visual interest
- Political gravitas communicated through restraint and precision

**Color Philosophy:**
- Background: warm off-white (#F7F4EF) — evokes newsprint, credibility
- Primary text: near-black charcoal (#1A1A1A)
- NDP Orange (#E8610A) used exclusively for pull quotes, rule lines, and key data callouts
- Deep forest green (#1C3B2A) as a secondary accent for section headers
- Emotion: serious, trustworthy, grassroots-intellectual

**Layout Paradigm:**
- Horizontal rule-based section dividers (thick orange rules)
- Two-column editorial grid with deliberate column breaks
- Large drop-cap initials on the Welcome and About Me sections
- Sidebar-style stat callouts (vote share, timeline data) in narrow right columns
- Staggered image placement — images bleed into margins, not centered

**Signature Elements:**
- Thick orange horizontal rules (4–6px) as section separators
- Large typographic pull quotes in condensed bold typeface
- Numbered section labels in small caps (01 / WELCOME, 02 / ABOUT ME)

**Interaction Philosophy:**
- Smooth scroll with section anchors
- Pull quotes animate in on scroll (fade + slight upward drift)
- Hover on nav links reveals orange underline that slides in from left

**Animation:**
- Section reveals: fade-in + translateY(20px) → translateY(0), 300ms ease-out
- Pull quotes: stagger 50ms per line
- No decorative animations — motion only confirms content arrival

**Typography System:**
- Display: Playfair Display (bold, condensed feel for headlines)
- Body: Source Serif 4 (readable, editorial)
- Labels/UI: DM Mono (small caps, section numbers)
- Hierarchy: 72px display / 36px section / 20px body / 13px caption

</text>
</response>

<response>
<probability>0.07</probability>
<text>

## Idea B — Constructivist Campaign Poster

**Design Movement:** Russian Constructivism meets contemporary political design (Bernie Sanders 2020 / AOC campaign aesthetic)

**Core Principles:**
- Bold diagonal compositions and geometric shapes create energy
- High contrast — black, white, and NDP orange only
- Typography as visual element, not just information carrier
- Unapologetically political, direct, and grassroots

**Color Philosophy:**
- Black (#0D0D0D) as dominant background
- NDP Orange (#E8610A) for geometric shapes, headlines, and emphasis
- White (#FAFAFA) for body text and contrast
- Occasional red (#C0392B) for urgent callouts
- Emotion: urgency, solidarity, movement energy

**Layout Paradigm:**
- Diagonal section breaks (CSS clip-path) between major sections
- Hero: large candidate portrait in high-contrast duotone (orange + black)
- Oversized typographic numbers (01, 02...) as background texture
- Content panels alternate between black and orange backgrounds
- No traditional card UI — everything is bold blocks

**Signature Elements:**
- Duotone photography (orange + black)
- Diagonal clip-path section transitions
- Oversized display numbers as decorative background elements

**Interaction Philosophy:**
- Hover on sections reveals full-colour version of duotone images
- Navigation is a bold fixed sidebar (left) with large numbered anchors
- Scroll triggers section-level colour shifts

**Animation:**
- Hero text: staggered letter-by-letter reveal (20ms per character)
- Section transitions: clip-path wipe from left
- Colour reveals on hover: 200ms ease-out

**Typography System:**
- Display: Bebas Neue (all-caps, condensed)
- Body: IBM Plex Sans (clean, technical)
- Accent: Courier Prime (typewriter quotes)
- Hierarchy: 96px display / 48px section / 18px body / 12px label

</text>
</response>

<response>
<probability>0.06</probability>
<text>

## Idea C — Warm Civic Modernism ← SELECTED

**Design Movement:** Mid-century civic modernism meets contemporary progressive political design — think Obama 2008 "Hope" poster sensibility filtered through a warm, human-centred lens

**Core Principles:**
- Warmth and humanity first: the candidate's personal story is the visual anchor
- Generous whitespace creates breathing room and communicates confidence
- NDP orange is honoured but balanced with cream and deep charcoal
- Asymmetric layouts with intentional visual weight distribution

**Color Philosophy:**
- Background: warm cream (#FBF7F0) — welcoming, human, non-corporate
- Primary text: deep charcoal (#1E1E1E)
- NDP Orange (#E8610A) for primary CTAs, section accents, and key highlights
- Warm amber (#C4621A) for secondary accents and hover states
- Muted sage (#4A6741) for the land acknowledgement and environmental references
- Emotion: approachable authority, grassroots warmth, progressive optimism

**Layout Paradigm:**
- Sticky top navigation with clean horizontal links and language toggle
- Hero: full-bleed split layout — portrait left (60%), bold headline + CTA right (40%)
- Sections alternate between cream and a very light warm grey (#F2EDE5)
- Pull quotes break out of the text column into the margin
- Stats and key data displayed as large typographic callouts, not tables

**Signature Elements:**
- Warm orange accent lines (2px) under section headings
- Rounded-corner photo frames with subtle drop shadows
- Quote marks rendered as large decorative glyphs in orange

**Interaction Philosophy:**
- Smooth scroll with 80ms offset for sticky nav
- Section anchors highlight in nav as user scrolls
- CTAs have a warm fill-from-bottom hover animation

**Animation:**
- Hero: portrait fades in + slides right 30px, headline fades in 150ms later
- Section reveals: fade-in + translateY(24px) → 0, 280ms ease-out, triggered at 80% viewport
- Pull quotes: scale(0.97) → scale(1) + fade, 220ms
- Nav links: underline slides in from left, 180ms ease-out
- Button hover: background fills from bottom, 200ms

**Typography System:**
- Display: Fraunces (variable, warm serif with personality — headlines only)
- Body: Outfit (clean geometric sans, highly readable)
- Accent/labels: Outfit Medium (small caps for section labels)
- Hierarchy: 64px display / 40px section / 18px body / 14px caption / 12px label

</text>
</response>

---

## Selected Design: Idea C — Warm Civic Modernism

This approach best serves the campaign's goals: it preserves the NDP orange identity, communicates personal warmth and authenticity, and elevates the page from a graphic poster to a credible, readable political platform. The asymmetric layouts and editorial pull quotes give the page visual distinction without sacrificing clarity.
