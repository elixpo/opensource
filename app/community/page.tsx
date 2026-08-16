import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

const hubs = [
  {
    name: 'Discord Community',
    desc: 'The real-time hub for all Elixpo contributors. Chat with core maintainers, join contribution voice channels, and get instant help with setup.',
    stats: '4,280 Members',
    cta: 'Join Server',
    url: 'https://discord.gg/elixpo',
    accentColor: '#5865F2',
  },
  {
    name: 'GitHub Discussions',
    desc: 'Submit RFCs, suggest platform features, ask technical architecture questions, and participate in formal roadmap planning.',
    stats: '342 Active Threads',
    cta: 'Open Discussions',
    url: 'https://github.com/elixpo/opensource/discussions',
    accentColor: '#1F2328',
  },
  {
    name: 'Campus Ambassadors',
    desc: 'Run Elixpo workshops and open-source hackathons at your university. Represent Elixpo locally and unlock swag and exclusive mentorship.',
    stats: '84 Universities',
    cta: 'Apply Today',
    url: '/host',
    accentColor: '#e53935',
  },
  {
    name: 'Mentorship Circles',
    desc: 'Get paired 1-on-1 with a senior maintainer for structured code reviews, resume critique, and open-source software engineering guidance.',
    stats: '110 Active Mentors',
    cta: 'Join a Circle',
    url: '/host',
    accentColor: '#8E24AA',
  },
];

export default function Community() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="hero-grid absolute inset-0 -z-10" />
          <div className="shell">
            <p className="eyebrow">Developer hubs</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-.04em] md:text-6xl max-w-2xl">
              Stronger together.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#666] dark:text-neutral-400">
              Engage with an active global network of software developers,
              designers, and open-source coordinators building the future of
              public code.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {hubs.map((hub) => (
                <div
                  key={hub.name}
                  className="surface p-8 flex flex-col justify-between hover:border-[#bbb] dark:hover:border-neutral-700 transition"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className="font-mono text-xs font-bold uppercase tracking-wider"
                        style={{
                          color:
                            hub.accentColor === '#1F2328'
                              ? undefined
                              : hub.accentColor,
                        }}
                      >
                        <span
                          className={
                            hub.accentColor === '#1F2328'
                              ? 'text-ink dark:text-emerald-400'
                              : ''
                          }
                        >
                          {hub.stats}
                        </span>
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl font-black text-ink dark:text-neutral-100">
                      {hub.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#555] dark:text-neutral-300">
                      {hub.desc}
                    </p>
                  </div>
                  <div className="mt-8 border-t border-[var(--line)] pt-5">
                    <a
                      href={hub.url}
                      className="button-primary w-full md:w-auto"
                      style={
                        hub.accentColor === '#1F2328'
                          ? undefined
                          : { backgroundColor: hub.accentColor }
                      }
                    >
                      {hub.cta}
                    </a>
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
