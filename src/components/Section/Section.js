import React from 'react';
import styles from './Section.module.css'; // שימוש ב-CSS Modules
import clsx from 'clsx'; // ייבוא clsx עבור מחלקות מותנות

function Section({ title, children, className }) {
  return (
    <section className={clsx(styles.section, className)}>
      {title && <h2 className={styles.sectionTitle}>{title}</h2>}
      <div className={styles.sectionContent}>
        {children}
      </div>
    </section>
  );
}

export default Section; 