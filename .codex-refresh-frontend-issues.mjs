import { execFileSync } from 'node:child_process';

const repo = 'elixpo/opensource';

function gh(args) {
  return execFileSync('gh', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
}

const retained = [
  {
    number: 41,
    title: 'Frontend routes — Host workspace and contest overview',
    body: `Parent: #6

Build the host-level workspace for organizations running one or more contests.

## Routes
- \`/host\` — workspace overview
- \`/host/contests\` — contest list and filters
- \`/host/contests/new\` — contest creation wizard
- \`/host/contests/[contestId]\` — contest command center
- \`/host/settings\` — host organization settings

## Requirements
- Responsive host navigation and contest switcher
- Contest health, timeline, participation, repository, and activity summaries
- Empty, loading, error, permission-denied, and populated states
- Typed mock data until backend contracts are planned

## Acceptance criteria
- All routes are connected through the host shell
- Invalid or unavailable contest IDs have a safe state
- Keyboard navigation and mobile layouts work
- No backend implementation is included`,
  },
  {
    number: 42,
    title: 'Frontend routes — Contributor dashboard and issue discovery',
    body: `Parent: #6

Build the contributor experience for discovering work and tracking progress.

## Routes
- \`/dashboard\` — contributor overview
- \`/dashboard/contests\` — joined contests
- \`/dashboard/claims\` — claimed issues
- \`/dashboard/contributions\` — PR and review history
- \`/dashboard/points\` — points ledger
- \`/dashboard/rewards\` — reward status
- \`/issues\` — cross-contest issue discovery
- \`/issues/[owner]/[repo]/[number]\` — issue details and claim state

## Requirements
- URL-backed difficulty, language, repository, label, and contest filters
- Claim deadline, linked PR, verification, points, and reward states
- Responsive list, table, and card presentations
- Empty, loading, failure, and permission states

## Acceptance criteria
- Every route is reachable from the contributor shell
- Filtered views are shareable by URL
- UI never implies a mutation succeeded before backend confirmation
- No backend implementation is included`,
  },
  {
    number: 43,
    title: 'Frontend routes — Mentor workspace',
    body: `Parent: #6

Build the mentor workspace for reviews, guidance, and recorded support.

## Routes
- \`/mentor\` — overview and contest switcher
- \`/mentor/[contestId]/reviews\` — PR review queue
- \`/mentor/[contestId]/mentees\` — assigned contributors
- \`/mentor/[contestId]/office-hours\` — sessions and check-ins
- \`/mentor/[contestId]/activity\` — activity and recognition

## Requirements
- Review priority, status, and repository filters
- Mentee progress summaries
- Bonus-point dialog with mandatory reason
- Office-hour scheduling and check-in states

## Acceptance criteria
- Routes share one responsive mentor shell
- High-impact actions require confirmation
- Activity entries show actor, reason, target, and time
- No backend implementation is included`,
  },
  {
    number: 44,
    title: 'Frontend routes — Contest administration and configuration',
    body: `Parent: #6

Build contest configuration for owners, co-hosts, and contest admins.

## Routes
- \`/host/contests/[contestId]/settings\`
- \`/host/contests/[contestId]/timeline\`
- \`/host/contests/[contestId]/rules\`
- \`/host/contests/[contestId]/repositories\`
- \`/host/contests/[contestId]/people\`
- \`/host/contests/[contestId]/invitations\`
- \`/host/contests/[contestId]/rewards\`

## Requirements
- Contest metadata and lifecycle controls
- GitHub organization versus selected-repository mode
- Label-to-points editor with dry-run preview
- Invitations and scoped role management
- Reward pool and approval-state presentation

## Acceptance criteria
- Unsaved changes and destructive actions are guarded
- Permission boundaries are visible
- Forms cover validation, loading, success, and failure
- No backend implementation is included`,
  },
  {
    number: 45,
    title: 'Frontend route — Contest activity and audit trail',
    body: `Parent: #6

Build the consolidated contest activity and audit experience.

## Route
- \`/host/contests/[contestId]/activity\`

## Requirements
- Combined GitHub and platform activity feed
- URL-backed actor, role, source, event, repository, and date filters
- Detail drawer with actor, target, reason, metadata, and timestamp
- Visual distinction between normal activity and immutable admin audits
- Pagination plus empty, loading, and failure states

## Acceptance criteria
- Activity is usable on mobile and desktop
- Overrides always display their mandatory reason
- Filters survive refresh and are shareable
- No backend implementation is included`,
  },
  {
    number: 46,
    title: 'Frontend route — Contest analytics',
    body: `Parent: #6

Build host analytics for understanding contest health.

## Route
- \`/host/contests/[contestId]/analytics\`

## Requirements
- Contributor funnel: joined → claimed → opened PR → merged
- Retention, issue turnaround, review turnaround, and merge trends
- Repository, mentor, ambassador, and contributor breakdowns
- URL-backed date and repository filters
- Accessible summaries and tabular alternatives for charts

## Acceptance criteria
- Charts have readable non-visual equivalents
- Empty, partial, loading, and failure states are designed
- Layout works across mobile and desktop
- No backend or analytics pipeline implementation is included`,
  },
];

const additions = [
  {
    title: 'Frontend routes — Public contests, projects, profiles, and leaderboards',
    body: `Parent: #6

Build public, indexable discovery surfaces for spectators and prospective contributors.

## Routes
- \`/\` — platform landing page
- \`/contests\` — public contest directory
- \`/contests/[contestSlug]\` — contest overview
- \`/contests/[contestSlug]/projects\` — participating projects
- \`/contests/[contestSlug]/projects/[owner]/[repo]\` — public project detail
- \`/contests/[contestSlug]/leaderboard\` — contest ranking
- \`/u/[handle]\` — public contributor profile
- \`/privacy\` and \`/terms\` — legal surfaces

## Acceptance criteria
- Public metadata, canonical URLs, and social previews are defined
- Lists support accessible loading, empty, and pagination states
- Private contest data never appears in public mocks or UI assumptions
- No backend implementation is included`,
  },
  {
    title: 'Frontend routes — Elixpo Login and role-aware onboarding',
    body: `Parent: #6

Build authentication transitions and first-run onboarding around Elixpo Accounts.

## Routes
- \`/login\` — Elixpo Login handoff
- \`/auth/callback\` — callback progress and failures
- \`/onboarding\` — role-aware entry point
- \`/onboarding/host\` — host organization setup
- \`/onboarding/contributor\` — contributor profile and interests

## Requirements
- Return-path preservation
- Expired, denied, malformed, and retryable callback states
- Invitation-aware onboarding for hosts, admins, mentors, and ambassadors
- Clear separation between authentication and GitHub connection

## Acceptance criteria
- Redirect and error states are keyboard and screen-reader accessible
- No credentials or tokens appear in client-visible UI
- Backend identity implementation is excluded`,
  },
  {
    title: 'Frontend routes — Project admin workspace',
    body: `Parent: #6

Build repository-scoped operations for project admins and maintainers.

## Routes
- \`/manage/[contestId]/projects/[repositoryId]\` — project overview
- \`/manage/[contestId]/projects/[repositoryId]/issues\` — issue operations
- \`/manage/[contestId]/projects/[repositoryId]/submissions\` — PR verification queue
- \`/manage/[contestId]/projects/[repositoryId]/labels\` — label rule mapping
- \`/manage/[contestId]/projects/[repositoryId]/contributors\` — project participants

## Acceptance criteria
- Repository scope remains visible on every route
- Bulk and verification actions require confirmation and reason where relevant
- Permission, stale-data, empty, and failure states are included
- No backend implementation is included`,
  },
  {
    title: 'Frontend routes — Campus ambassador workspace',
    body: `Parent: #6

Build a focused workspace for campus outreach and participant support.

## Routes
- \`/ambassador\` — overview and assigned contests
- \`/ambassador/[contestId]/campaigns\` — outreach activities
- \`/ambassador/[contestId]/participants\` — campus participant progress
- \`/ambassador/[contestId]/activity\` — recorded sessions and outcomes

## Requirements
- Campus and contest context switching
- Outreach session, onboarding, and follow-up states
- Participant summaries without exposing admin-only data

## Acceptance criteria
- Routes share a responsive ambassador shell
- Logged activities show time, scope, and outcome
- Empty, loading, permission, and error states are covered
- No backend implementation is included`,
  },
  {
    title: 'Frontend foundation — Shared application shell and UI states',
    body: `Parent: #6

Build the shared frontend primitives every route group depends on.

## Scope
- Elixpo navigation, role switcher, breadcrumbs, command/search entry, and responsive shells
- Reusable loading, skeleton, empty, error, offline, permission-denied, and not-found states
- Form controls, confirmation dialogs, tables, filters, pagination, toasts, and drawers
- Route-level \`loading.tsx\`, \`error.tsx\`, and \`not-found.tsx\` conventions
- Accessibility baseline: focus management, keyboard flows, landmarks, contrast, and reduced motion
- Mock factories and typed view models that can later bind to backend contracts

## Acceptance criteria
- Components follow the existing Elixpo visual language
- Shared states are documented with representative examples
- Role shells work on mobile and desktop
- No backend implementation is included`,
  },
];

for (const issue of retained) {
  gh(['issue', 'edit', String(issue.number), '--repo', repo, '--title', issue.title, '--body', issue.body, '--add-label', 'frontend']);
  console.log(`updated #${issue.number}`);
}

const created = [];
for (const issue of additions) {
  const url = gh(['issue', 'create', '--repo', repo, '--title', issue.title, '--body', issue.body, '--label', 'frontend']);
  const number = Number(url.split('/').at(-1));
  created.push({ ...issue, number, url });
  console.log(`created #${number}`);
}

const parent = JSON.parse(gh(['issue', 'view', '6', '--repo', repo, '--json', 'id']));
for (const issue of created) {
  const child = JSON.parse(gh(['issue', 'view', String(issue.number), '--repo', repo, '--json', 'id']));
  gh([
    'api', 'graphql',
    '-f', `issueId=${parent.id}`,
    '-f', `subIssueId=${child.id}`,
    '-f', 'query=mutation($issueId:ID!,$subIssueId:ID!){addSubIssue(input:{issueId:$issueId,subIssueId:$subIssueId}){issue{id} subIssue{id}}}',
  ]);
  console.log(`attached #${issue.number} to #6`);
}

const allChildren = [...retained.map((issue) => issue.number), ...created.map((issue) => issue.number)];
const checklist = allChildren.map((number) => `- [ ] #${number}`).join('\n');
const parentBody = `The complete frontend route plan for Elixpo Open Source. This epic intentionally excludes backend implementation; backend issues will be planned in a later pass after frontend flows and contracts stabilize.

## Route groups
${checklist}

## Product roles
- Host owner and co-host
- Contest and project admin
- Mentor
- Campus ambassador
- Contributor
- Public spectator

## Shared delivery rules
- Follow the Elixpo visual language established by the other platforms.
- Every route includes loading, empty, error, permission, and responsive states where applicable.
- Filters and navigational state should be URL-backed when users may share or revisit a view.
- Use typed mock/view-model boundaries until backend contracts are created.
- Accessibility and mobile behavior are acceptance criteria, not follow-up work.

## Out of scope
- D1 queries and mutations
- GitHub webhook and sync implementation
- Elixpo identity backend
- Mail, rewards, and payout processing
- Analytics ingestion

Those concerns will receive a separate backend hierarchy later.`;
gh(['issue', 'edit', '6', '--repo', repo, '--title', 'EPIC — Frontend routes and role workspaces', '--body', parentBody, '--add-label', 'frontend', '--add-label', 'epic']);
console.log('updated parent #6');

const keep = new Set([6, ...allChildren]);
const open = JSON.parse(gh(['issue', 'list', '--repo', repo, '--state', 'open', '--limit', '100', '--json', 'number,title']));
const superseded = open.filter((issue) => !keep.has(issue.number));
for (const issue of superseded) {
  gh([
    'issue', 'close', String(issue.number), '--repo', repo, '--reason', 'not planned',
    '--comment', 'Closed during the frontend-only backlog refresh. Backend work will be re-scoped into a new hierarchy during the later backend planning pass.',
  ]);
  console.log(`closed #${issue.number}`);
}

console.log(JSON.stringify({ parent: 6, children: allChildren, closed: superseded.map((issue) => issue.number) }));
