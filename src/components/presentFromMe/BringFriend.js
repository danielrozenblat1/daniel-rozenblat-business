import friends from "../../icons/wired-lineal-645-people-handshake-transaction.json"
import styles from "./BringFriend.module.css"
import { Player } from "@lordicon/react"
import { useNavigate } from "react-router-dom"
import { useEffect, useRef } from "react"

const BringFriend=()=>{
    const navigate=useNavigate()
const playerRef1=useRef(null)

useEffect(()=>{
    playerRef1?.current?.playFromBeginning();



},[])
    const handleClick = () => {
        // Navigate to the top of the page
        window.scrollTo(0, 0);
    
        // Perform your navigation
        navigate('/חבר מביא חבר');
      };

return <>
    <div className={styles.title}>חבר מביא חבר</div>
    <div className={styles.subtitle}>לחצו על האייקון כדי לגלות מהי המדיניות</div>
    <div className={styles.icon} style={{cursor:"pointer"}} onClick={handleClick}><Player 
        ref={playerRef1} 
        size="100%"
     
        onComplete={() => setTimeout(() => playerRef1.current?.playFromBeginning(), 1000)}
        icon={friends}/></div>
         
    </>
}
export default BringFriend