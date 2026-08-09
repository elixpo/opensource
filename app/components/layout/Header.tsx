import React from 'react';
import { Link } from 'react-router';
import { Button } from '../ui/Button';
import styles from './Header.module.css';

export function Header() {
  const [theme, setTheme] = React.useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.nav}`}>
        <Link to="/" className={styles.logo}>
          <img src="/logo.png" alt="Elixpo Logo" className={styles.icon} />
          Elixpo <span className={styles.logoAccent}>Opensource</span>
        </Link>
        
        <div className={styles.links}>
          <Link to="/projects" className={styles.link}>Projects</Link>
          <Link to="/leaderboard" className={styles.link}>Leaderboard</Link>
          <Link to="/events" className={styles.link}>Events</Link>
          <Link to="/community" className={styles.link}>Community</Link>
        </div>

        <div className={styles.actions}>
          <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
            {theme === 'dark' ? (
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
          <Link to="/login">
            <Button variant="primary" size="sm">Join Now</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
