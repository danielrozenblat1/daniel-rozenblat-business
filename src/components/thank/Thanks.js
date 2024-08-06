import Works from "../works/Works"
import styles from "./Thanks.module.css"
import daniel from "../../videos/דניאל רוזנבלט סרטון תודה.mp4"   
import Recommends from "../recommends/Recommends"
const Thanks=()=>{


return <>
<div className={styles.title}>תודה על האמון בי ! </div>
<div className={styles.subtitle}>אתה בהחלט בדרך הנכונה ! <br/> עד השיחה שלנו.. מוזמן לעיין שוב בדפים שהכנתי ללקוחות שלי</div>
{/* <div className={styles.center}><video className={styles.video} src={daniel} alt="דניאל רוזנבלט סרטון תודה" autoPlay loop muted playsInline controls/></div> */}
<Works/>

<Recommends/>
<div className={styles.subtitle}>כולי תקווה שאת/ה תהיה התמונה הבאה כאן</div>
</>


    }
    export default Thanks