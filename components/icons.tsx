import type { ReactNode } from 'react';

export function Icon({
  children,
  size = 20,
}: {
  children: ReactNode;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const Arrow = () => (
  <Icon size={17}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);
export const GitBranch = () => (
  <Icon>
    <circle cx="6" cy="5" r="2" />
    <circle cx="18" cy="6" r="2" />
    <circle cx="6" cy="19" r="2" />
    <path d="M6 7v10M8 6h4a6 6 0 016 6v-4" />
  </Icon>
);
export const Trophy = () => (
  <Icon>
    <path d="M8 4h8v5a4 4 0 01-8 0V4zM8 6H4v2a4 4 0 004 4M16 6h4v2a4 4 0 01-4 4M12 13v4M8 20h8M9 17h6" />
  </Icon>
);
export const Users = () => (
  <Icon>
    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </Icon>
);
export const Shield = () => (
  <Icon>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-5" />
  </Icon>
);
export const Chart = () => (
  <Icon>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </Icon>
);
export const Check = () => (
  <Icon size={16}>
    <path d="M5 12l4 4L19 6" />
  </Icon>
);
