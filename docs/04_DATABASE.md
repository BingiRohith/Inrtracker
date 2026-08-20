# Database

**Status: APPROVED — proposed entities only; no schemas implemented**

MongoDB Atlas with Mongoose is selected. No connection code, collection, schema, index, or medical record is implemented yet. `MONGODB_URI` is documented in `.env.example` for the future connection layer. Internal object identifiers are stable system identity; Patient additionally has a non-sensitive human-readable Patient ID such as `VT-000001`.

## Proposed entity design

- **User:** authentication/account state and role linkage. Key fields: internal ID, role, account status, identity-provider reference, timestamps. Owns no clinical history; sensitive identity references are protected and uniquely indexed as appropriate.
- **Doctor:** clinician profile linked one-to-one to User. Key fields: user reference, display/professional details approved for V1, status. Referenced by relationships and clinician-authored records; indexes support active-account lookup.
- **Patient:** patient identity and profile linked optionally to User once activated. Required: internal ID, Patient ID, identity details, DOB. Optional: contact/emergency contact and clinician-provided valve type, position, surgery date/history. Patient ID is uniquely indexed; contact details are never authorization keys.
- **DoctorPatient:** explicit access relationship between Doctor and Patient. Key fields: doctor, patient, active status, assignment start/end, change reason, timestamps. It supports reassignment and multiple clinicians. Index by doctor+active and patient+active; all doctor-to-patient authorization queries use it. Assignment history is preserved.
- **AnticoagulantMedication:** prescribed medication history for a Patient. Key fields: name, optional category, strength, start/end, status, prescribing doctor, notes. Indexed by patient and active period. It is a clinical historical record, not a global fixed list.
- **DosagePlan:** clinician-created historical prescription plan linked to Patient, medication, Doctor, and structured schedule entries. Stores effective period, status, reason/note, creator, amendment/replacement references, timestamps. Indexed by patient+effective period and medication. Existing plan details are not silently overwritten.
- **DosageSchedule:** embedded or separately referenced structured entries chosen during schema review. Each entry identifies a fixed daily, alternating, weekly, or date-specific pattern plus prescribed dose and optional future tablet details. It is owned by DosagePlan and not represented canonically as free text.
- **INRRecord:** separate laboratory-result record, owned by Patient, optionally linked to report/visit. Fields include test time, INR, PT/PT unit, APTT/APTT unit, lab/reference info, source, entered-by, and amendment metadata. Indexed by patient+test time. Values retain their distinct meaning and amendment history.
- **MedicalReport:** private original-file metadata/reference owned by Patient; optionally related to INRRecord. Fields include storage reference, MIME type, size/checksum, upload/test date, uploader, access/audit metadata. Never store a public predictable file URL; index patient and related record.
- **Visit:** clinician encounter linked to Patient and Doctor, optionally to laboratory result and dosage plan. Fields: time, reason/type where approved, notes/follow-up references, creator, timestamps. Index patient+visit time. Clinical changes remain linked historical records.
- **ClinicalNote:** authored note linked to Patient and optionally Visit, with author, patient-visibility designation, timestamps, and amendment/reference metadata. Index patient+created time; visibility is enforced server-side.
- **AuditLog:** append-only event trail. Fields: actor, actor role, action, entity type/ID, timestamp, relevant metadata, before/after snapshot or reference where appropriate. Index entity+time and actor+time; restrict reads by authorization scope and prevent ordinary application mutation.

## Ownership and correction policy

Clinical data belongs to the Patient record. Access derives from role plus explicit relationship, never frontend filtering. A correction fixes a factual error and retains original value, corrected value, actor, time, and reason. A new INR result, dosage decision, or visit is a new clinical event—not a replacement for a prior event. Exact field-level versioning and retention require product/security review.
