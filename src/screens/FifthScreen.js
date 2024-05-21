import Line from "../components/pipeline/Line"
import styles from "./FifthScreen.module.css"
import one from "../icons/wired-lineal-2435-number-1 (1).json"
import two from "../icons/wired-lineal-2434-number-2 (1).json"
import three from "../icons/wired-lineal-2433-number-3 (1).json"
import four from "../icons/wired-lineal-2432-number-4 (1).json"
import five from "../icons/wired-lineal-2431-number-5.json"
import Button from "../components/Button/Button"
import {Link as NavLink} from "react-scroll"
import MyPresent from "../components/presentFromMe/MyPresent"
import BringFriend from "../components/presentFromMe/BringFriend"
import Takanon from "../components/takanon/Takanon"
import { useNavigate } from "react-router-dom"
const FifthScreen = () => {
const navigate=useNavigate()
  const handleNavigateHome = () => {
    navigate('/תקנון');
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
    return (
      <div className={styles.container}  itemscope itemtype="http://schema.org/WebPage">
        <div className={styles.title}  itemprop="headline">תהליך העבודה איתי</div>
        <div className={styles.subTitle} itemprop="description">אתה בטח שואל את עצמך "איך הוא יודע איך לגעת בקהל היעד שלי בכלל ? אני מכיר את קהל היעד שלי הכי טוב והוא לא מכיר אותו בכלל "</div>
        <Line side="right" text="טופס ניתוח ופיצוח קהל יעד" icon={one}/>
        <div className={styles["line-divider"]}></div>
        <div className={styles.description}>לפני תחילת העבודה את/ה תקבל טופס שבו נבין מי קהל היעד שלך לעומק , מה הבעיה העיקרית שלו , ואיך נוכל להשפיע עליו בצורה שתניע אותו להשאיר לך פרטים</div>
        <div className={styles["line-divider"]}></div>
        <Line side="left" text="פגישה איתי"  icon={two}/>
        <div className={styles["line-divider"]}></div>
        <div className={styles.description}  itemprop="description">בפגישה איתי נעבור על הטופס שלך, אשאל אותך שאלות מקצועיות , נבין מה מדגישים בדף ואת המבנה שלו , בפגישה נעבור גם על פרטים טכניים שנחוצים להשלמת התהליך</div>
        <div className={styles["line-divider"]}></div>
        <Line side="right" text="סקיצה ראשונית" icon={three} />
        <div className={styles["line-divider"]}></div>
        <div className={styles.description}  itemprop="description">אתה תקבל ממני סקיצה ראשונית לדף שלך ומעכשיו נפתח זמן התיקונים והשינויים</div>
        <div className={styles["line-divider"]}></div>
        <Line side="left" text="זמן תיקונים ושינויים" icon={four} />
        <div className={styles["line-divider"]}></div>
        <div className={styles.description}  itemprop="description">זה הזמן לתיקונים אחרונים - צבעים, תמונות , מלל וכל מה ש"מציק לך בעין" </div>
        <div className={styles["line-divider"]}></div>
        <Line side="right" text="הדף שלך באוויר !" icon={five} />
        <div className={styles["line-divider"]}></div>
        <div className={styles.description}  itemprop="description">לאחר סיום השינויים, הדף שלך עולה לאוויר וכולו שלך!</div>
        <div className={styles.center}><Button text="דניאל, אני רוצה לשמוע ממך עוד"/></div>
        <MyPresent/>
        <BringFriend/>
    <NavLink to="/תקנון"  onClick={handleNavigateHome} className={styles.href}>לתקנון לחץ כאן</NavLink>
      </div>
   
      
    );
  };
  
  export default FifthScreen;