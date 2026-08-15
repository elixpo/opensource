"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/Button";

export default function RoleSelection() {
	const router = useRouter();
	const [selectedRole, setSelectedRole] = React.useState<
		"host" | "contributor" | null
	>(null);
	const [isSubmitting, setIsSubmitting] = React.useState(false);

	const handleContinue = () => {
		if (!selectedRole) return;
		setIsSubmitting(true);
		// Mocking an API call to save role selection
		setTimeout(() => {
			// Pass the selected role in the query string or assume a backend stores it
			router.push(`/onboarding/profile?role=${selectedRole}`);
		}, 400);
	};

	return (
		<div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
			<div className="mb-10 text-center">
				<h2 className="mb-3 text-3xl font-black text-text-bright">
					How will you use Elixpo?
				</h2>
				<p className="text-muted">
					You can always change your active workspace later.
				</p>
			</div>

			<div className="grid gap-4 sm:grid-cols-2 mb-10">
				<button
					onClick={() => setSelectedRole("host")}
					className={`flex flex-col items-start gap-4 rounded-2xl border p-6 text-left transition-all hover:shadow-card
            ${
							selectedRole === "host"
								? "border-primary bg-primary/5 ring-1 ring-primary"
								: "border-muted/20 bg-card hover:border-primary/50"
						}
          `}
				>
					<div
						className={`flex h-12 w-12 items-center justify-center rounded-xl ${selectedRole === "host" ? "bg-primary text-bg" : "bg-primary/10 text-primary"}`}
					>
						<Icon size={24}>
							<path d="M12 2L2 7l10 5 10-5-10-5z" />
							<path d="M2 17l10 5 10-5" />
							<path d="M2 12l10 5 10-5" />
						</Icon>
					</div>
					<div>
						<h3 className="mb-2 text-lg font-bold text-text-bright">
							Host an Initiative
						</h3>
						<p className="text-sm leading-relaxed text-muted">
							Create and manage open-source competitions, bounties, or
							mentorship programs.
						</p>
					</div>
				</button>

				<button
					onClick={() => setSelectedRole("contributor")}
					className={`flex flex-col items-start gap-4 rounded-2xl border p-6 text-left transition-all hover:shadow-card
            ${
							selectedRole === "contributor"
								? "border-teal bg-teal/5 ring-1 ring-teal"
								: "border-muted/20 bg-card hover:border-teal/50"
						}
          `}
				>
					<div
						className={`flex h-12 w-12 items-center justify-center rounded-xl ${selectedRole === "contributor" ? "bg-teal text-bg" : "bg-teal/10 text-teal"}`}
					>
						<Icon size={24}>
							<polyline points="16 18 22 12 16 6" />
							<polyline points="8 6 2 12 8 18" />
						</Icon>
					</div>
					<div>
						<h3 className="mb-2 text-lg font-bold text-text-bright">
							Contribute to OS
						</h3>
						<p className="text-sm leading-relaxed text-muted">
							Participate in programs, resolve issues, and earn rewards for your
							code.
						</p>
					</div>
				</button>
			</div>

			<div className="flex justify-end gap-3 border-t border-muted/20 pt-6">
				<Button variant="secondary" onClick={() => router.push("/onboarding")}>
					Back
				</Button>
				<Button
					onClick={handleContinue}
					disabled={!selectedRole || isSubmitting}
				>
					Continue
				</Button>
			</div>
		</div>
	);
}
