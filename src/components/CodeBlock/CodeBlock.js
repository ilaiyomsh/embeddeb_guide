import React from 'react';
import styles from './CodeBlock.module.css'; // שימוש ב-CSS Modules

function CodeBlock({ language, children }) {
  return (
    <pre className={styles.codeBlock}>
      <code className={`${styles.code} language-${language}`}>
        {children}
      </code>
    </pre>
  );
}

export default CodeBlock; 