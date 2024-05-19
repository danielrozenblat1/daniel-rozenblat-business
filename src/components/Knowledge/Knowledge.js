import React from 'react';
import styles from './Knowledge.module.css';

const Knowledge = (props) => {
  const { icon: Icon } = props; // Destructuring props to get the icon component

  return (
    <div className={styles.box}>
      <Icon className={styles.icon} size={48} /> {/* Rendering the icon component */}
      <div className={styles.text}>{props.text}</div>
    </div>
  );
};

export default Knowledge;
