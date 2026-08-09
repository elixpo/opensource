import React from 'react';
import { Link } from 'react-router';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.column}>
            <h4>Platform</h4>
            <div className={styles.links}>
              <Link to="/projects" className={styles.link}>Projects</Link>
              <Link to="/issues" className={styles.link}>Issues</Link>
              <Link to="/leaderboard" className={styles.link}>Leaderboard</Link>
              <Link to="/badges" className={styles.link}>Badges</Link>
            </div>
          </div>
          
          <div className={styles.column}>
            <h4>Community</h4>
            <div className={styles.links}>
              <Link to="/events" className={styles.link}>Events</Link>
              <Link to="/blog" className={styles.link}>Blog</Link>
              <Link to="/community" className={styles.link}>Hub</Link>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Organizations</h4>
            <div className={styles.links}>
              <Link to="/sponsors" className={styles.link}>Sponsors</Link>
              <Link to="/register/organization" className={styles.link}>Register Org</Link>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Support</h4>
            <div className={styles.links}>
              <Link to="/faq" className={styles.link}>FAQ</Link>
              <Link to="/contact" className={styles.link}>Contact</Link>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Legal</h4>
            <div className={styles.links}>
              <Link to="/terms" className={styles.link}>Terms</Link>
              <Link to="/privacy" className={styles.link}>Privacy</Link>
              <Link to="/code-of-conduct" className={styles.link}>Code of Conduct</Link>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div>&copy; {new Date().getFullYear()} Elixpo. All rights reserved.</div>
          
          <div className={styles.social}>
            <a href="https://github.com/elixpo" target="_blank" rel="noreferrer" className={styles.socialLink}>GitHub</a>
            <a href="https://x.com/elixpo" target="_blank" rel="noreferrer" className={styles.socialLink}>X</a>
            <a href="https://linkedin.com/company/elixpo" target="_blank" rel="noreferrer" className={styles.socialLink}>LinkedIn</a>
          </div>
          
          <div>Made with &hearts; by open-source contributors &middot; v1.0.0</div>
        </div>
      </div>
    </footer>
  );
}
