import Link from 'next/link';
import { Logo } from './logo';

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const footerColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Platform',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Timeline', href: '/timeline' },
      { label: 'Projects', href: '/projects' },
      { label: 'Leaderboard', href: '/leaderboard' },
      { label: 'Badges', href: '/badges' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Events', href: '/events' },
      { label: 'Blog', href: '/blog' },
      { label: 'Discord/Slack', href: 'https://github.com/orgs/elixpo/discussions', external: true },
      { label: 'Community Hub', href: '/community' },
      { label: 'Code of Conduct', href: '/code-of-conduct' },
    ],
  },
  {
    title: 'For Organization',
    links: [
      { label: 'Register Org', href: '/register/organization' },
      { label: 'Sponsor Us', href: '/sponsors' },
      { label: 'Org Guidelines', href: '/about#org-guidelines' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
      { label: 'Report an Issue', href: 'mailto:hello@elixpo.com', external: true },
      { label: 'Status Page', href: 'https://elixpo.com', external: true },
    ],
  },
];

function FooterLinkItem({ link }: { link: FooterLink }) {
  const className = 'no-underline transition hover:text-white';
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noreferrer" className={className}>
        {link.label}
      </a>
    );
  }
  return (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white">
      <div className="shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-6 text-white/55">
            Infrastructure for open-source programs that want less spreadsheet work and more merged
            contributions.
          </p>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <p className="text-xs font-bold uppercase tracking-widest text-white/35">{column.title}</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
              {column.links.map((link) => (
                <FooterLinkItem key={link.label} link={link} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="shell border-t border-white/10 py-5 text-xs text-white/35">
        © {new Date().getFullYear()} Elixpo · Built in the open.
      </div>
    </footer>
  );
}