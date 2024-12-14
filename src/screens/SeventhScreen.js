import styles from "./SeventhScreen.module.css"
import { useEffect, useRef } from "react"
import { Player } from "@lordicon/react"
import ScrollReveal from "scrollreveal"
import time from "../icons/wired-lineal-45-clock-time (1).json"
import target from "../icons/wired-lineal-458-goal-target-hover-hit.json"
import design from "../icons/wired-lineal-1385-page-view-carousel-hover-pinch.json"

import Button from "../components/Button/Button"

const SeventhScreen = () => {
    const playerRef1 = useRef()
    const playerRef2 = useRef()
    const playerRef3 = useRef()
    const playerRef4 = useRef()
    
    useEffect(() => {
        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
        });
        ScrollReveal().reveal(`.${styles.section}`, {
            duration: 1000,
            distance: "30px",
            origin: "right",
            easing: "ease-in-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
        });
        ScrollReveal().reveal(`.${styles.stepHeader}`, {
            duration: 1000,
            distance: "30px",
            origin: "top",
            easing: "ease-in-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
        });
        
        playerRef1.current?.playFromBeginning();
        playerRef2.current?.playFromBeginning();
        playerRef3.current?.playFromBeginning();
        playerRef4.current?.playFromBeginning();
    }, [])

    return <>
        <div className={styles.title}>דניאל, למה שאני לא אבנה בעצמי דף וזהו?</div>
        
        <div className={styles.bigWrapper}>
            <div className={styles.step} itemscope itemtype="https://schema.org/Organization">
                <div className={styles.icons}>
                    <Player ref={playerRef1} size="100%" onComplete={() => playerRef1.current?.playFromBeginning()} icon={target} />
                </div>
                <div className={styles.text}>
                    <div className={styles.stepHeader} itemprop="name">מיקוד נכון</div>
                    <div className={styles.section} itemprop="description">
לפעמים, כשאנחנו כותבים על עצמנו אנחנו לא יודעים במה להתמקד - איזה מידע יותר רלוונטי, איזה מידע פחות מעניין,על איזה נושאים להרחיב ומתי לעצור.. כאן נכנס התפקיד שלי
                    </div>
                </div>
            </div>

            <div className={styles.step} itemscope itemtype="https://schema.org/Product">
                <div className={styles.text}>
                    <div className={styles.stepHeader} itemprop="name">עיצוב המידע בצורה מרשימה</div>
                    <div className={styles.section} itemprop="description">
                        אין שני לרושם ראשוני! חוות הדעת של הגולש כשהוא נכנס לדף נחיתה או אתר תשפיע במידה רבה על ההחלטה שלו בסוף אם להשאיר פרטים או לעבור הלאה
                    </div>
                </div>
                <div className={styles.icons}>
                    <Player ref={playerRef2} delay={500} size="100%" onComplete={() => playerRef2.current?.playFromBeginning()} icon={design} />
                </div>
            </div>

    
            <div className={styles.step} itemscope itemtype="https://schema.org/Organization">
                <div className={styles.icons}>
                    <Player ref={playerRef4} delay={500} size="100%" onComplete={() => playerRef4.current?.playFromBeginning()} icon={time} />
                </div>
                <div className={styles.text}>
                    <div className={styles.stepHeader} itemprop="name">זמן שווה כסף</div>
                    <div className={styles.section} itemprop="description">
                        במקום לבזבז זמן יקר בניסוי וטעייה בתחום שאתם פחות מבינים בו, אתם יכולים להמשיך לעסוק במה שאתם אוהבים ולתת למומחה בתחום לעבוד בשבילכם
                    </div>
                </div>
            </div>
        </div>
        <Button text="דניאל, בוא נדבר!" />
    </>
}

export default SeventhScreen