/* eslint-disable react/prop-types */
import styles from "../cssModules/nav.module.css";

export default function Nav({
  setShowCollection,
  setHideLanding,
  setHideDetailsLanding,
  setShowDetails,
  setShowSearchResults,
  setQuery,
  setName,
}) {
  function handleShowCollection() {
    setShowCollection(true);
    setHideLanding(true);
  }

  function handleHome() {
    setShowCollection(false);
    setHideLanding(false);
    setHideDetailsLanding(false);
    setShowDetails(false);
    setShowSearchResults(false);
    setQuery("");
    setName("");
  }

  return (
    <ul href="#" className={styles.nav}>
      <li onClick={handleHome}>
        <a href="#">HOME</a>
      </li>
      <li onClick={handleShowCollection}>
        <a href="#">COLLECTION</a>
      </li>
    </ul>
  );
}
