import styles from "./WhoFits.module.css"
import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";
import dontFit from "../../icons/wired-lineal-1738-no-entry.json"
import fit from "../../icons/wired-lineal-37-approve-checked-simple.json"
const WhoFits=()=>{
    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
      const handleComplete2 = () => {
        setTimeout(() => {
          playerRef2?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };

      const playerRef1 = useRef(null);
      const playerRef2 = useRef(null);

    useEffect(()=>{
      playerRef1?.current?.playFromBeginning();
      playerRef2?.current?.playFromBeginning();
    
    },[])

return <>
<div className={styles.title}>דף נחיתה לא מתאים לכל בעל עסק</div>

<div className={styles.wrapper}>

{/* לא מתאים */}
<div className={styles.wrapY}>

<h1  className={styles.header}>למי מתאים דף נחיתה</h1>
<Player icon={fit} ref={playerRef1} size="20%" loop={true} onComplete={handleComplete}></Player>
<div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <div className={styles.description}>
   בעל עסק שמבין שמסע לקוח זה אחד השלבים הכי חשובים בעסק
                </div>
              
  </div>

  <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <div className={styles.description}>
             בעל עסק שמבין את החשיבות בלקבל לידים שמרוכזים בערך שהוא נותן
                </div>
              
  </div>

  <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <div className={styles.description}>
                בעל עסק שמבין את החשיבות של תדמית דיגיטלית בעידן הכי טכנווגי ומתקדם אי פעם !
                </div>
              
              
  </div>

  <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <div className={styles.description}>
             בעל עסק שמבין שדף נחיתה הוא השקעה שמחזירה את עצמה בתוך כמה לקוחות בודדים שאתה סוגר דרכו 
                </div>
              
              
  </div>
</div>

{/* מתאים */}

<div className={styles.wrapN}>

<h1 className={styles.header}>למי לא מתאים דף נחיתה</h1>
<Player icon={dontFit} ref={playerRef2} size="20%" loop={true} onComplete={handleComplete2}></Player>


<div className={styles.text}>
                <span className={styles.xmark}>×</span>
                <div className={styles.description}>
  בעל עסק שחשובה לו יותר כמות הלידים על האיכות שלהם
                </div>
              
  </div>

  <div className={styles.text}>
                <span className={styles.xmark}>×</span>
                <div className={styles.description}>
בעל עסק שמוכן להמשיך לשרוף שעות על לידים קרים 
                </div>
              
  </div>

  <div className={styles.text}>
                <span className={styles.xmark}>×</span>
                <div className={styles.description}>
              בעל עסק שלא מבין את היתרון בתדמית דיגיטלית בעידן הכי טכנולוגי אי פעם!
                </div>
              
  </div>
  <div className={styles.text}>
                 <span className={styles.xmark}>×</span>
                <div className={styles.description}>
             בעל עסק שחושב שדף נחיתה הוא מוצר שאפשר לסמן עליו וי ומחפש רק את המוצר הכי זול
                </div>
              
              
  </div>


    
</div>


</div>


</>

    }
    export default WhoFits