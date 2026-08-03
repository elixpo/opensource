import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 no-underline" aria-label="Elixpo Open Source home">
      <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-ink text-sm font-black text-white">
        <span aria-hidden="true">{'</>'}</span>
      </span>
      <span className="text-[15px] font-extrabold tracking-[-0.02em]">Elixpo <span className="text-accent">Open Source</span></span>
    </Link>
  );
}
