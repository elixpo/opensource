import React, { useState } from 'react';
import { Form, useActionData, useNavigation } from 'react-router';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { matchIssues, matchMentors } from '../db/data.server';
import type { Route } from './+types/matchmaking';

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const skillsRaw = formData.get('skills') as string || '';
  const skills = skillsRaw.split(',').map(s => s.trim()).filter(Boolean);

  const issueMatches = matchIssues(skills);
  const mentorMatches = matchMentors(skills);

  return {
    results: [
      ...issueMatches.map(i => ({ id: i.id, type: 'issue' as const, title: i.title, subtitle: i.projectName, match: i.match, reason: i.reason })),
      ...mentorMatches.map(m => ({ id: m.id, type: 'mentor' as const, title: m.username, subtitle: m.level, match: m.match, reason: m.reason })),
    ].sort((a, b) => b.match - a.match).slice(0, 5),
  };
}

export default function Matchmaking() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className="container section max-w-4xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-panel border border-data text-data mb-4 shadow-[var(--shadow-glow-data)]">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
        </div>
        <h1 className="text-4xl font-bold mb-4">AI Matchmaking Engine</h1>
        <p className="text-xl text-secondary">We'll analyze your skill graph to find the perfect issue or mentor.</p>
      </div>

      <Card className="mb-12">
        <Form method="post" className="flex flex-col gap-6 p-2">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">Your Skills (Comma separated)</label>
            <Input name="skills" placeholder="e.g. React, TypeScript, Python, Node.js" defaultValue="React, TypeScript, GraphQL" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">Experience Level</label>
              <select name="experience" className="w-full bg-panel border border-subtle rounded-md p-3 text-primary focus:outline-none focus:border-edge">
                <option>Beginner (0-1 years)</option>
                <option defaultValue="true">Intermediate (1-3 years)</option>
                <option>Advanced (3+ years)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">What are you looking for?</label>
              <select name="goal" className="w-full bg-panel border border-subtle rounded-md p-3 text-primary focus:outline-none focus:border-edge">
                <option>Projects to contribute to</option>
                <option>Mentorship</option>
                <option defaultValue="true">Both</option>
              </select>
            </div>
          </div>

          <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="mt-4">
            {isSubmitting ? 'Analyzing Skill Graph...' : 'Find My Match'}
          </Button>
        </Form>
      </Card>

      {actionData?.results && (
        <div className="animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-6 border-b border-subtle pb-2">Your Top Matches</h2>
          <div className="flex flex-col gap-4">
            {actionData.results.map((result) => (
              <Card key={result.id} className="border-data">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge label="Type" value={result.type} accent={result.type === 'issue' ? 'edge' : 'flag'} />
                      <div className="text-sm text-data font-bold flex items-center gap-1">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        {result.match}% Match
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-1">{result.title}</h3>
                    <div className="text-sm text-secondary mb-3">{result.subtitle}</div>
                    <div className="bg-panel-alt p-3 rounded-md text-sm border border-subtle text-muted">
                      <strong>Why this match?</strong> {result.reason}
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button variant="secondary">
                      {result.type === 'issue' ? 'View Issue' : 'Request Mentor'}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
