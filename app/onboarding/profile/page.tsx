"use client";

import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

function ProfileForm() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const role = searchParams?.get("role") || "contributor";
	const [isSubmitting, setIsSubmitting] = React.useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		// Mocking an API call to save profile data
		setTimeout(() => {
			// Direct to dashboard (host vs contributor dashboard based on role)
			router.push(role === "host" ? "/host" : "/dashboard");
		}, 600);
	};

	return (
		<div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
			<div className="mb-8 text-center">
				<h2 className="mb-3 text-3xl font-black text-text-bright">
					Complete your profile
				</h2>
				<p className="text-muted">
					Just a few more details before we set up your {role} workspace.
				</p>
			</div>

			<form
				onSubmit={handleSubmit}
				className="rounded-2xl border border-muted/20 bg-card p-6 shadow-card sm:p-8"
			>
				<div className="space-y-6">
					<div className="space-y-2">
						<label
							htmlFor="displayName"
							className="text-sm font-bold text-text-bright"
						>
							Display Name
						</label>
						<Input id="displayName" placeholder="e.g. Jane Doe" required />
					</div>

					<div className="space-y-2">
						<label
							htmlFor="githubHandle"
							className="text-sm font-bold text-text-bright"
						>
							GitHub Handle
						</label>
						<div className="relative">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted">
								<Icon size={16}>
									<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
								</Icon>
							</div>
							<Input
								id="githubHandle"
								placeholder="janedoe"
								className="pl-10"
								required
							/>
						</div>
						<p className="text-xs text-muted">
							This will be used to link your commits and PRs to your account.
						</p>
					</div>

					<div className="space-y-2">
						<label
							htmlFor="timezone"
							className="text-sm font-bold text-text-bright"
						>
							Timezone
						</label>
						<Select id="timezone" defaultValue="UTC" required>
							<option value="PST">Pacific Time (PT)</option>
							<option value="EST">Eastern Time (ET)</option>
							<option value="UTC">Coordinated Universal Time (UTC)</option>
							<option value="CET">Central European Time (CET)</option>
							<option value="IST">India Standard Time (IST)</option>
							<option value="JST">Japan Standard Time (JST)</option>
						</Select>
					</div>
				</div>

				<div className="mt-8 flex justify-end gap-3 border-t border-muted/20 pt-6">
					<Button
						type="button"
						variant="secondary"
						onClick={() => router.push("/onboarding/role")}
					>
						Back
					</Button>
					<Button type="submit" disabled={isSubmitting}>
						{isSubmitting ? "Saving..." : "Complete Setup"}
					</Button>
				</div>
			</form>
		</div>
	);
}

export default function ProfileCompletion() {
	return (
		<React.Suspense fallback={<div className="animate-pulse">Loading...</div>}>
			<ProfileForm />
		</React.Suspense>
	);
}
