import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Rewards() {
	return (
		<main className="min-h-screen flex flex-col justify-between">
			<div>
				<Navbar />
				<section className="relative overflow-hidden py-16 md:py-24">
					<div className="hero-grid absolute inset-0 -z-10" />
					<div className="shell">
						<p className="eyebrow">Financial board</p>
						<h1 className="mt-4 text-4xl font-black tracking-[-.04em] md:text-5xl">
							Rewards.
						</h1>
						<p className="mt-2 text-sm text-[#777] dark:text-neutral-500">
							Manage bank connections, review pending points payouts, and view
							wire histories.
						</p>

						<div className="mt-12 grid gap-6 sm:grid-cols-3">
							<div className="surface p-6">
								<p className="text-xs text-[#777] dark:text-neutral-500 font-mono font-bold uppercase">
									Unpaid Balance
								</p>
								<p className="mt-2 text-3xl font-black text-ink dark:text-neutral-400">
									$0.00
								</p>
								<p className="mt-1 text-[11px] text-[#999] dark:text-neutral-600">
									No active payout scheduled
								</p>
							</div>
							<div className="surface p-6">
								<p className="text-xs text-[#777] dark:text-neutral-500 font-mono font-bold uppercase">
									Pending Approval
								</p>
								<p className="mt-2 text-3xl font-black text-ink dark:text-neutral-400">
									$0.00
								</p>
								<p className="mt-1 text-[11px] text-[#999] dark:text-neutral-600">
									No pending validations
								</p>
							</div>
							<div className="surface p-6">
								<p className="text-xs text-[#777] dark:text-neutral-500 font-mono font-bold uppercase">
									Total Earned
								</p>
								<p className="mt-2 text-3xl font-black text-ink dark:text-neutral-400">
									$0.00
								</p>
								<p className="mt-1 text-[11px] text-[#999] dark:text-neutral-600">
									All-time open-source earnings
								</p>
							</div>
						</div>

						<div className="mt-8 surface p-6 text-center max-w-xl mx-auto">
							<div className="grid h-12 w-12 place-items-center rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-450 mx-auto">
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
									/>
								</svg>
							</div>
							<h3 className="mt-4 text-lg font-bold text-ink dark:text-neutral-200">
								No Linked Payout Method
							</h3>
							<p className="mt-2 text-sm text-[#666] dark:text-neutral-400">
								You must be logged in to connect your Wise or Stripe account and
								view financial transactions.
							</p>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</main>
	);
}
