import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { requireUser } from '../auth.server';
import { getIssues, getContributions, getUsers } from '../db/data.server';
import type { Route } from './+types/dashboard';

export async function loader({ request }: Route.LoaderArgs) {
  const sessionUser = requireUser(request);
  const claimedIssues = getIssues().filter(i => i.status === 'Claimed');
  const allUsers = getUsers();
  const allContributions = getContributions();
  return { sessionUser, claimedIssues, allUsers, allContributions };
}

export default function Dashboard() {
  const { sessionUser, claimedIssues, allUsers, allContributions } = useLoaderData<typeof loader>();
  const [role, setRole] = useState<'contributor' | 'mentor' | 'org' | 'admin'>('contributor');

  return (
    <div className="container section">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-secondary">Welcome back, {sessionUser.username}. Here's what's happening.</p>
        </div>

        <div className="flex bg-panel p-1 rounded-md border border-subtle">
          {(['contributor', 'mentor', 'org', 'admin'] as const).map(r => (
            <button
              key={r}
              className={`px-3 py-1.5 text-sm rounded-sm capitalize ${role === r ? 'bg-base text-primary shadow-sm' : 'text-secondary hover:text-primary'}`}
              onClick={() => setRole(r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {role === 'contributor' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 flex flex-col gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Claimed Issues ({claimedIssues.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  {claimedIssues.map(issue => (
                    <div key={issue.id} className="p-3 border border-subtle rounded-md flex justify-between items-center bg-panel-alt">
                      <div>
                        <div className="font-semibold text-primary">{issue.title}</div>
                        <div className="text-sm text-secondary">{issue.projectName} #{issue.id}</div>
                      </div>
                      <Button variant="secondary" size="sm">Submit PR</Button>
                    </div>
                  ))}
                  {claimedIssues.length === 0 && (
                    <p className="text-secondary text-sm">No claimed issues yet. Visit the Issue Explorer to find tasks!</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>AI Recommended</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-secondary mb-3">Based on your recent merged PRs in TypeScript.</div>
                <div className="p-3 border border-edge rounded-md bg-edge-bg">
                  <div className="font-semibold text-edge mb-1">Implement WebSocket syncing</div>
                  <div className="text-xs mb-2">elixpo/sketch &middot; 150 pts</div>
                  <Button variant="ghost" size="sm" className="w-full text-edge border-edge hover:bg-edge hover:text-white">View Issue</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {role === 'mentor' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Assigned Contributors (3)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                {allUsers.filter(u => u.level === 'Novice').map(user => (
                  <div key={user.id} className="flex justify-between items-center p-2 border-b border-subtle last:border-0">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-panel-alt flex items-center justify-center text-xs font-bold">{user.username[0].toUpperCase()}</div>
                      <span className="font-medium text-sm">{user.username}</span>
                    </div>
                    <Button variant="ghost" size="sm">Message</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>PR Review Queue (1)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 border border-subtle rounded-md bg-panel-alt text-center">
                <div className="font-semibold mb-2">elixpo/search #88</div>
                <div className="text-sm text-secondary mb-4">"Added Redis caching layer" by bob_coder</div>
                <Button variant="primary">Review Now</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {role === 'org' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Organization Metrics (Elixpo Core)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-panel-alt rounded-md text-center">
                  <div className="text-3xl font-bold text-flag">{claimedIssues.length + 22}</div>
                  <div className="text-sm text-secondary">Active PRs</div>
                </div>
                <div className="p-4 bg-panel-alt rounded-md text-center">
                  <div className="text-3xl font-bold text-data">1.2 days</div>
                  <div className="text-sm text-secondary">Avg Time to Merge</div>
                </div>
                <div className="p-4 bg-panel-alt rounded-md text-center">
                  <div className="text-3xl font-bold text-edge">85%</div>
                  <div className="text-sm text-secondary">Contributor Retention</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {role === 'admin' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-ops">
            <CardHeader>
              <CardTitle className="text-ops flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                Moderation / Fraud Queue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-3 bg-ops-bg border border-ops rounded-md flex justify-between items-center mb-3">
                <div>
                  <div className="font-semibold text-ops text-sm">Suspicious duplicate PR detected</div>
                  <div className="text-xs opacity-80">User 'spam_bot' submitted identical code to merged PR #12</div>
                </div>
                <Button size="sm" className="bg-ops text-white border-none">Review</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Platform Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-subtle pb-2">
                  <span className="text-secondary">Total Users</span>
                  <span className="font-bold">{allUsers.length}</span>
                </div>
                <div className="flex justify-between items-center border-b border-subtle pb-2">
                  <span className="text-secondary">Total Contributions</span>
                  <span className="font-bold">{allContributions.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary">System Status</span>
                  <span className="text-solo font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-solo animate-pulse"></span> All Systems Operational
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
