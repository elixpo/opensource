import Link from "next/link";
import { Arrow, Chart, GitBranch, Trophy, Users } from "@/components/icons";

const roles = [
	["Hosts", "3", "Owner + co-hosts"],
	["Project admins", "12", "Across 8 repositories"],
	["Mentors", "34", "28 active this week"],
	["Campus ambassadors", "18", "Across 11 campuses"],
	["Contributors", "248", "61 joined this week"],
];

const contests = [
	{
		name: "OpenCode Summer 2026",
		dates: "Aug 01 — Sep 30",
		status: "Active",
		progress: 42,
		people: 315,
	},
	{
		name: "Winter Maintainers Sprint",
		dates: "Nov 15 — Dec 20",
		status: "Draft",
		progress: 8,
		people: 16,
	},
];

export default function HostPage() {
	return (
		<main>
			<header className="flex min-h-[62px] items-center justify-between border-b border-[var(--line)] bg-white px-5 md:px-8">
				<div>
					<p className="text-[10px] font-bold uppercase tracking-wider text-[#999]">
						Host panel
					</p>
					<p className="text-sm font-bold">Good morning, Ayushman</p>
				</div>
				<div className="flex gap-2">
					<Link
						href="/"
						className="button-secondary hidden !py-2 sm:inline-flex"
					>
						View public site
					</Link>
					<Link
						href="/host/contests/new"
						className="button-primary !bg-accent !py-2 hover:!bg-accent-deep"
					>
						Create contest <Arrow />
					</Link>
				</div>
			</header>
			<div className="p-5 md:p-8">
				<div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
					<div>
						<p className="eyebrow">Workspace overview</p>
						<h1 className="mt-2 text-3xl font-black tracking-[-.035em]">
							Everything your contest needs.
						</h1>
						<p className="mt-2 text-sm text-[#777]">
							Manage contests, roles, GitHub activity, and rewards from one host
							workspace.
						</p>
					</div>
					<span className="w-fit rounded-full border border-[#bee7c8] bg-[#effaf2] px-3 py-1.5 text-xs font-bold text-[#287d3c]">
						● GitHub sync healthy
					</span>
				</div>
				<section className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
					{[
						[<Trophy key="i" />, "Active contests", "1", "+ 1 draft"],
						[<Users key="i" />, "People", "315", "+ 61 this week"],
						[<GitBranch key="i" />, "Tracked repos", "8", "412 events today"],
						[<Chart key="i" />, "Merged PRs", "186", "74% verified"],
					].map(([icon, label, value, note]) => (
						<article key={String(label)} className="surface p-5">
							<div className="flex items-center justify-between text-accent">
								{icon}
								<span className="text-[10px] text-[#999]">30 DAYS</span>
							</div>
							<p className="mt-5 text-xs text-[#777]">{label}</p>
							<p className="mt-1 text-3xl font-black">{value}</p>
							<p className="mt-2 text-[11px] text-[#999]">{note}</p>
						</article>
					))}
				</section>
				<section id="contests" className="mt-8 surface overflow-hidden">
					<div className="flex items-center justify-between border-b border-[var(--line)] p-5">
						<div>
							<h2 className="font-extrabold">Contests</h2>
							<p className="mt-1 text-xs text-[#888]">
								Every program owned by this workspace.
							</p>
						</div>
						<Link
							href="/host/contests/new"
							className="text-sm font-bold text-accent no-underline"
						>
							New contest →
						</Link>
					</div>
					<div className="divide-y divide-[var(--line)]">
						{contests.map((contest) => (
							<div
								key={contest.name}
								className="grid gap-4 p-5 md:grid-cols-[1.5fr_1fr_1fr_auto] md:items-center"
							>
								<div>
									<p className="font-bold">{contest.name}</p>
									<p className="mt-1 text-xs text-[#888]">{contest.dates}</p>
								</div>
								<div>
									<p className="text-[10px] uppercase tracking-wider text-[#999]">
										Timeline
									</p>
									<div className="mt-2 h-1.5 overflow-hidden rounded bg-[#eee]">
										<span
											className="block h-full rounded bg-accent"
											style={{ width: `${contest.progress}%` }}
										/>
									</div>
								</div>
								<div>
									<p className="text-[10px] uppercase tracking-wider text-[#999]">
										People
									</p>
									<p className="mt-1 text-sm font-bold">
										{contest.people} members
									</p>
								</div>
								<span
									className={`w-fit rounded-full px-2.5 py-1 text-[10px] font-bold ${contest.status === "Active" ? "bg-[#effaf2] text-[#287d3c]" : "bg-[#f1f1f1] text-[#777]"}`}
								>
									{contest.status}
								</span>
							</div>
						))}
					</div>
				</section>
				<section
					id="people"
					className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_.9fr]"
				>
					<div className="surface p-5">
						<div className="flex items-center justify-between">
							<div>
								<h2 className="font-extrabold">People & roles</h2>
								<p className="mt-1 text-xs text-[#888]">
									Access is scoped per contest.
								</p>
							</div>
							<button type="button" className="button-secondary !py-2">
								Invite people
							</button>
						</div>
						<div className="mt-5 divide-y divide-[var(--line)]">
							{roles.map(([role, count, note]) => (
								<div key={role} className="flex items-center py-3">
									<span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-soft text-sm font-black text-accent">
										{count}
									</span>
									<div className="ml-3">
										<p className="text-sm font-bold">{role}</p>
										<p className="text-[11px] text-[#999]">{note}</p>
									</div>
									<span className="ml-auto text-[#bbb]">→</span>
								</div>
							))}
						</div>
					</div>
					<div id="activity" className="surface p-5">
						<h2 className="font-extrabold">Tracked activity</h2>
						<p className="mt-1 text-xs text-[#888]">
							Across GitHub and platform actions.
						</p>
						<div className="mt-6 space-y-5">
							{[
								[
									"PR",
									"Contributor",
									"Opened PR #284 linked to issue #91",
									"2m",
								],
								["RV", "Mentor", "Reviewed 3 pending submissions", "18m"],
								[
									"AD",
									"Project admin",
									"Verified points for 2 merged PRs",
									"34m",
								],
								[
									"CA",
									"Campus ambassador",
									"Logged an onboarding session",
									"1h",
								],
							].map(([initials, role, activity, time]) => (
								<div key={activity} className="flex gap-3">
									<span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f2f2f2] text-[9px] font-black">
										{initials}
									</span>
									<div>
										<p className="text-xs leading-5">
											<b>{role}</b> · {activity}
										</p>
										<p className="text-[10px] text-[#aaa]">{time} ago</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
