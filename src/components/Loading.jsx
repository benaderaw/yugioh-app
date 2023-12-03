import styles from "../cssModules/loading.module.css";
import cardBackShow from "../assets/card-back-show.jpeg";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <img src={cardBackShow} alt="yugioh back of card from show" />
      <h2>Loading...</h2>{" "}
    </div>
  );
}
