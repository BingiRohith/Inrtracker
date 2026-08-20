# Architecture

**Status: COMPLETED (foundation); PLANNED (application layers)**

The foundation uses Next.js App Router with TypeScript and Tailwind CSS. Source code is organized under `src/`, with routes in `src/app` and shared server utilities reserved for `src/lib`.

## Planned architecture

- App Router pages and route handlers/server actions for UI and APIs.
- Mongoose data-access layer backed by MongoDB Atlas.
- Authentication and authorization enforced server-side.
- Validation at all API and server-action boundaries.
- Secure object storage abstraction for reports.

No API, persistence, authentication, or storage layer is implemented in Sprint 0.
