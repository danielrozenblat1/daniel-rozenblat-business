import styles from "./Me.module.css"
import daniel1 from "../../videos/דניאל רוזנבלט סרטון תדמית 3.mp4"
import daniel2 from "../../videos/דניאל רוזנבלט סרטון תדמית 2.mp4"
import daniel3 from "../../videos/דניאל רוזנבלט סרטון תדמית.mp4"
import Recommends from "../recommends/Recommends"
const Me=()=>{
return <>
<div className={styles.subTitle} id="קצת עלי">אז מי אני?</div>
<h1 className={styles.title}>דניאל רוזנבלט</h1>
<div className={styles.description}>"עזרתי לעשרות עסקים להשפיע על קהל היעד שלהם בעזרת ניתוח מדוייק של קהל היעד שלהם ,מלל מדוייק שמצליח להזיז את קהל היעד מרגש א' לרגש ב' וחווית משתמש נגישה ,קלילה ומניעה לפעולה. <br/> כל עוד אני יכול לתת מהידע שלי ולעזור לעסקים להרוויח ממנו - אני כאן !"</div>

<div className={styles.row}>
<video className={styles.video} src={daniel1} alt="דניאל רוזנבלט סרטון תדמית 1"   autoPlay loop muted playsInline controls/>
<video className={styles.video} src={daniel2} alt="דניאל רוזנבלט סרטון תדמית 2" autoPlay loop muted playsInline controls/>
<video className={styles.video} src={daniel3} alt="דניאל רוזנבלט סרטון תדמית 3" autoPlay loop muted playsInline controls/>
</div>
<Recommends/>
</>


}
export default Me