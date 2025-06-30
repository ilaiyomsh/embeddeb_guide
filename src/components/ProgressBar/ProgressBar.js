import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ProgressBar.module.css';
import clsx from 'clsx';

function ProgressBar() {
  const location = useLocation();
  
  const steps = [
    { path: '/', label: 'בית', icon: '🏠' },
    { path: '/setup', label: 'הגדרה', icon: '⚙️' },
    { path: '/deployment', label: 'פריסה', icon: '🚀' },
    { path: '/embedding', label: 'הטמעה', icon: '📱' },
    { path: '/use-cases', label: 'דוגמאות', icon: '💡' }
  ];

  const currentStepIndex = steps.findIndex(step => step.path === location.pathname);
  const progress = currentStepIndex >= 0 ? ((currentStepIndex + 1) / steps.length) * 100 : 0;

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill}
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <div
            key={step.path}
            className={clsx(styles.step, {
              [styles.active]: index === currentStepIndex,
              [styles.completed]: index < currentStepIndex
            })}
          >
            <div className={styles.stepIcon}>
              {step.icon}
            </div>
            <span className={styles.stepLabel}>{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressBar; 