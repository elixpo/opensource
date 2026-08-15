import * as React from 'react';
import { cn } from '@/lib/utils';

export function LoadingState({ text = 'Loading...' }: { text?: string }) {
  return (
    <div className="flex min-h-[300px] w-full flex-col items-center justify-center space-y-4">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-line border-t-accent" />
      {text && <p className="text-sm font-medium text-ink-soft">{text}</p>}
    </div>
  );
}

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-line", className)}
      {...props}
    />
  );
}
