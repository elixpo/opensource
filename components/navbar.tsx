import Link from 'next/link';
import { publicEnv } from '@/lib/env';
import { Logo } from './logo';

const links = [
  { href: '#platform', label: 'Platform' },
  { href: '#workflow', label: 'How it works' },
  { href: '/dashboard', label: 'Dashboard' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/90 backdrop-blur-xl">
      <div className="shell flex h-[62px] items-center gap-6">
        <Logo />
        <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {links.map((link) => <Link key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm text-[#555] no-underline transition hover:bg-[#f6f6f6] hover:text-ink">{link.label}</Link>)}
        </nav>
        <a href={publicEnv.githubRepository} target="_blank" rel="noreferrer" className="hidden rounded-lg border border-[var(--line)] px-3 py-2 text-sm font-medium text-[#555] no-underline hover:border-[#bbb] sm:block">GitHub</a>
        <a href={`${publicEnv.accountsUrl}/login?continue=${encodeURIComponent(publicEnv.appUrl)}`} className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-white no-underline transition hover:bg-accent-deep">Sign in</a>
      </div>
    </header>
  );
}
