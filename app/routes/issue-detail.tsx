import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import styles from './project-detail.module.css';
import { getIssueById } from '../db/data.server';
import type { Route } from './+types/issue-detail';

export async function loader({ params }: Route.LoaderArgs) {
  const issue = getIssueById(params.issueId);
  if (!issue) throw new Response('Not Found', { status: 404 });
  return { issue };
}

export default function IssueDetail() {
  const { issue } = useLoaderData<typeof loader>();

  return (
    <div className="container section">
      <div className={styles.header}>
        <div className="flex justify-between items-start mb-4">
          <h1 className={styles.title}>{issue.title} <span className="text-muted">#{issue.id}</span></h1>
          <div className="flex gap-2">
            <Button variant="secondary">Subscribe</Button>
            <Button variant="primary">Claim Issue</Button>
          </div>
        </div>
        <div className={styles.meta}>
          <Badge label="Repo" value={issue.projectName} accent="edge" />
          <Badge label="Status" value={issue.status} accent="solo" />
          <Badge label="Diff" value={issue.difficulty} accent="edge" />
          <Badge label="Points" value={String(issue.points)} accent="flag" />
        </div>
      </div>

      <div className={styles.layout}>
        <div className={styles.main}>
          {/* Issue Pipeline Status Tracker */}
          <div className="mb-8 flex flex-col md:flex-row gap-2 justify-between items-center text-sm font-medium">
            {['Open', 'Claimed', 'PR Submitted', 'In Review', 'Merged'].map((step, i) => (
              <React.Fragment key={step}>
                {i > 0 && <div className="text-muted hidden md:block">&rarr;</div>}
                <div className={`flex-1 text-center py-2 rounded-md border ${
                  step === issue.status
                    ? 'bg-solo-bg text-solo border-solo'
                    : 'bg-panel-alt text-muted border-subtle'
                }`}>{i + 1}. {step}</div>
              </React.Fragment>
            ))}
          </div>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="prose prose-invert max-w-none">
                <p>Currently, when a user interacts with this feature in the {issue.projectName} repository, unexpected behavior occurs.</p>
                <h3>Expected Behavior</h3>
                <p>The feature should work as described in the issue title above.</p>
                <h3>Steps to Reproduce</h3>
                <ol>
                  <li>Open the relevant module</li>
                  <li>Perform the described action</li>
                  <li>Observe the error or unexpected result</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-xl font-bold mb-4">Mentor Comments</h3>
          <div className="flex flex-col gap-4">
            <Card>
              <CardContent className="pt-4 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-border-subtle flex items-center justify-center font-bold text-xs">K</div>
                  <div>
                    <div className="font-medium text-primary text-sm">karan_dev <span className="text-xs text-muted font-normal">commented 2 days ago</span></div>
                  </div>
                </div>
                <p className="text-secondary text-sm">Take a look at the relevant source file. The fix should be straightforward once you understand the data flow.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <aside className={styles.sidebar}>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Mentor for this Issue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-panel-alt flex items-center justify-center font-bold text-sm">K</div>
                <div>
                  <div className="font-medium">karan_dev</div>
                  <div className="text-xs text-muted">Core Maintainer</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
