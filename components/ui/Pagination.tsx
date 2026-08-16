"use client";

import * as React from "react";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

const ChevronLeft = () => (
	<Icon size={16}>
		<polyline points="15 18 9 12 15 6" />
	</Icon>
);

const ChevronRight = () => (
	<Icon size={16}>
		<polyline points="9 18 15 12 9 6" />
	</Icon>
);

const MoreHorizontal = () => (
	<Icon size={16}>
		<circle cx="12" cy="12" r="1" />
		<circle cx="19" cy="12" r="1" />
		<circle cx="5" cy="12" r="1" />
	</Icon>
);

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
	siblingCount?: number;
}

export function Pagination({
	className,
	currentPage,
	totalPages,
	onPageChange,
	siblingCount = 1,
	...props
}: PaginationProps) {
	const pages = React.useMemo(() => {
		// Generate page numbers with ellipses
		const range = (start: number, end: number) => {
			const length = end - start + 1;
			return Array.from({ length }, (_, idx) => idx + start);
		};

		const totalPageNumbers = siblingCount + 5;

		if (totalPageNumbers >= totalPages) {
			return range(1, totalPages);
		}

		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

		const shouldShowLeftDots = leftSiblingIndex > 2;
		const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

		const firstPageIndex = 1;
		const lastPageIndex = totalPages;

		if (!shouldShowLeftDots && shouldShowRightDots) {
			const leftItemCount = 3 + 2 * siblingCount;
			const leftRange = range(1, leftItemCount);
			return [...leftRange, "right-ellipsis", totalPages];
		}

		if (shouldShowLeftDots && !shouldShowRightDots) {
			const rightItemCount = 3 + 2 * siblingCount;
			const rightRange = range(totalPages - rightItemCount + 1, totalPages);
			return [firstPageIndex, "left-ellipsis", ...rightRange];
		}

		if (shouldShowLeftDots && shouldShowRightDots) {
			const middleRange = range(leftSiblingIndex, rightSiblingIndex);
			return [
				firstPageIndex,
				"left-ellipsis",
				...middleRange,
				"right-ellipsis",
				lastPageIndex,
			];
		}

		return [];
	}, [totalPages, currentPage, siblingCount]);

	if (currentPage === 0 || pages.length < 2) {
		return null;
	}

	return (
		<nav
			aria-label="pagination"
			className={cn("mx-auto flex w-full justify-center", className)}
			{...props}
		>
			<ul className="flex flex-row items-center gap-1">
				<li>
					<button
						type="button"
						onClick={() => onPageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className="inline-flex h-9 items-center justify-center gap-1 rounded-md px-2.5 text-sm font-medium transition-colors hover:bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
						aria-label="Go to previous page"
					>
						<ChevronLeft />
						<span>Previous</span>
					</button>
				</li>
				{pages.map((pageNumber) => {
					if (typeof pageNumber === "string") {
						return (
							<li
								key={pageNumber}
								className="flex h-9 w-9 items-center justify-center"
							>
								<MoreHorizontal />
								<span className="sr-only">More pages</span>
							</li>
						);
					}

					const isCurrent = pageNumber === currentPage;
					return (
						<li key={pageNumber as number}>
							<button
								type="button"
								onClick={() => onPageChange(pageNumber as number)}
								aria-current={isCurrent ? "page" : undefined}
								className={cn(
									"inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
									isCurrent
										? "border border-primary text-primary"
										: "hover:bg-muted/10",
								)}
							>
								{pageNumber}
							</button>
						</li>
					);
				})}
				<li>
					<button
						type="button"
						onClick={() => onPageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className="inline-flex h-9 items-center justify-center gap-1 rounded-md px-2.5 text-sm font-medium transition-colors hover:bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
						aria-label="Go to next page"
					>
						<span>Next</span>
						<ChevronRight />
					</button>
				</li>
			</ul>
		</nav>
	);
}
