/* eslint-disable react/prop-types */
import styles from "../cssModules/error.module.css";

export default function Error({ error }) {
  return (
    <div className={styles.error}>
      <h2>{error.message}</h2>
    </div>
  );
}
