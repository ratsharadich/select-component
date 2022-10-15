import styles from "./select.module.css";
import { SelectProps } from "./interfaces";

export const Select = ({ value, onChange, options }: SelectProps) => {
  return (
    <div tabIndex={0} className={styles.container}>
      <span className={styles.value}></span>
      <button className={styles["clear-btn"]}>&times;</button>

      <div className={styles.divider}></div>
      <div className={styles.caret}></div>

      <ul className={`${styles.options} ${styles.show}`}>
        {options.map((option) => (
          <li key={option.label} className={styles.option}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
