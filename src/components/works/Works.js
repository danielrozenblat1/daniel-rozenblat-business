import styles from "./Works.module.css";
import nikol from "../../images/ניקול ולארי - מומחית ביוטי.png"
import shoval from "../../images/שובל דעבול - נומורולוגית.png"
import danielTurayev from "../../images/דניאל טורייב - פיננסים.png"
import matan from "../../images/מתן חממי - דרופשיפינג.png"
import regina from "../../images/רגינה אטן-איפור קבוע.png"
import nir from "../../images/home-x - ניר בן דוד.png"
import avi from "../../images/אבי גולדברג - תדמית.png"
import maharMilhama from "../../images/מחר מלחמה - שחריה לופט.png"
import Button from "../Button/Button";
const Works = (props) => {
  const worksData = [
    { title: "ניקול ולרי", description: "מומחית ביוטי", src: nikol,href:"https://nikolvalerie.co.il" },
    { title: "שובל דעבול", description: "נומורולוגיה וריפוי דרך התת מודע", src: shoval ,href:"https://shovaldabol.co.il"},
    { title: "Home-x", description: "יועץ משכנתאות", src: nir ,href:"https://home-x.co.il"},
    { title: "מחר מלחמה", description: "כושר קרבי והכנה לצבא", src:maharMilhama ,href:"https://maharmilhama.co.il" },
    { title: "מתן חממי", description: "מומחה ומלווה בתחום הדרופשיפינג", src:matan ,href:"https://matan-project-e1e88.web.app" },
    { title: "אבי גולדברג", description: "תדמית - מנהל חוות שרתים", src:avi ,href:"https://avi-goldberg.vercel.app" },
    { title: "דניאל טורייב", description: "יועץ פיננסים", src:danielTurayev,href:"https://danielturayev.co.il" },
    { title: "רגינה אטן", description: "מומחית לאיפור קבוע", src:regina ,href:"https://reginaatan.co.il" }
  ];

  return  (
    <div className={styles.worksContainer}>
      {worksData.map((work, index) => (
        <div className={styles.work} key={index}>
          {index % 2 === 0 ? (
            <>
              <div className={styles.text}>
                <h1 className={styles.title}>{work.title}</h1>
                <p className={styles.description}>{work.description}</p>
                <p className={styles.href}>למעבר לדף לחצו על התמונה</p>
              </div>
              <div className={styles.imageContainer}>
                <div className={styles.overlay}></div>
                <a href={work.href} target="_blank"><img className={styles.img} src={work.src} alt={work.title}  /></a>
              </div>
            </>
          ) : (
            <>
              <div className={styles.imageContainer}>
                <div className={styles.overlay}></div>
                <a href={work.href} target="_blank"> <img className={styles.img} src={work.src} alt={work.title} /></a> 
              </div>
              <div className={styles.text}>
                <h1 className={styles.title}>{work.title}</h1>
                <p className={styles.description}>{work.description}</p>
                <p className={styles.href}>למעבר לדף לחצו על התמונה</p>
              </div>
       
            </>
          )}
          
        </div>
      ))}
 <Button text="דניאל , בוא נדבר"/>
    </div>
    
  );
};

export default Works;
