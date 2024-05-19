import styles from './Button.module.css'; // Assuming the CSS file is in the same directory

const Button=(props)=> {
  return (
    <button className={styles.button}>{props.text}</button>
  );
}
export default Button