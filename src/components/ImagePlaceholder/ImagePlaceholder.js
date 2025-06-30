import React from 'react';
import styles from './ImagePlaceholder.module.css'; // שימוש ב-CSS Modules

function ImagePlaceholder({ text, width = '100%', height = '200px' }) {
  return (
    <div
      className={styles.placeholderContainer}
      style={{ width: width, height: height }}
    >
      <p className={styles.placeholderText}>{text}</p>
    </div>
  );
}

export default ImagePlaceholder; 