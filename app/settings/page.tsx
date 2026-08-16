import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Settings() {
	return (
		<main className="min-h-screen flex flex-col justify-between">
			<div>
				<Navbar />
				<section className="relative overflow-hidden py-16 md:py-24">
					<div className="hero-grid absolute inset-0 -z-10" />
					<div className="shell max-w-3xl">
						<p className="eyebrow">User profile settings</p>
						<h1 className="mt-4 text-4xl font-black tracking-[-.04em] md:text-5xl">
							Settings.
						</h1>
						<p className="mt-2 text-sm text-[#777] dark:text-neutral-500">
							Customize your profile metadata, link git credentials, and specify
							email dispatch rules.
						</p>

						<div className="mt-12 surface p-8 text-center max-w-xl mx-auto">
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
										d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</div>
							<h3 className="mt-4 text-lg font-bold text-ink dark:text-neutral-200">
								Settings Locked
							</h3>
							<p className="mt-2 text-sm text-[#666] dark:text-neutral-400">
								Profile and credentials settings are only available to
								authenticated users. Please log in with your GitHub account to
								access this page.
							</p>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</main>
	);
}
