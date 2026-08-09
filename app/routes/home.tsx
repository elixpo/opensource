import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import { SplitText } from '../components/react-bits/SplitText';
import { CountUp } from '../components/react-bits/CountUp';
import { TiltedCover } from '../components/react-bits/TiltedCover';
import styles from './home.module.css';
import { getStats, getProjects, getLeaderboard } from '../db/data.server';

export async function loader() {
  const stats = getStats();
  const projects = getProjects().slice(0, 3);
  const leaderboard = getLeaderboard().slice(0, 3);
  return { stats, projects, leaderboard };
}

export default function Home() {
  const { stats, projects, leaderboard } = useLoaderData<typeof loader>();

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container relative z-10">
          <SplitText
            text="Build the Future with Elixpo"
            className={styles.title}
            delay={0.05}
          />
          <p className={`${styles.subtitle} animate-fade-in-up stagger-2`}>
            A Cloudflare-native platform for running open-source contests, mentorship programs, contribution tracking, and rewards.
          </p>
          <div className={`${styles.ctas} animate-fade-in-up stagger-3`}>
            <Link to="/register/contributor">
              <Button size="lg" variant="primary">Register as Contributor</Button>
            </Link>
            <Link to="/register/organization">
              <Button size="lg" variant="secondary">Register Organization</Button>
            </Link>
          </div>

          <div className={`${styles.stats} animate-fade-in-up stagger-4`}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>
                <CountUp from={0} to={stats.contributors} duration={2} />
              </div>
              <div className={styles.statLabel}>Contributors</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>
                <CountUp from={0} to={stats.prsMerged} duration={2} />
              </div>
              <div className={styles.statLabel}>PRs Merged</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>
                <CountUp from={0} to={stats.activeProjects} duration={2} />
              </div>
              <div className={styles.statLabel}>Active Projects</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>
                <CountUp from={0} to={stats.organizations} duration={2} />
              </div>
              <div className={styles.statLabel}>Organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section bg-panel-alt">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <p className={styles.sectionSubtitle}>Discover top open-source projects actively looking for contributors.</p>
          </div>
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <TiltedCover key={project.id}>
                <Card hoverable className="h-full overflow-hidden relative group">
                  {project.video && (
                    <div className="absolute inset-0 z-0">
                      <video muted playsInline autoPlay loop preload="auto" className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                        <source src={project.video} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-panel)] via-[var(--bg-panel)]/80 to-transparent"></div>
                    </div>
                  )}
                  <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <Badge label="Lang" value={project.language} accent="edge" />
                      <Badge label="Issues" value={String(project.issueCount)} accent="data" />
                    </div>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription className={project.video ? "text-[var(--text-primary)]" : ""}>{project.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="relative z-10">
                    <Link to={`/projects/${project.id}`}>
                      <Button variant="ghost" size="sm">View Project &rarr;</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </TiltedCover>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link to="/projects">
              <Button variant="secondary">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Top Contributors</h2>
            <p className={styles.sectionSubtitle}>Recognizing the most active community members this month.</p>
          </div>
          <Card>
            <div className="p-4 border-b border-subtle flex justify-between font-semibold text-secondary text-sm uppercase">
              <span>Contributor</span>
              <span>Points</span>
            </div>
            {leaderboard.map((user, i) => (
              <div key={user.username} className="p-4 border-b border-subtle flex justify-between items-center last:border-b-0 hover:bg-[var(--bg-panel-alt)] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="text-muted font-mono w-4">{i + 1}</div>
                  <div className="w-8 h-8 rounded-full bg-[var(--border-subtle)] flex items-center justify-center font-bold text-xs">
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">{user.username}</div>
                    <div className="text-xs text-[var(--text-muted)]">{user.level}</div>
                  </div>
                </div>
                <div className="font-mono text-[var(--accent-flag)] font-semibold">{user.points.toLocaleString()}</div>
              </div>
            ))}
            <div className="p-4 text-center">
              <Link to="/leaderboard" className="text-sm text-[var(--accent-edge)] hover:underline">
                View Full Leaderboard
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container">
        <div className={styles.newsletter}>
          <h2 className="text-3xl font-bold mb-2">Stay Updated</h2>
          <p className="text-secondary mb-6">Get the latest open-source contests, events, and project updates straight to your inbox.</p>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Enter your email address" type="email" required style={{ flex: 1 }} />
            <Button type="submit" variant="primary">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
