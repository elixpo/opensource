export interface Discussion {
  id: string;
  title: string;
  body: string;
  author: {
    name: string;
    avatar: string;
  };
  project: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  commentCount: number;
  status: 'Open' | 'Resolved' | 'Pinned';
}

export const mockDiscussions: Discussion[] = [
  {
    id: 'd1',
    title: 'Proposal: Migrate to OpenNext for Cloudflare deployments',
    body: 'Currently we are using a custom worker setup, but OpenNext provides better alignment with standard Next.js 15 features...',
    author: {
      name: 'Sarah Drasner',
      avatar: 'SD',
    },
    project: 'elixpo/opensource',
    tags: ['Architecture', 'Deployment'],
    createdAt: '2h ago',
    updatedAt: '10m ago',
    commentCount: 14,
    status: 'Pinned',
  },
  {
    id: 'd2',
    title: 'Bug in leaderboard sorting logic when points are tied',
    body: 'I noticed that when two contributors have the exact same points, the sorting seems non-deterministic...',
    author: {
      name: 'Alex Rivera',
      avatar: 'AR',
    },
    project: 'elixpo/cli',
    tags: ['Bug', 'Leaderboard'],
    createdAt: '5h ago',
    updatedAt: '1h ago',
    commentCount: 3,
    status: 'Open',
  },
  {
    id: 'd3',
    title: 'How do I claim a bounty for the new UI components?',
    body: 'I have finished the requested Button and Input components but I am unsure how the bounty claim process works in the platform.',
    author: {
      name: 'Jordan Lee',
      avatar: 'JL',
    },
    project: 'elixpo/ui',
    tags: ['Help', 'Bounties'],
    createdAt: '1d ago',
    updatedAt: '4h ago',
    commentCount: 2,
    status: 'Resolved',
  },
  {
    id: 'd4',
    title: 'Adding WebAuthn support to the SSO provider',
    body: 'Passkeys are becoming the standard. I think we should add WebAuthn to accounts.elixpo...',
    author: {
      name: 'Michael Chen',
      avatar: 'MC',
    },
    project: 'elixpo/accounts',
    tags: ['Feature Request', 'Security'],
    createdAt: '2d ago',
    updatedAt: '1d ago',
    commentCount: 8,
    status: 'Open',
  }
];
