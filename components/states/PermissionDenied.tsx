import * as React from 'react';
import { cn } from '@/lib/utils';
import { Shield } from '@/components/icons';
import { Button } from '@/components/ui/Button';

export function PermissionDenied({ message = "You do not have permission to access this page." }: { message?: string }) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-line bg-panel p-8 text-center shadow-card">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
        <Shield />
      </div>
      <h3 className="mb-2 text-xl font-bold text-ink">Access Denied</h3>
      <p className="mb-6 max-w-md text-sm text-ink-soft">{message}</p>
      <Button variant="secondary" onClick={() => window.history.back()}>
        Go back
      </Button>
    </div>
  );
}
