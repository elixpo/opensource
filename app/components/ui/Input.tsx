import React from 'react';
import styles from './Input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, ...props }, ref) => {
    const inputClasses = [
      styles.input,
      error && styles.error,
      className
    ].filter(Boolean).join(' ');

    return (
      <div className={styles.inputWrapper}>
        {label && <label className={styles.label} htmlFor={props.id}>{label}</label>}
        <input ref={ref} className={inputClasses} {...props} />
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
