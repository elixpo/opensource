"use client";

import type * as React from "react";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Input } from "./Input";
import { Select } from "./Select";

const SearchIcon = () => (
	<Icon size={16}>
		<circle cx="11" cy="11" r="8" />
		<line x1="21" y1="21" x2="16.65" y2="16.65" />
	</Icon>
);

const FilterIcon = () => (
	<Icon size={16}>
		<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
	</Icon>
);

export interface FilterOption {
	value: string;
	label: string;
}

export interface FilterDefinition {
	id: string;
	label: string;
	options: FilterOption[];
}

export interface FiltersProps extends React.HTMLAttributes<HTMLDivElement> {
	searchPlaceholder?: string;
	searchValue?: string;
	onSearchChange?: (value: string) => void;
	filters?: FilterDefinition[];
	filterValues?: Record<string, string>;
	onFilterChange?: (id: string, value: string) => void;
	onClearFilters?: () => void;
}

export function Filters({
	className,
	searchPlaceholder = "Search...",
	searchValue,
	onSearchChange,
	filters = [],
	filterValues = {},
	onFilterChange,
	onClearFilters,
	...props
}: FiltersProps) {
	const hasActiveFilters = Object.values(filterValues).some(
		(val) => val !== "",
	);

	return (
		<div
			className={cn(
				"flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
				className,
			)}
			{...props}
		>
			<div className="relative w-full sm:max-w-sm">
				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted">
					<SearchIcon />
				</div>
				<Input
					type="search"
					placeholder={searchPlaceholder}
					value={searchValue}
					onChange={(e) => onSearchChange?.(e.target.value)}
					className="pl-9"
				/>
			</div>

			{(filters.length > 0 || hasActiveFilters) && (
				<div className="flex flex-wrap items-center gap-2">
					{filters.length > 0 && (
						<div className="flex items-center gap-1 text-sm text-muted hidden sm:flex mr-1">
							<FilterIcon />
							<span>Filters:</span>
						</div>
					)}

					{filters.map((filter) => (
						<div key={filter.id} className="w-full sm:w-auto min-w-[120px]">
							<Select
								value={filterValues[filter.id] || ""}
								onChange={(e) => onFilterChange?.(filter.id, e.target.value)}
								aria-label={filter.label}
							>
								<option value="">{filter.label}</option>
								{filter.options.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</Select>
						</div>
					))}

					{hasActiveFilters && onClearFilters && (
						<Button
							variant="ghost"
							size="sm"
							onClick={onClearFilters}
							className="text-xs text-muted hover:text-text-bright w-full sm:w-auto mt-1 sm:mt-0"
						>
							Clear filters
						</Button>
					)}
				</div>
			)}
		</div>
	);
}
