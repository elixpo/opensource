'use client';

import { Icon } from '@/components/icons';
import { Button } from '@/components/ui/Button';

const LockIcon = () => (
  <Icon size={24}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </Icon>
);

export function PermissionDenied({ message = "You don't have permission to access this resource." }: { message?: string }) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-muted/20 bg-card p-8 text-center shadow-card">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple/10 text-purple">
        <LockIcon />
      </div>
      <h3 className="mb-2 text-xl font-bold text-text-bright">Access Denied</h3>
      <p className="mb-6 max-w-md text-sm text-muted">{message}</p>
      <Button variant="secondary" onClick={() => window.history.back()}>
        Go back
      </Button>
    </div>
  );
}
