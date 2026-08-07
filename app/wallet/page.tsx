import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const transactions = [
  { id: 'TX-8921', date: 'Jul 28, 2026', desc: 'Points payout (2,400 pts) — OpenCode Summer 2026 Sprint #1', amount: '$240.00', status: 'Completed' },
  { id: 'TX-8704', date: 'Jun 15, 2026', desc: 'Ambassador stipend — June ambassador activities', amount: '$150.00', status: 'Completed' },
  { id: 'TX-8511', date: 'May 04, 2026', desc: 'Points payout (14,600 pts) — Winter Maintainers Sprint final payout', amount: '$1,460.00', status: 'Completed' },
];

export default function Wallet() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="hero-grid absolute inset-0 -z-10" />
          <div className="shell">
            <p className="eyebrow">Financial board</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-.04em] md:text-5xl">
              Wallet.
            </h1>
            <p className="mt-2 text-sm text-[#777] dark:text-neutral-500">
              Manage bank connections, review pending points payouts, and view wire histories.
            </p>

            {/* Balances */}
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <div className="surface p-6">
                <p className="text-xs text-[#777] dark:text-neutral-500 font-mono font-bold uppercase">Unpaid Balance</p>
                <p className="mt-2 text-3xl font-black text-accent">$420.00</p>
                <p className="mt-1 text-[11px] text-[#999] dark:text-neutral-600">Wise wire triggering on Aug 15</p>
              </div>
              <div className="surface p-6">
                <p className="text-xs text-[#777] dark:text-neutral-500 font-mono font-bold uppercase">Pending Approval</p>
                <p className="mt-2 text-3xl font-black text-ink dark:text-neutral-200">$150.00</p>
                <p className="mt-1 text-[11px] text-[#999] dark:text-neutral-600">Pending project admin validation</p>
              </div>
              <div className="surface p-6">
                <p className="text-xs text-[#777] dark:text-neutral-500 font-mono font-bold uppercase">Total Earned</p>
                <p className="mt-2 text-3xl font-black text-ink dark:text-neutral-200">$1,850.00</p>
                <p className="mt-1 text-[11px] text-[#999] dark:text-neutral-600">All-time open-source earnings</p>
              </div>
            </div>

            {/* Payout method */}
            <div className="mt-8 surface p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-ink dark:text-neutral-200">Payout Method</h3>
                <p className="mt-1 text-sm text-[#666] dark:text-neutral-400">
                  Wise Business Account ending in <span className="font-mono font-bold">...4821</span>
                </p>
              </div>
              <div className="flex gap-2">
                <button className="button-secondary text-xs !py-2">Change Method</button>
                <button className="button-primary text-xs !py-2">Disconnect</button>
              </div>
            </div>

            {/* Transactions table */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-ink dark:text-neutral-200 mb-4">Transaction History</h2>
              <div className="overflow-x-auto rounded-2xl border border-[var(--line)] dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-card">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-[var(--line)] dark:border-neutral-800 bg-[#fdfdfd] dark:bg-neutral-900 text-xs font-mono font-bold uppercase tracking-wider text-[#777] dark:text-neutral-400">
                      <th className="p-4 pl-6">ID</th>
                      <th className="p-4">Date</th>
                      <th className="p-4">Description</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 pr-6 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--line)] dark:divide-neutral-800 text-sm">
                    {transactions.map((tx) => (
                      <tr key={tx.id} className="hover:bg-[#fafafa] dark:hover:bg-neutral-900 transition">
                        <td className="p-4 pl-6 font-mono font-bold text-ink dark:text-neutral-200">{tx.id}</td>
                        <td className="p-4 text-[#555] dark:text-neutral-400">{tx.date}</td>
                        <td className="p-4 text-ink dark:text-neutral-300 font-medium">{tx.desc}</td>
                        <td className="p-4">
                          <span className="inline-flex rounded-full bg-green-100 dark:bg-emerald-950/30 px-2.5 py-0.5 text-xs text-green-800 dark:text-emerald-400 font-medium">
                            {tx.status}
                          </span>
                        </td>
                        <td className="p-4 pr-6 text-right font-mono font-black text-ink dark:text-neutral-200">{tx.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
