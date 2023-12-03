import styles from "../cssModules/detailsLanding.module.css";
import cardBackShow from "../assets/card-back-show.jpeg";

export default function DetailsLanding() {
  return (
    <div className={styles.detailsLandingContainer}>
      <div className={styles.detailsLandingBox}>
        <img src={cardBackShow} alt="" />

        <h2>Search and select card to see details</h2>
      </div>
    </div>
  );
}
