import * as React from 'react';
import { GlobalNav } from './GlobalNav';
import { Breadcrumbs } from './Breadcrumbs';

export function WorkspaceShell({ 
  children, 
  userRoles = ['contributor'], 
  currentRole = 'contributor' 
}: { 
  children: React.ReactNode, 
  userRoles?: string[], 
  currentRole?: string 
}) {
  return (
    <div className="flex min-h-screen flex-col bg-canvas text-ink">
      <GlobalNav userRoles={userRoles} currentRole={currentRole} />
      
      <main className="flex-1">
        <div className="shell py-6">
          <div className="mb-6">
            <Breadcrumbs />
          </div>
          {children}
        </div>
      </main>
      
      <footer className="border-t border-line py-8">
        <div className="shell text-sm text-ink-soft flex items-center justify-between">
          <p>© {new Date().getFullYear()} Elixpo Open Source.</p>
        </div>
      </footer>
    </div>
  );
}
