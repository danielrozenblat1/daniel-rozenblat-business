import { useState, useRef, useEffect } from "react";
import styles from "./Popped.module.css";
import { FaTimes } from "react-icons/fa";

const Popped = () => {
  const [opened, setOpened] = useState(false);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const mailRef = useRef(null);

  const handleToggle = () => {
    setOpened(!opened);
  };

  useEffect(() => {
    // הצגת הטופס לראשונה אחרי 15 שניות
    const initialTimeout = setTimeout(() => {
      setOpened(true);
    }, 15000);

    // הצגת הטופס כל 3 דקות
    const interval = setInterval(() => {
      setOpened(true);
    }, 180000);

    // התנקות טיימרים על פי צורך
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);



  return (
    <>
      {opened && (
        <div className={styles.overlay}>
          <div className={styles.popped}>
            <FaTimes className={styles.x} onClick={handleToggle} />
            <div className={styles.subTitle}>
              "בעל עסק טוב נמדד ביכולת שלו לקחת החלטות"
            </div>
            <div className={styles.title}>זמן לקחת החלטה</div>
            <form className={styles.form}>
              <div className={styles.column}>
                <input
                  className={styles.input}
                  ref={nameRef}
                  placeholder="שם מלא"
                />
                <input
                  className={styles.input}
                  ref={phoneRef}
                  placeholder="מספר טלפון"
                />
                <input
                  className={styles.input}
                  ref={mailRef}
                  placeholder="מייל"
                />
                <button className={styles.button}>דניאל, בוא נדבר</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Popped;
