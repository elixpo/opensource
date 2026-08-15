'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export function Drawer({ open, onOpenChange, children }: { open: boolean, onOpenChange: (open: boolean) => void, children: React.ReactNode }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => onOpenChange(false)} />
      <div className="relative z-50 h-full w-full max-w-sm border-l border-line bg-panel p-6 shadow-2xl transition-transform sm:max-w-md" role="dialog" aria-modal="true">
        {children}
      </div>
    </div>
  );
}
