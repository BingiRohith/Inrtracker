# Architecture

**Status: COMPLETED (foundation); READY FOR REVIEW (Sprint 1A blueprint)**

The foundation uses Next.js App Router with TypeScript and Tailwind CSS. Source code is organized under `src/`, with routes in `src/app` and shared server utilities reserved for `src/lib`.

## Implemented

- Next.js App Router, TypeScript, Tailwind CSS, and one public application shell route.

## Planned application architecture

- **Server/client boundary:** React Server Components are the default. Client Components are limited to interactive presentation; they must not contain credentials or enforce access control.
- **Authentication layer:** provisioned doctor/admin accounts and doctor-created patient accounts; patient activation uses a future approved verification provider. Session and identity handling remain unimplemented.
- **Authorization layer:** server-side policy checks resolve actor role and an active DoctorPatient relationship before data access or mutation. Route structure and hidden UI are never authorization.
- **Database layer:** Mongoose repositories/services will access MongoDB Atlas; schemas and connection code are deferred.
- **Validation layer:** a future shared schema layer validates untrusted server-action/API input before persistence.
- **File storage layer:** reports use a private storage abstraction. The database stores metadata/reference only; download access is authorized server-side and uses time-limited delivery where applicable.
- **Audit layer:** meaningful clinical/account actions produce append-only audit events, with before/after metadata when appropriate.
- **API/server action layer:** future route handlers and server actions both call the same authorization, validation, data-access, and audit services.
- **Portals:** Doctor portal manages assigned patients and clinician entries; Patient portal is self-scoped and exposes only designated patient-visible data; Admin portal is future system management, not unrestricted clinical editing.

No API, persistence, authentication, storage, or authorization layer is implemented.
