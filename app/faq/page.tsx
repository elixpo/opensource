"use client";

import { useState } from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const faqs = [
	{
		q: "What is Elixpo Open Source?",
		a: "Elixpo is an operations platform built to automate the administrative overhead of open-source initiatives. We sync with GitHub to handle issue claiming, pull request score tracking, mentor assignments, ambassador statistics, and international developer payouts.",
	},
	{
		q: "How are contribution points calculated?",
		a: "Points are based on customizable scoring rules set up by the contest hosts. Different weights can be configured for creating issues, resolving issues (based on labels like size/priority), reviewing code, merging PRs, or participating in community sprints.",
	},
	{
		q: "Who can start a contest or program?",
		a: "Any organization owner or maintainer can start a contest. Simply connect your GitHub organization, configure the rules and timeline parameters, and select which repositories should participate. Our host panel guides you through the process.",
	},
	{
		q: "How do international developers receive payouts?",
		a: "Elixpo has built-in integration with Wise and Stripe. Once a program completes and payouts are approved by the host, contributors are prompted to enter their banking details. Monies are automatically wired to their domestic accounts in their local currencies.",
	},
	{
		q: "Is Elixpo free for open-source projects?",
		a: "Yes, Elixpo is free for public open-source programs that are run in the open. For enterprise options, private repositories, and dedicated compliance structures, we offer custom licensing options.",
	},
];

export default function FAQ() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<main className="min-h-screen flex flex-col justify-between">
			<div>
				<Navbar />
				<section className="relative overflow-hidden py-16 md:py-24">
					<div className="hero-grid absolute inset-0 -z-10" />
					<div className="shell">
						<p className="eyebrow">Frequently asked questions</p>
						<h1 className="mt-4 text-4xl font-black tracking-[-.04em] md:text-6xl max-w-2xl">
							Got Questions?
						</h1>
						<p className="mt-5 max-w-xl text-base leading-7 text-[#666]">
							Find answers to the most common queries about point calculation,
							contest setup, and reward payouts.
						</p>

						<div className="mt-12 max-w-3xl flex flex-col gap-4">
							{faqs.map((faq, index) => (
								<div key={index} className="surface overflow-hidden">
									<button
										onClick={() => toggleFAQ(index)}
										className="flex w-full items-center justify-between p-6 text-left font-extrabold text-ink transition hover:bg-[#fafafa]"
									>
										<span>{faq.q}</span>
										<svg
											className={`h-5 w-5 text-accent transition-transform duration-200 ${
												activeIndex === index ? "rotate-180" : ""
											}`}
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth="2.5"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</button>
									{activeIndex === index && (
										<div className="border-t border-[var(--line)] bg-[#fafafa] p-6 text-sm leading-7 text-[#555] animate-in fade-in duration-200">
											{faq.a}
										</div>
									)}
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
