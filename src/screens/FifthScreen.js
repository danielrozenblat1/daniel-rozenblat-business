import Line from "../components/pipeline/Line"
import styles from "./FifthScreen.module.css"
import one from "../icons/wired-lineal-2435-number-1 (1).json"
import two from "../icons/wired-lineal-2434-number-2 (1).json"
import three from "../icons/wired-lineal-2433-number-3 (1).json"
import four from "../icons/wired-lineal-2432-number-4 (1).json"
import five from "../icons/wired-lineal-2431-number-5.json"
import Button from "../components/Button/Button"
const FifthScreen = () => {
    return (
      <div className={styles.container}>
        <div className={styles.title}>תהליך העבודה איתי</div>
        <div className={styles.subTitle}>אתה בטח שואל את עצמך "איך הוא יודע איך לגעת בקהל היעד שלי בכלל ? אני מכיר את קהל היעד שלי הכי טוב והוא לא מכיר אותו בכלל "</div>
        <Line side="right" text="טופס ניתוח ופיצוח קהל יעד" icon={one}/>
        <div className={styles["line-divider"]}></div>
        <Line side="left" text="פגישה איתי"  icon={two}/>
        <div className={styles["line-divider"]}></div>
        <Line side="right" text="סקיצה ראשונית" icon={three} />
        <div className={styles["line-divider"]}></div>
        <Line side="left" text="זמן תיקונים ושינויים" icon={four} />
        <div className={styles["line-divider"]}></div>
        <Line side="right" text="הדף שלך באוויר !" icon={five} />
        <div className={styles.center}><Button text="דניאל, אני רוצה לשמוע ממך עוד"/></div>
      </div>
      
    );
  };
  
  export default FifthScreen;