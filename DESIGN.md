---
name: Kinetic Apex
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006398'
  on-secondary: '#ffffff'
  secondary-container: '#5bb8fe'
  on-secondary-container: '#00476e'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001e2c'
  on-tertiary-container: '#008ebf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#93ccff'
  on-secondary-fixed: '#001d31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max-width: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system embodies "Precision Velocity"—a high-performance aesthetic tailored for technical environments. It focuses on clarity, speed of comprehension, and surgical precision. 

The style is **High-Contrast Modern**, utilizing a crisp light-mode foundation that prioritizes legibility and information density. It blends minimalist layouts with high-tech accents, evoking the feeling of a professional dashboard or a high-end engineering tool. The emotional response is one of confidence, efficiency, and advanced capability.

## Colors
The color palette is optimized for a high-contrast light experience, ensuring all interactive elements exceed WCAG 2.1 AA accessibility standards.

- **Primary (Deep Navy):** Used for primary text, headings, and high-emphasis icons to provide a grounded, authoritative feel.
- **Secondary (Tech Blue):** A darkened version of the accent blue used for interactive states (links, buttons) to maintain contrast against white.
- **Tertiary (Sky Blue):** Used for decorative accents, progress bars, and focus rings where high visibility is required without overwhelming the user.
- **Surface:** The primary background is a clean white (#FFFFFF), with secondary containers using a very light slate (#F8FAFC) to create subtle structural separation.

## Typography
Typography is highly functional and structured. 
- **Headlines:** Use a clean, technical sans-serif with tight tracking to convey modern precision. 
- **Body:** Uses a systematic sans-serif optimized for long-form readability and data density. 
- **Labels/Data:** Monospaced fonts are utilized for technical data, status labels, and code snippets to reinforce the high-tech narrative.

## Layout & Spacing
The layout follows a **Fluid Grid** system based on a 4px baseline unit. 
- **Desktop:** 12-column grid with a maximum width of 1440px. 
- **Tablet:** 8-column grid with 24px margins.
- **Mobile:** 4-column grid with 16px margins.

Spacing is generous around major sections to maintain a minimalist feel, but tight within component groups (like forms or data tables) to maintain information density and "velocity" of use.

## Elevation & Depth
In this light-mode execution, depth is communicated through **Low-Contrast Outlines** and crisp, professional shadows.
- **Surface Level 0:** Pure white background.
- **Surface Level 1:** Subtle 1px border (#E2E8F0) with no shadow for flat cards.
- **Surface Level 2 (Elevated):** 1px border (#E2E8F0) with a soft, neutral-tinted shadow (Offset: 0 4px, Blur: 12px, Color: rgba(15, 23, 42, 0.05)).
- **Interactions:** Hover states use a slightly more pronounced shadow and a 1px Tech Blue border to signify activity.

## Shapes
Shapes are disciplined and "Soft" (0.25rem - 0.75rem). This avoids the playfulness of fully rounded corners while escaping the harshness of sharp 90-degree angles. The result is a UI that feels engineered and modern. Larger containers like cards use `rounded-lg` (0.5rem), while small elements like checkboxes use base `rounded` (0.25rem).

## Components
- **Buttons:** Primary buttons are Solid Deep Navy with white text. Secondary buttons are outlined in Deep Navy. The Tech Blue is reserved for specific "Action" or "Success" triggers to maintain visual hierarchy.
- **Input Fields:** Use a 1px light gray border that transitions to Tech Blue on focus. Labels use the monospaced font for a technical feel.
- **Cards:** White backgrounds with a subtle border. Titles are always bold Deep Navy.
- **Chips/Status:** Use high-contrast fills with white text for critical alerts, and light-tinted backgrounds with dark text for passive information.
- **Data Tables:** High-density layout with subtle horizontal dividers (#F1F5F9). Alternating row stripes are not used; instead, hover states highlight the entire row.
- **Navigation:** Top-tier navigation uses a clean white background with a subtle bottom border. Active states are indicated by a 2px Tech Blue underline.