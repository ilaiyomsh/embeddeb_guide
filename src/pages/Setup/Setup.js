import React from 'react';
import Section from '../../components/Section/Section';
import CodeBlock from '../../components/CodeBlock/CodeBlock';
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder';

function Setup() {
  return (
    <Section title="סעיף 1: הגדרת פרויקט ה-React לתוכן אינטראקטיבי">
      <p>
        בסעיף זה נלמד כיצד להגדיר את פרויקט ה-React הראשוני שלכם,
        תוך דגש על מבנה פרויקט חזק ושיטות עבודה מומלצות.
      </p>

      <h3>דרישות קדם והגדרת פרויקט ראשוני (`create-react-app`)</h3>
      <p>לפני שמתחילים, ודאו שמותקנים אצלכם:</p>
      <ul>
        <li>Node.js (מומלץ גרסה 16.13.2 ואילך)</li>
        <li>npm (מנהל החבילות של Node)</li>
        <li>Git וחשבון GitHub פעיל</li>
      </ul>

      <p>כדי ליצור שלד לפרויקט React חדש, השתמשו בפקודה הבאה בטרמינל:</p>
      <CodeBlock language="bash">
        {`npx create-react-app my-interactive-guide
cd my-interactive-guide`}
      </CodeBlock>
      <p>
        פקודה זו תיצור תיקייה חדשה בשם `my-interactive-guide` עם כל הקבצים הדרושים
        ליישום React בסיסי. לאחר מכן, נווטו לתוך התיקייה שנוצרה.
      </p>
      <ImagePlaceholder text="[Image of Terminal showing create-react-app output]" />

      <h3>יצירת מבנה פרויקט חזק</h3>
      <p>
        מבנה פרויקט טוב הוא המפתח למדרגיות ותחזוקה. אנו נארגן את הקבצים באופן הבא:
      </p>
      <ul>
        <li>`public/`: מכיל את `index.html` וקבצים סטטיים נוספים.</li>
        <li>`src/`: התיקייה המרכזית עבור קוד ה-React שלכם.</li>
        <ul>
          <li>`src/index.js`: נקודת הכניסה של היישום.</li>
          <li>`src/App.js`: הרכיב הראשי של היישום.</li>
          <li>`src/pages/`: תיקייה עבור "עמודים" שונים במדריך.</li>
          <li>`src/components/`: תיקייה עבור רכיבים מודולריים לשימוש חוזר.</li>
          <li>`src/styles/`: תיקייה עבור סגנונות גלובליים ומשתני CSS.</li>
        </ul>
      </ul>
      <p>
        שימוש ב-CSS Modules (קבצי `.module.css` לצד רכיבי React) יעזור לנו לשמור על
        סגנונות מוגדרים (scoped) ולמנוע התנגשויות.
      </p>
      <ImagePlaceholder text="[Image of project folder structure in IDE]" />
    </Section>
  );
}

export default Setup; 