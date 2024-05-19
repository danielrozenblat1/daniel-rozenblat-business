import React, { useEffect, useRef } from "react";
import styles from "./Line.module.css"; // ייבוא קובץ ה-CSS
import { Player } from "@lordicon/react";
import ScrollReveal from "scrollreveal"
const Line = ({ number, text, side,icon }) => {
  const containerClass = side === "right" ? styles["line-container-right"] : styles["line-container-left"];
  const playerRef1=useRef(null);
  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2500); // play again after 2.5 seconds
  };

  useEffect(()=>{
    playerRef1?.current?.playFromBeginning();
    

      ScrollReveal().reveal(`#right`, {
          duration: 1000,
          distance: "100px",
          origin: "left", // Start from the right side
          easing: "ease-out",
          reset:false,
          viewFactor: 0.2,
          interval: 300, // Delay between each element
          delay: 200, // Delay before the animation starts
          scale: 1, // Set scale to 1 or null
        });
        ScrollReveal().reveal(`#left`, {
          duration: 1000,
          distance: "100px",
          origin: "right", // Start from the right side
          easing: "ease-out",
          reset:false,
          viewFactor: 0.2,
          interval: 300, // Delay between each element
          delay: 200, // Delay before the animation starts
          scale: 1, // Set scale to 1 or null
        });
   

 },[])
  return (
    <div className={containerClass}>
      <div className={styles.rectangle}>
        {text}
      </div>
      <div className={styles.circle} id={side}>
      <Player icon={icon} ref={playerRef1} size="95%" loop={true} onComplete={handleComplete}></Player>
      </div>
    </div>
  );
};

export default Line;
