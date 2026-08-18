import Link from 'next/link';

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 no-underline"
      aria-label="Elixpo Open Source home"
    >
      <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-ink dark:bg-white text-sm font-black text-white dark:text-ink">
        <span aria-hidden="true">{'</>'}</span>
      </span>
      <span className="text-[15px] font-extrabold tracking-[-0.02em] text-ink dark:text-neutral-200">
        Elixpo <span className="text-accent">Open Source</span>
      </span>
    </Link>
  );
}
