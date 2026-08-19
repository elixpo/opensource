'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { GitBranch, Shield, Users } from '@/components/icons';
import { Navbar } from '@/components/navbar';

const leaders = [
  {
    rank: 1,
    name: 'Alex Rivera',
    handle: 'arivera',
    points: 2850,
    prs: 34,
    streak: 12,
    badge: 'Elite Contributor',
  },
  {
    rank: 2,
    name: 'Sofia Chen',
    handle: 'schen_dev',
    points: 2420,
    prs: 29,
    streak: 8,
    badge: 'Bug Hunter',
  },
  {
    rank: 3,
    name: 'Marcus Vance',
    handle: 'mvance',
    points: 1980,
    prs: 22,
    streak: 5,
    badge: 'Speedrunner',
  },
  {
    rank: 4,
    name: 'Elena Rostova',
    handle: 'elena_r',
    points: 1750,
    prs: 18,
    streak: 0,
    badge: 'Documentation Hero',
  },
  {
    rank: 5,
    name: 'Kenji Sato',
    handle: 'sato_k',
    points: 1540,
    prs: 15,
    streak: 3,
    badge: 'Review Guru',
  },
];

const mentorLeaders = [
  {
    rank: 1,
    name: 'Circuit Overtime',
    handle: 'circuit_overtime',
    reviews: 42,
    mentees: 8,
    officeHours: 12,
    score: 950,
  },
  {
    rank: 2,
    name: 'Ez Vivek',
    handle: 'ez_vivek',
    reviews: 38,
    mentees: 6,
    officeHours: 10,
    score: 880,
  },
  {
    rank: 3,
    name: 'Nihal Gazi',
    handle: 'nihal_gazi',
    reviews: 31,
    mentees: 5,
    officeHours: 8,
    score: 790,
  },
  {
    rank: 4,
    name: 'Sofia Chen',
    handle: 'schen_dev',
    reviews: 27,
    mentees: 4,
    officeHours: 6,
    score: 680,
  },
  {
    rank: 5,
    name: 'Alex Rivera',
    handle: 'arivera',
    reviews: 22,
    mentees: 3,
    officeHours: 4,
    score: 540,
  },
];

const projectLeaders = [
  {
    rank: 1,
    repo: 'elixpo/opensource',
    contributors: 84,
    prsMerged: 112,
    openIssues: 24,
    totalPoints: 12450,
  },
  {
    rank: 2,
    repo: 'elixpo/cli',
    contributors: 42,
    prsMerged: 56,
    openIssues: 18,
    totalPoints: 6720,
  },
  {
    rank: 3,
    repo: 'elixpo/docs',
    contributors: 31,
    prsMerged: 48,
    openIssues: 12,
    totalPoints: 4320,
  },
  {
    rank: 4,
    repo: 'elixpo/vscode-extension',
    contributors: 19,
    prsMerged: 24,
    openIssues: 10,
    totalPoints: 2180,
  },
];

type TabKey = 'contributors' | 'mentors' | 'projects';

const TABS: { key: TabKey; label: string; icon: React.ReactNode }[] = [
  { key: 'contributors', label: 'Contributors', icon: <Users /> },
  { key: 'mentors', label: 'Mentors', icon: <Shield /> },
  { key: 'projects', label: 'Projects', icon: <GitBranch /> },
];

function RankCell({ rank }: { rank: number }) {
  return (
    <td className="p-4 pl-6 font-mono font-bold">
      {rank === 1 ? (
        <span className="text-yellow-600 dark:text-amber-400 font-black text-[15px]">
          #1
        </span>
      ) : (
        `#${rank}`
      )}
    </td>
  );
}

