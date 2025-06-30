# מדריך GitHub Pages ו-Monday.com

מדריך אינטראקטיבי ליצירת יישומי React והטמעתם ב-Monday.com באמצעות GitHub Pages.

## התקנה

1. שיכפול הפרויקט:
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

2. התקנת התלויות:
```bash
npm install
```

3. הפעלת הפרויקט בצורה מקומית:
```bash
npm start
```

## פריסה

לפריסה ל-GitHub Pages:

```bash
npm run deploy
```

## מבנה הפרויקט

```
src/
├── components/          # רכיבים לשימוש חוזר
│   ├── CodeBlock/      # הצגת קוד
│   ├── ImagePlaceholder/ # תמונות מציינות מיקום
│   ├── Navbar/         # סרגל ניווט
│   └── Section/        # סעיפי המדריך
├── pages/              # עמודי המדריך
│   ├── Home/          # עמוד הבית
│   ├── Setup/         # הגדרה
│   ├── Deployment/    # פריסה
│   ├── Embedding/     # הטמעה
│   └── UseCases/      # מקרי שימוש
├── styles/            # סגנונות גלובליים
│   ├── globals.css    # סגנונות כלליים
│   ├── variables.css  # משתני CSS
│   └── typography.css # טיפוגרפיה
├── App.js             # רכיב ראשי
└── index.js           # נקודת כניסה
```

## תכונות

- עיצוב מותאם לעברית (RTL)
- רספונסיבי לכל המכשירים
- סגנונות מודולריים עם CSS Modules
- ניתוב עם React Router
- מוכן לפריסה ב-GitHub Pages

## השימוש

1. התאימו את השדה `homepage` בקובץ `package.json`
2. הפעילו `npm run deploy` לפריסה
3. הגדירו GitHub Pages במאגר שלכם
4. הטמיעו את ה-URL בווידג'ט "הטמע הכל" של Monday.com 