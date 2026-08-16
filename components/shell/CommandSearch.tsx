'use client';

import * as React from 'react';

import { Icon } from '@/components/icons';

const SearchIcon = () => (
  <Icon size={16}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </Icon>
);

export function CommandSearch() {
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  React.useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-md border border-muted/20 bg-bg px-3 py-1.5 text-sm text-muted transition-colors hover:bg-card w-full max-w-[240px] sm:max-w-xs"
      >
        <SearchIcon />
        <span className="flex-1 text-left">Search or type a command...</span>
        <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-muted/20 bg-card px-1.5 font-mono text-[10px] font-medium text-muted opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] sm:pt-[15vh]">
          <button
            type="button"
            aria-label="Close command search"
            className="fixed inset-0 bg-text-bright/60 backdrop-blur-sm transition-opacity"
            onClick={() => setOpen(false)}
          />
          <div
            className="relative z-50 w-full max-w-xl rounded-xl border border-muted/20 bg-card shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center border-b border-muted/20 px-3">
              <SearchIcon />
              <input
                ref={inputRef}
                className="flex h-12 w-full bg-transparent py-3 px-2 text-sm text-text-bright placeholder:text-muted focus:outline-none"
                placeholder="Type a command or search..."
              />
            </div>
            <div className="max-h-[300px] overflow-y-auto p-2">
              <div className="px-2 py-1.5 text-xs font-semibold text-muted uppercase tracking-wider">
                Suggestions (Mock)
              </div>
              <div className="flex flex-col gap-1 mt-1">
                <button
                  type="button"
                  className="w-full rounded-md px-3 py-2 text-left text-sm text-text-bright hover:bg-muted/10 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span>Go to Dashboard</span>
                </button>
                <button
                  type="button"
                  className="w-full rounded-md px-3 py-2 text-left text-sm text-text-bright hover:bg-muted/10 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span>Create new Issue</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
