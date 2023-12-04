/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "../cssModules/numOfResults.module.css";
import Filters from "./Filters";
import FilterIcon from "./FilterIcon";

export default function NumOfResults({
  monsters,
  setMonsters,
  copyMonsters,
  setCopyMonsters,
  filterBy,
  setFilterBy,
}) {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className={styles.resultLengthContainer}>
      <div className={styles.resultLengthBox}>
        <p>{monsters.length} results found</p>
        <FilterIcon showFilter={showFilter} setShowFilter={setShowFilter} />
      </div>

      {showFilter && (
        <Filters
          copyMonsters={copyMonsters}
          monsters={monsters}
          setMonsters={setMonsters}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          setCopyMonsters={setCopyMonsters}
          setShowFilter={setShowFilter}
        />
      )}
    </div>
  );
}
