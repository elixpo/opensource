'use client';

import { ErrorState } from '@/components/states/ErrorState';
import { EmptyState } from '@/components/states/EmptyState';
import { LoadingState, Skeleton } from '@/components/states/LoadingState';
import { OfflineState } from '@/components/states/OfflineState';
import { PermissionDenied } from '@/components/states/PermissionDenied';

export default function DesignSystemStates() {
  return (
    <div className="shell py-12 space-y-16">
      <div>
        <h1 className="text-3xl font-extrabold mb-4">State Components</h1>
        <p className="text-muted mb-8 max-w-2xl">
          A showcase of all the shared state components used throughout the application. 
          These cover loading, errors, empty data, offline, and permission denied scenarios.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded bg-primary text-xs font-black text-bg">1</span>
          Loading States
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-muted uppercase tracking-wider">Spinner</h3>
            <div className="rounded-xl border border-muted/20 bg-card p-4">
              <LoadingState text="Loading data..." />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-muted uppercase tracking-wider">Skeleton</h3>
            <div className="rounded-xl border border-muted/20 bg-card p-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
                <Skeleton className="h-[200px] w-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded bg-primary text-xs font-black text-bg">2</span>
          Error & Offline
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-muted uppercase tracking-wider">General Error</h3>
            <ErrorState 
              title="Failed to load dashboard" 
              message="The server responded with a 500 status code. Our team has been notified."
              onRetry={() => console.log('retrying...')}
            />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-muted uppercase tracking-wider">Offline</h3>
            <OfflineState 
              onRetry={() => console.log('retrying...')}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded bg-primary text-xs font-black text-bg">3</span>
          Empty & Permission
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-muted uppercase tracking-wider">Empty Data</h3>
            <EmptyState 
              title="No issues found" 
              description="There are currently no open issues in this workspace that match your filters."
              action={<button className="button-primary mt-4">Create Issue</button>}
            />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-muted uppercase tracking-wider">Permission Denied</h3>
            <PermissionDenied 
              message="You need Admin privileges to view the settings for this workspace."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
