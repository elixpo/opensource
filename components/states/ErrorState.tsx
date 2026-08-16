'use client';

import { Icon } from '@/components/icons';
import { Button } from '@/components/ui/Button';

// Basic Alert Circle Icon for error state
const AlertCircle = () => (
  <Icon size={24}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </Icon>
);

export function ErrorState({
  title = 'Something went wrong',
  message = 'There was an error loading this data. Please try again.',
  onRetry,
}: {
  title?: string;
  message?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-muted/20 bg-card p-8 text-center shadow-card">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <AlertCircle />
      </div>
      <h3 className="mb-2 text-xl font-bold text-text-bright">{title}</h3>
      <p className="mb-6 max-w-md text-sm text-muted">{message}</p>
      {onRetry && <Button onClick={onRetry}>Try again</Button>}
    </div>
  );
}
