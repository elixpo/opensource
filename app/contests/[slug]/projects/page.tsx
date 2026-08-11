import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Arrow, GitBranch } from '@/components/icons';

const projects = [
  {
    name: 'elixpo/opensource',
    desc: 'The core platform for running open-source competitions, mentorship, and payouts. Built with Next.js & Cloudflare.',
    stars: '1.2k',
    issues: 8,
    contributors: 14,
    tags: ['Next.js', 'Cloudflare', 'TypeScript'],
  },
  {
    name: 'elixpo/cli',
    desc: 'Developer toolbelt to seed local environments, trigger worker simulations, and lint configurations.',
    stars: '342',
    issues: 3,
    contributors: 5,
    tags: ['Rust', 'CLI', 'WebAssembly'],
  },
  {
    name: 'elixpo/design-system',
    desc: 'Premium React components, themes, and animations powered by vanilla CSS custom properties.',
    stars: '528',
    issues: 12,
    contributors: 9,
    tags: ['React', 'CSS', 'Aesthetics'],
  },
  {
    name: 'elixpo/governance',
    desc: 'Smart contracts and schemas for append-only audit ledgers and automated contributor rewards.',
    stars: '189',
    issues: 2,
    contributors: 4,
    tags: ['Solidity', 'D1', 'SQLite'],
  },
];

export default async function Projects({ params }: { params: Promise<{ slug: string }> }) {
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
              Discover and contribute.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#666]">
              Explore active repositories within the Elixpo ecosystem for the {slug} contest. Claim open issues, submit pull requests, and build your open-source profile.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <div key={project.name} className="surface p-6 flex flex-col justify-between hover:border-[#bbb] transition group">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 font-mono text-sm font-bold text-ink">
                        <GitBranch /> {project.name}
                      </span>
                      <span className="flex items-center gap-1 rounded bg-[#f6f6f6] px-2 py-1 text-xs text-[#555]">
                        ★ {project.stars}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold group-hover:text-accent transition">{project.name.split('/')[1]}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#666]">{project.desc}</p>
                  </div>
                  <div className="mt-6 border-t border-[var(--line)] pt-4 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex gap-4 text-xs font-mono text-[#777]">
                      <span><b>{project.issues}</b> Open Issues</span>
                      <span><b>{project.contributors}</b> Contributors</span>
                    </div>
                    <div className="flex gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[10px] font-bold text-accent">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
