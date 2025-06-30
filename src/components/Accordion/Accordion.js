import React, { useState } from 'react';
import styles from './Accordion.module.css';
import clsx from 'clsx';

function Accordion({ items, defaultExpanded = null }) {
  const [expandedItems, setExpandedItems] = useState(
    defaultExpanded ? { [defaultExpanded]: true } : {}
  );

  const toggleItem = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <button
            className={clsx(styles.accordionHeader, {
              [styles.expanded]: expandedItems[index]
            })}
            onClick={() => toggleItem(index)}
          >
            <span className={styles.title}>{item.title}</span>
            <span className={clsx(styles.icon, {
              [styles.rotated]: expandedItems[index]
            })}>
              ▲
            </span>
          </button>
          <div className={clsx(styles.accordionContent, {
            [styles.expanded]: expandedItems[index]
          })}>
            <div className={styles.contentInner}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion; 