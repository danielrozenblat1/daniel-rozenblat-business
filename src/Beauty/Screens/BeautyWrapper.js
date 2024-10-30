import styles from "./BeautyWrapper.module.css"
import {useEffect,useRef} from "react"
import ScrollReveal from "scrollreveal";
import BeautyFirstScreen from "./BeautyFirstScreen";
import BeautySecondScreen from "./BeautySecondScreen";
import Recommends from "../../components/recommends/Recommends";
import RecommendsBeauty from "../../components/recommends/RecommendsBeauty";
import FormScreen from "../beautyForm/form/FormScreen";
import AboutMeBeauty from "../me/Me";
import BeautyThirdScreen from "./BeautyThirdScreen";
const BeautyWrapper=(props)=>{
//   style={{ background:"linear-gradient(135deg, rgba(240,240,240,1) 15%, rgba(255,237,237,1) 30%, rgba(240,240,240,1) 50%, rgba(255,242,242,1) 70%, rgba(240,240,240,1) 85%)"}}
return <>
<div className={styles.beauty} >
   <BeautyFirstScreen/>
   <BeautySecondScreen/>
   <RecommendsBeauty/>
   <FormScreen/>
   <AboutMeBeauty/>
   <BeautyThirdScreen/>
  
   </div>
</>
      

}
export default BeautyWrapper