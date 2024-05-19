import styles from "./FirstScreen.module.css"
import {useEffect,useRef} from "react"
import { Player } from "@lordicon/react";
import coldToHot from "../icons/wired-lineal-818-cold-temperature.json"
const FirstScreen=()=>{

  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2500); // play again after 2.5 seconds
  };
  const playerRef1 = useRef(null);
useEffect(()=>{
  playerRef1?.current?.playFromBeginning();
},[])


return <>
<div className={`${styles.wrapper} ${styles.playing} `}>
 <div className={styles.shape}></div>
<div className={styles.shape}></div>
<div className={styles.icon}>
<Player icon={coldToHot} ref={playerRef1} size="100%" loop={true} onComplete={handleComplete}></Player>
</div>
<div className={styles.wrap}>
<div className={styles.subTitle}>אתה מתכוון לממש את הפוטנציאל העסקי שלך?</div>
<div className={styles.title}>גלה איך <div className={styles.bold}>דף נחיתה ממוקד</div> הופך את הלידים מקפואים לרותחים</div>
{/* <div className={styles.subTitle}>בעזרת דף נחיתה ממיר, תוכל להדגיש בצורה תדמיתית יותר את הערך שלך, להסיר חסמים ואי וודאויות מראש ולהגביר את האמון בך ובעסק שלך</div> */}
<div className={styles.btn}><button className={styles.button}>איך אני מחמם את הלידים שלי ?</button></div>

</div>


</div>
</>


}
export default FirstScreen