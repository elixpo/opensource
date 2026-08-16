import type * as React from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { GlobalNav } from "./GlobalNav";

export function WorkspaceShell({
	children,
	userRoles = ["contributor"],
	currentRole = "contributor",
}: {
	children: React.ReactNode;
	userRoles?: string[];
	currentRole?: string;
}) {
	return (
		<div className="flex min-h-screen flex-col bg-bg text-text-bright">
			<GlobalNav userRoles={userRoles} currentRole={currentRole} />

			<main className="flex-1">
				<div className="shell py-6">
					<div className="mb-6">
						<Breadcrumbs />
					</div>
					{children}
				</div>
			</main>

			<footer className="border-t border-muted/20 py-8" role="contentinfo">
				<div className="shell text-sm text-muted flex items-center justify-between">
					<p>© {new Date().getFullYear()} Elixpo Open Source.</p>
				</div>
			</footer>
		</div>
	);
}
