import * as React from 'react';
import { cn } from '@/lib/utils';
import { Arrow, Icon } from '@/components/icons';

// Basic Alert Circle Icon for error state
const AlertCircle = () => (
  <Icon size={24}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </Icon>
);

export function ErrorState({ title = "Something went wrong", message = "There was an error loading this data. Please try again.", onRetry }: { title?: string, message?: string, onRetry?: () => void }) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-line bg-panel p-8 text-center shadow-card">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red/10 text-red">
        <AlertCircle />
      </div>
      <h3 className="mb-2 text-xl font-bold text-ink">{title}</h3>
      <p className="mb-6 max-w-md text-sm text-ink-soft">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-canvas transition-transform hover:-translate-y-0.5 hover:bg-[#e0dcd7]"
        >
          Try again
        </button>
      )}
    </div>
  );
}
