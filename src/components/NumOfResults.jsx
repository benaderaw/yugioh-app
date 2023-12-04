/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "../cssModules/numOfResults.module.css";
import { IoFilter } from "react-icons/io5";
import Filters from "./Filters";

export default function NumOfResults({
  monsters,
  setMonsters,
  copyMonsters,
  setCopyMonsters,
  filterBy,
  setFilterBy,
}) {
  const [showFilter, setShowFilter] = useState(false);

  // onClick - show filters
  function handleShowFilter() {
    setShowFilter(!showFilter);
  }

  return (
    <div className={styles.resultLengthContainer}>
      <div className={styles.resultLengthBox}>
        <p>{monsters.length} results found</p>
        <IoFilter
          className={showFilter ? styles.filterIconOpen : styles.filterIcon}
          onClick={handleShowFilter}
        />
      </div>

      {showFilter && (
        <Filters
          copyMonsters={copyMonsters}
          monsters={monsters}
          setMonsters={setMonsters}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          setCopyMonsters={setCopyMonsters}
        />
      )}
    </div>
  );
}
