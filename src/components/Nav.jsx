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
  setFilterBy,
  setFilteredMonsters,
  setShowFilter,
}) {
  function handleShowCollection() {
    setShowFilter(false);
    setShowCollection(true);
    setHideLanding(true);
    setFilteredMonsters([[false], []]);
    setFilterBy({
      type: "select type",
      attribute: "select attribute",
      race: "select race",
      archetype: "select archetype",
      level: "select level",
    });
  }

  function handleHome() {
    setFilteredMonsters([[false], []]);
    setShowCollection(false);
    setHideLanding(false);
    setHideDetailsLanding(false);
    setShowDetails(false);
    setShowSearchResults(false);
    setQuery("");
    setName("");
    setFilterBy({
      type: "select type",
      attribute: "select attribute",
      race: "select race",
      archetype: "select archetype",
      level: "select level",
    });
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
