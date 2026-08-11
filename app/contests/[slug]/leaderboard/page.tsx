import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const leaders = [
  { rank: 1, name: 'Alex Rivera', handle: 'arivera', points: 2850, prs: 34, streak: 12, badge: 'Elite Contributor' },
  { rank: 2, name: 'Sofia Chen', handle: 'schen_dev', points: 2420, prs: 29, streak: 8, badge: 'Bug Hunter' },
  { rank: 3, name: 'Marcus Vance', handle: 'mvance', points: 1980, prs: 22, streak: 5, badge: 'Speedrunner' },
  { rank: 4, name: 'Elena Rostova', handle: 'elena_r', points: 1750, prs: 18, streak: 0, badge: 'Documentation Hero' },
  { rank: 5, name: 'Kenji Sato', handle: 'sato_k', points: 1540, prs: 15, streak: 3, badge: 'Review Guru' },
];

export default async function Leaderboard({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

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
            <p className="mt-5 max-w-xl text-base leading-7 text-[#666]">
              Real-time activity points accrued from merged pull requests, reviewed issues, and community contributions for the {slug} contest. Backed by an append-only ledger.
            </p>

            <div className="mt-12 overflow-x-auto rounded-2xl border border-[var(--line)] bg-white shadow-card">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-[var(--line)] bg-[#fdfdfd] text-xs font-mono font-bold uppercase tracking-wider text-[#777]">
                    <th className="p-4 pl-6 w-20">Rank</th>
                    <th className="p-4">Contributor</th>
                    <th className="p-4 text-right">PRs Merged</th>
                    <th className="p-4 text-right">Streak</th>
                    <th className="p-4">Achievement</th>
                    <th className="p-4 pr-6 text-right">Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)] text-sm">
                  {leaders.map((leader) => (
                    <tr key={leader.handle} className="hover:bg-[#fafafa] transition">
                      <td className="p-4 pl-6 font-mono font-bold">
                        {leader.rank === 1 && <span className="text-yellow-600 font-black text-[15px]">#1</span>}
                        {leader.rank > 1 && `#${leader.rank}`}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="grid h-8 w-8 place-items-center rounded-full bg-accent-soft text-xs font-bold text-accent">
                            {leader.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-extrabold text-ink">{leader.name}</div>
                            <div className="text-xs text-[#777]">@{leader.handle}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-right font-mono font-medium">{leader.prs}</td>
                      <td className="p-4 text-right font-mono text-xs text-[#555]">
                        {leader.streak > 0 ? `${leader.streak} days` : '—'}
                      </td>
                      <td className="p-4">
                        <span className="inline-flex rounded-full bg-[#f0f0f0] px-2.5 py-0.5 text-xs text-[#444] font-medium">
                          {leader.badge}
                        </span>
                      </td>
                      <td className="p-4 pr-6 text-right font-mono font-black text-accent">{leader.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
