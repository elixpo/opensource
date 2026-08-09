import React from 'react';
import { Link } from 'react-router';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { AuroraBackground } from '../components/react-bits/AuroraBackground';

export default function NotFound() {
  return (
    <AuroraBackground className="min-h-[80vh] flex flex-col items-center justify-center py-12 px-4" showRadialGradient={false}>
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h1 className="text-9xl font-bold font-mono text-edge mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page not found</h2>
        <p className="text-secondary mb-8">
          The open-source contribution you're looking for seems to have been moved or deleted.
        </p>
        
        <div className="flex justify-center gap-4 mb-12">
          <Link to="/">
            <Button variant="primary">Back to Home</Button>
          </Link>
          <Link to="/projects">
            <Button variant="secondary">Explore Projects</Button>
          </Link>
        </div>

        <div className="bg-panel p-6 rounded-xl border border-subtle">
          <h3 className="font-semibold mb-4">Search for what you need</h3>
          <div className="flex gap-2">
            <Input placeholder="Search issues, projects, users..." style={{ flex: 1 }} />
            <Button variant="secondary">Search</Button>
          </div>
          
          <div className="mt-6 text-sm text-secondary flex flex-wrap justify-center gap-x-4 gap-y-2">
            <span className="font-semibold">Popular Links:</span>
            <Link to="/leaderboard" className="hover:text-primary">Leaderboard</Link>
            <Link to="/badges" className="hover:text-primary">Badges Guide</Link>
            <Link to="/matchmaking" className="hover:text-primary">AI Matchmaking</Link>
            <Link to="/faq" className="hover:text-primary">FAQ</Link>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
