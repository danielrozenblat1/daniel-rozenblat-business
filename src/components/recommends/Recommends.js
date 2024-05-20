import styles from "./Recommends.module.css"
import result1 from "../../images/שובל דעבול חוות דעת.png"
import result2 from "../../videos/מתן חממי חוות דעת.mp4"
import result3 from "../../images/חוות דעת דניאל טורייב.png"
import result4 from "../../images/ניקול ולארי חוות דעת.png"
import result5 from "../../images/לירון רוקח חוות דעת.png"
import result6 from "../../images/מחר מלחמה חוות דעת.png"
import result7 from "../../images/ניר בן דוד חוות דעת.png"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Recommends=()=>{
    const sliderSettings = {
     
        infinite: true,
        speed: 700,
        autoplaySpeed: 2500,
        infinite: true,
        autoplay: true,
        dots:false,
        
        slidesToShow: window.innerWidth < 550 ? 1 :
                 
                      window.innerWidth <= 1050 ? 2 : 3,
        slidesToScroll:1,
                     
      };
      const content = [
        {
          type: 'image',
          src: result1,
        },
        {
          type: 'video',
          src: result2,
        },
        {
          type: 'image',
          src: result3,
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
            src: result6,
          },
          {
            type: 'image',
            src: result7,
          },
        ];  
return <>
<div className={styles.title}>תשמעו את זה מהם..</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`שובל דעבול לקוחה ממליצה מספר ${index + 1}`} />
              )}
              {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
              )}
            </div>
          ))}
        </Slider>
      </div>


</>


}
export default Recommends