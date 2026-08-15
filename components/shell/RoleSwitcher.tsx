"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export function RoleSwitcher({
	roles,
	currentRole,
}: {
	roles: string[];
	currentRole: string;
}) {
	const [open, setOpen] = React.useState(false);

	return (
		<div className="relative">
			<button
				type="button"
				className="flex items-center gap-2 rounded-md border border-muted/20 bg-card px-3 py-1.5 text-sm font-medium text-text-bright transition-colors hover:bg-muted/10"
				onClick={() => setOpen(!open)}
			>
				<span className="capitalize">{currentRole}</span>
				<svg
					aria-hidden="true"
					className="h-4 w-4 opacity-50"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="m6 9 6 6 6-6" />
				</svg>
			</button>

			{open && (
				<div className="absolute left-0 mt-1 w-48 rounded-md border border-muted/20 bg-card p-1 shadow-card z-50">
					<div className="px-2 py-1.5 text-xs font-semibold text-muted uppercase tracking-wider">
						Switch Role
					</div>
					{roles.map((role) => (
						<button
							type="button"
							key={role}
							className={cn(
								"w-full rounded-sm px-2 py-1.5 text-left text-sm transition-colors hover:bg-muted/10 capitalize",
								role === currentRole
									? "bg-primary/10 text-primary font-medium"
									: "text-text-bright",
							)}
							onClick={() => {
								// Mock implementation for UI states phase
								setOpen(false);
								alert(`Switching to ${role} role (mock)`);
							}}
						>
							{role}
						</button>
					))}
				</div>
			)}
		</div>
	);
}
