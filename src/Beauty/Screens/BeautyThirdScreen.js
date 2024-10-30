import styles from "./BeautyThirdScreen.module.css"
import {useEffect,useRef} from "react"
import ScrollReveal from "scrollreveal";
import beauty from "../../images/תחום הביוטי.png"
import { AlertCircle, ArrowDown } from "lucide-react";

import WorksBeauty from "../worksBeauty/Works";
const BeautyThirdScreen=(props)=>{

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



<div className={styles.title}>אל תדאגי!</div>
<div className={styles.description}>אני לא אשאיר אותך בלי אפשרות להתרשם מחלק מהדפים שבניתי ( גם בתחום הביוטי וגם בעוד תחומים מגוונים)</div>
<WorksBeauty/>
</>


}
export default BeautyThirdScreen