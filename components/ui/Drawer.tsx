'use client';

import * as React from 'react';

export function Drawer({ open, onOpenChange, children }: { open: boolean, onOpenChange: (open: boolean) => void, children: React.ReactNode }) {
  const drawerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onOpenChange(false);
      }

      // Basic focus trap
      if (e.key === 'Tab' && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    };

    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Focus the drawer itself or its first focusable element when opened
      setTimeout(() => {
        if (drawerRef.current) {
           const firstElement = drawerRef.current.querySelector(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
          ) as HTMLElement;
           if (firstElement) {
             firstElement.focus();
           } else {
             drawerRef.current.focus();
           }
        }
      }, 0);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="fixed inset-0 bg-text-bright/60 backdrop-blur-sm transition-opacity" onClick={() => onOpenChange(false)} />
      <div
        ref={drawerRef}
        tabIndex={-1}
        className="relative z-50 h-full w-full max-w-sm border-l border-muted/20 bg-card p-6 shadow-2xl transition-transform sm:max-w-md outline-none"
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>
  );
}
