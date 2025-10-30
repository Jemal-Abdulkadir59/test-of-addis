# Copilot Instructions for AI Coding Agents

## Project Overview
- This is a Next.js (App Router) monorepo using TypeScript, with a focus on an online restaurant ordering experience.
- The main UI and business logic live under `src/app/`, with public-facing routes in `src/app/(public)/` and dashboard/admin in `src/app/(dashboard-layout)/`.
- Shared UI components are in `src/components/`, with further subfolders for `auth`, `layout`, `pages`, and `ui`.
- Data, configuration, and utility logic are in `src/data/`, `src/configs/`, and `src/lib/` respectively.
- Images and static assets are in `public/assets/` and `public/images/`.

## Key Patterns & Conventions
- **Client/server components:** Use `'use client'` at the top of files for client components. Most UI logic is client-side.
- **Routing:** Next.js App Router conventions. Route files are in `src/app/`, with nested folders for layouts and pages. Dynamic routes use `[param]` syntax.
- **State management:** Local state via React hooks. Contexts for global settings in `src/contexts/`.
- **Cart and offers:** Cart logic is managed in `src/app/(public)/menu/page.tsx` and passed to the `CartPage` component.
- **Forms and validation:** Auth and registration forms use schemas in `src/schemas/`.
- **Theming:** Theme and mode providers in `src/providers/` and theme config in `src/configs/themes.ts`.
- **Toasts/notifications:** Use the custom hook from `src/hooks/use-toast.ts`.

## Developer Workflows
- **Start dev server:** `pnpm dev` (preferred), or `npm run dev`/`yarn dev`/`bun dev`.
- **Styling:** Uses Tailwind CSS (see `postcss.config.mjs`). Global styles in `src/app/globals.css`.
- **Linting/formatting:** Run `pnpm lint` and `pnpm format` (see `eslint.config.mjs` and `prettier.config.mjs`).
- **Type checking:** `pnpm typecheck` (if configured in `package.json`).
- **No explicit test setup** detected—add tests in `src/` if needed.

## Integration & External Dependencies
- **Next.js** for SSR/SSG and routing.
- **Prisma** for backend data access (see `src/lib/prisma.ts`).
- **next-auth** for authentication (see `src/configs/next-auth.ts`).
- **Custom hooks** for device, theme, and settings detection in `src/hooks/`.

## Examples
- To add a new menu section, create a new folder under `src/app/(public)/menu/` and update the main `page.tsx`.
- To add a new auth flow, add a form in `src/components/auth/` and a schema in `src/schemas/`.
- To update navigation, edit `src/data/navigations.ts`.

## Special Notes
- Avoid using `useNavigate` from `react-router-dom`—prefer Next.js navigation (`useRouter`) for new code.
- Images are imported and referenced via `.src` property for compatibility with Next.js image optimization.
- Keep business logic in page/layout files, and UI logic in components.

---

For more, see `README.md` and explore the `src/` directory for patterns. When in doubt, follow Next.js and TypeScript best practices as adapted in this codebase.
