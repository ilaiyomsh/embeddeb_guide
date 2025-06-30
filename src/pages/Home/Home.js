import React from 'react';
import Section from '../../components/Section/Section';
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder';
import styles from './Home.module.css'; // שימוש ב-CSS Modules

function Home() {
  return (
    <div className={styles.homePage}>
      <Section title="ברוכים הבאים למדריך GitHub Pages ו-Monday.com">
        <p>
          מדריך זה ילווה אתכם צעד אחר צעד בתהליך יצירת יישום React אינטראקטיבי,
          פריסתו ל-GitHub Pages, והטמעתו בווידג'ט "הטמע הכל" של Monday.com.
          הכוח של דפי אינטרנט אינטראקטיביים בצד לקוח בלבד, מוטמעים ישירות בלוח המחוונים שלכם,
          הוא עצום! זה מאפשר לכם להרחיב את יכולות Monday.com עם פונקציונליות מותאמת אישית ללא צורך בשרת.
        </p>
        <p>
          המטרה שלנו היא להעניק לכם את הידע והכלים ליצור פתרונות מותאמים אישית
          שישפרו את זרימות העבודה שלכם ויעצימו את הלוחות שלכם ב-Monday.com.
        </p>
        <ImagePlaceholder text="[Image of Monday.com Dashboard with Embedded Widget]" />
        <h3>למה דווקא React ו-GitHub Pages?</h3>
        <ul>
          <li>
            <strong>חינמי וקל לאירוח:</strong> GitHub Pages מספק אירוח סטטי בחינם, מושלם ליישומי צד לקוח.
          </li>
          <li>
            <strong>פריסה פשוטה:</strong> ספריית `gh-pages` מייעלת את תהליך הפריסה של React.
          </li>
          <li>
            <strong>אינטראקטיביות מלאה:</strong> React מאפשר בניית ממשקי משתמש דינמיים לחלוטין הפועלים בדפדפן.
          </li>
          <li>
            <strong>שילוב חלק:</strong> ווידג'ט "הטמע הכל" של Monday.com מקבל כל URL ציבורי.
          </li>
        </ul>
        <p className={styles.ctaText}>
          מוכנים להתחיל? נווטו בין הסעיפים בתפריט למעלה כדי ללמוד עוד!
        </p>
      </Section>
    </div>
  );
}

export default Home; 