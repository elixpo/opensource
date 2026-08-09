import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import styles from './projects.module.css';
import { getIssues } from '../db/data.server';

export async function loader() {
  const issues = getIssues();
  return { issues };
}

export default function Issues() {
  const { issues } = useLoaderData<typeof loader>();

  return (
    <div className="container section">
      <div className={styles.header}>
        <div>
          <h1 className="text-3xl font-bold mb-2">Issue Explorer</h1>
          <p className="text-secondary">Find the perfect task across all Elixpo projects.</p>
        </div>
      </div>

      <div className={styles.page}>
        <aside className={styles.sidebar}>
          <div className="mb-6">
            <Input placeholder="Search issues..." />
          </div>

          <div className={styles.filterGroup}>
            <div className={styles.filterTitle}>Repository</div>
            <div className={styles.filterList}>
              {['elixpo/lixeditor', 'elixpo/search', 'elixpo/sketch'].map(repo => (
                <label key={repo} className={styles.filterItem}>
                  <input type="checkbox" /> {repo}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <div className={styles.filterTitle}>Status</div>
            <div className={styles.filterList}>
              {['Open', 'Claimed', 'In Review', 'Merged'].map(status => (
                <label key={status} className={styles.filterItem}>
                  <input type="checkbox" /> {status}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <div className={styles.filterTitle}>Difficulty</div>
            <div className={styles.filterList}>
              {['Good First Issue', 'Intermediate', 'Advanced'].map(diff => (
                <label key={diff} className={styles.filterItem}>
                  <input type="checkbox" /> {diff}
                </label>
              ))}
            </div>
          </div>
        </aside>

        <main className={styles.content}>
          <div className="flex flex-col gap-4">
            {issues.map((issue) => (
              <div key={issue.id} className="bg-panel border border-subtle rounded-md p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-default transition-colors">
                <div>
                  <div className="text-xs text-muted mb-1 font-mono">{issue.projectName} #{issue.id}</div>
                  <Link to={`/issues/${issue.id}`} className="text-lg font-semibold text-primary hover:text-edge block mb-3">
                    {issue.title}
                  </Link>
                  <div className="flex gap-2 flex-wrap">
                    <Badge label="Status" value={issue.status} accent={issue.status === 'Open' ? 'solo' : 'neutral'} />
                    <Badge label="Diff" value={issue.difficulty} accent={issue.difficulty === 'Advanced' ? 'ops' : 'edge'} />
                  </div>
                </div>
                <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-2">
                  <div className="text-flag font-mono font-bold text-xl">{issue.points} pts</div>
                  <Link to={`/issues/${issue.id}`}>
                    <Button variant="secondary" size="sm">View Details</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
