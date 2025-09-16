---
title: Cyber Dev Academy — Security Guidelines
alias: [Security, OWASP, Encryption]
tags: [security, owasp, encryption, audit]
created: 2025-08-30
updated: 2025-08-30
---

# Security Guidelines

### A. News Room (Bullpen) Hub
- Severity-based alerts hub.  
- Serverless ingestion validated by signatures.  
- RBAC for internal advisories.  

### B. OWASP Top 10 → Implementation Map
- Per-category **Controls / Tests / Monitoring**.  
- Covers A01 → A10.  

### C. Encryption Practices
- **Transport:** TLS 1.3 + HSTS.  
- **At rest:** AES-256-GCM, Argon2id for passwords.  
- **Key Mgmt:** KMS KEKs wrapping DEKs.  
- **Secrets:** Managed vault, scoped, rotated.  

### D. AI & Software Dependency Audits
- **SCA:** Dependabot, Snyk, SBOM.  
- **AI Audit:** Prompt corpus analysis, saved as reports.  

---

## Appendix A — AI Dependency Audit Policy
See: `[[policies/ai-dependency-audit|AI Dependency Audit Policy]]`

---

<!-- END OF DOCUMENT -->
