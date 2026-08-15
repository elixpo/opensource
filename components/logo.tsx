import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 no-underline group" aria-label="Elixpo Open Source home">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-text-bright transition-transform group-hover:scale-105">
        {/* Abstract representation of the E-badge / Oreo mark */}
        <span className="flex h-5 w-5 items-center justify-center rounded bg-primary text-[12px] font-black text-bg">
          <span aria-hidden="true">E</span>
        </span>
      </span>
      <span className="text-[15px] font-extrabold tracking-[-0.02em] text-text-bright">Elixpo <span className="text-primary">Open Source</span></span>
    </Link>
  );
}
