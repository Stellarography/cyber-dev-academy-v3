# AGENTS.md

This document provides essential information for AI coding agents working on the cyber-dev-academy-v3 project.

## Project Overview

**Cyber-Dev-Academy-v3** is a modern online learning platform focused on training full-stack developers and prompt engineers. The platform leverages cutting-edge technologies to provide hands-on, interactive learning experiences.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Package Manager**: npm
- **Linting**: ESLint with Next.js config
- **Fonts**: Geist Sans & Geist Mono

### Key Features (Planned)
- User authentication system (Firebase)
- Interactive course modules
- Live code editor integration
- AI-powered assistance via Gemini API
- Progress tracking dashboard
- Community features

## Build and Test Commands

### Development
```bash
# Start development server with Turbopack
npm run dev

# The app will be available at http://localhost:3000
```

### Production
```bash
# Build for production
npm run build

# Start production server
npm start
```

### Code Quality
```bash
# Run ESLint
npm run lint
```

## Project Structure

```
cyber-dev-academy-v3/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Homepage
│   │   └── globals.css      # Global styles
│   └── components/          # Reusable React components
│       └── AuthPage.jsx     # Authentication component
├── public/                  # Static assets
├── PLAN.md                  # Project roadmap and phases
└── package.json
```

## Code Style Guidelines

### TypeScript
- **Strict mode enabled** in tsconfig.json
- Use TypeScript for all new files (prefer `.tsx` for React components)
- Define proper types and interfaces
- Avoid `any` type when possible

### React/Next.js
- Use App Router (not Pages Router)
- Prefer functional components with hooks
- Use `export default` for page components
- Import types with `import type` syntax

### File Naming
- Pages: `page.tsx` (App Router convention)
- Components: PascalCase (e.g., `AuthPage.jsx`)
- Use `.tsx` for TypeScript React components
- Use `.jsx` for JavaScript React components (legacy support)

### CSS/Styling
- Primary styling: Tailwind CSS v4
- Global styles in `src/app/globals.css`
- Use Tailwind classes for component styling
- Custom CSS variables available via Geist font variables

## Development Guidelines

### Path Aliases
- Use `@/*` for imports from `src/` directory
- Example: `import Component from '@/components/Component'`

### Environment Setup
- Node.js version: Compatible with Next.js 15
- Package manager: npm (lockfile: `package-lock.json`)

### Git Workflow
- Main branch: `main`
- Repository: `https://github.com/Stellarography/cyber-dev-academy-v3.git`

## Testing Instructions

**Note**: Testing framework not yet implemented. Consider adding:
- Unit testing: Jest + React Testing Library
- E2E testing: Playwright or Cypress
- Component testing: Storybook (optional)

## Security Considerations

### General Security
- TypeScript strict mode helps prevent runtime errors
- Next.js built-in security features (XSS protection, etc.)
- Sanitize user inputs, especially for course content

### Planned Security Measures
- Firebase Authentication for user management
- Protected routes for authenticated content
- Secure API key management for Gemini API integration
- Input validation for user-generated content

## Authentication & API Integration

### Planned Integrations
- **Firebase Auth**: User registration, login, session management
- **Gemini API**: AI-powered coding assistance and feedback
- **Database**: User progress, course content storage (TBD)

### Environment Variables (Planned)
Create `.env.local` for:
```bash
# Firebase configuration
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=

# Gemini API
GEMINI_API_KEY=

# Database connection (TBD)
DATABASE_URL=
```

## Deployment

### Primary Target
- **Vercel**: Optimized for Next.js deployment
- Auto-deployment from GitHub repository
- Environment variables configured in Vercel dashboard

### Build Optimizations
- Turbopack enabled for faster builds
- Static asset optimization via Next.js
- Font optimization with next/font

## Development Phases

### Phase 1: Core Features (Current)
- [x] Project setup with Next.js 15 + React 19
- [x] Tailwind CSS v4 integration
- [x] TypeScript configuration
- [ ] Firebase Authentication implementation
- [ ] Basic dashboard layout
- [ ] Navigation component

### Phase 2: Content & AI Integration
- [ ] Course data modeling
- [ ] Gemini API integration
- [ ] Interactive code editor
- [ ] User progress tracking

### Future Phases
- [ ] Community features
- [ ] Payment processing
- [ ] Advanced course content

## AI Assistant Guidelines

### When Working on This Project
1. **Respect the tech stack**: Use Next.js 15 App Router patterns, not Pages Router
2. **Follow TypeScript**: Add proper types for new code
3. **Use Tailwind**: Avoid custom CSS unless necessary
4. **Check PLAN.md**: Reference project phases and objectives
5. **Maintain consistency**: Follow existing code patterns and naming conventions

### Common Tasks
- Creating new pages: Use `src/app/[route]/page.tsx` pattern
- Adding components: Place in `src/components/` with proper TypeScript
- Styling: Use Tailwind classes, reference design system in `globals.css`
- API routes: Create in `src/app/api/` directory (when needed)

### Debugging
- Check Next.js dev server logs
- Verify TypeScript compilation: `npx tsc --noEmit`
- Lint check: `npm run lint`
- Browser console for client-side issues

## Resources

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Project Plan](./PLAN.md) - Detailed roadmap and objectives

---

**Last Updated**: August 30, 2025
**Project Version**: 0.1.0
**Contributors**: Stellarography
