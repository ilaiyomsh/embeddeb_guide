import React from 'react';
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import Accordion from '../../components/Accordion/Accordion';
import Tabs from '../../components/Tabs/Tabs';
import CodeBlock from '../../components/CodeBlock/CodeBlock';
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder';
import styles from './Home.module.css'; // שימוש ב-CSS Modules

function Home() {
  const faqItems = [
    {
      title: "מה ההבדל בין GitHub Pages לאחסון רגיל?",
      content: (
        <div>
          <p>GitHub Pages מספק אחסון חינמי לדפים סטטיים ישירות מהמאגר שלכם. זה אידיאלי עבור:</p>
          <ul>
            <li>אפליקציות React (לאחר build)</li>
            <li>אתרי תיעוד</li>
            <li>דפי נחיתה</li>
            <li>פורטפוליו אישי</li>
          </ul>
          <p><strong>יתרונות:</strong> חינמי, אוטומטי, מהיר, ואמין.</p>
        </div>
      )
    },
    {
      title: "האם אני צריך ידע מתקדם ב-React?",
      content: (
        <div>
          <p>לא! המדריך הזה מתאים גם למתחילים. אנחנו נלמד:</p>
          <ul>
            <li>יצירת קומפוננטים פשוטים</li>
            <li>ניהול מצב בסיסי</li>
            <li>עיצוב עם CSS Modules</li>
            <li>ניווט בין דפים</li>
          </ul>
          <p>כל מה שאתם צריכים זה הבנה בסיסית של HTML, CSS ו-JavaScript.</p>
        </div>
      )
    },
    {
      title: "מה קורה אם אני רוצה לעדכן את האפליקציה?",
      content: (
        <div>
          <p>עדכון קל ופשוט! פשוט:</p>
          <ol>
            <li>ערכו את הקוד במקומי</li>
            <li>הריצו <code>npm run deploy</code></li>
            <li>השינויים יעלו אוטומטית ל-GitHub Pages</li>
          </ol>
          <p>הווידג'ט ב-Monday.com יתעדכן אוטומטית כיוון שהוא מצביע על ה-URL של GitHub Pages.</p>
        </div>
      )
    },
    {
      title: "איך אני יכול להתאים אישית את העיצוב?",
      content: (
        <div>
          <p>יש לכם שליטה מלאה על העיצוב:</p>
          <ul>
            <li><strong>CSS Modules:</strong> עיצוב ברמת הקומפוננט</li>
            <li><strong>משתני CSS:</strong> שינוי צבעים וגופנים בקלות</li>
            <li><strong>ספריות עיצוב:</strong> אפשר להוסיף Material-UI, Ant Design וכו'</li>
            <li><strong>אנימציות:</strong> עם Framer Motion או CSS טהור</li>
          </ul>
        </div>
      )
    }
  ];

  const techTabs = [
    {
      label: "React",
      icon: "⚛️",
      content: (
        <div>
          <h4>למה React?</h4>
          <p>React מאפשר בניית ממשקי משתמש אינטראקטיביים עם:</p>
          <ul>
            <li><strong>קומפוננטים מודולריים:</strong> קוד נקי וניתן לתחזוקה</li>
            <li><strong>ניהול מצב:</strong> תגובה דינמית לפעולות משתמש</li>
            <li><strong>אקוסיסטם עשיר:</strong> ספריות ותוספים רבים</li>
            <li><strong>ביצועים מעולים:</strong> Virtual DOM למהירות מקסימלית</li>
          </ul>
          <CodeBlock language="jsx">
{`function WelcomeMessage({ name }) {
  return <h1>שלום, {name}!</h1>;
}

// שימוש בקומפוננט
<WelcomeMessage name="משתמש" />`}
          </CodeBlock>
        </div>
      )
    },
    {
      label: "GitHub Pages",
      icon: "📄",
      content: (
        <div>
          <h4>GitHub Pages - אחסון חכם</h4>
          <p>פלטפורמת אחסון מובנית של GitHub שמאפשרת:</p>
          <ul>
            <li><strong>פריסה אוטומטית:</strong> מהמאגר ישירות לאינטרנט</li>
            <li><strong>HTTPS חינמי:</strong> אבטחה מובנית</li>
            <li><strong>עדכונים מיידיים:</strong> כל commit = גרסה חדשה</li>
            <li><strong>CDN גלובלי:</strong> טעינה מהירה בכל העולם</li>
          </ul>
          <CodeBlock language="bash">
{`# פריסה פשוטה
npm run build
npm run deploy

# האתר זמין ב:
# https://username.github.io/repo-name`}
          </CodeBlock>
        </div>
      )
    },
    {
      label: "Monday.com",
      icon: "📱",
      content: (
        <div>
          <h4>הטמעה ב-Monday.com</h4>
          <p>הווידג'ט "הטמע הכל" מאפשר:</p>
          <ul>
            <li><strong>הטמעה מיידית:</strong> פשוט הדביקו את ה-URL</li>
            <li><strong>רספונסיבי:</strong> מתאים לכל גודל מסך</li>
            <li><strong>אינטראקטיבי מלא:</strong> כל פונקציית React עובדת</li>
            <li><strong>סנכרון נתונים:</strong> אפשרות לקישור עם Monday API</li>
          </ul>
          <p>הרכיב מתנהג כחלק טבעי מהלוח שלכם!</p>
        </div>
      )
    }
  ];

  return (
    <div className={styles.homePage}>
      <Section title="ברוכים הבאים למדריך GitHub Pages ו-Monday.com">
        <div className={styles.heroSection}>
          <Card variant="highlighted" icon="🚀" title="מהפרויקט לפרודקשן ב-5 דקות">
            <p>
              מדריך זה ילווה אתכם צעד אחר צעד בתהליך יצירת יישום React אינטראקטיבי,
              פריסתו ל-GitHub Pages, והטמעתו בווידג'ט "הטמע הכל" של Monday.com.
            </p>
            <p>
              הכוח של דפי אינטרנט אינטראקטיביים בצד לקוח בלבד, מוטמעים ישירות בלוח המחוונים שלכם,
              הוא עצום! זה מאפשר לכם להרחיב את יכולות Monday.com עם פונקציונליות מותאמת אישית ללא צורך בשרת.
            </p>
          </Card>

          <div className={styles.featuresGrid}>
            <Card variant="primary" icon="💰" title="חינמי לחלוטין">
              <p>GitHub Pages ו-Monday.com מספקים כל מה שאתם צריכים ללא עלות.</p>
            </Card>
            
            <Card variant="accent" icon="⚡" title="מהיר ואמין">
              <p>CDN גלובלי ותשתית מתקדמת להבטחת זמינות ומהירות מקסימלית.</p>
            </Card>
            
            <Card variant="success" icon="🔧" title="קל לתחזוקה">
              <p>עדכונים פשוטים עם Git ופריסה אוטומטית לייצור.</p>
            </Card>
          </div>
        </div>

        <ImagePlaceholder text="[תמונה: דשבורד Monday.com עם ווידג'ט React מוטמע]" />
      </Section>

      <Section title="טכנולוגיות המדריך">
        <Tabs tabs={techTabs} defaultTab={0} />
      </Section>

      <Section title="למה דווקא הגישה הזו?">
        <div className={styles.benefitsGrid}>
          <Card variant="primary" icon="🎯" title="מותאם לכם">
            <ul>
              <li>שליטה מלאה על הקוד והעיצוב</li>
              <li>התאמה מושלמת לצרכי הארגון</li>
              <li>אפשרות להוסיף כל פונקציונליות</li>
            </ul>
          </Card>

          <Card variant="accent" icon="📈" title="מדרגי">
            <ul>
              <li>מתחיל מפשוט ומתפתח עם הצרכים</li>
              <li>אפשרות להוסיף מסדי נתונים חיצוניים</li>
              <li>תמיכה בעומסים גבוהים</li>
            </ul>
          </Card>

          <Card variant="success" icon="🔗" title="משולב">
            <ul>
              <li>חלק טבעי מסביבת העבודה ב-Monday.com</li>
              <li>גישה ל-Monday API בצורה ישירה</li>
              <li>אפשרות לסנכרון נתונים דו-כיווני</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section title="שאלות נפוצות">
        <Accordion items={faqItems} defaultExpanded={0} />
      </Section>

      <Section>
        <Card variant="highlighted" icon="🎉" title="מוכנים להתחיל?">
          <p className={styles.ctaText}>
            עברו לעמוד ההגדרה כדי ליצור את הפרויקט הראשון שלכם, או המשיכו לדפדף במדריך כדי ללמוד עוד על הטכנולוגיות והאפשרויות!
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton} onClick={() => window.location.hash = '/setup'}>
              🚀 התחל עכשיו
            </button>
            <button className={styles.secondaryButton} onClick={() => window.location.hash = '/use-cases'}>
              💡 ראה דוגמאות
            </button>
          </div>
        </Card>
      </Section>
    </div>
  );
}

export default Home; 