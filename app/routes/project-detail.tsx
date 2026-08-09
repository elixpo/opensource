import React, { useState } from 'react';
import { Link, useParams, useLoaderData } from 'react-router';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import styles from './project-detail.module.css';
import { getProjectById, getIssues } from '../db/data.server';
import type { Route } from './+types/project-detail';

export async function loader({ params }: Route.LoaderArgs) {
  const project = getProjectById(params.projectId);
  if (!project) throw new Response('Not Found', { status: 404 });
  const issues = getIssues({ projectId: params.projectId });
  return { project, issues };
}

export default function ProjectDetail() {
  const { project, issues } = useLoaderData<typeof loader>();
  const [activeTab, setActiveTab] = useState('issues');

  return (
    <div className="container section">
      <div className={styles.header}>
        <div className="flex justify-between items-start mb-4">
          <h1 className={styles.title}>{project.name}</h1>
          <Button variant="primary">Star on GitHub</Button>
        </div>
        <p className={styles.desc}>{project.description}</p>
        <div className={styles.meta}>
          <Badge label="Lang" value={project.language} accent="edge" />
          <Badge label="Stars" value={project.stars.toLocaleString()} accent="flag" />
          <Badge label="Forks" value={String(project.forks)} accent="neutral" />
          <Badge label="License" value={project.license} accent="neutral" />
        </div>
      </div>

      <div className={styles.layout}>
        <div className={styles.main}>
          <div className={styles.tabs}>
            <button className={`${styles.tab} ${activeTab === 'issues' ? styles.active : ''}`} onClick={() => setActiveTab('issues')}>Issues ({issues.length})</button>
            <button className={`${styles.tab} ${activeTab === 'readme' ? styles.active : ''}`} onClick={() => setActiveTab('readme')}>README</button>
            <button className={`${styles.tab} ${activeTab === 'contributors' ? styles.active : ''}`} onClick={() => setActiveTab('contributors')}>Contributors</button>
          </div>

          {activeTab === 'issues' && (
            <div className={styles.issueList}>
              {issues.map(issue => (
                <div key={issue.id} className={styles.issueItem}>
                  <div>
                    <Link to={`/issues/${issue.id}`} className={styles.issueTitle}>
                      {issue.title}
                    </Link>
                    <div className={styles.issueMeta}>
                      <span>#{issue.id}</span>
                      <span className="text-flag">{issue.points} pts</span>
                    </div>
                  </div>
                  <div>
                    <Badge
                      label="Diff"
                      value={issue.difficulty}
                      accent={issue.difficulty === 'Good First Issue' ? 'solo' : issue.difficulty === 'Advanced' ? 'ops' : 'edge'}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'readme' && (
            <div className="p-6 bg-panel rounded-md border border-subtle">
              <h2 className="text-2xl font-bold mb-4">Readme</h2>
              <p className="text-secondary mb-4">This is a mock representation of the rendered README.md file.</p>
              <pre className="text-sm"><code>npm install @elixpo/{project.id}</code></pre>
            </div>
          )}
        </div>

        <aside className={styles.sidebar}>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Maintainers & Mentors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={styles.mentorItem}>
                <div className={styles.mentorAvatar}>K</div>
                <div>
                  <div className="font-medium text-sm">karan_dev</div>
                  <div className="text-xs text-muted">Core Maintainer</div>
                </div>
              </div>
              <div className={styles.mentorItem}>
                <div className={styles.mentorAvatar}>D</div>
                <div>
                  <div className="font-medium text-sm">divyanshu_coder</div>
                  <div className="text-xs text-muted">Mentor</div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="w-full mt-2">View All</Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
