import styles from "../cssModules/nav.module.css";

export default function Nav() {
  return (
    <ul href="#" className={styles.nav}>
      <li>
        <a href="#">HOME</a>
      </li>
      <li>
        <a href="#">COLLECTION</a>
      </li>
    </ul>
  );
}
