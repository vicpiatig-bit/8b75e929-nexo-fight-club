---
name: Raw Performance
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e4bebc'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#ab8987'
  outline-variant: '#5b403f'
  surface-tint: '#ffb3b1'
  primary: '#ffb3b1'
  on-primary: '#680011'
  primary-container: '#ff535b'
  on-primary-container: '#5b000e'
  inverse-primary: '#bb152c'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#c7c6c6'
  on-tertiary: '#2f3131'
  tertiary-container: '#909191'
  on-tertiary-container: '#292a2a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b1'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#92001c'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  combat-red: '#E63946'
  cement-surface: '#1A1A1A'
  grainy-grey: '#262626'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 84px
    fontWeight: '700'
    lineHeight: 90%
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 100%
    letterSpacing: -0.02em
  headline-impact:
    fontFamily: Barlow Condensed
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 100%
    letterSpacing: 0.02em
  headline-impact-mobile:
    fontFamily: Barlow Condensed
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 100%
  section-number:
    fontFamily: Barlow Condensed
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 100%
    letterSpacing: 0.1em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 150%
  label-technical:
    fontFamily: Barlow Condensed
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 100%
    letterSpacing: 0.08em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 140%
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  section-gap: 96px
  impact-gap: 160px
---

## Brand & Style

This design system is a radical evolution of precision into the territory of high-stakes athleticism. It embodies the "Raw Performance" of a boxing gym: the grit of the ring, the structural focus of training, and the visceral energy of combat. The aesthetic is a fusion of **Modern Brutalism** and **Technical Editorial**, moving away from clinical minimalism toward a high-impact, industrial atmosphere.

The visual narrative is built on tension—the contrast between elegant, oversized serif headlines and aggressive, condensed sans-serif technical data. It rejects ornamentation in favor of structural integrity. The emotional response is one of urgency, strength, and uncompromising discipline. Imagery is central: high-contrast, grainy photography featuring motion blur and sweat, framed by sharp, heavy-set containers that feel as solid as a concrete floor.

## Colors

The palette is anchored in a heavy, high-contrast dark mode that mirrors the shadows and spotlighting of a boxing arena. 

- **Primary (Combat Red - #E63946):** A vibrant, aggressive red used for critical actions, status indicators, and high-impact accents. It represents adrenaline and the "strike."
- **Neutral (Deep Black - #0A0A0A):** The core background and structural color. It provides a void-like depth for content to emerge from.
- **Surface (Cement - #1A1A1A):** Used for containers and section differentiation. This color should be paired with a subtle, grainy noise texture overlay to simulate the feel of raw concrete.
- **Secondary (Pure White - #FFFFFF):** Reserved for primary typography and high-contrast editorial elements.
- **Tertiary (Muted Silver - #A0A0A0):** Used for technical metadata and secondary labeling to prevent visual clutter.

## Typography

Typography functions as a tool for both elegance and impact.

- **Editorial Flourish:** **Playfair Display** is used for large, atmospheric headlines. It adds a layer of "craft" and "mastery" to the discipline.
- **The Engine:** **Barlow Condensed** is the workhorse for strength. It is used for section numbers, high-impact subheadings, and technical labels. Its verticality and tight tracking evoke the industrial aesthetic of gym signage.
- **Utility:** **Hanken Grotesk** handles all long-form reading with a neutral, professional tone, while **JetBrains Mono** remains for precise technical data and timestamps.

## Layout & Spacing

The layout is a rigid **Fixed Grid** on desktop (12 columns) that utilizes brutalist spacing to create tension.

- **Rhythm:** A 4px baseline grid ensures technical precision. 
- **Sectioning:** Use "Impact Gaps" (160px) between major narrative shifts to allow the heavy photography and typography to breathe. 
- **Reflow:** On mobile, margins tighten to 16px. Elements should remain stacked in a single column with "Cement" containers stretching full-width to emphasize the weight of the interface.
- **Alignment:** Technical labels and section numbers (Barlow Condensed) should be positioned as "out-riggers" in the margins where possible, acting as navigational anchors.

## Elevation & Depth

This system rejects shadows in favor of **Tonal Stacking** and **Raw Textures**.

- **Depth through Tone:** The "Cement" surface container is the primary method of elevating content. Placing a `#1A1A1A` box over the `#0A0A0A` background creates a clear hierarchy without relying on soft shadows.
- **Texture:** Containers should utilize a CSS noise filter or subtle SVG grain to break the digital perfection and ground the UI in a physical reality.
- **Structural Borders:** Use 2px solid borders in Combat Red (#E63946) or Muted Silver (#A0A0A0) to define boundaries. These are "hard" separations that feel architectural.

## Shapes

The shape language is strictly **SHARP**. 

Every interactive and structural element—from buttons and cards to image masks and form fields—must have 0px corner radii. This uncompromising geometry reflects the harshness of the training environment and the precision of the athlete. Any deviation into rounded corners is a violation of the system's core "Raw Performance" philosophy.

## Components

- **Action Buttons:** Massive, sharp-edged rectangles. Primary actions use the Combat Red background with white text. Hover states should invert or shift to a high-contrast black for an immediate visual "snap."
- **Technical Chips:** Small, condensed labels using Barlow Condensed. They should have a 1px white or red border and a transparent background.
- **Cement Cards:** Container elements for classes or stats. Use the Cement surface color and 1px hard borders. Headers within these cards should use the condensed sans-serif.
- **Impact Inputs:** Underlined only with a 2px stroke. When active, the stroke turns Combat Red. Labels are placed inside the top-left of the field in a small, condensed uppercase font.
- **Motion Imagery:** All images must be framed in sharp 1:1 or 16:9 boxes. High grain and motion blur are preferred to convey energy.
- **Progress Bars:** Flat, 8px tall bars. The background is grainy grey, and the fill is a solid, un-gradient Combat Red.