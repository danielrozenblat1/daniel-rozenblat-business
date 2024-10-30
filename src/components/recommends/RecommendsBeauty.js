import styles from "./Recommends.module.css"


import result4 from "../../images/ניקול ולארי חוות דעת.png"


import result11 from "../../images/עדי ממן חוות דעת.png"
import result12 from "../../images/ספיר דיין חוות דעת.png"
import result14 from "../../images/אוריאן חממי חווות דעת.png"
import result15 from "../../images/שרה אנניה חוות דעת.png"
import result16 from "../../images/תומר גדי חוות דעת.png"

import result18 from "../../images/ענבל רוזנפלד חוות דעת.png"

import result21 from "../../images/מאי סויסה חוות דעת.png"
import result22 from "../../images/לורין נקש חוות דעת.png"
import result23 from "../../images/שרון סרור חוות דעת.png"
import result24 from "../../images/גרטה מור חוות דעת.png"
import result25 from "../../images/סתיו יעקובי חוות דעת.png"
import result26 from "../../images/אנסטסיה טלן חוות דעת.png"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const RecommendsBeauty=()=>{
    const sliderSettings = {
     
        infinite: true,
        speed: 700,
        autoplaySpeed: 2500,
        infinite: true,
   
        dots:false,
        
        slidesToShow: window.innerWidth < 550 ? 1 :
                 
                      window.innerWidth <= 1050 ? 2 : 3,
        slidesToScroll:1,
                     
      };
      const content = [
        {
          type: 'image',
          src: result11,
        },
        {
          type: 'image',
          src: result26,
        },
        {
          type: 'image',
          src: result23,
        },
        {
          type: 'image',
          src: result25,
        },
       
        {
          type: 'image',
          src: result24,
        },
     
        {
          type: 'image',
          src: result16,
        },
        {
          type: 'image',
          src: result15,
        },
        {
          type: 'image',
          src: result14,
        },
    
        {
          type: 'image',
          src: result22,
        },
        {
          type: 'image',
          src: result18,
        },
        {
          type: 'image',
          src: result12,
        },
       
     
     
      
        {
          type: 'image',
          src: result21,
        },
      
    
     
     
        {
          type: 'image',
          src: result4,
        }, 
        
      
        
        ];  
return <>

<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index} itemscope itemtype="http://schema.org/Review">
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`דניאל רוזנבלט לקוחות ממליצים מספר ${index + 1}`} itemprop="image"/>
              )}
              {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                
                  itemprop="image"
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
         
              )}
           <meta itemprop="datePublished" content={new Date().toISOString()} />
            </div>
            
          ))}
        </Slider>
      </div>


</>


}
export default RecommendsBeauty