import { useEffect, useState, useRef } from 'react';
import { Check } from 'lucide-react';
import styles from './Steps.module.css';

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [visibleSteps, setVisibleSteps] = useState(new Set([1]));
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);
  const steps = [
    {
      number: 1,
      title: "אמון",
      content: "אף אחד לא יוציא שקל מהכיס שלו לבן אדם שהוא לא סומך עליו שהוא יביא אותו לתוצאה/לנקודה/למקום שהוא רוצה להגיע! רוצים שישלמו לכם יותר בקלות? אתם חייבים לחזק את האמון של המתעניינים שלכם בכם"
    },
    {
      number: 2,
      title: "זמן",
      content: "בואו נדבר דוגרי, אותו אחד שנחשף אליך מאוחר בלילה/מוקדם בשעות הבוקר או בכל זמן שאתם לא פנויים, לא יחכה עד שתתפנו כדי שהוא יקבל את המידע שהוא צריך לקבל.. אבל אם היה לו את המקום לקבל את המידע הזה בכל שעה.."
    },
    {
      number: 3,
      title: "הכרות עם קהל היעד",
      content: "אתם חייבים לצפות את קהל היעד שלכם מראש ולהכיר כל משפט,בעיה,כאב,התנגדות או תירוץ שהוא נותן לכם בשיחת מכירה ולהשתמש בהם הרבה לפני השיחה!"
    },

  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const visible = new Set();

      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      let progress = 0;
      if (timelineTop <= windowHeight) {
        const scrolled = windowHeight - timelineTop;
        progress = Math.min(Math.max(scrolled / (timelineHeight + windowHeight/2), 0), 1);
      }
      
      setScrollProgress(progress);

      const elements = document.querySelectorAll(`.${styles.timelineItem}`);
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementProgress = (viewportHeight - rect.top) / viewportHeight;
        
        if (elementProgress > 0.2 && elementProgress < 1) {
          visible.add(index + 1);
        }
      });

      setVisibleSteps(visible);
      if (visible.size > 0) {
        setActiveStep(Math.max(...visible));
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container} >
      <div className={styles.content}>
  
        
        <div className={styles.timeline} ref={timelineRef}>
          <div className={styles.timelineLine}>
            <div 
              className={styles.timelineProgress} 
              style={{ 
                height: `${scrollProgress * 100}%`,
                transition: 'height 0.1s linear'
              }}
            />
          </div>
          
          {steps.map((step) => (
            <div 
              key={step.number}
              className={`${styles.timelineItem} ${
                visibleSteps.has(step.number) ? styles.active : styles.inactive
              } ${step.number % 2 === 0 ? styles.left : styles.right}`}
            >
              <div 
                className={`${styles.timelineNumber} ${
                  visibleSteps.has(step.number) ? styles.numberActive : styles.numberInactive
                }`}
              >
                {visibleSteps.has(step.number) && activeStep > step.number ? (
                  <Check className={styles.checkIcon} />
                ) : (
                  <span className={styles.numberText}>{step.number}</span>
                )}
                <div className={styles.numberGlow} />
              </div>

              <div className={styles.timelineContent}>
                <div className={`${styles.glassEffect} ${
                  visibleSteps.has(step.number) ? styles.cardActive : ''
                }`}>
                  <h3 className={styles.timelineTitle}>
                    {step.title}
                  </h3>
                  <p className={styles.timelineText}>
                    {step.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
 
      </div>
    </div>
  );
};

export default Timeline;