"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components/states/ErrorState";

export default function HostError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="flex-1 py-12">
			<ErrorState
				title="Something went wrong"
				message={
					error.message || "An unexpected error occurred in the host workspace."
				}
				onRetry={reset}
			/>
		</div>
	);
}
