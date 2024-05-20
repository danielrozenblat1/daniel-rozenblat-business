import styles from "./SecondScreen.module.css"
import stress from "../icons/wired-lineal-1249-heart-beat.json"
import timeWaste from "../icons/wired-lineal-2377-wasting-time.json"
import moneyWaste from "../icons/wired-lineal-290-coin.json"
import settle from "../icons/wired-lineal-756-bargain-off-promotion-percentage.json"
import preferedClient from "../icons/wired-lineal-2082-bribery.json"
import solidPrice from "../icons/wired-lineal-298-coins (1).json"
import MoreTime from "../icons/wired-lineal-45-clock-time (1).json"
import calm from "../icons/wired-lineal-629-yoga-male (1).json"
import Box from "../components/Box"
import Box2 from "../components/Box2"
import Button from "../components/Button/Button"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
const SecondScreen=()=>{
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

  
  },[])
  

    return <>
    <div className={styles.background}>
     <div className={styles.title}>ליד קר יוצר</div>
    <div className={styles.row}>
 <Box title="לחץ + עומס" icon={stress} description="כשהלידים שלך מגיעים קרים - אתה משקיע עוד זמן על שיחות המכירה שלך , עוד זמן על התוכן שלך ועוד זמן כדי להגיע להכנסה החודשית הרצוייה - מה שדורש ממך המון זמן ביום והופך אותך לעבד בעסק שלך "/>
 <Box title="בזבוז זמן" icon={timeWaste} description="כשהלידים שלך קרים הם מגיעים עם המון אי וודאות וחוסר אמון בך - מהסיבה הפשוטה - שהם לא מכירים אותך ! עשרות שעות בחודש נשרפות לך על נסיונות שכנוע והתמודדות עם הנגדויות וחסמים שהליד שלך מגיע אליך איתם מהשיווק"/>
 <Box title="התפשרות" icon={settle} description="כשהלידים שלך קרים אתה מתחיל להגיד לעצמך : אולי אני באמת יקר מדי ,אולי המוצר שלי לא שווה את הסכום הזה ולחתוך את המחיר שלך כדי להכניס לקוחות."/>
  <Box title="בזבוז כסף" icon={moneyWaste} description="כשהלידים שלך קרים - אתה מתחיל להוציא עוד כספים על השיווק שלך כדי להכניס עוד לקוחות - מה שבסוף מסתכם באלפי שקלים בחודש"/></div>


<div className={styles.title}>ליד חם יוצר</div>
    <div className={styles.row}>
 <Box2 title="מחיר יציב" icon={solidPrice} description="כשהלידים שלך מגיעים עם פחות חוסר וודאות - כשהם מכירים חלק ניכר מהעסק שלך - הם יתעניינו בערך שלך ובלעבור דווקא איתך את התהליך !"/>
 <Box2 title="זמן פנוי" icon={MoreTime} description="כשהליד שלך מגיע חם - אתה לא צריך לטפל בכלכך הרבה התנגדויות , אתה לא צריך לחזור על עצמך ולהסביר לו על העסק - כי הוא כבר מכיר הכל ! מה שבמצטבר חוסך לך זמן עצום !"/>
 <Box2 title="לקוח מועדף" icon={preferedClient} description="כשאתה עובד עם לידים שהגיעו אליך בגלל הערך שאתה מספק ולא שחתכת את המחיר שלך בחצי כדי לעבוד איתם - אתה נהנה הרבה יותר לעבוד איתם ולספק להם את המוצר שלך!"/>
  <Box2 title="רוגע ובטחון" icon={calm} description="כשאתה יודע שהלידים שלך מגיעים חמים - אתה מפסיק לפקפק בעסק שלך ובמוצר - אתה מתחיל להאמין שאתה שווה את המחיר שאתה דורש ואפילו יותר !"/>
  </div>
  <div className={styles.center}><Button text="לחץ כאן כדי להתחיל לקבל לידים חמים"/></div>
</div>
    </>
}
export default SecondScreen