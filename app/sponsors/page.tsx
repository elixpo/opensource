import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const tiers = [
  {
    name: 'Platinum Sponsors',
    desc: 'Prominent homepage logo placement, exclusive technical workshops, and direct access to top contributors.',
    sponsors: ['Vercel', 'Cloudflare'],
    amount: '$5,000 / mo',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  },
  {
    name: 'Gold Sponsors',
    desc: 'Logo visibility on all contest dashboards and leaderboard interfaces, plus community announcements.',
    sponsors: ['GitHub', 'Sentry', 'Supabase'],
    amount: '$2,500 / mo',
    badgeColor: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  },
  {
    name: 'Silver Partners',
    desc: 'Included in our weekly newsletters and listed in core project repositories readme files.',
    sponsors: ['Biome', 'PostHog', 'Resend'],
    amount: '$1,000 / mo',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
  },
];

export default function Sponsors() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="hero-grid absolute inset-0 -z-10" />
          <div className="shell">
            <p className="eyebrow">Sponsorship program</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-.04em] md:text-6xl max-w-2xl">
              Powering the ecosystem.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#666]">
              Support public open-source programs and get direct access to hundreds of verified global software developers shipping code daily.
            </p>

            <div className="mt-12 flex flex-col gap-8">
              {tiers.map((tier) => (
                <div key={tier.name} className="surface p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8 hover:border-[#bbb] transition">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-ink">{tier.name}</h3>
                      <span className={`rounded border px-2 py-0.5 text-xs font-mono font-medium ${tier.badgeColor}`}>
                        {tier.amount}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[#555]">{tier.desc}</p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-3">
                      {tier.sponsors.map((sponsor) => (
                        <span key={sponsor} className="rounded-lg border border-[var(--line)] bg-[#fafafa] px-5 py-3 text-sm font-black text-ink shadow-sm">
                          {sponsor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 rounded-2xl border border-dashed border-[#ccc] p-8 text-center max-w-xl mx-auto">
              <h3 className="text-xl font-bold text-ink">Want to partner with us?</h3>
              <p className="mt-2 text-sm text-[#555] leading-relaxed">
                Connect with our partnership directors to explore custom placement tiers, developer recruitment events, and custom program templates.
              </p>
              <div className="mt-6">
                <a href="mailto:hello@elixpo.com" className="button-primary">Become a Sponsor</a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
