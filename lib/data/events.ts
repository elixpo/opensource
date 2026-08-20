// Shared event data — consumed by app/events/page.tsx and app/page.tsx (trending section).
// Completed events are excluded from the homepage trending list but shown in full on /events.

export interface EventItem {
  title: string;
  date: string;
  time: string;
  type: string;
  status: 'Upcoming' | 'Completed';
  location: string;
  desc: string;
}

export const events: EventItem[] = [
  {
    title: 'Elixpo Open Source Sprint 2026',
    date: 'Aug 25 - Aug 28, 2026',
    time: '14:00 UTC',
    type: 'Contribution Sprint',
    status: 'Upcoming',
    location: 'Discord Virtual Hub',
    desc: 'Join hundreds of developers worldwide for a 3-day sprint to improve the core workflows of Elixpo. Earn double points and limited-edition badges.',
  },
  {
    title: 'August Community Town Hall',
    date: 'Aug 12, 2026',
    time: '17:00 UTC',
    type: 'Community Sync',
    status: 'Upcoming',
    location: 'Google Meet',
    desc: 'An open session discussing the new roadmap, governance structures, and checking in on current active leaderboard sprints.',
  },
  {
    title: 'Next.js 15 & Cloudflare Workers Workshop',
    date: 'Jul 20, 2026',
    time: '15:00 UTC',
    type: 'Workshop',
    status: 'Completed',
    location: 'YouTube Live',
    desc: 'An deep dive into building ultra-fast edge rendered Next.js applications deployed globally on Cloudflare Workers.',
  },
];

/** Up to 3 active/upcoming events, ordered as they appear in the list above. */
export const trendingEvents: EventItem[] = events
  .filter((e) => e.status === 'Upcoming')
  .slice(0, 3);
