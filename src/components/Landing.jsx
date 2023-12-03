import styles from "../cssModules/landing.module.css";
import yugioh from "../assets/yugioh.png";

export default function Landing() {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.landingImgBox}>
        <img className={styles.landingImg} src={yugioh} alt="yu-gi-oh logo" />
      </div>

      <div className={styles.landingText}>
        <h2>Search. Collect. Win.</h2>
      </div>
    </div>
  );
}
