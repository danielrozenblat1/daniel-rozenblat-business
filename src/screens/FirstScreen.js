import styles from "./FirstScreen.module.css"
import {useEffect,useRef} from "react"
import { Player } from "@lordicon/react";
import coldToHot from "../icons/wired-lineal-1059-music-stage-lights-concert-hover-pinch (1).json"
import ScrollReveal from "scrollreveal";
import { Link as ScrollLink } from "react-scroll";
const FirstScreen=(props)=>{

  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2500); // play again after 2.5 seconds
  };
  const playerRef1 = useRef(null);
useEffect(()=>{
  playerRef1?.current?.playFromBeginning();
},[])
useEffect(()=>{
  ScrollReveal().reveal(`.${styles.title}`, {
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
    ScrollReveal().reveal(`.${styles.subTitle}`, {
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
    ScrollReveal().reveal(`.${styles.btn}`, {
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
    ScrollReveal().reveal(`.${styles.icon}`, {
      duration: 1000,
      distance: "30px",
      origin: "left", // Start from the right side
      easing: "ease-out",
      reset:false,
      viewFactor: 0.2,
      interval: 300, // Delay between each element
      delay: 200, // Delay before the animation starts
      scale: 1, // Set scale to 1 or null
    });
},[])


return <>
<div className={`${styles.wrapper} ${styles.playing} `} itemscope itemtype="http://schema.org/WebPage">
 <div className={styles.shape}></div>
<div className={styles.shape}></div>
<div className={styles.icon}>
<Player icon={coldToHot} ref={playerRef1} size="100%" loop={true} onComplete={handleComplete}></Player>
</div>
<div className={styles.wrap}>
<div className={styles.subTitle} itemprop="headline"></div>
<div className={styles.title} itemprop="mainEntityOfPage">איך לשלוט במה שהמתעניינים רואים <div className={styles.bold}>ומבינים</div> על העסק שלך לפני השיחה איתם</div>
{/* <div className={styles.subTitle}>בעזרת דף נחיתה ממיר, תוכל להדגיש בצורה תדמיתית יותר את הערך שלך, להסיר חסמים ואי וודאויות מראש ולהגביר את האמון בך ובעסק שלך</div> */}
<div className={styles.btn}><ScrollLink to="צור קשר" smooth={true} duration={1000} offset={-100}><button  className={styles.button}>לחץ כאן לשיחת ייעוץ חינמית</button></ScrollLink></div>

</div>


</div>
</>


}
export default FirstScreen