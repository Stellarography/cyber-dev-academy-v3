---
title: Cyber Dev Academy — Commit & PR Guide
alias: [Commits, Pull Requests]
tags: [commits, PRs, standards]
created: 2025-08-30
updated: 2025-08-30
---

# Commit Message & PR Templates

### Commit Messages (Conventional Commits)
<type>(<scope>): <description>

Refs: #issue

**Types:** feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert  

### PR Template (Security-Aware)
**Summary**
What changed and why?

**Risk & Impact**
- Threat model: [ ] none [ ] mitigates [ ] introduces
- Data touched: [ ] public [ ] internal [ ] sensitive

**Tests**
- [ ] Unit [ ] Integration [ ] E2E
- [ ] Security validation

**Checklist**
- [ ] Accessibility reviewed
- [ ] Perf budget respected
- [ ] Secrets safe
- [ ] DB migrations rollback-ready
- [ ] Docs updated

---

<!-- END OF DOCUMENT -->
