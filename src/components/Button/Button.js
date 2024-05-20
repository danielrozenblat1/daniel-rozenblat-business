import { useEffect } from 'react';
import styles from './Button.module.css'; // Assuming the CSS file is in the same directory
import {Link as ScrollLink} from "react-scroll"
import ScrollReveal from 'scrollreveal';
const Button=(props)=> {
  useEffect(()=>{
    ScrollReveal().reveal(`.${styles.button}`, {
        duration: 1000,
        distance: "30px",
        origin: "top", // Start from the right side
        easing: "ease-out",
        reset:false,
        viewFactor: 0.2,
        interval: 300, // Delay between each element
        delay: 200, // Delay before the animation starts
        scale: 1, // Set scale to 1 or null
      });
     
  
  
  },[])
  return (
   <button className={styles.button}><ScrollLink to="צור קשר"  smooth={true} duration={1000} offset={-70}>{props.text}</ScrollLink></button> 
  );
}
export default Button