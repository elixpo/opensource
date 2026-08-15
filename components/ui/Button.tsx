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
          'inline-flex items-center justify-center gap-2 rounded-full font-bold no-underline transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-ink text-canvas hover:-translate-y-0.5 hover:bg-[#e0dcd7]': variant === 'primary',
            'border border-line bg-panel hover:-translate-y-0.5 hover:border-[#444] hover:bg-[#1a1a1a]': variant === 'secondary',
            'hover:bg-line text-ink': variant === 'ghost',
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
