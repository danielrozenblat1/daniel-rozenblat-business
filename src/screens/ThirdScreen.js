import Button from "../components/Button/Button"
import Timeline from "../components/steps/Steps"
import styles from "./ThirdScreen.module.css"

const ThirdScreen=()=>{
  


return <>
<div className={styles.description}>וכדי להצליח לעשות את זה</div>
<div className={styles.title}>אתם חייבים שלושה דברים עיקריים</div>

<Timeline/>
<Button text="אני יכול/ה להתייעל לפחות באחד מהשלושה"/>
</>


}
export default ThirdScreen