import React from 'react';
import Section from '../../components/Section/Section';
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder';
import CodeBlock from '../../components/CodeBlock/CodeBlock';

function Embedding() {
  return (
    <Section title="סעיף 4: הטמעת היישום האינטראקטיבי שלך ב-Monday.com">
      <p>
        לאחר שפרסתם בהצלחה את יישום ה-React שלכם ל-GitHub Pages,
        השלב הבא הוא הטמעתו בלוח המחוונים של Monday.com באמצעות ווידג'ט "הטמע הכל".
      </p>

      <h3>הבנת יכולות ווידג'ט "הטמע הכל"</h3>
      <p>
        ווידג'ט "הטמע הכל" של Monday.com מאפשר לכם להטמיע כל תוכן אינטרנט
        על ידי מתן כתובת URL ציבורית. זהו בעצם iframe שמציג את התוכן שלכם
        בתוך הדשבורד של Monday.com.
      </p>
      <ImagePlaceholder text="[Image of Monday.com Embed Anything widget setup]" />
      <p>
        חשוב לזכור שווידג'ט זה מיועד לתוכן סטטי או לתוכן בצד הלקוח בלבד,
        מכיוון שהוא אינו תומך בחיבור ישיר לשרת קצה אחורי בתוך Monday.com.
      </p>

      <h3>שלבים מפורטים להוספה והגדרת הווידג'ט</h3>
      <ol>
        <li>
          <strong>נווטו ללוח מחוונים ב-Monday.com:</strong> פתחו את לוח המחוונים שאליו תרצו להוסיף את היישום.
        </li>
        <li>
          <strong>הוספת הווידג'ט:</strong> לחצו על "Add Widget" (הוסף ווידג'ט) ובחרו "Embed Anything" (או "HTML Embedded").
          <ImagePlaceholder text="[Image of Add Widget menu in Monday.com]" />
        </li>
        <li>
          <strong>הדבקת ה-URL:</strong> העתיקו את כתובת ה-URL הציבורית של יישום ה-React שלכם מ-GitHub Pages (לדוגמה: `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/#/`).
          <br />
          <p>
            ודאו שאתם כוללים את ה-`#/` בסוף ה-URL אם השתמשתם ב-`HashRouter` עבור הניתוב ב-React.
          </p>
          <CodeBlock language="text">
            https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/#/
          </CodeBlock>
          <ImagePlaceholder text="[Image of pasting URL into Embed Anything widget settings]" />
        </li>
        <li>
          <strong>התאמת גודל:</strong> ניתן להתאים את גודל הווידג'ט בתוך הדשבורד של Monday.com
          כדי לוודא שהיישום שלכם מוצג בצורה מיטבית.
        </li>
      </ol>

      <h3>שיקולי אבטחה וביצועים</h3>
      <p>
        היישום המוטמע שלכם פועל בסביבת iframe מבודדת, מה שמספק רמת אבטחה טובה.
        הוא אינו יכול לגשת ישירות לנתוני Monday.com או לתפעל את ה-DOM של Monday.com.
      </p>
      <p>
        אם אתם זקוקים לאינטראקציה עם נתוני Monday.com (לדוגמה, קריאה או עדכון של פריטים),
        היישום המוטמע שלכם יצטרך להשתמש ב-API של Monday.com בנפרד, עם אימות משלו
        (לדוגמה, באמצעות Personal API Token).
      </p>
      <p>
        וודאו שהיישום שלכם ממוטב לביצועים (גודל קוד קטן, טעינה מהירה)
        כדי להבטיח חווית משתמש חלקה בתוך הווידג'ט המוטמע.
      </p>
    </Section>
  );
}

export default Embedding; 