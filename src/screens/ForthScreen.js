import Knowledge from "../components/Knowledge/Knowledge";
import styles from "./ForthScreen.module.css"
import { FaPython, FaJs, FaCode, FaLinux, FaHtml5, FaDatabase, FaPhp, FaJava, FaCPlusPlus, FaBash, FaReact } from 'react-icons/fa';
import { IoLogoMongoDB, IoLogoCss3, IoLogoReact } from 'react-icons/io';
const ForthScreen=()=>{


return <>
<div className={styles.subTitle}>כבר 8 שנים שאני חי ונושם תכנות וקוד, וזה הזמן שכל הידע שצברתי יבוא לידי ביוטי בדפי הנחיתה שלכם : באלמנטים במיוחדים, באפקטים המיוחדים ובשליטה בכל פרט ופרט בדף שלכם </div>
<div className={styles.title}>יש לי ידע ב..</div>
<div className={styles.row}>
      {/* Passing FaJs component as a prop */}
      <Knowledge icon={FaPython} text="Python" />
        <Knowledge icon={FaJs} text="JavaScript" />
        <Knowledge icon={FaDatabase} text="MONGO DB" />
        <Knowledge icon={IoLogoCss3} text="CSS" />
        <Knowledge icon={FaHtml5} text="HTML" />
        <Knowledge icon={FaReact} text="React" />

        <Knowledge icon={FaJava} text="Java" />
 

    </div>

</>


}
export default ForthScreen