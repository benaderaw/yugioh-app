/* eslint-disable react/prop-types */
import styles from "../cssModules/nav.module.css";

export default function Nav({ setShowCollection }) {
  function handleShowCollection() {
    setShowCollection(true);
  }

  return (
    <ul href="#" className={styles.nav}>
      <li>
        <a href="#">HOME</a>
      </li>
      <li onClick={handleShowCollection}>
        <a href="#">COLLECTION</a>
      </li>
    </ul>
  );
}
