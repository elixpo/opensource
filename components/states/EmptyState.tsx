import type * as React from 'react';

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
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-muted/20 bg-card p-8 text-center">
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted/10 text-muted">
          {icon}
        </div>
      )}
      <h3 className="mb-2 text-lg font-semibold text-text-bright">{title}</h3>
      {description && <p className="mb-6 max-w-sm text-sm text-muted">{description}</p>}
      {action && <div>{action}</div>}
    </div>
  );
}
