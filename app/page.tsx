import Link from 'next/link';
import { DashboardPreview } from '@/components/dashboard-preview';
import { Footer } from '@/components/footer';
import {
  Arrow,
  Chart,
  Check,
  GitBranch,
  Shield,
  Trophy,
  Users,
} from '@/components/icons';
import { Navbar } from '@/components/navbar';

const features = [
  {
    icon: <GitBranch />,
    title: 'GitHub-native programs',
    body: 'Connect an organization or select repositories. Issues, labels, PRs, reviews, and merges stay in sync.',
  },
  {
    icon: <Trophy />,
    title: 'Fair gamification',
    body: 'Configurable points, badges, streaks, and leaderboards backed by an append-only ledger.',
  },
  {
    icon: <Users />,
    title: 'Every role included',
    body: 'Invite co-hosts, project admins, mentors, campus ambassadors, and contributors with contest-scoped access.',
  },
  {
    icon: <Chart />,
    title: 'Program intelligence',
    body: 'See contributor funnels, issue turnaround, retention, and prize-pool health without a spreadsheet.',
  },
  {
    icon: <Shield />,
    title: 'Audit-ready by default',
    body: 'Every override, approval, label change, and payout decision records its actor and reason.',
  },
  {
    icon: <Check />,
    title: 'Managed essentials',
    body: 'Elixpo identity, notifications, and payout rails work together, so organizers can focus on community.',
  },
];

const steps = [
  [
    '01',
    'Connect GitHub',
    'Install the GitHub App for an organization or choose repositories across organizations.',
  ],
  [
    '02',
    'Shape the program',
    'Set timelines, issue labels, scoring rules, mentor access, and rewards.',
  ],
  [
    '03',
    'Run it in one place',
    'Track claims, reviews, merged work, points, and payouts as the program moves.',
  ],
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="relative overflow-hidden pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="hero-grid absolute inset-0 -z-10" />
        <div className="shell text-center">
          <h1 className="mx-auto mt-7 max-w-5xl text-[clamp(2.8rem,7vw,6.3rem)] font-black leading-[.94] tracking-[-.055em]">
            Run developer contests.
            <br />
            <span className="font-bold italic text-[#888] dark:text-neutral-400">
              Skip the spreadsheets.
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-[1.05rem] leading-7 text-[#555] dark:text-neutral-300 md:text-lg">
            Launch contributor programs, hackathons, and mentorship circles from
            one workspace. Sync GitHub repos, score work by labels, manage
            mentors, track leaderboards, and handle audit-ready payouts.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/host/contests/new" className="button-primary">
              Create a contest <Arrow />
            </Link>
            <Link href="/host#contests" className="button-secondary">
              View contests
            </Link>
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-[#999] dark:text-neutral-400">
            Competitions · mentorship · bounties · sustained initiatives
          </p>
          <div className="mx-auto mt-16 max-w-5xl">
            <DashboardPreview />
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-[var(--line)] bg-cream py-4">
        <div className="ticker flex w-max items-center gap-12 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[.12em] text-[#777] dark:text-neutral-400">
          {[...Array(2)]
            .flatMap(() => [
              'Programs',
              'Contributors',
              'Mentors',
              'Repositories',
              'Leaderboards',
              'Payouts',
            ])
            .map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-12">
                {item}
                <b className="text-accent">✦</b>
              </span>
            ))}
        </div>
      </div>

      <section id="platform" className="shell py-24 md:py-32">
        <p className="eyebrow">One operating system</p>
        <div className="mt-3 grid gap-5 md:grid-cols-2">
          <h2 className="text-4xl font-black tracking-[-.04em] md:text-5xl">
            From first issue
            <br />
            to final payout.
          </h2>
          <p className="max-w-xl text-base leading-7 text-[#666] dark:text-neutral-400">
            A shared source of truth for organizers, maintainers, mentors, and
            contributors—while GitHub remains where the code gets built.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="bg-white dark:bg-neutral-900 p-7 transition hover:bg-[#fdfdfd] dark:hover:bg-[#1a1a1a]"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft dark:bg-accent/10 text-accent">
                  {feature.icon}
                </span>
                <span className="font-mono text-[10px] text-[#bbb] dark:text-neutral-500">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-8 text-lg font-extrabold text-ink dark:text-neutral-100">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#666] dark:text-neutral-400">
                {feature.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="workflow" className="bg-[#151515] py-24 text-white md:py-32">
        <div className="shell">
          <p className="eyebrow">Simple by design</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-[-.04em] md:text-5xl">
            Your next program,
            <br />
            <span className="italic text-white/45">live in minutes.</span>
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
            {steps.map(([number, title, body]) => (
              <article key={number} className="bg-[#151515] p-7 md:p-9">
                <span className="font-mono text-xs font-bold text-accent">
                  {number}
                </span>
                <h3 className="mt-14 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{body}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-white dark:bg-neutral-900 p-7 text-ink dark:text-neutral-100 md:flex-row md:items-center md:p-10">
            <div>
              <p className="eyebrow">Phase zero</p>
              <h3 className="mt-2 text-2xl font-black tracking-tight text-ink dark:text-neutral-100">
                The foundation is being built in public.
              </h3>
            </div>
            <a
              href="https://github.com/elixpo/opensource"
              className="button-primary"
            >
              Follow development <Arrow />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
