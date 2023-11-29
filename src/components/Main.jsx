/* eslint-disable react/prop-types */
import styles from "../cssModules/main.module.css";

export default function Main({ children }) {
  return <div className={styles.mainContainer}>{children}</div>;
}
