import styles from "./BeautySecondScreen.module.css"
import {useEffect,useRef} from "react"
import ScrollReveal from "scrollreveal";
import beauty from "../../images/תחום הביוטי.png"
import { AlertCircle, ArrowDown } from "lucide-react";
import IconTextComponent from "../../components/can/Can";
import money from "../../icons/wired-outline-414-money-bag-dollar-hover-shake (1).json"
import tadmit from "../../icons/wired-outline-721-hand-with-phone-hover-scroll.json"
import trust from "../../icons/wired-outline-456-handshake-deal-hover-pinch.json"
const BeautySecondScreen=(props)=>{

//   const handleComplete = () => {
//     setTimeout(() => {
//       playerRef1?.current?.playFromBeginning();
//     }, 2500); // play again after 2.5 seconds
//   };
//   const playerRef1 = useRef(null);
// useEffect(()=>{
//   playerRef1?.current?.playFromBeginning();
// },[])
// useEffect(()=>{
//   ScrollReveal().reveal(`.${styles.title}`, {
//       duration: 1000,
//       distance: "30px",
//       origin: "right", // Start from the right side
//       easing: "ease-out",
//       reset:false,
//       viewFactor: 0.2,
//       interval: 300, // Delay between each element
//       delay: 200, // Delay before the animation starts
//       scale: 1, // Set scale to 1 or null
//     });
//     ScrollReveal().reveal(`.${styles.subTitle}`, {
//       duration: 1000,
//       distance: "30px",
//       origin: "right", // Start from the right side
//       easing: "ease-out",
//       reset:false,
//       viewFactor: 0.2,
//       interval: 300, // Delay between each element
//       delay: 200, // Delay before the animation starts
//       scale: 1, // Set scale to 1 or null
//     });
//     ScrollReveal().reveal(`.${styles.btn}`, {
//       duration: 1000,
//       distance: "30px",
//       origin: "right", // Start from the right side
//       easing: "ease-out",
//       reset:false,
//       viewFactor: 0.2,
//       interval: 300, // Delay between each element
//       delay: 200, // Delay before the animation starts
//       scale: 1, // Set scale to 1 or null
//     });
//     ScrollReveal().reveal(`.${styles.icon}`, {
//       duration: 1000,
//       distance: "30px",
//       origin: "left", // Start from the right side
//       easing: "ease-out",
//       reset:false,
//       viewFactor: 0.2,
//       interval: 300, // Delay between each element
//       delay: 200, // Delay before the animation starts
//       scale: 1, // Set scale to 1 or null
//     });
// },[])


return <>
<div className={styles.description}>לאחר שבניתי עשרות דפי נחיתה בתחום הביוטי</div>
<div className={styles.center}><img className={styles.image} alt="דף נחיתה תחום הביוטי" src={beauty}/></div>
<div className={styles.description}>ועזרתי ללקוחות שלי</div>
<div className={styles.row}>
    <IconTextComponent text="למכור הרבה יותר בקלות" icon={money}/>
    <IconTextComponent text="ליצור תדמית יוקרתית בדיגיטל" icon={tadmit}/>
    <IconTextComponent text="לבנות אמון עם המתעניינות בעסק שלהן עוד לפני השיחה איתן" icon={trust}/>
</div>
<div className={styles.title}>אני אומר לך בפה מלא</div>
<div className={styles.specialDescription}>
                <AlertCircle className={styles.icon} size={32} />
                <span>המוצר הזה משנה חיים</span>
                <AlertCircle className={styles.icon} size={32} />
        </div>
        <div className={styles.description}>אבל לפני שארחיב עוד..</div>
  <div className={styles.title}>תשמעי מאלו שכבר עשו את הצעד</div>
</>


}
export default BeautySecondScreen