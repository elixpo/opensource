import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const milestones = [
  {
    period: 'Q1 2026',
    title: 'Platform Foundation',
    status: 'Completed',
    points: [
      'Engineered core GitHub App webhook listener pipeline.',
      'Designed open-source schema blueprints for D1 database stores.',
      'Shipped the CLI tools for developer environment simulation.',
    ],
  },
  {
    period: 'Q2 2026',
    title: 'Audit Ledger & Scoring Engine',
    status: 'Completed',
    points: [
      'Created append-only ledgers to track point rewards tamper-proof.',
      'Implemented customizable scoring matrices for issues and PR reviews.',
      'Launched the public contributor profiles and dynamic streaks.',
    ],
  },
  {
    period: 'Q3 2026',
    title: 'Host Console & Global Payouts',
    status: 'Current Phase',
    points: [
      'Refined multi-organization host console UI with visual dashboard charts.',
      'Integrated global payout pipelines for Stripe and Wise currency wires.',
      'Added fine-grained role scopes (Admins, Mentors, Campus Leads).',
    ],
  },
  {
    period: 'Q4 2026',
    title: 'Community Integration Hooks',
    status: 'Planned',
    points: [
      'Provide webhook triggers for Discord and Slack notifications.',
      'Launch peer code-review point splits to reward community mentoring.',
      'Open the Campus Ambassador program registration portal.',
    ],
  },
];

export default function Timeline() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="hero-grid absolute inset-0 -z-10" />
          <div className="shell">
            <p className="eyebrow">Roadmap timeline</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-.04em] md:text-6xl max-w-2xl">
              Our Journey.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#666]">
              A chronological history of milestones completed and future feature developments planned for Elixpo Open Source.
            </p>

            <div className="mt-16 relative border-l border-[var(--line)] pl-8 ml-4 flex flex-col gap-12">
              {milestones.map((milestone) => (
                <div key={milestone.period} className="relative">
                  <div className="absolute -left-[41px] top-1.5 h-6 w-6 rounded-full border-4 border-white bg-accent shadow" />
                  <div>
                    <span className="font-mono text-xs font-bold text-accent bg-accent-soft px-2.5 py-1 rounded">
                      {milestone.period} — {milestone.status}
                    </span>
                    <h3 className="mt-4 text-2xl font-black text-ink">{milestone.title}</h3>
                    <ul className="mt-4 flex flex-col gap-2.5 text-sm leading-6 text-[#555] list-disc list-inside">
                      {milestone.points.map((pt, idx) => (
                        <li key={idx}>{pt}</li>
                      ))}
                    </ul>
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
