import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const events = [
	{
		title: "Elixpo Open Source Sprint 2026",
		date: "Aug 25 - Aug 28, 2026",
		time: "14:00 UTC",
		type: "Contribution Sprint",
		status: "Upcoming",
		location: "Discord Virtual Hub",
		desc: "Join hundreds of developers worldwide for a 3-day sprint to improve the core workflows of Elixpo. Earn double points and limited-edition badges.",
	},
	{
		title: "August Community Town Hall",
		date: "Aug 12, 2026",
		time: "17:00 UTC",
		type: "Community Sync",
		status: "Upcoming",
		location: "Google Meet",
		desc: "An open session discussing the new roadmap, governance structures, and checking in on current active leaderboard sprints.",
	},
	{
		title: "Next.js 15 & Cloudflare Workers Workshop",
		date: "Jul 20, 2026",
		time: "15:00 UTC",
		type: "Workshop",
		status: "Completed",
		location: "YouTube Live",
		desc: "An deep dive into building ultra-fast edge rendered Next.js applications deployed globally on Cloudflare Workers.",
	},
];

export default function Events() {
	return (
		<main className="min-h-screen flex flex-col justify-between">
			<div>
				<Navbar />
				<section className="relative overflow-hidden py-16 md:py-24">
					<div className="hero-grid absolute inset-0 -z-10" />
					<div className="shell">
						<p className="eyebrow">Events schedule</p>
						<h1 className="mt-4 text-4xl font-black tracking-[-.04em] md:text-6xl max-w-2xl">
							Connect & learn.
						</h1>
						<p className="mt-5 max-w-xl text-base leading-7 text-[#666]">
							Participate in hackathons, weekly syncs, workshops, and sprints.
							Learn from core maintainers and level up your open-source skills.
						</p>

						<div className="mt-12 flex flex-col gap-6">
							{events.map((event) => (
								<div
									key={event.title}
									className="surface p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#bbb] transition"
								>
									<div className="flex-1">
										<div className="flex flex-wrap items-center gap-3">
											<span className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
												{event.type}
											</span>
											<span
												className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
													event.status === "Upcoming"
														? "bg-green-100 text-green-800"
														: "bg-gray-100 text-gray-800"
												}`}
											>
												{event.status}
											</span>
										</div>
										<h3 className="mt-3 text-xl font-extrabold text-ink">
											{event.title}
										</h3>
										<p className="mt-2 text-sm leading-6 text-[#666] max-w-2xl">
											{event.desc}
										</p>
										<div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-[#555] dark:text-neutral-400">
											<span className="flex items-center gap-1.5">
												<svg
													className="h-3.5 w-3.5 text-accent"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													strokeWidth="2.5"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
													/>
												</svg>
												{event.date} at {event.time}
											</span>
											<span className="flex items-center gap-1.5">
												<svg
													className="h-3.5 w-3.5 text-accent"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													strokeWidth="2.5"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
													/>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
													/>
												</svg>
												{event.location}
											</span>
										</div>
									</div>
									<div>
										{event.status === "Upcoming" ? (
											<button className="button-primary w-full md:w-auto">
												Register
											</button>
										) : (
											<button className="button-secondary w-full md:w-auto">
												Watch Session
											</button>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</main>
	);
}
