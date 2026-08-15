'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-sm text-muted">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="hover:text-text-bright transition-colors">Home</Link>
        </li>
        {segments.map((segment: string, index: number) => {
          const isLast = index === segments.length - 1;
          const href = `/${segments.slice(0, index + 1).join('/')}`;
          
          return (
            <React.Fragment key={href}>
              <li className="text-muted/50 mx-1">/</li>
              <li>
                {isLast ? (
                  <span className="font-medium text-text-bright" aria-current="page">{segment}</span>
                ) : (
                  <Link href={href} className="hover:text-text-bright transition-colors">{segment}</Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
