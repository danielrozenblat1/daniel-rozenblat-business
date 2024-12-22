import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './FixedNav.module.css';
import logo from "../../images/דניאל רוזנבלט לוגו.png"
import me from "../../images/מי אני תפריט.png"
import clients from "../../images/לקוחות ממליצים תפריט.png"
import works from "../../images/עבודות תפריט.png"
import questions from "../../images/שאלות נפוצות תפריט.png"
import gift from "../../images/מתנה ממני תפריט.png"
import contact from "../../images/צור קשר תפריט.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navItems = [
    {
      id: 'קצת עלי',
      text: 'קצת עלי',
      image: me,
      color: '#8A2BE2',
      gradientColor: 'rgba(138, 43, 226, 0.2)',
    },
    {
      id: 'לקוחות ממליצים',
      text: 'לקוחות ממליצים',
      image: clients,
      color: '#9370DB',
      gradientColor: 'rgba(147, 112, 219, 0.2)',
    },
    {
      id: 'שאלות תשובות',
      text: 'שאלות נפוצות',
      image: questions,
      color: '#800080',
      gradientColor: 'rgba(128, 0, 128, 0.2)',
    },
    {
      id: 'צור קשר',
      text: 'צור קשר',
      image: contact,
      color: '#483D8B',
      gradientColor: 'rgba(72, 61, 139, 0.2)',
    },
    {
      id: 'עבודות',
      text: 'עבודות',
      image: works,
      color: '#6A5ACD',
      gradientColor: 'rgba(106, 90, 205, 0.2)',
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 0) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
          lastScrollY = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`${styles.wrap} ${isSticky ? styles.sticky : ''}`}>
        <div className={styles.navContent}>
          <button
            className={`${styles.menuTrigger} ${isOpen ? styles.active : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="תפריט"
          >
            <div className={styles.menuTriggerInner}>
              <div className={styles.menuTriggerLine}></div>
              <div className={styles.menuTriggerLine}></div>
              <div className={styles.menuTriggerLine}></div>
            </div>
            <div className={styles.menuTriggerGlow}></div>
          </button>
          <img src={logo} alt="Logo" className={styles.headerLogo} />
        </div>

        <div className={`${styles.menuWrapper} ${isOpen ? styles.open : ''}`}>
          <div
            className={styles.menuBackground}
            onClick={() => setIsOpen(false)}
          >
            <div className={styles.glassPattern}></div>
          </div>

          <nav
            className={styles.menu}
            style={{ '--total-items': navItems.length }}
          >
            <div className={styles.menuContent}>
              <div className={styles.menuItems}>
                {navItems.map((item, index) => (
                  <ScrollLink
                    key={item.id}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={2000}
                    offset={-250}
                    className={`${styles.menuItem} ${
                      activeIndex === index ? styles.active : ''
                    }`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveIndex(null);
                    }}
                    style={{
                      '--delay': `${index * 0.1}s`,
                      '--item-color': item.color,
                      '--item-gradient': item.gradientColor,
                    }}
                  >
                    <div className={styles.menuItemContent}>
                      <div className={styles.imageWrapper}>
                        <img
                          src={item.image}
                          alt={item.text}
                          className={styles.itemImage}
                        />
                        <div className={styles.imageGlow}></div>
                        <div className={styles.imageReflection}></div>
                      </div>
                      <span className={styles.itemText}>{item.text}</span>
                    </div>
                    <div className={styles.itemShine}></div>
                    <div className={styles.itemBackground}></div>
                  </ScrollLink>
                ))}
              </div>

              <div className={styles.menuFooter}>
                <img
                  src={logo}
                  alt="Logo"
                  className={styles.logo}
                />
                <div className={styles.glassPrism}></div>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;