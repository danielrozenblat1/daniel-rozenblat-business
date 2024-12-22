import { useRef } from "react"
import styles from "./FormScreen.module.css"
import { useNavigate } from "react-router-dom"


const FormScreen=(props)=>{
const nameRef=useRef(null)
const phoneRef=useRef(null)
const mailRef=useRef(null)
const navigate=useNavigate()
const submitHandler=async(e)=>{
    e.preventDefault()
    const name=nameRef.current.value
    const phone=phoneRef.current.value
    const email=mailRef.current.value
    if(name.trim().length<=2){
   
    alert("אנא הכנס שם מלא ")
    return;
    }
    if(phone.trim().length!==10){
  
    alert("אנא הכנס מספר טלפון הכולל 10 ספרות ")
    return;
        }
        if(!email.includes("@")){
         
            alert("אנא הכנס מייל תקין ")
            return;
            }
       
   const formData={
    name:name,
    phone:phone,
    email:email
   }
const response= await fetch('https://daniel-rozenblat-421d37a33cb7.herokuapp.com/leads/newLead',{
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(formData)
   })
        
        if(response.ok){

        alert("שמרנו את הפרטים שלך, ניצור קשר בימים הקרובים")
        nameRef.current.value=""
        phoneRef.current.value=""
        mailRef.current.value=""
        navigate("/תודה")
        window.scrollTo({ top: 0, behavior: 'smooth' });
        }
}

return <>

{!props.title ? <div className={styles.title} id="צור קשר">זמן לקחת החלטה</div> :<div className={styles.title} id="צור קשר">{props.title}</div> }

<div className={styles.subTitle}>מלא/י את הטופס הבא ותקבל/י ממני שיחת ייעוץ חינמית ביומיים הקרובים!</div>
<form className={styles.form}>
<div className={styles.column}>
<input className={styles.input} ref={nameRef} placeholder="שם מלא"></input>
<input className={styles.input} ref={phoneRef} placeholder="מספר טלפון"></input>
<input className={styles.input} ref={mailRef} placeholder="מייל"></input>
<button className={styles.button} onClick={submitHandler}>דניאל, בוא נדבר</button>
</div>
</form>

</>

}
export default FormScreen
