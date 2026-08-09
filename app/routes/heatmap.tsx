import React from 'react';
import { useParams } from 'react-router';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

// Mock heatmap data: 52 weeks * 7 days
const MOCK_HEATMAP = Array.from({ length: 52 }, () => 
  Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
);

export default function Heatmap() {
  const { username } = useParams();

  const getColor = (level: number) => {
    switch(level) {
      case 0: return 'var(--bg-panel-alt)';
      case 1: return 'rgba(0, 180, 165, 0.2)';
      case 2: return 'rgba(0, 180, 165, 0.5)';
      case 3: return 'rgba(0, 180, 165, 0.8)';
      case 4: return 'var(--accent-data)';
      default: return 'var(--bg-panel-alt)';
    }
  };

  return (
    <div className="container section max-w-5xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-border-subtle flex items-center justify-center font-bold text-2xl">
            {username?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div>
            <h1 className="text-3xl font-bold">{username}'s Activity</h1>
            <p className="text-secondary">Core Maintainer &middot; Joined 2024</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">Compare</Button>
          <Button variant="primary">Share</Button>
        </div>
      </div>

      <Card className="mb-8 overflow-hidden">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Contribution Heatmap</CardTitle>
            <div className="text-sm font-medium text-data flex items-center gap-2">
              <svg className="w-4 h-4 text-edge" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
              12 Day Streak!
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto pb-4">
            <div className="inline-flex gap-1">
              {MOCK_HEATMAP.map((week, wIndex) => (
                <div key={wIndex} className="flex flex-col gap-1">
                  {week.map((day, dIndex) => (
                    <div 
                      key={`${wIndex}-${dIndex}`}
                      className="w-3 h-3 rounded-sm"
                      style={{ backgroundColor: getColor(day) }}
                      title={`${day} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 text-xs text-muted">
            <div>Learn how we count contributions</div>
            <div className="flex items-center gap-2">
              <span>Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map(level => (
                  <div key={level} className="w-3 h-3 rounded-sm" style={{ backgroundColor: getColor(level) }} />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-sm text-secondary uppercase tracking-wide mb-1">Total Contributions</div>
            <div className="text-3xl font-bold font-mono text-primary">842</div>
            <div className="text-xs text-muted mt-2">In the last year</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-sm text-secondary uppercase tracking-wide mb-1">Best Streak</div>
            <div className="text-3xl font-bold font-mono text-edge">24 Days</div>
            <div className="text-xs text-muted mt-2">Oct 12 - Nov 05, 2025</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-sm text-secondary uppercase tracking-wide mb-1">Activity Breakdown</div>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex justify-between text-sm"><span>PRs</span> <span className="font-mono">60%</span></div>
              <div className="w-full bg-panel-alt h-1.5 rounded-full overflow-hidden"><div className="bg-edge h-full w-[60%]"></div></div>
              
              <div className="flex justify-between text-sm mt-1"><span>Reviews</span> <span className="font-mono">30%</span></div>
              <div className="w-full bg-panel-alt h-1.5 rounded-full overflow-hidden"><div className="bg-data h-full w-[30%]"></div></div>
              
              <div className="flex justify-between text-sm mt-1"><span>Issues</span> <span className="font-mono">10%</span></div>
              <div className="w-full bg-panel-alt h-1.5 rounded-full overflow-hidden"><div className="bg-flag h-full w-[10%]"></div></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
