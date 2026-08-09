import React from 'react';
import styles from './Badge.module.css';

export interface BadgeProps {
  label: string;
  value?: string | React.ReactNode;
  accent?: 'edge' | 'data' | 'flag' | 'solo' | 'ops' | 'neutral';
  className?: string;
}

export function Badge({ label, value, accent = 'edge', className = '' }: BadgeProps) {
  const classes = [styles.badge, styles[accent], className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <span className={styles.label}>{label}</span>
      {value && <span className={styles.value}>{value}</span>}
    </div>
  );
}
