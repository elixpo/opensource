import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default async function UserProfile({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
  
  const user = {
    name: username.charAt(0).toUpperCase() + username.slice(1),
    handle: username,
    points: 2850,
    prs: 34,
    streak: 12,
    badges: ['Elite Contributor', 'Active Contributor', 'Edge Expert', 'Early Adopter'],
    contributions: [
      { pr: '#284', title: 'Configure Turbopack configurations for OpenNext build scripts', repo: 'elixpo/opensource', status: 'Merged', points: 150 },
      { pr: '#212', title: 'Build Ambassador metrics charting panels', repo: 'elixpo/opensource', status: 'Merged', points: 120 },
      { pr: '#190', title: 'Write D1 database replication seeds', repo: 'elixpo/cli', status: 'Merged', points: 180 },
    ],
  };

  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="hero-grid absolute inset-0 -z-10" />
          <div className="shell">
            <div className="surface p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-accent text-3xl font-black text-white">
                {user.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="text-center md:text-left flex-1">
                <h1 className="text-3xl font-black text-ink dark:text-neutral-100">{user.name}</h1>
                <p className="text-sm text-[#777] dark:text-neutral-500">@{user.handle}</p>
                <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
                  {user.badges.map((b) => (
                    <span key={b} className="rounded-full bg-[#f0f0f0] dark:bg-neutral-800 px-3 py-1 text-xs text-ink dark:text-neutral-300 font-semibold">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 border-t md:border-t-0 md:border-l border-[var(--line)] dark:border-neutral-800 pt-6 md:pt-0 md:pl-8 w-full md:w-auto text-center">
                <div>
                  <p className="text-3xl font-black text-accent">{user.points}</p>
                  <p className="text-[10px] font-mono font-bold text-[#777] uppercase">Points</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-ink dark:text-neutral-200">{user.prs}</p>
                  <p className="text-[10px] font-mono font-bold text-[#777] uppercase">PRs Merged</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-ink dark:text-neutral-200">{user.streak}d</p>
                  <p className="text-[10px] font-mono font-bold text-[#777] uppercase">Active Streak</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-ink dark:text-neutral-200 mb-4">Recent Merged Contributions</h2>
              <div className="flex flex-col gap-4">
                {user.contributions.map((c) => (
                  <div key={c.pr} className="surface p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-accent">{c.repo}</span>
                        <span className="rounded bg-green-100 dark:bg-emerald-950/30 px-2 py-0.5 text-[10px] font-bold text-green-800 dark:text-emerald-400">
                          {c.status}
                        </span>
                      </div>
                      <h3 className="mt-2 text-sm font-extrabold text-ink dark:text-neutral-200">
                        {c.title} <span className="text-[#888] font-medium">{c.pr}</span>
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-sm font-black text-accent">+{c.points} pts</span>
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
