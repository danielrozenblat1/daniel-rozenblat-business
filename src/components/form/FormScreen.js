import { useRef } from "react"
import styles from "./FormScreen.module.css"


const FormScreen=()=>{
const nameRef=useRef(null)
const phoneRef=useRef(null)
const mailRef=useRef(null)
return <>
<div className={styles.subTitle} id="צור קשר">"בעל עסק טוב נמדד ביכולת שלו לקחת החלטות"</div>
<div className={styles.title}>זמן לקחת החלטה</div>
<form className={styles.form}>
<div className={styles.column}>
<input className={styles.input} ref={nameRef} placeholder="שם מלא"></input>
<input className={styles.input} ref={phoneRef} placeholder="מספר טלפון"></input>
<input className={styles.input} ref={mailRef} placeholder="מייל"></input>
<button className={styles.button}>דניאל, בוא נדבר</button>
</div>
</form>

</>

}
export default FormScreen
