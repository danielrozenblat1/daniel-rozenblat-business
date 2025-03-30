import styles from "./Works.module.css";
import nikol from "../../images/ניקול ולארי - מומחית ביוטי.png"
import shoval from "../../images/שובל דעבול - נומורולוגית.png"
import danielTurayev from "../../images/דניאל טורייב - פיננסים.png"
import matan from "../../images/מתן חממי - דרופשיפינג.png"
import morezra from "../../images/מור עזרא.png"
import shiradi from "../../images/שיר עדי.png"
import orianHamami from "../../images/אוריאן חממי.png"
import valeriaRemidovski from "../../images/ולריה רמידובסקי.png"
import shirelzagury from "../../images/שיראל זגורי.png"
import suzanapinhasi from "../../images/סוזנה פנחסי.png"
import adiMaman from "../../images/עדי ממן.png"
import sapirDayan from "../../images/ספיר דיין.png"
import annagrekov from "../../images/אנה גרקוב.png"
import tomerGedi from "../../images/תומר גדי.png"
import saraAnanya from "../../images/שרה אנניה.png"
import inbalRozenfeld from "../../images/ענבל רוזנפלד.png"
import meravishulim from "../../images/מירב בישולים.png"
import lance from "../../images/לאנס.png"
import mayLine from "../../images/מאי סויסה.png"
import lorinNakash from "../../images/לורין נקש.png"
import anastasiaTalan from "../../images/אנסטסיה טלן חכים.png"
import sharonSror from "../../images/שרון סרור.png"
import aviaHarshish from "../../images/אביה הרשיש.png"
import Button from "../Button/Button";
import { useLocation } from "react-router-dom";

const Works = (props) => {
  const location = useLocation();
 
  const worksData = [
    { title: "אנה גרקוב", description: "איפור קבוע - קורסים וטיפולים", src: annagrekov,href:"https://annagrekov.co.il" },
    { title: "אביה הרשיש", description: "אדריכלית", src: aviaHarshish,href:"https://avia-arch.co.il" },
    { title: "אנסטסיה טלן", description: "איפור כלות | השתלמויות | קורס דיגיטלי", src: anastasiaTalan,href:"https://anastasiatalanhakim.co.il" },

   
    { title: "סוזנה פנחסי", description: "קורסים בתחום הביוטי", src: suzanapinhasi,href:"https://suzanapinhasi.co.il" },
    { title: "שרון סרור", description: "איפור כלות | השתלמויות למאפרות", src: sharonSror,href:"https://sharonsror.co.il" },
    { title: "שיראל זגורי", description: "יוגה לילדים", src: shirelzagury,href:"https://yoga-with-shirel.co.il" },
    { title: "שיר עדי", description: "קורס להחלקות שיער", src: shiradi,href:"https://shiradiacademy.co.il" },
    { title: "מור עזרא", description: "טיפולי איפור קבוע ומיקרופיגמנטציה", src:morezra,href:"https://morezra.co.il" },
    { title: "תומר גדי", description: "מומחית ללימוד ציפורניים", src: tomerGedi,href:"https://tomernails.co.il" },
    { title: "ספיר דיין", description: "מאפרת מקצועית", src:sapirDayan,href:"https://sapirdayanmakeup.co.il" },
    { title: "עדי ממן", description: "אקדמיית בוטיק ללימוד ציפורניים", src: adiMaman,href:"https://adimaman.co.il" },
    { title: "שרה אנניה", description: "מומחית לאיפור כלות וערב", src: saraAnanya,href:"https://saraananya.co.il" },
    { title: "מאי ליין", description: "לימודי ציפורניים וגבות", src: mayLine,href:"https://mayline.co.il" },
    { title: "ניקול ולרי", description: "מומחית ביוטי", src: nikol,href:"https://nikolvalerie.co.il" },
    { title: "לורין נקש", description: "מומחית ללימודי ציפורניים", src: lorinNakash,href:"https://lorinnakash.co.il" },
    { title: "אוריאן חממי", description: "סלון ביוטי", src:orianHamami ,href:"https://orianhamami.co.il" },
    { title: "ענבל רוזנפלד", description: "אקדמיה ללימוד ציפורניים", src:inbalRozenfeld ,href:"https://inbalrozenfeld.co.il" },
    { title: "מירב בישולים", description: "בישולים בייתיים", src:meravishulim ,href:"https://Meravbishulim.co.il" },
    { title: "VLR", description: "צילום,ניהול סושיאל וUGC", src:valeriaRemidovski,href:"https://valeriaremydovsky.co.il" },
    { title: "Lance", description: "קייטרינג לאירועים", src:lance ,href:"https://lancebuffet.co.il" },
  
    { title: "שובל דעבול", description: "נומורולוגיה וריפוי דרך התת מודע", src: shoval ,href:"https://shovaldabol.co.il"},

  ];

  return (
    <div className={styles.worksContainer} id="עבודות">
      {worksData.map((work, index) => (
        <>
          <div className={styles.work} key={index}>
            {index % 2 === 0 ? (
              <>
                <div className={styles.text} itemScope itemType="http://schema.org/CreativeWork"> 
                  <h1 className={styles.title} itemProp="name">{work.title}</h1>
                  <p className={styles.description} itemProp="description">{work.description}</p>
                  <p className={styles.href}>למעבר לדף לחצו על התמונה</p>
                </div>
                <div className={styles.imageContainer}>
                  <div className={styles.overlay}></div>
                  <a href={work.href} target="_blank" rel="noopener noreferrer">
                    <img className={styles.img} src={work.src} alt={work.title} />
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className={styles.imageContainer}>
                  <div className={styles.overlay}></div>
                  <a href={work.href} target="_blank" rel="noopener noreferrer">
                    <img className={styles.img} src={work.src} alt={work.title} />
                  </a>
                </div>
                <div className={styles.text} itemScope itemType="http://schema.org/CreativeWork">
                  <h1 className={styles.title} itemProp="name">{work.title}</h1>
                  <p className={styles.description} itemProp="description">{work.description}</p>
                  <p className={styles.href}>למעבר לדף לחצו על התמונה</p>
                </div>
              </>
            )}
          </div>
          {(index + 1) % 3 === 0 && index !== worksData.length - 1 && location.pathname !== "/%D7%AA%D7%95%D7%93%D7%94" && (
            <Button text="ראיתי מספיק, בוא נדבר!" />
          )}
        </>
      ))}
      {location.pathname !== "/%D7%AA%D7%95%D7%93%D7%94" && <Button text="דניאל , בוא נדבר" />}
    </div>
  );
};

export default Works;