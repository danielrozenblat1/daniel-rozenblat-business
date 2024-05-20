import styles from "./ThirdScreen.module.css"
import {Player} from "@lordicon/react"
import daniel from "../images/דף נחיתה דניאל רוזנבלט.png"
import { useEffect, useRef } from "react"
import Opposites from "../components/opposites/Opposites"
import tadmit from "../icons/wired-lineal-1023-portfolio.json"
import hot from "../icons/wired-lineal-642-equality-proportions-chart-human.json"
import noResist from "../icons/wired-lineal-645-people-handshake-transaction.json"
import ScrollReveal from "scrollreveal"
const ThirdScreen=()=>{
  


return <>
<div className={`${styles.wrap}`}>
    {/* <div className={styles.shape}></div>
    <div className={styles.shape}></div> */}
{/* <div className={styles.title}>איך אני הופך ליד קר לרותח?</div>
{/* <div className={styles.center}><img className={styles.image} src={daniel} alt="דניאל רוזנבלט דפי נחיתה"/></div>  */}
{/* <h1 className={styles.title}>דף נחיתה</h1> */}
<h2 className={styles.subTitle}>אז מה זה בעצם דף נחיתה?</h2>
<div className={styles.description}>דף נחיתה הוא אתר אינטרנטי שכשמו כן הוא - דף -  
 שבו נוחתים כל הלידים מהשיווק שלך.
כשליד מסתקרן ממך כשהוא נחשף אליך מהשיווק הוא מגיע עם כמות חסמים עצומה ו 0 אמון בך מהסיבה הפשוטה - רדאר הבולשיט היום גבוה ואנשים כבר לא מאמינים לכל מה שמוכרים להם
</div>
<div className={styles.subTitle}>הם רוצים לראות הוכחות !</div>
<h1 className={`${styles.title} ${styles.bold}`}>וכאן היתרון של דף הנחיתה</h1>
<h2 className={styles.subTitle}>יש לו 3 תפקידים עיקריים והם..</h2>
<Opposites  icon1={hot}  icon2={noResist}  icon3={tadmit} />
</div>
</>


}
export default ThirdScreen