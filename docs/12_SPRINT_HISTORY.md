# Sprint history

## Sprint 0 — Project initialization

- **Date:** 2026-08-20
- **Objective:** Establish the project foundation, engineering standards, documentation system, Git workflow baseline, and application shell.
- **Implemented items:** Next.js/TypeScript/App Router/Tailwind foundation; ESLint and Prettier configuration; responsive branded shell; environment template; documentation system.
- **Files/modules affected:** Root configuration, `src/app`, `src/lib/db/README.md`, `docs/`, README, and changelog.
- **Database changes:** None. MongoDB Atlas and Mongoose are selected only.
- **API changes:** None.
- **UI changes:** Responsive branded landing shell with Doctor Portal and Patient Portal placeholders.
- **Tests:** ESLint passed, TypeScript type check passed, Node test discovery passed with zero tests configured, and the production build passed.
- **Documentation changes:** Created the Sprint 0 documentation set and requirements source of truth.
- **Known issues:** None recorded at completion.
- **Status:** COMPLETED.
- **Git commit:** `cceb7bbbcbe83f4b1b9820a8710a1c8908e3f0d9` — `docs(project): initialize ValveTrack Sprint 0 foundation`.

## Sprint 1A — Architecture, security & data model specification

- **Date:** 2026-08-20
- **Objective:** Produce an approved blueprint for authentication boundaries, authorization, clinical-data history, security, and proposed entities without implementing those features.
- **Decisions:** Provisioned Doctor/Admin accounts; Doctor/clinic-created Patient accounts with later secure activation; explicit active DoctorPatient authorization relationship; stable internal Patient identity plus separate Patient ID; structured historical dosage schedules; distinct INR/PT/APTT records; append-only audit strategy and correction policy.
- **Documents changed:** README, changelog, requirements, architecture, database, API, authorization, clinical, dosage, file-report, security, changelog-policy, and sprint-history documents.
- **Database changes:** None; proposed entities only.
- **API changes:** None.
- **UI changes:** None.
- **Tests:** Prettier documentation check, ESLint source check, TypeScript type check, and Git whitespace check passed.
- **Unresolved questions:** Authentication/OTP provider, identity verification, jurisdictional privacy/retention/consent, final clinical fields/units/visibility/amendment policy, and Atlas/storage operational choices.
- **Status:** COMPLETED — architecture review approved.
- **Git commit:** `f898856d365dedc3b509ae259c3e6728ec6429da` — `docs(architecture): define ValveTrack data and security architecture`.
