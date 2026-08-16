export const contestRoles = [
  'host_owner',
  'host_admin',
  'project_admin',
  'mentor',
  'campus_ambassador',
  'contributor',
] as const;

export type ContestRole = (typeof contestRoles)[number];
export type ContestStatus =
  | 'draft'
  | 'applications_open'
  | 'active'
  | 'review'
  | 'completed'
  | 'archived';

export interface Contest {
  id: string;
  hostOrganizationId: string;
  name: string;
  slug: string;
  startsAt: string;
  endsAt: string;
  status: ContestStatus;
  repositoryCount: number;
  memberCount: number;
}

export interface ContestMembership {
  contestId: string;
  userId: string;
  role: ContestRole;
  invitedBy: string;
  joinedAt: string | null;
}

export interface TrackedActivity {
  id: string;
  contestId: string;
  actorId: string;
  actorRole: ContestRole;
  source: 'github' | 'platform';
  kind:
    | 'issue_claimed'
    | 'pull_request_opened'
    | 'review_submitted'
    | 'pull_request_merged'
    | 'mentorship_logged'
    | 'outreach_logged'
    | 'admin_action';
  occurredAt: string;
  metadata: Record<string, string | number | boolean>;
}
