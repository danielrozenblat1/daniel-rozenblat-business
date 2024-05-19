import { Player } from "@lordicon/react";
import styles from "./Box.module.css"
import { useEffect, useRef } from "react";
const Box=(props)=>{

    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
      const playerRef1=useRef(null);
    useEffect(()=>{
       playerRef1?.current?.playFromBeginning();
    },[])
return <>
<div className={`${styles.box} ${styles.playing}`}>
<div className={styles.wave}></div>
<div className={styles.wave}></div>
<div className={styles.wave}></div>
<div className={styles.title}>{props.title}</div>
<div className={styles.icon}>
<Player icon={props.icon} ref={playerRef1} size="55%" loop={true} onComplete={handleComplete}></Player>
</div>
<div className={styles.description}>{props.description}</div>

</div>
</>

}
export default Box