# Authorization

**Status: APPROVED — not implemented**

The future system separates Doctor, Patient, and Admin. Every server-side data path must authorize the actor, target entity, and requested action. Changing `/patients/X` to `/patients/Y` must not grant access.

Doctor access is limited to an active explicit DoctorPatient relationship. Patients are isolated to their own record. Admin is system-management scope only and does not automatically receive clinical edit authority.

| Action                       | Doctor                    | Patient                         | Admin                               |
| ---------------------------- | ------------------------- | ------------------------------- | ----------------------------------- |
| View own account/profile     | Yes                       | Yes                             | Yes, limited                        |
| View assigned patient record | Yes, active relationship  | No                              | Future, defined security scope only |
| View own patient record      | N/A                       | Yes                             | No by default                       |
| Create/register patient      | Yes                       | No                              | Future                              |
| Add laboratory result        | Yes                       | Submit self-sourced result only | No                                  |
| Create/amend dosage plan     | Yes, authorized patient   | No                              | No                                  |
| Upload report                | Yes                       | Yes, own record                 | No                                  |
| View report                  | Assigned patient scope    | Own reports                     | Future security scope               |
| View audit history           | Authorized clinical scope | Own appropriate scope           | Security/admin scope                |

Role checks and relationship checks are cumulative; frontend visibility is only a usability feature. Authentication implementation and the exact policy function interfaces are deferred.
