# Security

**Status: READY FOR REVIEW (requirements); NOT IMPLEMENTED (controls)**

Future implementation must provide provisioned authentication, secure session handling, appropriate password/OTP handling after provider selection, role separation, active DoctorPatient authorization, patient data isolation, secure report access, input validation, audit logging, rate limiting where appropriate, secret management, and safe error handling.

Every protected API/server-action operation must enforce authorization on the server and defend against IDOR/insecure direct object reference. Clinically important records use additive events or documented corrections rather than silent destructive updates. Secrets remain uncommitted; report access remains private and authorized.

Secrets must be held in uncommitted environment files; `.env.example` contains only names and safe local defaults. This foundation does not establish HIPAA compliance, legal compliance, or production readiness. Security and compliance review remain required before handling real medical information.
