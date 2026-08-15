import * as React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { publicEnv } from '@/lib/env';
import { RoleSwitcher } from './RoleSwitcher';
import { CommandSearch } from './CommandSearch';

export function GlobalNav({ userRoles = ['contributor'], currentRole = 'contributor' }: { userRoles?: string[], currentRole?: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur-xl">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <Logo />
          </Link>
          
          <div className="hidden md:flex items-center gap-2">
            <div className="h-4 w-px bg-line mx-2" />
            <RoleSwitcher roles={userRoles} currentRole={currentRole} />
          </div>
        </div>

        <div className="flex-1 flex justify-center max-w-md hidden md:flex">
          <CommandSearch />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a href={`${publicEnv.accountsUrl}/profile`} className="flex h-8 w-8 items-center justify-center rounded-full bg-line text-sm font-bold text-ink hover:bg-ink-soft hover:text-canvas transition-colors">
              U
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
