# ValveTrack

ValveTrack is a healthcare-oriented web application foundation for organizing clinician- and patient-provided anticoagulation monitoring information after heart valve surgery.

## Current status

Sprint 0 is completed and pushed. Sprint 1A has produced a design blueprint that is ready for review. No authentication, database schema, patient records, clinical workflow, or automated clinical advice is implemented.

## Development

1. Copy `.env.example` to `.env.local` and add values only when a feature requires them.
2. Install dependencies with `npm install`.
3. Start the application with `npm run dev`.

See [docs/01_PROJECT_OVERVIEW.md](docs/01_PROJECT_OVERVIEW.md) and [docs/02_REQUIREMENTS.md](docs/02_REQUIREMENTS.md) for scope and current requirements.

## Clinical disclaimer

ValveTrack records, organizes, and displays information supplied by clinicians and patients. It must not independently prescribe, change, or recommend anticoagulant dosage. Clinical decisions remain the responsibility of the treating healthcare professional.
