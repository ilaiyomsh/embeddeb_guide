import React, { useState } from 'react';
import styles from './Tabs.module.css';
import clsx from 'clsx';

function Tabs({ tabs, defaultTab = 0 }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabHeaders}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={clsx(styles.tabHeader, {
              [styles.active]: index === activeTab
            })}
            onClick={() => setActiveTab(index)}
          >
            {tab.icon && <span className={styles.tabIcon}>{tab.icon}</span>}
            <span className={styles.tabLabel}>{tab.label}</span>
          </button>
        ))}
        <div 
          className={styles.tabIndicator}
          style={{
            transform: `translateX(${activeTab * 100}%)`,
            width: `${100 / tabs.length}%`
          }}
        />
      </div>
      
      <div className={styles.tabContent}>
        <div className={styles.tabPanel}>
          {tabs[activeTab]?.content}
        </div>
      </div>
    </div>
  );
}

export default Tabs; 