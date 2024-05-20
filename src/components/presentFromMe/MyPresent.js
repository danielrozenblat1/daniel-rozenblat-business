import { useEffect,useRef } from "react"
import styles from "./MyPresent.module.css"
import present from "../../icons/wired-lineal-412-gift (1).json"
import { Player } from "@lordicon/react"
import { useNavigate } from "react-router-dom"

const  MyPresent = ()=>{
    const playerRef1 = useRef(null);
    const navigate=useNavigate()
useEffect(()=>{
    playerRef1?.current?.playFromBeginning();



},[])
const handleClick = () => {
    // Navigate to the top of the page
    window.scrollTo(0, 0);

    // Perform your navigation
    navigate('/מתנה');
  };
    return <div className={styles.present} id="מתנה ממני">

        <div className={styles.title}>מתנה ממני</div>
        <div className={styles.subtitle}>כל התהליך שהקהל היעד שלך עובר בדף הנחיתה משלב בתוכו המון עקרונות פסיכולוגיים שכל מטרתם היא להשפיע ! ,לאחר עשרות ספרים שקראתי בנושא השפעה ושינוי דעות ולאחר מספר שנים שאני מתעניין ומעמיק בתחום ההשפעה והפסיכולוגיה הצרכנית , החלטתי לסכם עבורך את העקרונות שהכי עוזרים לי בדפי הנחיתה של הלקוחות שלי ובכללי להשפיע על בני אדם והנה הם כאן עבורך בחינם !</div>
   
        <div className={styles.subtitle}>הקליקו על המתנה</div>
        <div className={styles.icon} style={{cursor:"pointer"}} onClick={handleClick}><Player 
        ref={playerRef1} 
        size="100%"
     
        onComplete={() => setTimeout(() => playerRef1.current?.playFromBeginning(), 1000)}
        icon={present}/></div>

  

    </div>


}
export default MyPresent