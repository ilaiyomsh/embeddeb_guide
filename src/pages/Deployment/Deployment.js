import React from 'react';
import Section from '../../components/Section/Section';
import CodeBlock from '../../components/CodeBlock/CodeBlock';
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder';

function Deployment() {
  return (
    <Section title="סעיף 3: פריסת יישום ה-React שלך ל-GitHub Pages">
      <p>
        כעת, נלמד כיצד לפרוס את יישום ה-React שבניתם לשירות האירוח החינמי של GitHub Pages.
        זהו צעד קריטי שיהפוך את המדריך האינטראקטיבי לנגיש לציבור.
      </p>

      <h3>יצירה והגדרת מאגר ה-GitHub שלך</h3>
      <p>
        ודאו שיש לכם חשבון GitHub פעיל. צרו מאגר GitHub <strong>ציבורי</strong> חדש.
        בחרו שם שיהיה ברור וקשור לפרויקט שלכם (לדוגמה, `monday-github-pages-guide`).
      </p>
      <p>פקודות Git בסיסיות לאתחול והעלאה:</p>
      <CodeBlock language="bash">
        {`git init
git add .
git commit -m "Initial React app commit"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
git push -u origin main`}
      </CodeBlock>
      <ImagePlaceholder text="[Image of GitHub repository creation page]" />

      <h3>שילוב חבילת `gh-pages` לפריסה חלקה</h3>
      <p>
        חבילת `gh-pages` מפשטת את תהליך הפריסה על ידי העלאת קבצי ה-build המוכנים
        של היישום שלכם לענף `gh-pages` ב-GitHub.
      </p>
      <p>התקינו את החבילה:</p>
      <CodeBlock language="bash">
        npm install gh-pages --save-dev
      </CodeBlock>
      <p>עדכנו את קובץ `package.json` בשורש הפרויקט שלכם. הוסיפו את מאפיין `homepage`
        והוסיפו את סקריפטי `predeploy` ו-`deploy` תחת האובייקט `"scripts"`.</p>
      <CodeBlock language="json">
{`{
  "name": "my-interactive-guide",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME",
  "dependencies": {
    // ...
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "eslintConfig": {
    // ...
  },
  "browserslist": {
    // ...
  },
  "devDependencies": {
    "gh-pages": "^X.Y.Z" // ודאו שהגרסה כאן עדכנית
  }
}`}
      </CodeBlock>
      <p>
        ודאו שאתם מחליפים את `YOUR_GITHUB_USERNAME` בשם המשתמש שלכם ואת `YOUR_REPO_NAME`
        בשם המאגר שלכם ב-GitHub.
      </p>

      <h3>תהליך פריסה והגדרות שלב אחר שלב</h3>
      <p>כדי לבצע את הפריסה, הפעילו את הפקודה הבאה מתיקיית שורש הפרויקט:</p>
      <CodeBlock language="bash">
        npm run deploy
      </CodeBlock>
      <p>
        פעולה זו תבנה את היישום שלכם ותדחוף את הקבצים המוכנים לענף `gh-pages`
        במאגר ה-GitHub שלכם.
      </p>
      <ImagePlaceholder text="[Image of terminal showing npm run deploy output]" />

      <p>
        לאחר הפריסה, נווטו למאגר ה-GitHub שלכם, לחצו על "Settings", ולאחר מכן
        על "Pages" (תחת "Code and automation").
        ודאו שה"Source" מוגדר ל-"Deploy from a branch" וש"gh-pages" נבחר כענף.
        לחצו "Save".
      </p>
      <ImagePlaceholder text="[Image of GitHub Pages settings page]" />

      <h3>התמודדות עם אתגרי פריסה נפוצים: React Router ושגיאות 404</h3>
      <p>
        יישומים חד-דפיים (SPAs) כמו React, הפרוסים לשירותי אירוח סטטיים
        כמו GitHub Pages, נתקלים לעיתים קרובות בבעיות 404 בעת רענון דף או ניווט ישיר.
        הסיבה לכך היא ששרתים סטטיים לא יודעים לטפל בניתוב בצד הלקוח.
      </p>
      <p>
        הפתרון הוא שימוש ב-`HashRouter` מתוך `react-router-dom` במקום `BrowserRouter`.
        `HashRouter` משתמש בסימן ה-# ב-URL לניתוב, מה שגורם לדפדפן להתעלם מהחלק של ה-URL אחרי ה-#
        ולשלוח בקשה רק לדף הבסיסי, כאשר הניתוב בפועל נעשה על ידי ה-JavaScript בצד הלקוח.
      </p>
      <p>ודאו שקובץ `src/index.js` שלכם משתמש ב-`HashRouter` כך:</p>
      <CodeBlock language="javascript">
        {`import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom'; // שינוי חשוב!
import App from './App';
import './styles/globals.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);`}
      </CodeBlock>
      <p>
        אם נכסים (תמונות, גופנים) אינם נטענים, בדקו את הנתיבים היחסיים וודאו
        שהם מצוינים נכון ביחס ל-URL של ה-`homepage` שלכם.
      </p>
    </Section>
  );
}

export default Deployment; 