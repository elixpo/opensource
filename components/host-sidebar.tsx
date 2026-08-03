import Link from 'next/link';
import { Logo } from './logo';

const navigation = [
  ['Overview', '/host'],
  ['Contests', '/host#contests'],
  ['People & roles', '/host#people'],
  ['Repositories', '/host#repositories'],
  ['Activity', '/host#activity'],
  ['Rewards', '/host#rewards'],
];

export function HostSidebar() {
  return (
    <aside className="hidden min-h-screen border-r border-[var(--line)] bg-white p-5 lg:block">
      <Logo />
      <div className="mt-9 rounded-xl border border-[var(--line)] p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#999]">Host workspace</p>
        <p className="mt-1 text-sm font-bold">Elixpo Community</p>
      </div>
      <nav className="mt-5 space-y-1" aria-label="Host panel">
        {navigation.map(([label, href], index) => <Link key={label} href={href} className={`block rounded-lg px-3 py-2.5 text-sm no-underline ${index === 0 ? 'bg-accent-soft font-bold text-accent' : 'text-[#666] hover:bg-[#f7f7f7] hover:text-ink'}`}>{label}</Link>)}
      </nav>
      <div className="mt-8 border-t border-[var(--line)] pt-5"><p className="px-3 text-[10px] font-bold uppercase tracking-wider text-[#aaa]">Platform</p><Link href="/" className="mt-2 block rounded-lg px-3 py-2.5 text-sm text-[#666] no-underline hover:bg-[#f7f7f7]">Public site</Link></div>
    </aside>
  );
}
