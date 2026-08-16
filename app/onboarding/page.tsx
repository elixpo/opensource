import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function OnboardingWelcome() {
	return (
		<div className="flex flex-col items-center text-center">
			<h1 className="mb-4 text-4xl font-black tracking-tight text-text-bright">
				Welcome to Elixpo
			</h1>
			<p className="mb-10 max-w-lg text-lg text-muted">
				We&apos;re excited to have you on board! Let&apos;s get your account set
				up so you can start hosting programs or contributing to open source.
			</p>

			<Link href="/onboarding/role" passHref legacyBehavior>
				<Button className="h-12 px-8 text-base shadow-lg shadow-primary/25">
					Get Started
				</Button>
			</Link>
		</div>
	);
}
