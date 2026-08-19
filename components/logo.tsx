import Link from 'next/link';

type LogoProps = {
  variant?: 'default' | 'inverted';
};

export function Logo({ variant = 'default' }: LogoProps) {
  const isInverted = variant === 'inverted';

  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 no-underline"
      aria-label="Elixpo Open Source home"
    >
      <span
        className={`grid h-8 w-8 place-items-center rounded-[10px] text-sm font-black ${isInverted ? 'bg-white text-ink' : 'bg-ink text-white dark:bg-white dark:text-ink'}`}
      >
        <span aria-hidden="true">{'</>'}</span>
      </span>
      <span
        className={`text-[15px] font-extrabold tracking-[-0.02em] ${isInverted ? 'text-white' : 'text-ink dark:text-neutral-200'}`}
      >
        Elixpo <span className="text-accent">Open Source</span>
      </span>
    </Link>
  );
}
