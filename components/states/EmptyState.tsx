import * as React from 'react';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/icons';

export function EmptyState({ 
  icon, 
  title, 
  description, 
  action 
}: { 
  icon?: React.ReactNode, 
  title: string, 
  description?: string, 
  action?: React.ReactNode 
}) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-panel p-8 text-center">
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-line text-ink-soft">
          {icon}
        </div>
      )}
      <h3 className="mb-2 text-lg font-semibold text-ink">{title}</h3>
      {description && <p className="mb-6 max-w-sm text-sm text-ink-soft">{description}</p>}
      {action && <div>{action}</div>}
    </div>
  );
}
