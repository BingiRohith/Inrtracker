# Requirements — single source of truth

**Status: IN PROGRESS**

This document is the authoritative requirements reference. Requirements are not inferred from implementation.

## Confirmed requirements

- Build a responsive web application using Next.js, TypeScript, App Router, Tailwind CSS, MongoDB Atlas, and Mongoose.
- Support desktop doctor/OPD usage and mobile patient usage.
- Maintain a longitudinal record of clinician- and patient-provided anticoagulation monitoring information.
- The system must not make autonomous clinical decisions or dosage recommendations.
- Future design must support doctor, patient, and admin roles, secure record access, validation, audit logging, and report storage.

## Planned requirements

- Authentication and role-based authorization.
- Doctor-patient relationships and data isolation.
- Records for INR, PT, APTT, medication, dosage history, reports, visits, notes, and patient updates.

## Future ideas

- PWA capabilities for mobile use.

## Out of scope for Sprint 0

- Native Android application.
- Complete patient-management workflows or database schema.
- Dosage protocols, INR target ranges, or clinical recommendations.

## Open questions

- Authentication provider and identity-verification requirements.
- Jurisdictional privacy, retention, consent, and compliance requirements.
- File storage provider, limits, and access-lifecycle requirements.
- Exact clinical data fields, review workflow, and audit retention policy.
