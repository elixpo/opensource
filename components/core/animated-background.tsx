"use client";
import { AnimatePresence, motion, type Transition } from "motion/react";
import type React from "react";
import { Children, cloneElement, useEffect, useState } from "react";

type AnimatedChildProps = {
	"data-id": string;
	className?: string;
	children?: React.ReactNode;
	[key: string]: unknown;
};

export type AnimatedBackgroundProps = {
	children:
		| React.ReactElement<AnimatedChildProps>[]
		| React.ReactElement<AnimatedChildProps>;
	defaultValue?: string;
	onValueChange?: (newActiveId: string | null) => void;
	className?: string;
	transition?: Transition;
	enableHover?: boolean;
};

export function AnimatedBackground({
	children,
	defaultValue,
	onValueChange,
	className,
	transition,
	enableHover = false,
}: AnimatedBackgroundProps) {
	const [activeId, setActiveId] = useState<string | null>(null);
	const [uniqueId] = useState(() => Math.random().toString(36).substr(2, 9));

	const handleSetActiveId = (id: string | null) => {
		setActiveId(id);

		if (onValueChange) {
			onValueChange(id);
		}
	};

	useEffect(() => {
		if (defaultValue !== undefined) {
			setActiveId(defaultValue);
		}
	}, [defaultValue]);

	return Children.map(
		children,
		(child: React.ReactElement<AnimatedChildProps>) => {
			const id = child.props["data-id"];

			const interactionProps = enableHover
				? {
						onMouseEnter: () => handleSetActiveId(id),
						onMouseLeave: () => handleSetActiveId(null),
					}
				: {
						onClick: () => handleSetActiveId(id),
					};

			return cloneElement(
				child,
				{
					key: id,
					className: cn("relative inline-flex", child.props.className),
					"data-checked": activeId === id ? "true" : "false",
					...interactionProps,
				},
				<>
					<AnimatePresence initial={false}>
						{activeId === id && (
							<motion.div
								layoutId={`background-${uniqueId}`}
								className={cn("absolute inset-0", className)}
								transition={transition}
								initial={{ opacity: defaultValue ? 1 : 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							/>
						)}
					</AnimatePresence>
					<span className="z-10">{child.props.children}</span>
				</>,
			);
		},
	);
}

function cn(...classes: (string | undefined | false)[]) {
	return classes.filter(Boolean).join(" ");
}