function PersonCell({ name, handle }: { name: string; handle: string }) {
  return (
    <td className="p-4">
      <div className="flex items-center gap-3">
        <div className="grid h-8 w-8 place-items-center rounded-full bg-accent-soft text-xs font-bold text-accent">
          {name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <div>
          <div className="font-extrabold text-ink dark:text-neutral-100">
            {name}
          </div>
          <div className="text-xs text-[#777] dark:text-neutral-400">
            @{handle}
          </div>
        </div>
      </div>
    </td>
  );
}

export default function Leaderboard({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [activeTab, setActiveTab] = useState<TabKey>('contributors');

  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="hero-grid absolute inset-0 -z-10" />
          <div className="shell">
            <p className="eyebrow">Contest: {slug}</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-.04em] md:text-6xl max-w-2xl">
              Top Contributors.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#666] dark:text-neutral-400">
              Real-time activity points accrued from merged pull requests,
              reviewed issues, and community contributions for the {slug}{' '}
              contest. Backed by an append-only ledger.
            </p>

            {/* Tab switcher */}
            <div
              role="tablist"
              aria-label="Leaderboard categories"
              className="mt-10 inline-flex items-center gap-1 rounded-full border border-[var(--line)] bg-[#fdfdfd] p-1 dark:bg-neutral-950"
            >
              {TABS.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
                      isActive
                        ? 'bg-ink text-cream shadow-card dark:bg-neutral-100 dark:text-neutral-900'
                        : 'text-[#666] hover:bg-[#f0f0f0] dark:text-neutral-400 dark:hover:bg-neutral-800'
                    }`}
                  >
                    <span className="[&>svg]:h-4 [&>svg]:w-4">{tab.icon}</span>
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Contributors */}
            {activeTab === 'contributors' && (
              <div className="mt-8 overflow-x-auto rounded-2xl border border-[var(--line)] bg-white dark:bg-neutral-900 shadow-card">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-[var(--line)] bg-[#fdfdfd] dark:bg-neutral-950 text-xs font-mono font-bold uppercase tracking-wider text-[#777] dark:text-neutral-400">
                      <th className="p-4 pl-6 w-20">Rank</th>
                      <th className="p-4">Contributor</th>
                      <th className="p-4 text-right">PRs Merged</th>
                      <th className="hidden sm:table-cell p-4 text-right">
                        Streak
                      </th>
                      <th className="p-4">Achievement</th>
                      <th className="p-4 pr-6 text-right">Points</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--line)] text-sm">
                    {leaders.map((leader) => (
                      <tr
                        key={leader.handle}
                        className="hover:bg-[#fafafa] dark:hover:bg-neutral-800/60 transition"
                      >
                        <RankCell rank={leader.rank} />
                        <PersonCell name={leader.name} handle={leader.handle} />
                        <td className="p-4 text-right font-mono font-medium">
                          {leader.prs}
                        </td>
                        <td className="hidden sm:table-cell p-4 text-right font-mono text-xs text-[#555] dark:text-neutral-400">
                          {leader.streak > 0 ? `${leader.streak} days` : '—'}
                        </td>
                        <td className="p-4">
                          <span className="inline-flex rounded-full bg-[#f0f0f0] dark:bg-neutral-800 px-2.5 py-0.5 text-xs text-[#444] dark:text-neutral-300 font-medium">
                            {leader.badge}
                          </span>
                        </td>
                        <td className="p-4 pr-6 text-right font-mono font-black text-accent">
                          {leader.points}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Mentors */}
            {activeTab === 'mentors' && (
              <div className="mt-8 overflow-x-auto rounded-2xl border border-[var(--line)] bg-white dark:bg-neutral-900 shadow-card">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-[var(--line)] bg-[#fdfdfd] dark:bg-neutral-950 text-xs font-mono font-bold uppercase tracking-wider text-[#777] dark:text-neutral-400">
                      <th className="p-4 pl-6 w-20">Rank</th>
                      <th className="p-4">Mentor</th>
                      <th className="p-4 text-right">Reviews Approved</th>
                      <th className="p-4 text-right">Mentees Claimed</th>
                      <th className="hidden sm:table-cell p-4 text-right">
                        Office Hours
                      </th>
                      <th className="p-4 pr-6 text-right">Mentorship Score</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--line)] text-sm">
                    {mentorLeaders.map((mentor) => (
                      <tr
                        key={mentor.handle}
                        className="hover:bg-[#fafafa] dark:hover:bg-neutral-800/60 transition"
                      >
                        <RankCell rank={mentor.rank} />
                        <PersonCell name={mentor.name} handle={mentor.handle} />
                        <td className="p-4 text-right font-mono font-medium">
                          {mentor.reviews}
                        </td>
                        <td className="p-4 text-right font-mono font-medium">
                          {mentor.mentees}
                        </td>
                        <td className="hidden sm:table-cell p-4 text-right font-mono text-xs text-[#555] dark:text-neutral-400">
                          {mentor.officeHours}
                        </td>
                        <td className="p-4 pr-6 text-right font-mono font-black text-accent">
                          {mentor.score}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Projects */}
            {activeTab === 'projects' && (
              <div className="mt-8 overflow-x-auto rounded-2xl border border-[var(--line)] bg-white dark:bg-neutral-900 shadow-card">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-[var(--line)] bg-[#fdfdfd] dark:bg-neutral-950 text-xs font-mono font-bold uppercase tracking-wider text-[#777] dark:text-neutral-400">
                      <th className="p-4 pl-6 w-20">Rank</th>
                      <th className="p-4">Project / Repo</th>
                      <th className="p-4 text-right">Active Contributors</th>
                      <th className="p-4 text-right">PRs Merged</th>
                      <th className="hidden sm:table-cell p-4 text-right">
                        Open Issues
                      </th>
                      <th className="p-4 pr-6 text-right">Total Points</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--line)] text-sm">
                    {projectLeaders.map((project) => (
                      <tr
                        key={project.repo}
                        className="hover:bg-[#fafafa] dark:hover:bg-neutral-800/60 transition"
                      >
                        <RankCell rank={project.rank} />
                        <td className="p-4">
                          <Link
                            href={`/contests/${slug}/projects`}
                            className="flex items-center gap-2 font-mono text-sm font-bold text-ink hover:text-accent dark:text-neutral-100 dark:hover:text-accent transition"
                          >
                            <GitBranch />
                            {project.repo}
                          </Link>
                        </td>
                        <td className="p-4 text-right font-mono font-medium">
                          {project.contributors}
                        </td>
                        <td className="p-4 text-right font-mono font-medium">
                          {project.prsMerged}
                        </td>
                        <td className="hidden sm:table-cell p-4 text-right font-mono text-xs text-[#555] dark:text-neutral-400">
                          {project.openIssues}
                        </td>
                        <td className="p-4 pr-6 text-right font-mono font-black text-accent">
                          {project.totalPoints}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
