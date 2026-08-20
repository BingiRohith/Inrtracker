# Clinical data model

**Status: READY FOR REVIEW — not implemented**

Patient profile: required internal ID, human-readable Patient ID, name/identity details, and date of birth; optional contact and emergency contact; clinician-provided valve surgery history including valve type, position, surgery date, and only other relevant valve details. Sex is captured only where clinically/business-required. Additional fields are future until approved.

Medication records support clinician-specified Acitrom, Warfarin, or another name without a hard-coded list: name, optional category, strength, start/end date, prescribing doctor, status, and notes.

Laboratory records are distinct test-result records: test time, INR, PT with unit, APTT with unit, laboratory/reference information where present, report reference, source (patient/doctor), entered by, timestamps, and amendment history. INR, PT, and APTT are not interchangeable; APTT must not be presented as INR-equivalent. No universal therapeutic ranges are stored. Any future patient-specific target must be clinician-recorded and historically versioned.

No clinical entity, clinical rule, or clinical API is implemented.
