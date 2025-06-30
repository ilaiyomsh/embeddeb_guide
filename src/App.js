import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Home from './pages/Home/Home';
import Setup from './pages/Setup/Setup';
import Deployment from './pages/Deployment/Deployment';
import Embedding from './pages/Embedding/Embedding';
import UseCases from './pages/UseCases/UseCases';
import styles from './App.module.css'; // ייבוא סגנונות ספציפיים לרכיב

function App() {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <ProgressBar />
      <main className={styles.mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/deployment" element={<Deployment />} />
          <Route path="/embedding" element={<Embedding />} />
          <Route path="/use-cases" element={<UseCases />} />
        </Routes>
      </main>
    </div>
  );
}

export default App; 