'use client';

import * as React from 'react';
import { Icon } from '@/components/icons';
import { Button } from '@/components/ui/Button';

// Wifi Off Icon for offline state
const WifiOff = () => (
  <Icon size={24}>
    <line x1="2" y1="2" x2="22" y2="22" />
    <path d="M8.5 16.5a5 5 0 0 1 7 0" />
    <path d="M2 8.82a15 15 0 0 1 4.17-2.65" />
    <path d="M10.66 5c4.01-.36 8.14.9 11.34 3.82" />
  </Icon>
);

export function OfflineState({ 
  title = "You're offline", 
  message = "Please check your internet connection and try again.", 
  onRetry 
}: { 
  title?: string, 
  message?: string, 
  onRetry?: () => void 
}) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-muted/20 bg-card p-8 text-center shadow-card">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange/10 text-orange">
        <WifiOff />
      </div>
      <h3 className="mb-2 text-xl font-bold text-text-bright">{title}</h3>
      <p className="mb-6 max-w-md text-sm text-muted">{message}</p>
      {onRetry && (
        <Button onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}
