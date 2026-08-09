import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';

const BADGES = [
  { id: 1, name: 'First PR', desc: 'Got your first pull request merged.', icon: 'M5 12l5 5l10 -10', accent: 'solo' },
  { id: 2, name: 'Bug Hunter', desc: 'Resolved 10 issues labeled as bugs.', icon: 'M12 2L2 22h20L12 2z', accent: 'ops' },
  { id: 3, name: 'Mentor', desc: 'Successfully mentored a novice contributor.', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z', accent: 'flag' },
  { id: 4, name: 'Data Wizard', desc: 'Contributed to elixpo/search caching layer.', icon: 'M4 4h16v16H4z', accent: 'data' },
];

export default function Badges() {
  return (
    <div className="container section">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Badges & Levels</h1>
        <p className="text-xl text-secondary max-w-2xl mx-auto">
          Earn badges by contributing, helping others, and participating in events. Level up to unlock new perks.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Level Progression</h2>
        <div className="bg-panel border border-subtle rounded-xl p-8">
          <div className="flex justify-between mb-2">
            <span className="font-bold">Core Maintainer</span>
            <span className="text-secondary">Level 4</span>
          </div>
          <div className="w-full bg-base h-4 rounded-full overflow-hidden mb-2 border border-subtle">
            <div className="bg-flag h-full w-[75%] rounded-full shadow-[var(--shadow-glow-flag)]"></div>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-secondary">1,450 pts</span>
            <span className="text-secondary">2,000 pts to next rank</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {['Novice (0+ pts)', 'Contributor (500+ pts)', 'Core Maintainer (1k+ pts)', 'Admin Track (5k+ pts)'].map((level, i) => (
              <div key={level} className={`p-4 rounded-md border ${i < 3 ? 'border-flag bg-flag-bg' : 'border-subtle bg-base'}`}>
                <div className={`font-bold ${i < 3 ? 'text-flag' : 'text-secondary'}`}>Level {i + 1}</div>
                <div className="text-sm text-primary mt-1">{level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Badge Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {BADGES.map(badge => (
            <Card key={badge.id} hoverable className="text-center">
              <CardContent className="pt-6">
                <div className={`w-20 h-20 mx-auto rounded-full bg-${badge.accent}-bg border-2 border-${badge.accent} flex items-center justify-center mb-4 shadow-[var(--shadow-glow-${badge.accent})]`}>
                  <svg className={`w-10 h-10 text-${badge.accent}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={badge.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">{badge.name}</h3>
                <p className="text-sm text-secondary">{badge.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
