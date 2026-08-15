'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/icons';

// Basic Check Icon for success toasts
const CheckCircle = () => (
  <Icon size={20}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </Icon>
);

// Basic Alert Circle Icon for error toasts
const AlertCircle = () => (
  <Icon size={20}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </Icon>
);

// Info Icon for info toasts
const InfoCircle = () => (
  <Icon size={20}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </Icon>
);

export type ToastType = 'success' | 'error' | 'info';

export interface ToastData {
  id: string;
  title: string;
  description?: string;
  type?: ToastType;
}

interface ToastContextType {
  toasts: ToastData[];
  toast: (data: Omit<ToastData, 'id'>) => void;
  dismiss: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastData[]>([]);

  const toast = React.useCallback((data: Omit<ToastData, 'id'>) => {
    const id = Math.random().toString(36).slice(2, 9);
    setToasts((prev) => [...prev, { ...data, id }]);
    
    // Auto-dismiss after 5s
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  }, []);

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      {children}
      <ToastContainer toasts={toasts} dismiss={dismiss} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

function ToastContainer({ toasts, dismiss }: { toasts: ToastData[], dismiss: (id: string) => void }) {
  return (
    <div 
      aria-live="polite" 
      className="fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onDismiss={() => dismiss(toast.id)} />
      ))}
    </div>
  );
}

function Toast({ toast, onDismiss }: { toast: ToastData, onDismiss: () => void }) {
  const isError = toast.type === 'error';
  const isSuccess = toast.type === 'success';

  return (
    <div 
      className={cn(
        "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all",
        "mt-4 sm:mt-0 sm:mb-4 data-[state=open]:sm:slide-in-from-bottom-full data-[state=open]:slide-in-from-bottom-full data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none",
        isError 
          ? "border-primary bg-primary text-bg" 
          : "border-muted/20 bg-card text-text-bright"
      )}
    >
      <div className="flex gap-3 w-full">
        <div className="mt-0.5 shrink-0">
          {isSuccess && <span className="text-green"><CheckCircle /></span>}
          {isError && <span className="text-bg"><AlertCircle /></span>}
          {!isError && !isSuccess && <span className="text-teal"><InfoCircle /></span>}
        </div>
        <div className="grid gap-1 flex-1">
          {toast.title && <div className="text-sm font-semibold">{toast.title}</div>}
          {toast.description && (
            <div className={cn("text-sm opacity-90", isError ? "text-bg" : "text-text-bright")}>
              {toast.description}
            </div>
          )}
        </div>
      </div>
      <button
        onClick={onDismiss}
        className={cn(
          "absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 group-hover:opacity-100",
          isError ? "text-bg hover:text-bg/80 focus:ring-bg focus-visible:outline-none focus-visible:ring-2" : "text-text-bright/50 hover:text-text-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        )}
      >
        <Icon size={16}>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </Icon>
        <span className="sr-only">Close</span>
      </button>
    </div>
  );
}
