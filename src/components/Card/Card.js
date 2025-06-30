import React from 'react';
import styles from './Card.module.css';
import clsx from 'clsx';

function Card({ 
  title, 
  children, 
  icon = null, 
  variant = 'default', 
  clickable = false, 
  onClick = null,
  className = ''
}) {
  return (
    <div 
      className={clsx(
        styles.card, 
        styles[variant],
        {
          [styles.clickable]: clickable,
        },
        className
      )}
      onClick={clickable ? onClick : undefined}
    >
      {(icon || title) && (
        <div className={styles.cardHeader}>
          {icon && <div className={styles.cardIcon}>{icon}</div>}
          {title && <h3 className={styles.cardTitle}>{title}</h3>}
        </div>
      )}
      <div className={styles.cardContent}>
        {children}
      </div>
    </div>
  );
}

export default Card; 