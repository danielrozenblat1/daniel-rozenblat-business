import styles from "./BeautyFirstScreen.module.css"
import {useEffect,useRef, useState} from "react"
import ScrollReveal from "scrollreveal";
import TextTransition, { presets } from "react-text-transition";
import { AlertCircle, Camera, Users, Book } from 'lucide-react';
const BeautyFirstScreen=(props)=>{
    const TEXTS = [
        
        "התדמית שלך",
        "שיחות המכירה שלך",
        "העסק שלך",
        "ההתנהלות שלך מול מתעניינות",
      ];
      
        const [index, setIndex] = useState(0);
      
        useEffect(() => {
          const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            4000 // שינוי כל 3 שניות
          );
          return () => clearTimeout(intervalId);
        }, []);
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
<div className={styles.description}>אם את עצמאית בתחום הביוטי</div>
        <div className={styles.specialDescription}>
                <AlertCircle className={styles.icon} size={32} />
                <span>הגעת למקום הנכון</span>
                <AlertCircle className={styles.icon} size={32} />
        </div>
        {/* <div className={styles.title}>הכירי את המוצר שהולך לייעל את</div>
        <h2 className={styles.transitionContainer}>
        <TextTransition springConfig={presets.wobbly} inline className={styles.textTransition}>
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </h2> */}

</>
 

}
export default BeautyFirstScreen