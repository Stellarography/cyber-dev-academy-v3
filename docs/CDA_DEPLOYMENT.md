---
title: Cyber Dev Academy — Deployment & Tools
alias: [Deployment, Tools, Data Models]
tags: [deployment, vercel, database, environment]
created: 2025-08-30
updated: 2025-08-30
---

# Developer Tools & Deployment

### Developer Tools
- Warp AI  
- Gemini 2.5 Flex (with Banana)  
- GitHub Actions & Codespaces  
- Vercel (Edge, Functions, Scheduler)  

### Vercel Deployment
- Separate **Dev / Preview / Prod** environments.  
- Edge middleware — auth guard, IP/user rate-limiting.  
- Strong security headers (CSP, HSTS, Referrer‑Policy, Permissions‑Policy).  
- ISR revalidation for News Room alerts.  
- Observability via Sentry + SIEM log drains.  

### Data Model
- **Users, Sessions, Session Times, Timers, Alerts, Journal Entries, Prompts, Audit Logs, Feature Flags, API Sources**.  
*(See expanded schema in main repo.)*  

### Environment Variables
- Grouped by: Core, Auth, Security/Crypto, AI/LLM, Observability, Newsroom feeds, Email/Realtime, Feature flags.  

---

<!-- END OF DOCUMENT -->
