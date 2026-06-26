---
description: Project rules for the MTW Sports Payload CMS + Next.js website
---

# Project Rules

## Tech Stack

- **Framework:** Next.js 15+ with App Router (TypeScript)
- **CMS:** Payload CMS 3+ (backend lives in `src/` alongside the frontend)
- **Styling:** Tailwind CSS v4 with custom design tokens in `src/app/(frontend)/globals.css`
- **UI Components:** shadcn/ui components live in `src/components/ui/`
- **Fonts:** Geist (display), Inter (body), JetBrains Mono (labels/data)

## General Rules

1. **Use Tailwind utility classes first.** Avoid inline `style={{ color: 'var(--...)' }}` unless the value is dynamic or the style cannot be expressed with utilities (e.g., complex gradients, dynamic CSS variables).
2. **Follow the design system.** All theme colors are defined in `src/app/(frontend)/globals.css` and mapped in the `@theme inline` block. Use `text-primary`, `bg-surface-container`, `border-outline`, etc. — not arbitrary hex values.
3. **Respect `DESIGN.md`.** The Kinetic Apex palette is the source of truth for colors, typography, spacing, and elevation. When in doubt, match the tokens already in `globals.css`.
4. **Keep components in `src/components/`.** Reusable UI components go in `src/components/ui/`. CMS-specific components go in `src/components/` or co-located with their block.
5. **Use shadcn/ui primitives.** New UI components should be built from or extend existing shadcn components (`button`, `input`, `select`, etc.) rather than creating one-off custom elements.

## Payload CMS Conventions

1. **Blocks live in `src/blocks/<BlockName>/`.**
   - `config.ts` — Payload block configuration with `slug`, `interfaceName`, and `fields`.
   - `Component.tsx` — React component that receives the block data as props.
2. **Register every block in two places:**
   - `src/collections/Pages/index.ts` — add to the `layout` blocks array.
   - `src/blocks/RenderBlocks.tsx` — import the component and add it to `blockComponents` with the matching `slug`.
3. **Use shared field helpers.** Prefer `link()` from `src/fields/link.ts` and `linkGroup()` from `src/fields/linkGroup.ts` for internal/custom links instead of raw text URLs.
4. **Regenerate types after schema changes.** Run `pnpm generate:types` so `src/payload-types.ts` stays in sync with the collections/blocks.
5. **Media uses S3.** Do not rely on local storage. Uploaded images are served from S3. Logo Ribbon and other image-heavy components should use `unoptimized` Next.js images or configure the S3 bucket in `next.config.ts`.

## Styling Conventions

1. **Color tokens:**
   - Headings and high-emphasis text: `text-primary` (Deep Navy)
   - Interactive links and buttons: `text-secondary` / `bg-secondary` (Tech Blue)
   - Decorative accents: `text-tertiary` / `border-tertiary` (Sky Blue)
   - Body text: `text-on-surface` / `text-on-surface-variant`
   - Borders: `border-outline`
   - Surface backgrounds: `bg-surface`, `bg-surface-container`, `bg-surface-container-low`, etc.
2. **Opacity shorthand:** Use `text-on-surface/60` instead of `style={{ opacity: 0.6 }}`.
3. **Spacing:** Use the 4px Tailwind scale. Major section padding: `py-24`. Component gaps: `gap-4`/`gap-6`.
4. **Typography:** Use the custom text utilities from the theme (`text-display-lg`, `text-headline-md`, `text-body-lg`, `text-body-md`, `text-label-sm`).
5. **Layout is light-only.** Dark mode has been removed. Do not add `dark:` variants or `data-theme='dark'` styles.

## Component Patterns

1. **Client components** use `'use client'` at the top when they need React hooks or browser APIs.
2. **Server components** fetch data and pass it to client components.
3. **Header theme:** Use `useHeaderTheme()` in `Header/Component.client.tsx` only. The global theme is locked to light.
4. **CMS links:** Use `CMSLink` from `src/components/Link` for any link that can be internal or external. It handles `reference` vs `custom` URLs.
5. **Images:** Use `next/image` with proper `width`/`height` and `unoptimized` for S3 logos. For CMS media, prefer the `Media` component or `getMediaUrl()`.

## File Structure

```
src/
  app/(frontend)/           # Next.js frontend pages
  blocks/<BlockName>/       # Payload blocks (config.ts + Component.tsx)
  collections/              # Payload collections (Pages, Media, Posts, etc.)
  components/               # React components (ui/, Link, Media, etc.)
  fields/                   # Reusable Payload field helpers
  Header/                   # Site header
  Footer/                   # Site footer
  providers/                # Theme and header theme providers
  payload.config.ts         # Payload CMS configuration
  payload-types.ts          # Generated types
```

## Quick Commands

- `pnpm dev` — start Next.js + Payload dev server
- `pnpm generate:types` — regenerate Payload types
- `pnpm build` — production build

## What to Avoid

- Do not add `dark:` Tailwind classes.
- Do not use absolute positioning for the header unless the user explicitly requests it.
- Do not create one-off hex colors in components; use the theme tokens.
- Do not commit `.env` files.
- Do not delete or weaken tests without explicit direction.
