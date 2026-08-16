import type * as React from 'react';
import { cn } from '@/lib/utils';

export function LoadingState({ text = 'Loading...' }: { text?: string }) {
  return (
    <div className="flex min-h-[300px] w-full flex-col items-center justify-center space-y-4">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted/20 border-t-primary" />
      {text && <p className="text-sm font-medium text-muted">{text}</p>}
    </div>
  );
}

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted/20', className)}
      {...props}
    />
  );
}
