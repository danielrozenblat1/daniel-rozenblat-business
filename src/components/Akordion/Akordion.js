import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScrollReveal from 'scrollreveal';
import styles from "./Akordion.module.css"
function DropdownAccordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(false);

  return (

    <div className={styles.akordion} >
      <Accordion
        expanded={expanded}
        sx={{
            boxShadow: '0px 2px 15px 0px rgba(87, 0, 140, 0.2)',
          width: "100%",
          margin: "auto",
          background:"linear-gradient(to right, #763ad74a, #e8e8e8)",
  
          display: "flex",
          flexDirection: "column",
          
          justifyContent: "center",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "inherit",
            zIndex: -1,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded(!expanded)}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            "& .MuiTypography-root": {
              width: "100%",
              padding:"5px 0",
              color: 'black', // Apply black color to content
              fontFamily: 'AssistantR',
              direction: "rtl",
              fontSize:18
            },
            
            "& .MuiSvgIcon-root": { // Target the icon for black color
              color: 'black',
            },
           
          }}
        >
          <Typography itemProp="headline">{title}</Typography>
        </AccordionSummary >
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
            color: 'black', // Apply black color to content
           
            direction: "rtl",
            zIndex: 1,
            textAlign:"center",
            borderTop: '1px solid black', // Add top border
          }}
        >
          <Typography sx={{ fontFamily: 'AssistantR' , fontSize:18}} itemProp="description">{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
 
  );
}

export default function BasicAccordion() {
    React.useEffect(()=>{

        ScrollReveal().reveal(`.${styles.title}`, {
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
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "50%",
        margin: "0 auto",
        
      }}
    >
      {/* Center parent container */}
     
    <div className={styles.title} id="שאלות נפוצות" itemProp="mainEntity" itemScope itemType="https://schema.org/WebPage">אתם שואלים, אני עונה</div>
    <DropdownAccordion title="אני חייב/ת תמונות תדמית לדף הנחיתה שלי?" content="אין ספק שתמונות תדמית מקפיצות את העמוד ונותנות לו מראה יפה יותר,אבל תמונות תדמית הן בכלל לא חובה בדף שלך! לדוגמא אצלי בדף אין תמונות תדמית , מה שכן חשוב שיהיה הוא המוצר/השירות ,המלצות מלקוחות ובעל עסק שמאמין בעצמו! " />
      <DropdownAccordion title="מה זה דף נחיתה?" content="אם הגעת עד לכאן אני מתאר לעצמי שאתה כבר יודע מה זה דף נחיתה אבל אני אתן לך את ההגדרה שלי לדף נחיתה: אתר אינטרנטי של דף אחד שהולך לעשות לך את החיים הרבה הרבה הרבה יותר קלים" />
      <DropdownAccordion title="איך דף נחיתה חוסך לי זמן?" content="ברגע שרכשת דף נחיתה אתה יכול להגיד ברוך הבא ובהצלחה לעובד החדש שלך.. הוא באויר 24/7 מנגיש את המסרים שלך ואת השירות שלך בדיגיטל לכל אדם והוא מכיל את המסרים שלך בצורה הכי חדה ומדוייקת שלהם - אחרי שכבר נפגשנו וחידדנו אותם יחד. המטרה שלי בבניית דף הנחיתה היא ליצור אמון בך ובמוצר שלך וברגע שהאמון נוצר,המכירות שלך יהיו הרבה יותר קלות ,עם הרבה פחות הסברים והרבה פחות התנגדויות מה שחוסך עבורך כמות עצומה של זמן" />
      <DropdownAccordion title="איך אתה יודע מה לכתוב בדף הנחיתה? " content="עוד לפני תהליך העבודה איתך , את/ה תקבל/י טופס שדרכו אני אצליח להבין את העסק שלך , לנתח את קהל היעד שלך ולהגיע עם הטופס מנותח לפגישה שלנו - לפגישה אני מגיע עם רעיונות ושאלות מקצועיות שעלו לי מהטופס וכמובן שגם לך יש  say בכל מה שקשור לצבעים , למסרים שתרצה להדגיש יותר ולדברים שפחות תרצה שיופיעו בדף.." />
      <DropdownAccordion title="האם עסק בתחילת דרכו צריך דף נחיתה ?" content="כל עסק חייב דף נחיתה - לא משנה באיזה שלב הוא ולא משנה מה ההכנסות שלו. המטרה של דף נחיתה היא ליצור אמון ולהפוך את הלידים שלך לחמים יותר לפני שאתה מדבר איתם. דף נחיתה הוא השקעה שמחזירה את עצמה מהר מאוד ובעל עסק שאין לו דף נחיתה/תדמית דיגיטלית מסויימת מאבד מאות לקוחות פוטנציאלים בחודש" />
      <DropdownAccordion title="איך אתה ממליץ לי להשתמש בדף הנחיתה?" content="נתחיל בזה שתוסיף אותו לרשימת הקישורים שלך בפרופיל כדי שכל מי שמגיע לפרופיל יוכל להכנס לדף. אתה כמובן יכול גם להניע אל הדף אנשים שמתעניינים מהשיווק הממומן שלך. אני אישית ממליץ גם לצרף את הדף לכל הודעה אוטומטית כזו או אחרת בווצאפ,אינסטגרם וכל מי שמגיע אליך ולא נחשף אל הדף עדיין.." />
    </div>
  
  );
}
