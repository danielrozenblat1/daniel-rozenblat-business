import styles from "./From.module.css"
import cold from "../../images/הודעות של ליד קר.png" 
import hot from "../../images/הודעות של לידים חמים.png"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
const From=()=>{
    
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
          ScrollReveal().reveal(`.${styles.image}`, {
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
     
    },[])
  
    return <>
    <div className={styles.title}>נמאס לך לקבל הודעות כמו..</div>
    <div className={styles.center}><img className={styles.image} src={cold} alt="הודעות של לידים קרים"/></div>
    <div className={styles.description}>הודעות כאלה הן הודעות של <div className={styles.bold}>לידים קרים</div> והן נוצרות בגלל 2 דברים : <br/> <div className={styles.bold}>חוסר אמון + חוסר וודאות</div></div>

    <div className={styles.title}>"אז איך אני מתחיל לקבל הודעות כמו..? "</div>
    <div className={styles.center}><img className={styles.image} src={hot} alt="הודעות של לידים חמים"/></div>

    <div className={`${styles.title} ${styles.bold2}`}>יצירת אמון</div>
    <div className={styles.description}>איך זה קורה ? מיד נגיע לזה.. אבל קודם כל, תבין את ההבדל בין התוצאות שתקבל מהבן אדם שעומד מאחורי ההודעות הקרות לבין התוצאות שתקבל מהבן אדם שעומד מאחורי ההודעות החמות</div>
    </>

    }
    export default From