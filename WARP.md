# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Cyber Dev Academy v3 is a Next.js 15 application built with React 19, TypeScript, and Tailwind CSS v4. The project uses the modern Next.js App Router architecture and is configured with Turbopack for faster development builds.

## Essential Commands

### Development
```bash
# Start development server with Turbopack (faster builds)
npm run dev

# Access the application at http://localhost:3000
```

### Build and Production
```bash
# Build for production with Turbopack
npm run build

# Start production server
npm run start
```

### Code Quality
```bash
# Run ESLint for code linting
npm run lint
```

## Project Architecture

### Directory Structure
- `src/app/` - Next.js App Router directory containing pages and layouts
  - `layout.tsx` - Root layout with font configuration (Geist Sans & Geist Mono)
  - `page.tsx` - Home page component
  - `globals.css` - Global CSS with Tailwind imports and CSS variables
- `public/` - Static assets (SVG icons and images)

### Key Technologies
- **Framework**: Next.js 15 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4 with PostCSS
- **Typography**: Geist font family (Sans & Mono variants)
- **Build Tool**: Turbopack (enabled by default in dev and build scripts)
- **Linting**: ESLint with Next.js recommended rules and TypeScript support

### Configuration Files
- `next.config.ts` - Next.js configuration (minimal setup)
- `tsconfig.json` - TypeScript config with `@/*` path mapping to `./src/*`
- `eslint.config.mjs` - ESLint flat config extending Next.js core-web-vitals and TypeScript rules
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS v4

### Styling System
The project uses Tailwind CSS v4 with a custom CSS variable system:
- CSS variables defined in `globals.css` for background and foreground colors
- Dark mode support via `prefers-color-scheme`
- Font variables integrated with Tailwind configuration
- Geist font family loaded via Next.js font optimization

## Development Notes

### File Modifications
- Main page content is in `src/app/page.tsx`
- Global styles and CSS variables are in `src/app/globals.css`
- Root layout and metadata are in `src/app/layout.tsx`

### Path Resolution
- Use `@/*` imports to reference files in the `src/` directory
- Example: `import Component from '@/components/Component'`

### Build Performance
- Project is configured to use Turbopack for both development and production builds
- This provides significantly faster build times compared to the default Webpack bundler
