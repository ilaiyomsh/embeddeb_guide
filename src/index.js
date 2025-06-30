import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom'; // שימוש ב-HashRouter עבור GitHub Pages
import App from './App';
import './styles/globals.css'; // ייבוא סגנונות גלובליים
import './styles/variables.css'; // ייבוא משתני CSS גלובליים
import './styles/typography.css'; // ייבוא סגנונות טיפוגרפיה

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
); 