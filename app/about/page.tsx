import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function About() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="hero-grid absolute inset-0 -z-10" />
          <div className="shell">
            <p className="eyebrow">About Elixpo</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-.04em] md:text-6xl max-w-3xl">
              We automate open-source management.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#555]">
              Elixpo was built by open-source maintainers who grew tired of managing contribution programs, issue claims, and payout sheets via complex spreadsheets. We created a GitHub-native OS to handle the logistics so you can focus on writing code.
            </p>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="surface p-8">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-accent">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 15V9a4 4 0 00-4-4H9M6 9v6" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-bold">GitHub Native</h3>
                <p className="mt-3 text-sm leading-6 text-[#666]">
                  No third-party dashboards to track pull requests. All activity syncs via our GitHub App using native labels, comments, and project structures.
                </p>
              </div>
              <div className="surface p-8">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-accent">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-bold">Audit-Ready Ledger</h3>
                <p className="mt-3 text-sm leading-6 text-[#666]">
                  Points and reward allocations are logged to an append-only transaction stream. Trust is hard-coded, verifiable, and open to public inspection.
                </p>
              </div>
              <div className="surface p-8">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-accent">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-bold">Global Payouts</h3>
                <p className="mt-3 text-sm leading-6 text-[#666]">
                  Built-in multi-currency developer payment rails designed to transfer rewards directly to international bank accounts and digital wallets seamlessly.
                </p>
              </div>
            </div>

            <div className="mt-16 rounded-2xl bg-[#151515] p-8 text-white md:p-12">
              <h2 className="text-2xl font-black md:text-3xl">Our Mission</h2>
              <p className="mt-4 text-base leading-7 text-white/70 max-w-3xl">
                We believe that the infrastructure supporting modern software development should be sustainable. By building automated contribution tracking and payouts, we enable organizations to run long-lasting programs that incentivize developers fairly, ship public goods, and scale open-source ecosystems.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
