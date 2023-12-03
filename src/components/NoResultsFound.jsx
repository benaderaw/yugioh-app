import styles from "../cssModules/noResultsFound.module.css";

export default function NoResultsFound() {
  return (
    <div className={styles.noResultContainer}>
      <h2>No Results Found.</h2>
    </div>
  );
}
