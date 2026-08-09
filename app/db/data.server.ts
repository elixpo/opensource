// Mock data access layer for local development.
// In production, these functions would query D1 via Drizzle ORM.

export interface User {
  id: string;
  username: string;
  level: string;
  points: number;
  prs: number;
  avatar: string | null;
  badges: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  issueCount: number;
  license: string;
  video?: string;
}

export interface Issue {
  id: string;
  projectId: string;
  projectName: string;
  title: string;
  points: number;
  difficulty: string;
  status: string;
}

export interface Contribution {
  id: number;
  userId: string;
  issueId: string | null;
  type: string;
  action: string;
  project: string;
  points: number;
  date: string;
  verified: boolean;
}

// ─── Seed Data ────────────────────────────────────────────────────────────────

const USERS: User[] = [
  { id: 'u1', username: 'karan_dev', level: 'Maintainer', points: 1450, prs: 34, avatar: null, badges: 12 },
  { id: 'u2', username: 'divyanshu_coder', level: 'Core', points: 1220, prs: 28, avatar: null, badges: 9 },
  { id: 'u3', username: 'ayushman_ux', level: 'Contributor', points: 980, prs: 15, avatar: null, badges: 5 },
  { id: 'u4', username: 'ananya_rust', level: 'Contributor', points: 840, prs: 12, avatar: null, badges: 4 },
  { id: 'u5', username: 'ishaan_go', level: 'Novice', points: 420, prs: 5, avatar: null, badges: 2 },
  { id: 'u6', username: 'priya_ts', level: 'Core', points: 1100, prs: 22, avatar: null, badges: 7 },
  { id: 'u7', username: 'rohan_py', level: 'Contributor', points: 690, prs: 10, avatar: null, badges: 3 },
  { id: 'u8', username: 'neha_css', level: 'Novice', points: 310, prs: 4, avatar: null, badges: 1 },
];

const PROJECTS: Project[] = [
  { id: 'lixeditor', name: 'elixpo/lixeditor', description: 'A rich WYSIWYG block editor based on BlockNote, featuring support for equations, Mermaid diagrams, and code highlighting.', language: 'TypeScript', stars: 1200, forks: 340, issueCount: 12, license: 'MIT', video: 'https://elixpo.com/videos/oreo.mp4' },
  { id: 'search', name: 'elixpo/search', description: 'AI-assisted search pipeline utilizing a 3-tier caching architecture with Redis, KV, and edge-side includes.', language: 'Python', stars: 890, forks: 210, issueCount: 8, license: 'MIT', video: 'https://elixpo.com/videos/url.mp4' },
  { id: 'sketch', name: 'elixpo/sketch', description: 'Collaborative open-source SVG whiteboard engine for visual brainstorming and diagramming.', language: 'React', stars: 2100, forks: 560, issueCount: 24, license: 'MIT', video: 'https://elixpo.com/videos/sketch.mp4' },
  { id: 'accounts', name: 'elixpo/accounts', description: 'Unified Single Sign-On (SSO) service managing user identity across all sub-services via GitHub and Google OAuth.', language: 'Go', stars: 450, forks: 90, issueCount: 5, license: 'MIT' },
  { id: 'chat', name: 'elixpo/chat', description: 'Real-time messaging platform with WebSocket channels, threaded replies, and Markdown formatting.', language: 'TypeScript', stars: 670, forks: 180, issueCount: 16, license: 'MIT' },
  { id: 'blogs', name: 'elixpo/blogs', description: 'Headless CMS-powered blogging platform with RSS feeds, SEO optimization, and MDX support.', language: 'JavaScript', stars: 320, forks: 85, issueCount: 7, license: 'CC-BY-4.0' },
];

const ISSUES: Issue[] = [
  { id: 'i1', projectId: 'lixeditor', projectName: 'elixpo/lixeditor', title: 'Fix rendering bug in Markdown block', points: 50, difficulty: 'Intermediate', status: 'Open' },
  { id: 'i2', projectId: 'lixeditor', projectName: 'elixpo/lixeditor', title: 'Add Mermaid diagram support', points: 120, difficulty: 'Advanced', status: 'Claimed' },
  { id: 'i3', projectId: 'lixeditor', projectName: 'elixpo/lixeditor', title: 'Update dependencies in package.json', points: 10, difficulty: 'Good First Issue', status: 'Open' },
  { id: 'i4', projectId: 'search', projectName: 'elixpo/search', title: 'Optimize caching layer for edge regions', points: 120, difficulty: 'Advanced', status: 'Open' },
  { id: 'i5', projectId: 'search', projectName: 'elixpo/search', title: 'Add autocomplete suggestions', points: 60, difficulty: 'Intermediate', status: 'In Review' },
  { id: 'i6', projectId: 'sketch', projectName: 'elixpo/sketch', title: 'Add rectangle tool to canvas', points: 30, difficulty: 'Good First Issue', status: 'Open' },
  { id: 'i7', projectId: 'sketch', projectName: 'elixpo/sketch', title: 'Implement WebSocket syncing for real-time cursors', points: 150, difficulty: 'Advanced', status: 'Open' },
  { id: 'i8', projectId: 'sketch', projectName: 'elixpo/sketch', title: 'Add dark mode toggle to canvas', points: 40, difficulty: 'Good First Issue', status: 'Open' },
  { id: 'i9', projectId: 'accounts', projectName: 'elixpo/accounts', title: 'Implement email fallback authentication', points: 80, difficulty: 'Intermediate', status: 'Open' },
  { id: 'i10', projectId: 'chat', projectName: 'elixpo/chat', title: 'Add typing indicators', points: 40, difficulty: 'Intermediate', status: 'Claimed' },
  { id: 'i11', projectId: 'blogs', projectName: 'elixpo/blogs', title: 'Fix RSS feed date parsing', points: 20, difficulty: 'Good First Issue', status: 'Open' },
  { id: 'i12', projectId: 'lixeditor', projectName: 'elixpo/lixeditor', title: 'Add syntax highlighting for GraphQL blocks', points: 50, difficulty: 'Intermediate', status: 'Merged' },
];

