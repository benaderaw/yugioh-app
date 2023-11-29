import styles from "../cssModules/nav.module.css";

export default function Nav() {
  return (
    <ul href="#" className={styles.nav}>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">My Collection</a>
      </li>
    </ul>
  );
}
