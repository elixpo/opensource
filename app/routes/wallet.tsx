import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { getContributions } from '../db/data.server';
import { requireUser } from '../auth.server';
import type { Route } from './+types/wallet';

export async function loader({ request }: Route.LoaderArgs) {
  const user = requireUser(request);
  const contributions = getContributions(user.id);
  return { user, contributions };
}

export default function Wallet() {
  const { user, contributions } = useLoaderData<typeof loader>();
  const [filter, setFilter] = useState('all');

  const totalPoints = contributions.reduce((sum, c) => sum + c.points, 0);

  return (
    <div className="container section">
      {/* Portfolio Header */}
      <div className="bg-panel border border-subtle rounded-xl p-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
          <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="var(--accent-flag)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
            <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
            <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Contribution Wallet</h1>
              <p className="text-secondary text-lg">Verifiable proof-of-work and skill portfolio.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary">Export Portfolio</Button>
              <Button variant="primary">Share Link</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-base border border-subtle p-6 rounded-lg">
              <div className="text-sm text-secondary uppercase tracking-wide mb-1">Total Points</div>
              <div className="text-4xl font-bold text-flag font-mono">{totalPoints.toLocaleString()}</div>
            </div>
            <div className="bg-base border border-subtle p-6 rounded-lg">
              <div className="text-sm text-secondary uppercase tracking-wide mb-1">Current Level</div>
              <div className="text-4xl font-bold text-edge">{user.level}</div>
            </div>
            <div className="bg-base border border-subtle p-6 rounded-lg">
              <div className="text-sm text-secondary uppercase tracking-wide mb-1">Contributions</div>
              <div className="text-4xl font-bold text-data font-mono">{contributions.length}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Entry List */}
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 flex-shrink-0">
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">Filter Activity</h3>
          <div className="flex flex-col gap-2">
            {['all', 'pr', 'review', 'mentorship', 'event'].map(f => (
              <label key={f} className="flex items-center gap-2 text-sm text-secondary hover:text-primary cursor-pointer">
                <input type="radio" name="filter" checked={filter === f} onChange={() => setFilter(f)} />
                {f === 'all' ? 'All Activities' : f === 'pr' ? 'Merged PRs' : f === 'review' ? 'Code Reviews' : f === 'mentorship' ? 'Mentorship' : 'Events'}
              </label>
            ))}
          </div>
        </aside>

        <main className="flex-1">
          <div className="flex flex-col gap-4">
            {contributions.filter(e => filter === 'all' || e.type === filter).map(entry => (
              <Card key={entry.id}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge
                        label="Type"
                        value={entry.type}
                        accent={
                          entry.type === 'pr' ? 'edge' :
                          entry.type === 'review' ? 'data' :
                          entry.type === 'mentorship' ? 'flag' : 'neutral'
                        }
                      />
                      {entry.verified && (
                        <span className="text-solo text-xs font-semibold flex items-center gap-1">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg>
                          Verified
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-primary">{entry.action}</h3>
                    <div className="text-sm text-secondary">{entry.project} &middot; {entry.date}</div>
                  </div>
                  <div className="text-xl font-bold font-mono text-flag">
                    +{entry.points} pts
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
