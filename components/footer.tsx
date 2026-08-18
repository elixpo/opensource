import { Logo } from './logo';

export function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white">
      <div className="shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-6 text-white/55">
            Infrastructure for open-source programs that want less spreadsheet
            work and more merged contributions.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/35">
            Platform
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
            <a href="#platform">Features</a>
            <a href="#workflow">Workflow</a>
            <a href="/host">Host panel</a>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/35">
            Elixpo
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
            <a href="https://elixpo.com">Ecosystem</a>
            <a href="https://github.com/elixpo/opensource">Source code</a>
            <a href="mailto:hello@elixpo.com">hello@elixpo.com</a>
          </div>
        </div>
      </div>
      <div className="shell border-t border-white/10 py-5 text-xs text-white/35">
        © {new Date().getFullYear()} Elixpo · Built in the open.
      </div>
    </footer>
  );
}
