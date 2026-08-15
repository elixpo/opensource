import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-full font-bold no-underline transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
          {
            'bg-text-bright text-bg hover:-translate-y-0.5 hover:bg-[#1a1a24] active:translate-y-0': variant === 'primary',
            'border border-muted/20 bg-card hover:-translate-y-0.5 hover:border-muted/40 hover:bg-[#ffe3b0] active:translate-y-0 text-text-bright': variant === 'secondary',
            'hover:bg-muted/10 text-text-bright active:bg-muted/20': variant === 'ghost',
            'px-3 py-1.5 text-xs': size === 'sm',
            'px-5 py-3 text-sm': size === 'md',
            'px-6 py-4 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
