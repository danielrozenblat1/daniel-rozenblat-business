import styles from "./Recommends.module.css"
import result1 from "../../images/שובל דעבול חוות דעת.png"
import result2 from "../../videos/מתן חממי חוות דעת.mp4"
import result3 from "../../images/חוות דעת דניאל טורייב.png"
import result4 from "../../images/ניקול ולארי חוות דעת.png"
import result5 from "../../images/לירון רוקח חוות דעת.png"

import result7 from "../../images/ניר בן דוד חוות דעת.png"
import result8 from "../../images/ולריה רמידובסקי חוות דעת.png"
import result9 from "../../images/נאור לוי חוות דעת.png"
import result10 from "../../images/מיכל אבנד חוות דעת.png"
import result11 from "../../images/עדי ממן חוות דעת.png"
import result12 from "../../images/ספיר דיין חוות דעת.png"
import result14 from "../../images/אוריאן חממי חווות דעת.png"
import result15 from "../../images/שרה אנניה חוות דעת.png"
import result16 from "../../images/תומר גדי חוות דעת.png"
import result17 from "../../images/אופק ברקוביץ חוות דעת.png"
import result18 from "../../images/ענבל רוזנפלד חוות דעת.png"
import result19 from "../../videos/לאנס חוות דעת.mp4"
import result20 from "../../videos/מירב בישולים חוות דעת.mp4"
import result21 from "../../images/מאי סויסה חוות דעת.png"
import result22 from "../../images/לורין נקש חוות דעת.png"
import result23 from "../../images/שרון סרור חוות דעת.png"
import result24 from "../../images/גרטה מור חוות דעת.png"
import result25 from "../../images/סתיו יעקובי חוות דעת.png"
import result26 from "../../images/אנסטסיה טלן חוות דעת.png"
import result27 from "../../images/סוזנה חוות דעת.png"
import result28 from "../../images/לריאן חוות דעת.png"
import result29 from "../../images/מעיין חוות דעת.png"
import result30 from "../../images/אביה חוות דעת.png"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Recommends=()=>{
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
          src: result28,
        },
        {
          type: 'image',
          src: result27,
        },
        {
          type: 'image',
          src: result30,
        },
        {
          type: 'image',
          src: result29,
        },
        {
          type: 'image',
          src: result11,
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
          src: result1,
        },
        {
          type: 'image',
          src: result22,
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
          src: result24,
        },
        {
          type: 'image',
          src: result25,
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
          src: result8,
        },
        {
          type: 'image',
          src: result21,
        },
      
        {
          type: 'image',
          src: result10,
        },
        {
          type: 'image',
          src: result9,
        },
        {
          type: 'image',
          src: result17,
        },
        {
          type: 'video',
          src: result2,
        },
     
        {
          type: 'image',
          src: result4,
        }, 
        
        {
          type: 'image',
          src: result5,
        },
     
          {
            type: 'image',
            src: result7,
          },
          {
            type: 'image',
            src: result3,
          },
       
          {
            type: 'video',
            src: result19,
          },
          {
            type: 'video',
            src: result20,
          },
        ];  
return <>
<div className={styles.title} id="לקוחות ממליצים">תשמעו את זה מהם..</div>
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
export default Recommends