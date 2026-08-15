import Link from 'next/link';
import { publicEnv } from '@/lib/env';
import { Logo } from './logo';

const links = [
  { href: '#platform', label: 'Platform' },
  { href: '#workflow', label: 'How it works' },
  { href: '/host', label: 'Host panel' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-muted/20 bg-bg/90 backdrop-blur-xl">
      <div className="shell flex h-[62px] items-center gap-6">
        <Logo />
        <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {links.map((link) => <Link key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm text-muted no-underline transition hover:bg-card hover:text-text-bright">{link.label}</Link>)}
        </nav>
        <a href={publicEnv.githubRepository} target="_blank" rel="noreferrer" className="hidden rounded-lg border border-muted/20 px-3 py-2 text-sm font-medium text-muted no-underline hover:border-muted/40 sm:block">GitHub</a>
        <a href={`${publicEnv.accountsUrl}/login?continue=${encodeURIComponent(`${publicEnv.appUrl}/host`)}`} className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-bg no-underline transition hover:bg-[#e84e58]">Start a contest</a>
      </div>
    </header>
  );
}
