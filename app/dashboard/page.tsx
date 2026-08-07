import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Arrow } from '@/components/icons';

const claimedIssues = [
  { id: '#91', title: 'Turbopack build configs validation tests', repo: 'elixpo/opensource', deadline: '12h remaining', points: 150, status: 'In Progress' },
  { id: '#43', title: 'Write local SQLite replication seeds', repo: 'elixpo/cli', deadline: 'Ready for review', points: 180, status: 'Under Review' },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="hero-grid absolute inset-0 -z-10" />
          <div className="shell">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Contributor Space</p>
                <h1 className="mt-4 text-4xl font-black tracking-[-.04em] md:text-5xl">
                  Dashboard.
                </h1>
                <p className="mt-2 text-sm text-[#777] dark:text-neutral-500">
                  Track your active sprints, review claimed tasks, and manage contribution rewards.
                </p>
              </div>
              <Link href="/host" className="button-secondary text-sm font-bold flex items-center gap-1.5 self-start md:self-auto hover:-translate-y-0.5 transition">
                <svg className="h-4 w-4 text-[#555] dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Switch to Host Panel <Arrow />
              </Link>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="surface p-5">
                <p className="text-xs text-[#777] dark:text-neutral-500 font-mono font-bold uppercase">Level</p>
                <p className="mt-2 text-3xl font-black text-ink dark:text-neutral-100">Level 4</p>
                <p className="mt-1 text-[11px] text-[#999] dark:text-neutral-600">350 pts to Level 5</p>
              </div>
              <div className="surface p-5">
                <p className="text-xs text-[#777] dark:text-neutral-500 font-mono font-bold uppercase">Total Points</p>
                <p className="mt-2 text-3xl font-black text-accent">2,850</p>
                <p className="mt-1 text-[11px] text-[#999] dark:text-neutral-600">Top 1% this month</p>
              </div>
              <div className="surface p-5">
                <p className="text-xs text-[#777] dark:text-neutral-500 font-mono font-bold uppercase">PRs Merged</p>
                <p className="mt-2 text-3xl font-black text-ink dark:text-neutral-100">34</p>
                <p className="mt-1 text-[11px] text-[#999] dark:text-neutral-600">8 repositories contributed</p>
              </div>
              <div className="surface p-5">
                <p className="text-xs text-[#777] dark:text-neutral-500 font-mono font-bold uppercase">Streak</p>
                <p className="mt-2 text-3xl font-black text-ink dark:text-neutral-100">12 days</p>
                <p className="mt-1 text-[11px] text-[#999] dark:text-neutral-600">Double score multiplier active</p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-bold text-ink dark:text-neutral-200 mb-4">Your Claimed Issues</h2>
              <div className="flex flex-col gap-4">
                {claimedIssues.map((issue) => (
                  <div key={issue.id} className="surface p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-accent">{issue.repo}</span>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                          issue.status === 'In Progress' ? 'bg-amber-100 dark:bg-amber-950/30 text-amber-800 dark:text-amber-400' : 'bg-blue-100 dark:bg-blue-950/30 text-blue-800 dark:text-blue-400'
                        }`}>
                          {issue.status}
                        </span>
                      </div>
                      <h3 className="mt-2 text-sm font-extrabold text-ink dark:text-neutral-200">
                        {issue.title} <span className="text-[#888] font-medium">{issue.id}</span>
                      </h3>
                      <p className="mt-1.5 text-xs text-[#777] dark:text-neutral-500">⏳ Deadline: {issue.deadline}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-sm font-black text-accent">{issue.points} pts</p>
                      <button className="button-primary text-xs !py-1.5 !px-3.5 mt-2">
                        Submit PR
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
