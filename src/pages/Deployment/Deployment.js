import React, { useState } from 'react';
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import Accordion from '../../components/Accordion/Accordion';
import Tabs from '../../components/Tabs/Tabs';
import CodeBlock from '../../components/CodeBlock/CodeBlock';
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder';

function Deployment() {
  const [deploymentStatus, setDeploymentStatus] = useState('notStarted'); // notStarted, building, success, error

  const packageJsonSetup = [
    {
      title: "הגדרת Homepage",
      content: (
        <div>
          <p>ראשית, צריך להוסיף את כתובת ה-URL שבה האתר יהיה זמין:</p>
          <CodeBlock language="json">
{`{
  "name": "my-interactive-guide",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://USERNAME.github.io/REPO-NAME",
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
          <p><strong>שימו לב:</strong> החליפו <code>USERNAME</code> עם שם המשתמש שלכם ו-<code>REPO-NAME</code> עם שם המאגר.</p>
        </div>
      )
    },
    {
      title: "הוספת Scripts לפריסה",
      content: (
        <div>
          <p>הוסיפו את הסקריפטים הבאים לחלק <code>scripts</code> בקובץ package.json:</p>
          <CodeBlock language="json">
{`{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}`}
          </CodeBlock>
          <ul>
            <li><strong>predeploy:</strong> רץ אוטומטית לפני deploy ובונה את הפרויקט</li>
            <li><strong>deploy:</strong> מעלה את תיקיית build ל-GitHub Pages</li>
          </ul>
        </div>
      )
    }
  ];

  const deploymentMethods = [
    {
      label: "GitHub Actions",
      icon: "🤖",
      content: (
        <div>
          <h4>פריסה אוטומטית עם GitHub Actions</h4>
          <p>שיטה מתקדמת לפריסה אוטומטית בכל commit:</p>
          <CodeBlock language="yaml">
{`# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: \${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build`}
          </CodeBlock>
          <p><strong>יתרונות:</strong> פריסה אוטומטית, ללא צורך בפקודות ידניות.</p>
        </div>
      )
    },
    {
      label: "gh-pages CLI",
      icon: "⚡",
      content: (
        <div>
          <h4>פריסה ידנית עם gh-pages</h4>
          <p>השיטה הפשוטה והמהירה ביותר:</p>
          <CodeBlock language="bash">
{`# התקנת gh-pages (אם עוד לא מותקן)
npm install --save-dev gh-pages

# פריסה במקומי
npm run deploy`}
          </CodeBlock>
          <p><strong>יתרונות:</strong> שליטה מלאה, מהיר, עובד מהמקומי.</p>
          <p><strong>חסרונות:</strong> צריך לזכור להריץ בכל עדכון.</p>
        </div>
      )
    },
    {
      label: "ידני מ-GitHub",
      icon: "🌐",
      content: (
        <div>
          <h4>פריסה ישירות מ-GitHub</h4>
          <p>ללא כלים חיצוניים, ישירות מהממשק של GitHub:</p>
          <ol>
            <li>בנו את הפרויקט מקומית: <code>npm run build</code></li>
            <li>העלו את תוכן תיקיית <code>build</code> לענף <code>gh-pages</code></li>
            <li>הגדירו את GitHub Pages לקרוא מהענף הזה</li>
          </ol>
          <p><strong>מתאים ל:</strong> מצבים מיוחדים או בעיות אימות.</p>
        </div>
      )
    }
  ];

  const troubleshooting = [
    {
      title: "השמות לא נטען / עמוד ריק",
      content: (
        <div>
          <h4>סיבות אפשריות ופתרונות:</h4>
          <ul>
            <li>
              <strong>בעיה:</strong> homepage לא מוגדר נכון
              <br />
              <strong>פתרון:</strong> ודאו שה-URL ב-package.json תואם למאגר שלכם
            </li>
            <li>
              <strong>בעיה:</strong> נתיבי הרשתות לא נכונים
              <br />
              <strong>פתרון:</strong> השתמשו ב-HashRouter במקום BrowserRouter
            </li>
            <li>
              <strong>בעיה:</strong> קבצים חסרים
              <br />
              <strong>פתרון:</strong> ודאו שתיקיית build נוצרה והועלתה
            </li>
          </ul>
          <CodeBlock language="javascript">
{`// בקובץ index.js - השתמשו ב-HashRouter
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);`}
          </CodeBlock>
        </div>
      )
    },
    {
      title: "שגיאות 404 בניווט",
      content: (
        <div>
          <p>GitHub Pages לא תומך ב-client-side routing כברירת מחדל.</p>
          <h4>פתרונות:</h4>
          <ol>
            <li>
              <strong>HashRouter (מומלץ):</strong> משתמש ב-# בכתובת
              <CodeBlock language="javascript">
{`import { HashRouter as Router } from 'react-router-dom';`}
              </CodeBlock>
            </li>
            <li>
              <strong>404.html Trick:</strong> ליצור קובץ 404.html שמפנה לעמוד הראשי
            </li>
          </ol>
        </div>
      )
    },
    {
      title: "זמני בנייה ארוכים",
      content: (
        <div>
          <p>אם הבנייה לוקחת זמן רב:</p>
          <ul>
            <li>בדקו את גודל התלויות עם <code>npm ls --depth=0</code></li>
            <li>הסירו תלויות לא נחוצות</li>
            <li>השתמשו ב-<code>npm ci</code> במקום <code>npm install</code> ב-CI</li>
            <li>שקלו שימוש ב-cache ב-GitHub Actions</li>
          </ul>
        </div>
      )
    }
  ];

  const optimizationTips = [
    {
      title: "אופטימיזציה לביצועים",
      content: (
        <div>
          <h4>טיפים לשיפור ביצועים:</h4>
          <ul>
            <li><strong>Code Splitting:</strong> פיצול קוד לחבילות קטנות יותר</li>
            <li><strong>Lazy Loading:</strong> טעינה מותנית של רכיבים</li>
            <li><strong>Optimize Images:</strong> דחיסת תמונות וייעול פורמטים</li>
            <li><strong>Bundle Analysis:</strong> ניתוח גודל החבילה</li>
          </ul>
          <CodeBlock language="javascript">
{`// דוגמה ל-Lazy Loading
import { lazy, Suspense } from 'react';

const UseCases = lazy(() => import('./pages/UseCases/UseCases'));

function App() {
  return (
    <Suspense fallback={<div>טוען...</div>}>
      <Route path="/use-cases" element={<UseCases />} />
    </Suspense>
  );
}`}
          </CodeBlock>
        </div>
      )
    }
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <Section title="שלב 2: פריסה ל-GitHub Pages">
        <Card variant="highlighted" icon="🚀" title="מטרת השלב">
          <p>
            בשלב זה נלמד כיצד לפרוס את אפליקציית ה-React שלכם ל-GitHub Pages,
            פלטפורמת האחסון החינמית של GitHub שמאפשרת אחסון אתרים סטטיים.
          </p>
          <p>
            לאחר סיום השלב, האפליקציה שלכם תהיה זמינה באינטרנט ותוכלו להטמיע אותה ב-Monday.com.
          </p>
        </Card>

        <Section title="הכנת הפרויקט לפריסה">
          <Accordion items={packageJsonSetup} defaultExpanded={0} />
        </Section>

        <Section title="שיטות פריסה">
          <Tabs tabs={deploymentMethods} defaultTab={1} />
        </Section>

        <Section title="פריסה ראשונה">
          <div style={{ display: 'grid', gap: 'var(--spacing-l)' }}>
            <Card variant="primary" icon="1️⃣" title="שלב 1: ודאו שהכל מוכן">
              <ul>
                <li>✅ package.json מעודכן עם homepage וסקריפטים</li>
                <li>✅ gh-pages מותקן כ-devDependency</li>
                <li>✅ השינויים נשמרו ב-Git</li>
              </ul>
            </Card>

            <Card variant="accent" icon="2️⃣" title="שלב 2: בצעו פריסה">
              <CodeBlock language="bash">
{`# ודאו שכל השינויים נשמרו
git add .
git commit -m "הכנה לפריסה ל-GitHub Pages"
git push

# פריסה ל-GitHub Pages
npm run deploy`}
              </CodeBlock>
              <p>הפקודה תיצור ענף <code>gh-pages</code> חדש עם הקבצים הסטטיים.</p>
            </Card>

            <Card variant="success" icon="3️⃣" title="שלב 3: הגדרות ב-GitHub">
              <ol>
                <li>עברו למאגר ב-GitHub</li>
                <li>לחצו על Settings → Pages</li>
                <li>תחת Source, בחרו "Deploy from a branch"</li>
                <li>בחרו את הענף <code>gh-pages</code> ותיקיית <code>/ (root)</code></li>
                <li>לחצו Save</li>
              </ol>
              <ImagePlaceholder text="[תמונה: הגדרות GitHub Pages]" />
            </Card>

            <Card variant="warning" icon="⏰" title="המתן לפריסה">
              <p>
                GitHub Pages לוקח בדרך כלל 1-10 דקות להפעיל את האתר.
                תוכלו לראות את הסטטוס בעמוד Settings → Pages.
              </p>
              <p>
                <strong>האתר שלכם יהיה זמין ב:</strong><br />
                <code>https://USERNAME.github.io/REPO-NAME/</code>
              </p>
            </Card>
          </div>
        </Section>

        <Section title="פתרון בעיות נפוצות">
          <Accordion items={troubleshooting} />
        </Section>

        <Section title="אופטימיזציה ושיפורים">
          <Accordion items={optimizationTips} />
        </Section>

        <Section title="בדיקת שלמות">
          <Card variant="highlighted" icon="✅" title="סיכום השלב">
            <p>אם הכל עבר בהצלחה, אתם אמורים להיות עם:</p>
            <ul>
              <li>✅ אתר עובד ומתעדכן ב-GitHub Pages</li>
              <li>✅ URL ציבורי שניתן להטמיע</li>
              <li>✅ תהליך פריסה אוטומטי עם <code>npm run deploy</code></li>
              <li>✅ ענף gh-pages במאגר עם הקבצים הסטטיים</li>
            </ul>
            <p><strong>השלב הבא:</strong> הטמעה ב-Monday.com!</p>
            
            <div style={{ marginTop: 'var(--spacing-l)', textAlign: 'center' }}>
              <button 
                style={{
                  background: 'var(--gradient-primary)',
                  color: 'white',
                  border: 'none',
                  padding: 'var(--spacing-m) var(--spacing-l)',
                  borderRadius: 'var(--border-radius-medium)',
                  fontSize: 'var(--font-size-medium)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => window.open('https://USERNAME.github.io/REPO-NAME/', '_blank')}
              >
                🌐 צפה באתר שלי
              </button>
            </div>
          </Card>
        </Section>
      </Section>
    </div>
  );
}

export default Deployment; 