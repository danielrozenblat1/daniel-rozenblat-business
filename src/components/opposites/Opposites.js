import styles from "./Opposites.module.css"
import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";
import Button from "../Button/Button";
import ScrollReveal from "scrollreveal";
const Opposites=(props)=>{
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
      const handleComplete3 = () => {
        setTimeout(() => {
          playerRef3?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
      const playerRef1 = useRef(null);
      const playerRef2 = useRef(null);
      const playerRef3 = useRef(null);
    useEffect(()=>{
      playerRef1?.current?.playFromBeginning();
      playerRef2?.current?.playFromBeginning();
      playerRef3?.current?.playFromBeginning();
    },[])
    
    useEffect(()=>{
      ScrollReveal().reveal(`.${styles.title}`, {
          duration: 1000,
          distance: "30px",
          origin: "top", // Start from the right side
          easing: "ease-out",
          reset:false,
          viewFactor: 0.2,
          interval: 300, // Delay between each element
          delay: 200, // Delay before the animation starts
          scale: 1, // Set scale to 1 or null
        });
        ScrollReveal().reveal(`.${styles.description}`, {
          duration: 1000,
          distance: "30px",
          origin: "right", // Start from the right side
          easing: "ease-out",
          reset:false,
          viewFactor: 0.2,
          interval: 300, // Delay between each element
          delay: 200, // Delay before the animation starts
          scale: 1, // Set scale to 1 or null
        });
   
  },[])

    
return <>
<div className={styles.wrapper}  itemscope itemtype="http://schema.org/WebPage">

<div className={styles.icon}>
<Player icon={props.icon1} ref={playerRef1} size="100%" loop={true} onComplete={handleComplete}></Player>
</div>
<div className={styles.wrap}>
<div className={styles.title} itemprop="headline">הסרת התנגדויות וחסמים</div>
<div className={styles.description} itemprop="description">בעזרת המסרים שתבחר "לשתול" + פתרון ההתנגדויות הנפוצות שאתה מקבל בשיחות המכירה שלך ועקרונות פסיכולוגים שמשולבים לאורך הדף - החסמים של הליד שלך מתחילים לרדת לאט לאט</div>
</div> 

</div>

<div className={styles.wrapper}>
<div className={styles.wrap}>
<div className={styles.title} itemprop="headline">יצירת אמון</div>
<div className={styles.description} itemprop="description">ליד שלא מאמין בך לא יקנה ממך ! לכן המטרה של דף נחיתה היא להציג תוצאות מהמוצר שלך , להציג לקוחות ממליצים , להציג אותך ואת הסיפור שלך ,לגרום לליד להאמין שאתה האדם הנכון עבורו ולרצות לשמוע ממך עוד </div>
</div> 
<div className={styles.icon}>
<Player icon={props.icon2} ref={playerRef2} size="100%" loop={true} onComplete={handleComplete2}></Player>
</div>
</div>

<div className={styles.wrapper}>

<div className={styles.icon}>
<Player icon={props.icon3} ref={playerRef3} size="100%" loop={true} onComplete={handleComplete3}></Player>
</div>
<div className={styles.wrap}>
<div className={styles.title} itemprop="headline">תדמית</div>
<div className={styles.description} itemprop="description">בעידן של היום עסק ללא תדמית דיגיטלית הוא עסק שמפסיד מאות לקוחות פוטנציאלים מדי יום ! , כשמישהו מתעניין בבעיה שאתה יכול לפתור לו הוא יחפש לקרוא עליך עוד ולראות הוכחות לכל ההבטחות שלך! אם התדמית שלך לא קיימת - הוא עובר למתחרים</div>
</div> 

</div>
<div className={styles.center}><Button text="לחץ כאן לשיחת ייעוץ חינמית"/></div>
</>

}
export default Opposites