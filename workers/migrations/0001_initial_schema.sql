PRAGMA foreign_keys = ON;

CREATE TABLE users (
  id TEXT PRIMARY KEY,
  elixpo_user_id TEXT NOT NULL UNIQUE,
  github_login TEXT UNIQUE,
  display_name TEXT NOT NULL,
  avatar_url TEXT,
  email TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE host_organizations (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  owner_user_id TEXT NOT NULL REFERENCES users(id),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE contests (
  id TEXT PRIMARY KEY,
  host_organization_id TEXT NOT NULL REFERENCES host_organizations(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  summary TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'applications_open', 'active', 'review', 'completed', 'archived')),
  repository_mode TEXT NOT NULL DEFAULT 'selected' CHECK (repository_mode IN ('selected', 'organization')),
  starts_at TEXT NOT NULL,
  ends_at TEXT NOT NULL,
  created_by TEXT NOT NULL REFERENCES users(id),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE (host_organization_id, slug),
  CHECK (ends_at > starts_at)
);

CREATE TABLE contest_memberships (
  id TEXT PRIMARY KEY,
  contest_id TEXT NOT NULL REFERENCES contests(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('host_owner', 'host_admin', 'project_admin', 'mentor', 'campus_ambassador', 'contributor')),
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('invited', 'active', 'suspended', 'removed')),
  invited_by TEXT REFERENCES users(id),
  joined_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE (contest_id, user_id, role)
);

CREATE TABLE invitations (
  id TEXT PRIMARY KEY,
  contest_id TEXT NOT NULL REFERENCES contests(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('host_admin', 'project_admin', 'mentor', 'campus_ambassador', 'contributor')),
  token_hash TEXT NOT NULL UNIQUE,
  invited_by TEXT NOT NULL REFERENCES users(id),
  expires_at TEXT NOT NULL,
  accepted_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE repositories (
  id TEXT PRIMARY KEY,
  contest_id TEXT NOT NULL REFERENCES contests(id) ON DELETE CASCADE,
  github_repository_id INTEGER NOT NULL,
  owner_login TEXT NOT NULL,
  name TEXT NOT NULL,
  full_name TEXT NOT NULL,
  default_branch TEXT NOT NULL DEFAULT 'main',
  installation_id INTEGER NOT NULL,
  active INTEGER NOT NULL DEFAULT 1 CHECK (active IN (0, 1)),
  synced_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE (contest_id, github_repository_id)
);

CREATE TABLE label_rules (
  id TEXT PRIMARY KEY,
  contest_id TEXT NOT NULL REFERENCES contests(id) ON DELETE CASCADE,
  label TEXT NOT NULL,
  points INTEGER NOT NULL CHECK (points >= 0),
  requires_verification INTEGER NOT NULL DEFAULT 1 CHECK (requires_verification IN (0, 1)),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE (contest_id, label)
);

CREATE TABLE issue_claims (
  id TEXT PRIMARY KEY,
  contest_id TEXT NOT NULL REFERENCES contests(id) ON DELETE CASCADE,
  repository_id TEXT NOT NULL REFERENCES repositories(id) ON DELETE CASCADE,
  github_issue_number INTEGER NOT NULL,
  contributor_user_id TEXT NOT NULL REFERENCES users(id),
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'released', 'completed', 'expired')),
  claimed_at TEXT NOT NULL DEFAULT (datetime('now')),
  expires_at TEXT,
  released_at TEXT,
  UNIQUE (repository_id, github_issue_number, contributor_user_id)
);

CREATE TABLE contributions (
  id TEXT PRIMARY KEY,
  contest_id TEXT NOT NULL REFERENCES contests(id) ON DELETE CASCADE,
  repository_id TEXT NOT NULL REFERENCES repositories(id) ON DELETE CASCADE,
  contributor_user_id TEXT NOT NULL REFERENCES users(id),
  issue_claim_id TEXT REFERENCES issue_claims(id),
  github_pull_request_number INTEGER NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('open', 'review', 'merged', 'closed')),
  additions INTEGER NOT NULL DEFAULT 0,
  deletions INTEGER NOT NULL DEFAULT 0,
  opened_at TEXT NOT NULL,
  merged_at TEXT,
  verified_at TEXT,
  verified_by TEXT REFERENCES users(id),
  UNIQUE (repository_id, github_pull_request_number)
);

CREATE TABLE tracked_activities (
  id TEXT PRIMARY KEY,
  contest_id TEXT NOT NULL REFERENCES contests(id) ON DELETE CASCADE,
  actor_user_id TEXT REFERENCES users(id),
  actor_role TEXT,
  source TEXT NOT NULL CHECK (source IN ('github', 'platform')),
  kind TEXT NOT NULL,
  subject_type TEXT,
  subject_id TEXT,
  metadata_json TEXT NOT NULL DEFAULT '{}',
  occurred_at TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE points_ledger (
  id TEXT PRIMARY KEY,
  contest_id TEXT NOT NULL REFERENCES contests(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL REFERENCES users(id),
  contribution_id TEXT REFERENCES contributions(id),
  points INTEGER NOT NULL,
  reason TEXT NOT NULL,
  awarded_by TEXT REFERENCES users(id),
  idempotency_key TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE webhook_deliveries (
  delivery_id TEXT PRIMARY KEY,
  event_name TEXT NOT NULL,
  installation_id INTEGER,
  status TEXT NOT NULL CHECK (status IN ('processing', 'processed', 'failed', 'ignored')),
  attempts INTEGER NOT NULL DEFAULT 1,
  error_message TEXT,
  received_at TEXT NOT NULL DEFAULT (datetime('now')),
  processed_at TEXT
);

CREATE TABLE audit_log (
  id TEXT PRIMARY KEY,
  contest_id TEXT REFERENCES contests(id) ON DELETE CASCADE,
  actor_user_id TEXT REFERENCES users(id),
  action TEXT NOT NULL,
  target_type TEXT NOT NULL,
  target_id TEXT,
  reason TEXT,
  metadata_json TEXT NOT NULL DEFAULT '{}',
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_contests_host_status ON contests(host_organization_id, status);
CREATE INDEX idx_memberships_user ON contest_memberships(user_id, status);
CREATE INDEX idx_memberships_contest_role ON contest_memberships(contest_id, role, status);
CREATE INDEX idx_repositories_contest ON repositories(contest_id, active);
CREATE INDEX idx_claims_contributor_status ON issue_claims(contributor_user_id, status);
CREATE UNIQUE INDEX idx_claims_one_active_per_issue ON issue_claims(repository_id, github_issue_number) WHERE status = 'active';
CREATE INDEX idx_contributions_contest_status ON contributions(contest_id, status);
CREATE INDEX idx_contributions_contributor ON contributions(contributor_user_id, status);
CREATE INDEX idx_activities_contest_time ON tracked_activities(contest_id, occurred_at DESC);
CREATE INDEX idx_points_contest_user ON points_ledger(contest_id, user_id, created_at DESC);
CREATE INDEX idx_audit_contest_time ON audit_log(contest_id, created_at DESC);
