import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { getLeaderboard } from '../db/data.server';

export async function loader() {
  const leaderboard = getLeaderboard();
  return { leaderboard };
}

export default function Leaderboard() {
  const { leaderboard } = useLoaderData<typeof loader>();
  const [activeTab, setActiveTab] = useState('overall');

  return (
    <div className="container section">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Leaderboard</h1>
        <p className="text-xl text-secondary">The top open-source contributors in the Elixpo ecosystem.</p>
      </div>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <Button variant={activeTab === 'overall' ? 'primary' : 'secondary'} onClick={() => setActiveTab('overall')}>Overall</Button>
        <Button variant={activeTab === 'weekly' ? 'primary' : 'secondary'} onClick={() => setActiveTab('weekly')}>Weekly</Button>
        <Button variant={activeTab === 'project' ? 'primary' : 'secondary'} onClick={() => setActiveTab('project')}>By Project</Button>
        <Button variant={activeTab === 'region' ? 'primary' : 'secondary'} onClick={() => setActiveTab('region')}>By Region</Button>
      </div>

      {/* Podium */}
      <div className="flex justify-center items-end gap-2 md:gap-6 mb-12 h-48">
        {[leaderboard[1], leaderboard[0], leaderboard[2]].map((user, i) => {
          const isFirst = i === 1;
          const height = isFirst ? 'h-full' : i === 0 ? 'h-3/4' : 'h-1/2';
          const bg = isFirst ? 'bg-[var(--accent-flag-bg)] border-[var(--accent-flag)]' : 'bg-panel border-subtle';

          return (
            <div key={user.username} className="flex flex-col items-center w-24 md:w-32">
              <div className="mb-2 text-center">
                <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center font-bold text-lg mb-1 ${isFirst ? 'bg-[var(--accent-flag)] text-black' : 'bg-panel-alt'}`}>
                  {user.username.charAt(0).toUpperCase()}
                </div>
                <div className="font-semibold text-sm truncate w-full">{user.username}</div>
                <div className="text-xs text-flag font-mono">{user.points.toLocaleString()}</div>
              </div>
              <div className={`w-full ${height} ${bg} border-t-2 rounded-t-md flex justify-center pt-2`}>
                <span className={`font-bold ${isFirst ? 'text-flag' : 'text-secondary'}`}>#{leaderboard.indexOf(user) + 1}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-subtle text-sm text-secondary uppercase tracking-wide">
                <th className="p-4 font-semibold w-16 text-center">Rank</th>
                <th className="p-4 font-semibold">Contributor</th>
                <th className="p-4 font-semibold">Level</th>
                <th className="p-4 font-semibold text-center">Merged PRs</th>
                <th className="p-4 font-semibold text-right">Total Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((user, i) => (
                <tr key={user.username} className="border-b border-subtle last:border-0 hover:bg-panel-alt transition-colors">
                  <td className="p-4 text-center font-mono text-muted">{i + 1}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-border-subtle flex items-center justify-center font-bold text-xs">
                        {user.username.charAt(0).toUpperCase()}
                      </div>
                      <span className="font-medium text-primary">{user.username}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <Badge label="Role" value={user.level} accent={user.level === 'Maintainer' ? 'flag' : 'neutral'} />
                  </td>
                  <td className="p-4 text-center font-mono">{user.prs}</td>
                  <td className="p-4 text-right font-mono text-flag font-semibold">{user.points.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="flex justify-center mt-8">
        <Button variant="secondary">Load More</Button>
      </div>
    </div>
  );
}
