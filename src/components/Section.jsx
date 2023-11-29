/* eslint-disable react/prop-types */
import styles from "../cssModules/section.module.css";

export default function Section({ children }) {
  return <div className={styles.section}>{children}</div>;
}
