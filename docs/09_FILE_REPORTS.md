# File reports

**Status: READY FOR REVIEW — not implemented**

Medical reports retain the original PDF/image and database metadata: Patient, optional related INR record, uploader, upload/test date, private storage reference, MIME type, size/checksum, and audit data. Reports are patient-owned data; access uses the same role and relationship authorization as clinical records.

Future storage work must define permitted formats/sizes, malware scanning, encryption, time-limited authorized access, retention/deletion, and audit logging. Files must never be public through predictable URLs.
