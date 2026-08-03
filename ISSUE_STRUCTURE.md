# opensource.elixpo.com — PaaS Issue Structure

Parent issues = **Epics** (assigned to a lead). Sub-issues = **tasks** anyone can pick up.
Mapped from `opensource_elixpo_planner.pdf`. Phases map to GitHub **milestones**.

Labels to add: `epic`, `elixpo-owned`, `frontend`, `backend`, `infra`, `github-sync`, `points`, `payouts`, `identity`, `email`, `phase-0`…`phase-5`, plus `elixpo-easy` / `elixpo-medium` / `elixpo-hard` (dogfood the point system).

---

## EPIC 0 — Foundations & Platform Infra  · lead: **Circuit-Overtime** · Phase 0
The skeleton everything else builds on.
- [ ] Monorepo scaffolding — Next.js frontend + NestJS service packages + shared tsconfig/eslint
- [ ] Local dev via Docker Compose — Postgres, Redis, NATS one-command up
- [ ] Core data model + migrations — Organization, Program, Repository, LabelRule, User, Membership, Contribution, PointsLedger, Payout, AuditLog
- [ ] API Gateway skeleton — auth passthrough, rate-limiting, service routing
- [ ] Event bus setup — NATS (or Redis Streams) + shared event schema/contract package
- [ ] CI/CD pipelines — lint, test, build, containerize, deploy
- [ ] Observability baseline — OpenTelemetry traces, Grafana dashboards, Sentry error tracking

## EPIC 1 — Identity & Account Management (Elixpo-owned)  · lead: **elixpoo** · Phase 0
Unified Elixpo identity so orgs don't bring their own auth.
- [ ] Elixpo Identity service — JWT + refresh token issuance/rotation
- [ ] GitHub OAuth linking to Elixpo identity
- [ ] Org membership, invitations, role assignment (RBAC: Owner/Org-Admin/Program-Admin/Mentor/Contributor/Spectator)
- [ ] KYC / tax-form collection for contributors above payout threshold
- [ ] Public profile pages — `opensource.elixpo.com/u/<handle>`
- [ ] Optional SSO hook for enterprise orgs (stub for later phase)

## EPIC 2 — GitHub Integration & Sync  · lead: **Circuit-Overtime** · Phase 1
The two-way bridge to GitHub.
- [ ] GitHub App (org-level install, not OAuth app) — manifest, install flow, permission scopes
- [ ] Webhook ingestion — issues opened/labeled/assigned/closed, PRs opened/reviewed/merged, comments, commits
- [ ] GitHub Sync Worker — normalize events → Postgres
- [ ] Two-way label sync — GitHub label changes reflect in workspace; platform suggestions push back
- [ ] Automatic contributor detection — commit author + PR author reconciliation
- [ ] Anti-gaming heuristics — PR↔issue linkage required, minimum diff size, mentor/admin verification for high-value awards

## EPIC 3 — Programs Service & Core Program Flow  · lead: **ez-vivek** · Phase 1
The heart of a program's lifecycle.
- [ ] Program CRUD + metadata — name, timeline, prize pool, rules
- [ ] Full GitHub Org integration mode — pull in & track every repo
- [ ] Multi-repo integration mode — pick specific repos across one or more orgs
- [ ] Repository linking model + management UI
- [ ] Label rules config — designated issue labels → point values, per program
- [ ] Issue claim flow — one-click claim creates GitHub assignment
- [ ] Auto-unclaim after inactivity window

## EPIC 4 — Points & Gamification  · lead: **nihal-gazi** · Phase 2
Points, ledger, leaderboards, and the fun.
- [ ] Points ledger — append-only, every award/deduction with reason + actor
- [ ] Point rules engine — base per label, PR-merge bonus, first-time bonus, review multipliers, streak boosts (default template + per-program override)
- [ ] Leaderboards — global + per-program, ClickHouse-backed at scale, tiebreakers (PR merge count → review count → earliest submission)
- [ ] Badges, levels, streaks
- [ ] Seasonal resets (optional) so new contributors aren't perpetually behind

## EPIC 5 — Dashboards & Frontend  · lead: **anwe-ch** · Phase 1–3
Every role's surface.
- [ ] Workspace dashboard — active programs & health, contributor funnel, prize pool/payout queue
- [ ] Contributor experience — browse/filter open issues (difficulty/language/program), personal dashboard (claims, PRs, points, upcoming payouts)
- [ ] Mentor tools — PR review queue, award bonus w/ reason (logged), office-hour scheduling & check-in, mentor leaderboard
- [ ] Admin tools — bulk label ops, point rule editor w/ dry-run preview, manual override w/ mandatory reason
- [ ] Activity feeds — mentor activity feed + admin activity log (full audit trail)
- [ ] Program analytics — contributor retention, issue turnaround time, cost-per-merged-PR

## EPIC 6 — Email & Notifications (Elixpo-owned)  · lead: **elixpoo** · Phase 2
- [ ] Transactional email — invites, claim confirmations, PR-merged, payout initiated
- [ ] Weekly digest — leaderboard, mentor summaries, admin health reports
- [ ] MJML templating + deliverability (SPF/DKIM/DMARC on opensource.elixpo.com), backed by SES/Postmark

## EPIC 7 — Payouts & Compliance (Elixpo-owned)  · lead: **elixpoo** · Phase 4
- [ ] Payout state machine — pending → approved → processing → paid/failed
- [ ] Multi-rail disbursement — bank transfer, UPI, PayPal, crypto (where legal)
- [ ] Mentor stipends — recurring schedule
- [ ] Bounty payouts — admin approval + PR-merged trigger
- [ ] Full ledger, invoicing to orgs, tax reporting
- [ ] Bring-your-own payout provider — adapter interface (Elixpo provides contract, org provides impl)
- [ ] Human-in-the-loop review for payouts above configurable threshold

---

### Milestones (Rollout Roadmap)
- **Phase 0 — Foundations**: identity, GitHub App skeleton, org onboarding, basic dashboard
- **Phase 1 — Core Program Flow**: program creation, repo linking, label rules, issue claim, points ledger, contributor dashboard
- **Phase 2 — Gamification & Leaderboards**: leaderboards, badges, streaks, profiles, email digests
- **Phase 3 — Mentor & Admin Suite**: mentor queue, admin log, audit trail, bulk ops, analytics
- **Phase 4 — Payouts & Compliance**: payout integration, KYC, tax forms, invoicing
- **Phase 5 — Polish & Scale**: anti-abuse hardening, ClickHouse analytics, SSO, public API, org webhooks
