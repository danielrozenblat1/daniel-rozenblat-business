import styles from "./FirstScreen.module.css";
import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";
import coldToHot from "../icons/wired-lineal-1059-music-stage-lights-concert-hover-pinch (1).json";
import ScrollReveal from "scrollreveal";
import { Link as ScrollLink } from "react-scroll";
import IconTextComponent from "../components/NewCan/Can";
import signature from "../icons/wired-lineal-1018-signature-sig-hover-pinch.json"
import you from "../icons/wired-lineal-955-demand-morph-coin (1).json"
import sell from "../icons/wired-lineal-101-price-tag-dollar-hover-flutter.json"
const FirstScreen = (props) => {
  const playerRef1 = useRef(null);
  
  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2500);
  };

  useEffect(() => {
    playerRef1?.current?.playFromBeginning();
  }, []);

  useEffect(() => {
    // Initialize ScrollReveal with custom configuration
    ScrollReveal().reveal(`.${styles.title}`, {
      duration: 1000,
      distance: "30px",
      origin: "top",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
    
    ScrollReveal().reveal(`.${styles.description}`, {
      duration: 1000,
      distance: "30px",
      origin: "right",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 400,
      scale: 1,
    });
  }, []);

  return <>
    <div className={props.scrolled ? styles.containerP :styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.descriptionWrapper}>
          במיוחד לבעלי עסקים "One Man Show"
        </div>

        
        <div className={styles.description}>
          פתחתם עסק כי אתם מומחים בתחום מסויים וחשבתם שאתם הולך להתעסק <div className={styles.bolder}>רק</div> במה שאתם אוהבים מהבוקר עד הערב
        </div>
        
        <div className={styles.title}>
          אבל אף אחד לא סיפר לכם
        </div>
        
        <div className={styles.description}>
          שזה דורש מכם הרבה יותר מ{" "}
          <div className={styles.bolder}>
            רק להיות טובים במה שאתם עושים
          </div>{" "}
       
        </div>
      </div>
              
      <div className={styles.title}>
      אתם מבינים שצריך
        </div>
    </div>
    <div className={styles.row}>
<IconTextComponent text="להראות שונים מהמתחרים ולגרום לאנשים להתעניין בערך שלכם" icon={you}/>
<IconTextComponent text="להצליח למכור את המוצר/שירות שלכם במחיר שאתם באמת רוצים לקבל" icon={sell}/>
<IconTextComponent text="להוכיח כל פעם מחדש למה דווקא אתם!" icon={signature}/>
    </div>
  </>
};

export default FirstScreen;