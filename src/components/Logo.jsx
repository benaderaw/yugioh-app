import styles from "../cssModules/logo.module.css";
import cardBack from "../assets/card-back-show.jpeg";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img src={cardBack} alt="back of yu-gi-oh card" />
      <h2 className={styles.logo}> myYuGiOh </h2>
    </div>
  );
}
