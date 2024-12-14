// ForthScreen.jsx
import NewBox from "../components/NewBox/NewBox"
import styles from "./ForthScreen.module.css"
import money from "../icons/wired-lineal-949-bonds-hover-pinch.json"
import forgot from "../icons/wired-lineal-2177-infinity-sign-hover-draw (1).json"
import phone from "../icons/wired-lineal-140-earphone-telephone-hover-calling.json"
import Button from "../components/Button/Button"
const ForthScreen = () => {
  return (
    <>
      <div className={styles.title} itemprop="headline">
        כמה פעמים יצא לך
      </div>
      <div className={styles.row}>
        <NewBox 
    
          description="לקבל פניות מאנשים שמעוניינים רק במחיר שלך ולא מעבר"
          icon={money}
        />
        <NewBox 
    
          description="לחזור על עצמך בכל שיחת מכירה כמו תוכי ובסוף לקבל ים התנגדויות"
          icon={forgot}
        />
        <NewBox 
       
          description="לדבר עם מתעניין יום אחרי שהשאיר פרטים והוא כבר שכח אותך"
          icon={phone}
        />
      </div>
      <div className={styles.title}>
   המצב הזה יכול להשתנות!
      </div>
      <div className={styles.description}>
        כשיודעים איך להשפיע על קהל היעד,מה מניע אותו לפעולה,איך לתפוס אותו ולספק לו את כל מה שהוא חיפש לדעת
      </div>
      <div className={styles.title}>
איכות הפניות מתחילה להשתנות
      </div>
      <Button text="דניאל, בוא נדבר!"/>
    </>
  )
}

export default ForthScreen