import React from 'react';
import styles from './Me.module.css';
import daniel from "../../images/דניאל רוזנבלט.png"
import CountingUp from '../count/CountUp';
import MessageButton from '../MessageButton/Button';


const AboutMeBeauty = () => {
  


  return <>
      <div className={styles.header} >קצת עלי</div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={daniel} alt="בונה דפי נחיתה ואתרי תדמית" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>דניאל רוזנבלט</h1>

        <div className={styles.subtitle}>
לא עוד אחד שיבנה לך דף נחיתה
        </div>
        <div className={styles.description}>
אני מאמין שהעידן של היום  בעולם העסקים הוא מאוד שונה מפעם והמרכיב העיקרי למכירות שלנו הוא 
        </div>
        <p className={styles.subtitle}>
אמון
        </p>
        <p className={styles.description}>
כל עוד יאמינו לך/בשירות שלך/להבטחה שלך יקנו ממך!
        </p>
        <p className={styles.subtitle}>
וכשנוצר האמון - ברוב הפעמים המחיר כמעט ולא מהווה גורם בהחלטה
        </p>
    
      <p className={styles.description}>
רק בשנה האחרונה בניתי דפי נחיתה ואתרי תדמית לעשרות עסקים בתחום הביוטי (קורסים,קורסים דיגיטלים,השתלמויות בתחומים השונים,מאפרות,לק ג'ל,שפתיים,גבות,ריסים,סלוני יופי...)
        </p>
      
 
        <p className={styles.description}>
ואני בטוח שעם דף נחיתה ממוקד בקהל היעד שלך ומדוייק לעסק שלך, להתנגדויות ולשאלות שאת מקבלת החיים שלך בעסק יהיו הרבה יותר קלים
        </p>
    </div>
 
   </div>
<MessageButton text="דניאל, בוא נדבר!"/>
    </>
};

export default AboutMeBeauty;