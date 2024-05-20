import styles from "./FriendsPage.module.css"
import {Link as NavLink} from "react-scroll"
import { useNavigate } from "react-router-dom";
const FriendsPage=()=>{
    const navigate = useNavigate();

    const handleNavigateHome = () => {
      navigate('/');
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };


return <>
<div className={styles.title}>חבר מביא חבר</div>
<div className={styles.header}>המדיניות מחולקת ל-2</div>
<div className={styles.row}>

<div className={styles.left}>
    <div className={styles.header}>עדיין לא לקוח/ה שלי</div>
    <div className={styles.subtitle}>באת יחד עם חבר/ה ? קיבלתם שניכם 15% הנחה על דף נחיתה !</div>
    <div className={styles.subtitle}>הגעת דרך לקוח/ה קיים שלי ? קיבלת 10% הנחה על דף נחיתה !</div>

</div>

<div className={styles.right}>
<div className={styles.header}>כבר לקוח/ה שלי</div>
<div className={styles.subtitle}>חבר/ה שלך רכשו ממני דף נחיתה דרכך ? קיבלת ממני שעת עבודה לצורכי תחזוקה ושינוים בחינם  !</div>
<div className={styles.subtitle}> 2 חברים שלך רכשו ממני דף נחיתה דרכך ? קיבלת ממני 200 שקלים ושעת עבודה חינמית לצורכי תחזוקה ושינויים בחינם !</div>

</div>
<NavLink className={styles.back} to="/"  onClick={handleNavigateHome}>חזרה לעמוד הראשי</NavLink>
</div>
</>

}
export default FriendsPage