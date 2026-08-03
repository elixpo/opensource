import Link from 'next/link';
import { DashboardPreview } from '@/components/dashboard-preview';
import { Arrow } from '@/components/icons';
import { Navbar } from '@/components/navbar';

export const metadata = { title: 'Workspace preview' };

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]"><Navbar /><section className="shell py-16 md:py-24"><div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow">Workspace preview</p><h1 className="mt-2 text-4xl font-black tracking-[-.04em] md:text-5xl">Program command center.</h1><p className="mt-4 max-w-2xl leading-7 text-[#666]">This first shell establishes the information hierarchy for organization health, contributor activity, issue flow, and rewards.</p></div><Link href="/" className="button-secondary">Back home <Arrow /></Link></div><DashboardPreview /><div className="mt-6 rounded-2xl border border-dashed border-[#ccc] bg-white p-8 text-center"><p className="font-bold">Interactive onboarding comes next.</p><p className="mt-2 text-sm text-[#777]">GitHub App installation, Elixpo identity, and program creation will replace this preview as backend services land.</p></div></section></main>
  );
}
