import React from 'react';
import { useLoaderData } from 'react-router';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { getUserByUsername } from '../db/data.server';
import type { Route } from './+types/profile';
import { Link } from 'react-router';

export async function loader({ params }: Route.LoaderArgs) {
  const user = getUserByUsername(params.username);
  if (!user) throw new Response('Not Found', { status: 404 });
  return { user };
}

const MOCK_SKILLS = [
  { name: 'TypeScript', endorsements: 12 },
  { name: 'React', endorsements: 9 },
  { name: 'GraphQL', endorsements: 4 },
  { name: 'Node.js', endorsements: 3 },
];

export default function Profile() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <div className="container section max-w-5xl">
      {/* Profile Header */}
      <div className="bg-panel border border-subtle rounded-xl p-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <div className="w-64 h-64 bg-flag rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-32 h-32 rounded-full bg-panel-alt border-4 border-edge flex items-center justify-center font-bold text-5xl flex-shrink-0">
            {user.username.charAt(0).toUpperCase()}
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
              <h1 className="text-3xl font-bold">{user.username}</h1>
              <Badge label="Level" value={user.level} accent="flag" />
            </div>

            <p className="text-secondary mb-4 max-w-2xl">
              Full-stack developer passionate about open-source tooling. Contributing to Elixpo since 2024. Building better DX one PR at a time.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
              {MOCK_SKILLS.map(skill => (
                <div key={skill.name} className="bg-base border border-subtle px-3 py-1 rounded-md text-sm flex items-center gap-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-xs text-edge bg-edge-bg px-1.5 py-0.5 rounded-sm font-bold">{skill.endorsements}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center md:justify-start gap-3">
              <Button variant="primary">Endorse Skills</Button>
              <Link to={`/heatmap/${user.username}`}>
                <Button variant="secondary">View Heatmap</Button>
              </Link>
            </div>
          </div>

          <div className="flex-shrink-0 flex gap-4 text-center">
            <div className="bg-base border border-subtle rounded-lg p-4 w-24">
              <div className="text-2xl font-bold text-flag font-mono mb-1">{user.points.toLocaleString()}</div>
              <div className="text-xs text-secondary uppercase">Points</div>
            </div>
            <div className="bg-base border border-subtle rounded-lg p-4 w-24">
              <div className="text-2xl font-bold text-data font-mono mb-1">{user.prs}</div>
              <div className="text-xs text-secondary uppercase">PRs</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 flex flex-col gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex gap-4 p-3 hover:bg-panel-alt rounded-md transition-colors border border-transparent hover:border-subtle">
                    <div className="mt-1">
                      <svg className="w-5 h-5 text-solo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 9v12"/><path d="M21 9V6a2 2 0 0 0-2-2h-4.5"/><path d="m18 12 3-3-3-3"/></svg>
                    </div>
                    <div>
                      <div className="font-medium">Merged pull request elixpo/lixeditor#45</div>
                      <div className="text-sm text-secondary">Added syntax highlighting for GraphQL blocks.</div>
                      <div className="text-xs text-muted mt-1">2 days ago &middot; +50 pts</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Badges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: user.badges }, (_, i) => (
                  <div key={i} className="aspect-square bg-base border border-subtle rounded-md flex items-center justify-center relative group cursor-pointer hover:border-edge transition-colors">
                    <svg className="w-8 h-8 text-secondary group-hover:text-edge" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15l-3 3-3-3 3-3 3 3z"/><path d="M12 9l3-3 3 3-3 3-3-3z"/></svg>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link to="/badges" className="text-sm text-edge hover:underline">View All Badges</Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
