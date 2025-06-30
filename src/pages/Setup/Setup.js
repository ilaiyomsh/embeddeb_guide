import React, { useState } from 'react';
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import Accordion from '../../components/Accordion/Accordion';
import Tabs from '../../components/Tabs/Tabs';
import CodeBlock from '../../components/CodeBlock/CodeBlock';
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder';

function Setup() {
  const [completedSteps, setCompletedSteps] = useState({});

  const markStepComplete = (stepId) => {
    setCompletedSteps(prev => ({
      ...prev,
      [stepId]: !prev[stepId]
    }));
  };

  const prerequisiteItems = [
    {
      title: "Node.js והתקנה",
      content: (
        <div>
          <p>ודאו שמותקן אצלכם Node.js גרסה 16.13.2 ואילך:</p>
          <CodeBlock language="bash">
{`# בדיקת גרסה
node --version
npm --version

# אם אין לכם Node.js, הורידו מ:
# https://nodejs.org/`}
          </CodeBlock>
          <p><strong>מומלץ:</strong> להשתמש ב-nvm (Node Version Manager) לניהול גרסאות.</p>
        </div>
      )
    },
    {
      title: "Git וחשבון GitHub",
      content: (
        <div>
          <p>ודאו שיש לכם:</p>
          <ul>
            <li>Git מותקן במחשב</li>
            <li>חשבון GitHub פעיל</li>
            <li>אימות SSH או Personal Access Token</li>
          </ul>
          <CodeBlock language="bash">
{`# בדיקת Git
git --version

# הגדרת פרטי משתמש (פעם אחת)
git config --global user.name "השם שלכם"
git config --global user.email "email@example.com"`}
          </CodeBlock>
        </div>
      )
    },
    {
      title: "עורך קוד מומלץ",
      content: (
        <div>
          <p>מומלץ להשתמש ב-Visual Studio Code עם התוספים הבאים:</p>
          <ul>
            <li><strong>ES7+ React/Redux/React-Native snippets</strong> - קיצורי דרך</li>
            <li><strong>Prettier</strong> - עיצוב קוד אוטומטי</li>
            <li><strong>Auto Rename Tag</strong> - שינוי תגי HTML/JSX</li>
            <li><strong>Bracket Pair Colorizer</strong> - צביעת סוגריים</li>
          </ul>
        </div>
      )
    }
  ];

  const projectStructureTabs = [
    {
      label: "מבנה בסיסי",
      icon: "📁",
      content: (
        <div>
          <h4>מבנה פרויקט React סטנדרטי</h4>
          <CodeBlock language="bash">
{`my-interactive-guide/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/     # רכיבים לשימוש חוזר
│   ├── pages/         # עמודים ראשיים
│   ├── styles/        # סגנונות גלובליים
│   ├── App.js         # רכיב ראשי
│   └── index.js       # נקודת כניסה
├── package.json
└── README.md`}
          </CodeBlock>
          <p>זהו מבנה נקי ומאורגן שיאפשר הרחבה קלה בעתיד.</p>
        </div>
      )
    },
    {
      label: "Components",
      icon: "🧩",
      content: (
        <div>
          <h4>ארגון רכיבים</h4>
          <CodeBlock language="bash">
{`src/components/
├── Navbar/
│   ├── Navbar.js
│   └── Navbar.module.css
├── CodeBlock/
│   ├── CodeBlock.js
│   └── CodeBlock.module.css
└── Section/
    ├── Section.js
    └── Section.module.css`}
          </CodeBlock>
          <p>כל רכיב בתיקייה נפרדת עם קובץ CSS Modules משלו לסגנונות מוגבלים.</p>
        </div>
      )
    },
    {
      label: "Pages",
      icon: "📄",
      content: (
        <div>
          <h4>ארגון עמודים</h4>
          <CodeBlock language="bash">
{`src/pages/
├── Home/
│   ├── Home.js
│   └── Home.module.css
├── Setup/
│   └── Setup.js
├── Deployment/
│   └── Deployment.js
└── UseCases/
    └── UseCases.js`}
          </CodeBlock>
          <p>כל עמוד הוא רכיב עצמאי שמייצג תוכן מלא.</p>
        </div>
      )
    },
    {
      label: "Styles",
      icon: "🎨",
      content: (
        <div>
          <h4>ניהול סגנונות</h4>
          <CodeBlock language="bash">
{`src/styles/
├── globals.css      # איפוס CSS וסגנונות בסיס
├── variables.css    # משתני צבעים, גופנים ומרווחים
└── typography.css   # הגדרות טיפוגרפיה`}
          </CodeBlock>
          <p>הפרדה ברורה בין סגנונות גלובליים לסגנונות ברמת הרכיב.</p>
        </div>
      )
    }
  ];

  const StepCard = ({ id, title, children, variant = "default" }) => (
    <Card 
      variant={completedSteps[id] ? "success" : variant} 
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <input
            type="checkbox"
            checked={completedSteps[id] || false}
            onChange={() => markStepComplete(id)}
            style={{ transform: 'scale(1.2)' }}
          />
          {title}
        </div>
      }
    >
      {children}
    </Card>
  );

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'var(--spacing-xl)' }}>
      <Section title="שלב 1: הגדרת פרויקט React אינטראקטיבי">
        <Card variant="highlighted" icon="🎯" title="מטרת השלב">
          <p>
            בשלב זה נלמד כיצד להגדיר את פרויקט ה-React הראשוני שלכם,
            תוך דגש על מבנה פרויקט חזק ושיטות עבודה מומלצות שיאפשרו הרחבה קלה בעתיד.
          </p>
        </Card>

        <Section title="דרישות קדם">
          <Accordion items={prerequisiteItems} defaultExpanded={0} />
        </Section>

        <Section title="יצירת פרויקט חדש">
          <StepCard id="create-project" title="יצירת פרויקט React" variant="primary">
            <p>השתמשו בפקודה הבאה ליצירת פרויקט React חדש:</p>
            <CodeBlock language="bash">
{`npx create-react-app my-interactive-guide
cd my-interactive-guide`}
            </CodeBlock>
            <p>
              פקודה זו תיצור תיקייה חדשה בשם <code>my-interactive-guide</code> עם כל הקבצים הדרושים
              ליישום React בסיסי. לאחר מכן, נווטו לתוך התיקייה שנוצרה.
            </p>
            <ImagePlaceholder text="[תמונה: Terminal המציג פלט של create-react-app]" />
          </StepCard>

          <StepCard id="install-deps" title="התקנת תלויות נוספות" variant="accent">
            <p>נתקין חבילות שנצטרך עבור הניווט ופריסה:</p>
            <CodeBlock language="bash">
{`npm install react-router-dom gh-pages clsx`}
            </CodeBlock>
            <ul>
              <li><strong>react-router-dom:</strong> ניווט בין עמודים</li>
              <li><strong>gh-pages:</strong> פריסה ל-GitHub Pages</li>
              <li><strong>clsx:</strong> ניהול מחלקות CSS מותנות</li>
            </ul>
          </StepCard>

          <StepCard id="project-structure" title="יצירת מבנה פרויקט" variant="success">
            <p>נארגן את הקבצים במבנה שיאפשר ניהול קל ומדרגיות:</p>
            <Tabs tabs={projectStructureTabs} defaultTab={0} />
          </StepCard>

          <StepCard id="first-run" title="הרצה ראשונית" variant="warning">
            <p>בדקו שהפרויקט עובד כראוי:</p>
            <CodeBlock language="bash">
{`npm start`}
            </CodeBlock>
            <p>הדפדפן אמור להיפתח אוטומטית ולהציג את דף ה-React הבסיסי ב-localhost:3000</p>
            <ImagePlaceholder text="[תמונה: דפדפן עם האפליקציה הרצה]" />
          </StepCard>
        </Section>

        <Section title="הגדרת Git ומאגר">
          <StepCard id="git-init" title="אתחול Git" variant="primary">
            <CodeBlock language="bash">
{`git init
git add .
git commit -m "פרויקט React ראשוני"`}
            </CodeBlock>
          </StepCard>

          <StepCard id="github-repo" title="יצירת מאגר ב-GitHub" variant="accent">
            <ol>
              <li>היכנסו ל-GitHub.com</li>
              <li>לחצו על הכפתור "New repository"</li>
              <li>תנו שם למאגר (למשל: <code>my-interactive-guide</code>)</li>
              <li>ודאו שהמאגר מוגדר כ-Public</li>
              <li>אל תבחרו ב-"Initialize with README"</li>
            </ol>
          </StepCard>

          <StepCard id="connect-repo" title="חיבור למאגר מרוחק" variant="success">
            <CodeBlock language="bash">
{`git remote add origin https://github.com/USERNAME/REPO-NAME.git
git branch -M main
git push -u origin main`}
            </CodeBlock>
            <p><strong>שימו לב:</strong> החליפו USERNAME ו-REPO-NAME עם הפרטים שלכם.</p>
          </StepCard>
        </Section>

        <Section title="בדיקת שלמות">
          <Card variant="highlighted" icon="✅" title="סיכום השלב">
            <p>אם השלמתם את כל השלבים בהצלחה, אתם אמורים להיות עם:</p>
            <ul>
              <li>✅ פרויקט React חדש ועובד</li>
              <li>✅ מבנה תיקיות מאורגן</li>
              <li>✅ תלויות מותקנות</li>
              <li>✅ מאגר Git מחובר ל-GitHub</li>
            </ul>
            <p><strong>השלב הבא:</strong> פריסה ל-GitHub Pages!</p>
          </Card>
        </Section>
      </Section>
    </div>
  );
}

export default Setup; 