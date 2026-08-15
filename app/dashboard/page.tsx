import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function DashboardPage() {
	return (
		<main className="min-h-screen flex flex-col justify-between">
			<div>
				<Navbar />
				<section className="relative overflow-hidden py-16 md:py-24">
					<div className="hero-grid absolute inset-0 -z-10" />
					<div className="shell">
						<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
							<div>
								<p className="eyebrow">Contributor Space</p>
								<h1 className="mt-4 text-4xl font-black tracking-[-.04em] md:text-5xl">
									Dashboard.
								</h1>
								<p className="mt-2 text-sm text-[#777] dark:text-neutral-500">
									Track your active sprints, review claimed tasks, and manage
									contribution rewards.
								</p>
							</div>
						</div>

						<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
							<div className="surface p-5">
								<p className="text-xs text-[#777] dark:text-neutral-500 font-mono font-bold uppercase">
									Level
								</p>
								<p className="mt-2 text-3xl font-black text-ink dark:text-neutral-400">
									—
								</p>
								<p className="mt-1 text-[11px] text-[#999] dark:text-neutral-600">
									Level details locked
								</p>
							</div>
							<div className="surface p-5">
								<p className="text-xs text-[#777] dark:text-neutral-500 font-mono font-bold uppercase">
									Total Points
								</p>
								<p className="mt-2 text-3xl font-black text-ink dark:text-neutral-400">
									0
								</p>
								<p className="mt-1 text-[11px] text-[#999] dark:text-neutral-600">
									No points accrued yet
								</p>
							</div>
							<div className="surface p-5">
								<p className="text-xs text-[#777] dark:text-neutral-500 font-mono font-bold uppercase">
									PRs Merged
								</p>
								<p className="mt-2 text-3xl font-black text-ink dark:text-neutral-400">
									0
								</p>
								<p className="mt-1 text-[11px] text-[#999] dark:text-neutral-600">
									No merged contributions
								</p>
							</div>
							<div className="surface p-5">
								<p className="text-xs text-[#777] dark:text-neutral-500 font-mono font-bold uppercase">
									Streak
								</p>
								<p className="mt-2 text-3xl font-black text-ink dark:text-neutral-400">
									0 days
								</p>
								<p className="mt-1 text-[11px] text-[#999] dark:text-neutral-600">
									No active contribution streak
								</p>
							</div>
						</div>

						<div className="mt-10 surface p-12 text-center max-w-xl mx-auto">
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
										d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
									/>
								</svg>
							</div>
							<h2 className="mt-4 text-lg font-bold text-ink dark:text-neutral-200">
								Session Required
							</h2>
							<p className="mt-2 text-sm text-[#777] dark:text-neutral-500">
								You must sign in with GitHub to view your active claimed issues,
								submit pull requests, and track sprint scores.
							</p>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</main>
	);
}
