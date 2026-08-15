import { HostSidebar } from "@/components/host-sidebar";

export default function HostLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen bg-[#fafafa] lg:grid lg:grid-cols-[240px_1fr]">
			<HostSidebar />
			<div className="min-w-0">{children}</div>
		</div>
	);
}
