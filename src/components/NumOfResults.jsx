/* eslint-disable react/prop-types */
import styles from "../cssModules/numOfResults.module.css";
import Filters from "./Filters";
import FilterIcon from "./FilterIcon";

export default function NumOfResults({
  monsters,
  filterBy,
  setFilterBy,
  filteredMonsters,
  setFilteredMonsters,
  showFilter,
  setShowFilter,
}) {
  return (
    <div className={styles.resultLengthContainer}>
      <div className={styles.resultLengthBox}>
        <p>
          {filteredMonsters.at(0).at(0)
            ? filteredMonsters.at(1).length
            : monsters.length}{" "}
          results found
        </p>
        <FilterIcon showFilter={showFilter} setShowFilter={setShowFilter} />
      </div>

      {showFilter && (
        <Filters
          monsters={monsters}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          setShowFilter={setShowFilter}
          setFilteredMonsters={setFilteredMonsters}
        />
      )}
    </div>
  );
}
