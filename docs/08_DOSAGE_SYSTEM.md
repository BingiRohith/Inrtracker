# Dosage system

**Status: APPROVED — not implemented**

A dosage plan is an immutable historical clinical record associated with medication and prescribing doctor. It includes start/end date-time, structured schedule, reason/clinical note where appropriate, status, creation/amendment timestamps, and a link to its replacement or correction where applicable. A new plan is created for every dosage change; prior plans are never overwritten.

The canonical schedule is structured, not a string: it supports fixed daily dose, alternating sequence, day-of-week entries, and date-specific entries. Each entry records the intended dose and may later include tablet strength/quantity. A compact string such as `2-2-3` is derived display text only. The system records clinician-prescribed information and never calculates or recommends a dose.
