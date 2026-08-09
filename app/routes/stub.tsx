import React from 'react';
import { useLocation, Link } from 'react-router';
import { Button } from '../components/ui/Button';

export default function Stub() {
  const location = useLocation();
  const pageName = location.pathname.substring(1).replace(/-/g, ' ').replace(/\//g, ' > ');
  
  return (
    <div className="container section flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="w-16 h-16 rounded-full bg-panel-alt flex items-center justify-center text-edge mb-6">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      </div>
      <h1 className="text-3xl font-bold mb-4 capitalize">{pageName || 'Page'}</h1>
      <p className="text-secondary max-w-md mb-8">
        This section of the Elixpo Opensource platform is currently under development. Check back later for updates.
      </p>
      <Link to="/">
        <Button variant="primary">Return Home</Button>
      </Link>
    </div>
  );
}
