import type * as React from "react";
import { Logo } from "@/components/logo";

export default function OnboardingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex min-h-screen flex-col bg-bg">
			<header className="flex h-20 items-center justify-between px-6 sm:px-10">
				<Logo />
				<div className="text-sm font-medium text-muted">Setup your account</div>
			</header>
			<main className="flex flex-1 items-center justify-center p-6">
				<div className="w-full max-w-2xl">{children}</div>
			</main>
		</div>
	);
}
