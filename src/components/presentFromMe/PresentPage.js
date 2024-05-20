
import { useRef, useState ,useEffect} from "react"
import {Link as NavLink} from "react-scroll"
import styles from "./PresentPage.module.css"
import { useNavigate } from "react-router-dom"
import guide from "../../images/לגעת.png"

const PresentPage=()=>{

  
const navigate=useNavigate()
const handleNavigateHome = () => {
    navigate('/');
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
    const nameRef=useRef('')
    const phoneRef=useRef('')
    const emailRef=useRef('')
    const hasPageRef=useRef('')
    const [goodName,setGoodName]=useState(true)
    const [goodNumber,setGoodNumber]=useState(true)
    const [goodMail,setGoodMail]=useState(true)
    const [loading,setLoading]=useState(false)





    const submitHandler=async(e)=>{
        e.preventDefault()
        const name=nameRef?.current?.value
        const phone=phoneRef?.current?.value
        const email=emailRef?.current?.value
        const landing=hasPageRef?.current?.value
        if(name.trim().length<=2){
        setGoodName(false)
        alert("אנא הכנס שם מלא ")
        return;
        }
        if(phone.trim().length!==10){
        setGoodNumber(false)
        alert("אנא הכנס מספר טלפון הכולל 10 ספרות ")
        return;
            }
            if(!email.includes("@")){
                setGoodMail(false)
                alert("אנא הכנס מייל תקין ")
                return;
                }
                if(landing.trim().length<=1){
                  
                    alert("אנא מלא אם יש לך דף נחיתה ")
                    return;
                    }
           
       const formData={
        name:name,
        phone:phone,
        email:email,
        hasLandingPage:landing
       }
       setLoading(true)
  
    const response= await fetch('https://daniel-rozenblat-421d37a33cb7.herokuapp.com/leads/newLead',{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
       })
       
            if(response.ok){

            alert("הפרטים שלך נשמרו במערכת והמדריך נשלח אליך במייל")
            setLoading(false)
            navigate("/")
            // nameRef.current.value=""
            // phoneRef.current.value=""
            // emailRef.current.value=""
            // hasPageRef.current.value=""
            }      
    }
    return <> 
{!loading &&<div className={styles.container}>
<div className={styles.subTitle}> אם הגעם לפה סימן שהתעניינתם מספיק בשביל לקבל </div>
<div className={styles.title} style={{direction:"rtl"}}>את המדריך  החינמי<br/> "משחקי מוחות"</div>
<div className={styles.guide}><img className={styles.image} src={guide}/></div>
<div className={styles.subTitle}> המדריך המלא והאידיאלי להשפעה על קהל היעד שלך</div>
<div className={styles.title} id="פרטים">מלא את הטופס ותקבל את המדריך במייל</div>
    <form className={styles.form}>
    <div className={styles.center}>
    {/* {window.innerWidth>1200&&<img className={styles.image} src={logo} alt="לוגו DR"/>} */}
</div>
    <div className={styles.inputsColumn}>
    <div className={styles.subTitle}> שם מלא </div>
    <input className={goodName ? styles.input : styles.badInput} onChange={(e)=>{
        if(e.target.value.trim().length>2){
            setGoodName(true)
        }
    }}placeholder="שם מלא" ref={nameRef}></input>
        <div className={styles.subTitle}> מספר טלפון</div>
    <input className={goodNumber ? styles.input: styles.badInput} placeholder="מספר טלפון" ref={phoneRef} onChange={(e)=>{
        if(e.target.value.trim().length===10){
            setGoodNumber(true)
        }  
         if(e.target.value.trim().length>10){
            setGoodNumber(false)
        }
    }}></input>
     <div className={styles.subTitle}> כתובת דוא''ל</div>
    <input className={goodMail ? styles.input: styles.badInput} placeholder="דוא''ל" ref={emailRef} onChange={(e)=>{
        if(e.target.value.includes('@')&&e.target.value.trim().length>5){
            setGoodMail(true)
        }  
         if(!e.target.value.includes('@')&&e.target.value.trim().length>5){
            setGoodMail(false)
        }
    }}></input>
            <div className={styles.subTitle}> יש לך דף נחיתה ?</div>
    <input className={styles.input} placeholder="כן/לא" ref={hasPageRef}></input>
    <div className={styles.left}><button className={styles.button} onClick={submitHandler}>שלח</button></div>
    </div>

    </form>
    <div className={styles.middle}><NavLink className={styles.back} to="/"  onClick={handleNavigateHome}>חזרה לעמוד הראשי</NavLink></div>
   </div>}
{loading && <div className={styles.title}>שומרים את הפרטים והמייל בדרך אליך </div>}
    </>
}



export default PresentPage