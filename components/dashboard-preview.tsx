const activity = [
  { avatar: 'AK', text: 'Anika linked PR #284 to the API redesign', time: '2m' },
  { avatar: 'RS', text: 'Rish awarded 25 points for a merged feature', time: '8m' },
  { avatar: 'JD', text: 'Jordan claimed the onboarding issue', time: '14m' },
];

export function DashboardPreview() {
  return (
    <div className="surface overflow-hidden text-left">
      <div className="flex items-center border-b border-[var(--line)] px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b63]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffc043]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#61c454]" />
        </div>
        <span className="mx-auto font-mono text-[10px] text-[#999] dark:text-neutral-500">opensource.elixpo.com / workspace</span>
      </div>
      <div className="grid min-h-[380px] grid-cols-[64px_1fr] sm:grid-cols-[170px_1fr]">
        <aside className="border-r border-[var(--line)] bg-[#fafafa] dark:bg-neutral-900 p-3">
          <div className="mb-5 flex h-8 w-8 items-center justify-center rounded-lg bg-ink dark:bg-white text-xs font-black text-white dark:text-ink">O</div>
          {['Overview', 'Programs', 'Issues', 'People'].map((item, index) => (
            <div
              key={item}
              className={`mb-1 hidden rounded-lg px-2 py-2 text-xs sm:block ${
                index === 0
                  ? 'bg-white dark:bg-neutral-800 font-bold shadow-sm text-ink dark:text-neutral-200'
                  : 'text-[#777] dark:text-neutral-400'
              }`}
            >
              {item}
            </div>
          ))}
        </aside>
        <div className="min-w-0 bg-white dark:bg-neutral-950 p-4 sm:p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent">August sprint</p>
              <h3 className="mt-1 text-lg font-extrabold text-ink dark:text-neutral-100">Program overview</h3>
            </div>
            <span className="rounded-full bg-[#effaf2] dark:bg-emerald-950/30 px-2 py-1 text-[9px] font-bold text-[#26833d] dark:text-emerald-400">
              ● LIVE
            </span>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-4">
            {[['Contributors', '248'], ['Merged PRs', '186'], ['Open issues', '72'], ['Prize pool', '₹2.4L']].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-[var(--line)] p-3">
                <p className="text-[9px] text-[#888] dark:text-neutral-400">{label}</p>
                <p className="mt-1 text-lg font-black text-ink dark:text-neutral-100">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
            <div className="rounded-xl border border-[var(--line)] p-4">
              <p className="text-xs font-bold text-ink dark:text-neutral-200">Contribution velocity</p>
              <div className="mt-6 flex h-24 items-end gap-2">
                {[32, 48, 41, 64, 57, 79, 92, 76, 100].map((height, index) => (
                  <span
                    key={index}
                    className="flex-1 rounded-t bg-accent/80 dark:bg-accent"
                    style={{ height: `${height}%`, opacity: 0.35 + index * 0.065 }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-[var(--line)] p-4">
              <p className="text-xs font-bold text-ink dark:text-neutral-200">Live activity</p>
              <div className="mt-3 space-y-3">
                {activity.map((item) => (
                  <div key={item.text} className="flex gap-2">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent-soft dark:bg-accent/10 text-[8px] font-black text-accent">
                      {item.avatar}
                    </span>
                    <p className="text-[9px] leading-4 text-[#555] dark:text-neutral-300">
                      {item.text} <span className="text-[#aaa] dark:text-neutral-500">· {item.time}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
