# Requirements — single source of truth

**Status: IN PROGRESS — Sprint 1A design ready for review**

This document is the authoritative requirements reference. Requirements are not inferred from implementation.

## Confirmed V1 requirements

- Build a responsive web application using Next.js, TypeScript, App Router, Tailwind CSS, MongoDB Atlas, and Mongoose.
- Support desktop doctor/OPD usage and mobile patient usage.
- ValveTrack is a shared doctor/patient record system for people following heart valve surgery who are monitored with anticoagulation-related laboratory results and medication/dosage history.
- It must preserve a longitudinal record so patients and doctors can retrieve prior reports, prescriptions, INR values, and prescribed schedules during OPD review.
- The system must not make autonomous clinical decisions or dosage recommendations.
- V1 roles are Doctor, Patient, and a documented future Admin role. Doctor accounts are invitation/provisioning based; patients are primarily created by a doctor/clinic and may later activate their account using a secure verification flow. Admin accounts are provisioned separately.
- Authorization is controlled by explicit DoctorPatient relationships, not a permanent `doctorId` on Patient. Relationships support multiple doctors, reassignment, active/inactive state, dated assignment, and auditing.
- The system must support a stable internal patient identity and a separate human-readable Patient ID (for example, `VT-000001`); neither email, phone, nor name is the permanent identity.
- The planned system must retain original laboratory reports and maintain auditability and non-destructive clinical history.

## Planned requirements

- Authentication and role-based authorization.
- Doctor-patient relationships and data isolation.
- Records for INR, PT, APTT, medication, dosage history, reports, visits, notes, and patient updates.
- Structured dosage plans that support fixed daily, alternating, weekly, and date-specific doses. A display string is not the canonical representation.
- Server-side validation and authorization for all protected data access, including direct URL/API access.

## Future ideas

- PWA capabilities for mobile use.

## Out of scope for Sprint 0

- Native Android application.
- Complete patient-management workflows or database schema.
- Dosage protocols, INR target ranges, or clinical recommendations.

## Decisions required before implementation

- Authentication provider and identity-verification requirements.
- Patient activation method and assurance level (OTP/passwordless provider, delivery channel, expiry, recovery, and identity matching).
- Jurisdictional privacy, consent, retention, audit retention, and data-residency requirements.
- Exact clinical fields, allowed units, amendment review policy, and patient-visible note/report policy.
- MongoDB Atlas environment, backup/encryption configuration, and report-storage provider/access lifecycle.

## Decisions that can safely be deferred

- Exact Patient ID sequence/format implementation.
- Medication category taxonomy and tablet-strength/quantity capture workflow.
- Future clinician-recorded, patient-specific target ranges; no universal therapeutic range will be hard-coded.

## Future enhancements

- PWA capabilities, expanded administrator workflows, and further reporting/notification features require separate scope approval.