const CONTRIBUTIONS: Contribution[] = [
  { id: 1, userId: 'u1', issueId: 'i12', type: 'pr', action: 'Merged PR #45', project: 'elixpo/lixeditor', points: 150, date: '2026-10-14', verified: true },
  { id: 2, userId: 'u1', issueId: 'i5', type: 'review', action: 'Reviewed PR #8', project: 'elixpo/search', points: 30, date: '2026-10-10', verified: true },
  { id: 3, userId: 'u1', issueId: null, type: 'mentorship', action: 'Mentored neha_css', project: 'elixpo/sketch', points: 50, date: '2026-10-02', verified: true },
  { id: 4, userId: 'u1', issueId: null, type: 'event', action: 'Attended Web3 Hackathon', project: 'Global', points: 100, date: '2026-09-25', verified: true },
  { id: 5, userId: 'u2', issueId: 'i4', type: 'pr', action: 'Merged PR #22', project: 'elixpo/search', points: 120, date: '2026-10-12', verified: true },
  { id: 6, userId: 'u3', issueId: 'i6', type: 'pr', action: 'Merged PR #31', project: 'elixpo/sketch', points: 30, date: '2026-10-08', verified: true },
  { id: 7, userId: 'u4', issueId: 'i9', type: 'pr', action: 'Merged PR #5', project: 'elixpo/accounts', points: 80, date: '2026-10-05', verified: true },
];

// ─── Query Functions ──────────────────────────────────────────────────────────

export function getUsers(): User[] {
  return USERS;
}

export function getUserByUsername(username: string): User | undefined {
  return USERS.find(u => u.username === username);
}

export function getLeaderboard(): User[] {
  return [...USERS].sort((a, b) => b.points - a.points);
}

export function getProjects(): Project[] {
  return PROJECTS;
}

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find(p => p.id === id);
}

export function getIssues(filters?: { projectId?: string; status?: string; difficulty?: string }): Issue[] {
  let result = [...ISSUES];
  if (filters?.projectId) result = result.filter(i => i.projectId === filters.projectId);
  if (filters?.status) result = result.filter(i => i.status === filters.status);
  if (filters?.difficulty) result = result.filter(i => i.difficulty === filters.difficulty);
  return result;
}

export function getIssueById(id: string): Issue | undefined {
  return ISSUES.find(i => i.id === id);
}

export function getContributions(userId?: string): Contribution[] {
  if (userId) return CONTRIBUTIONS.filter(c => c.userId === userId);
  return CONTRIBUTIONS;
}

export function getStats() {
  return {
    contributors: USERS.length,
    prsMerged: ISSUES.filter(i => i.status === 'Merged').length + 8400, // simulated total
    activeProjects: PROJECTS.length,
    organizations: 42,
  };
}

export function matchIssues(skills: string[]): (Issue & { match: number; reason: string })[] {
  const skillLower = skills.map(s => s.toLowerCase().trim());
  return ISSUES
    .filter(i => i.status === 'Open')
    .map(issue => {
      let score = 0;
      const reasons: string[] = [];
      const project = PROJECTS.find(p => p.id === issue.projectId);
      if (project) {
        if (skillLower.some(s => project.language.toLowerCase().includes(s))) {
          score += 40;
          reasons.push(`Matches your ${project.language} skills`);
        }
      }
      if (issue.difficulty === 'Good First Issue') { score += 20; reasons.push('Beginner-friendly issue'); }
      if (issue.difficulty === 'Intermediate') { score += 10; }
      score += Math.min(issue.points / 5, 20);
      if (reasons.length === 0) reasons.push('Broadens your contribution portfolio');
      return { ...issue, match: Math.min(score + 30, 99), reason: reasons.join('. ') + '.' };
    })
    .sort((a, b) => b.match - a.match)
    .slice(0, 5);
}

export function matchMentors(skills: string[]): (User & { match: number; reason: string })[] {
  return USERS
    .filter(u => u.level === 'Maintainer' || u.level === 'Core')
    .map(user => ({
      ...user,
      match: Math.floor(Math.random() * 15) + 80,
      reason: `Expert in collaborative development, aligned with your learning goals.`,
    }))
    .sort((a, b) => b.match - a.match)
    .slice(0, 3);
}
