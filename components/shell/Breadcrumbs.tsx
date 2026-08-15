'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-sm text-ink-soft">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="hover:text-ink transition-colors">Home</Link>
        </li>
        {segments.map((segment: string, index: number) => {
          const isLast = index === segments.length - 1;
          const href = `/${segments.slice(0, index + 1).join('/')}`;
          
          return (
            <React.Fragment key={href}>
              <li className="text-line mx-1">/</li>
              <li>
                {isLast ? (
                  <span className="font-medium text-ink" aria-current="page">{segment}</span>
                ) : (
                  <Link href={href} className="hover:text-ink transition-colors">{segment}</Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
