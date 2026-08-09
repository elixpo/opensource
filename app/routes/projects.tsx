import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import styles from './projects.module.css';
import { getProjects } from '../db/data.server';

export async function loader() {
  const projects = getProjects();
  return { projects };
}

export default function Projects() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <div className="container section">
      <div className={styles.header}>
        <div>
          <h1 className="text-3xl font-bold mb-2">Explore Projects</h1>
          <p className="text-secondary">Find repositories to contribute to and level up your skills.</p>
        </div>
        <Button variant="secondary">Suggest a Project</Button>
      </div>

      <div className={styles.page}>
        <aside className={styles.sidebar}>
          <div className="mb-6">
            <Input placeholder="Search projects..." />
          </div>

          <div className={styles.filterGroup}>
            <div className={styles.filterTitle}>Language</div>
            <div className={styles.filterList}>
              {['TypeScript', 'JavaScript', 'Python', 'Go', 'React'].map(lang => (
                <label key={lang} className={styles.filterItem}>
                  <input type="checkbox" /> {lang}
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
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <Card key={project.id} hoverable>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge label="Lang" value={project.language} accent="edge" />
                    <Badge label="Issues" value={String(project.issueCount)} accent="data" />
                  </div>
                  <CardTitle className="font-mono text-lg">{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link to={`/projects/${project.id}`}>
                    <Button variant="ghost" size="sm">View Project &rarr;</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
