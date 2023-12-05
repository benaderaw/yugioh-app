/* eslint-disable react/prop-types */
import styles from "../cssModules/monster.module.css";
import MonstersList from "./MonstersList";
import NoResultsFound from "./NoResultsFound";
import NumOfResults from "./NumOfResults";

export default function Monsters({
  monsters,
  setMonsters,
  setSelected,
  name,
  showResultNum,
  activeFilter,
  setActiveFilter,
  filterBy,
  setFilterBy,
  setHideDetailsLanding,
  setShowDetails,
  filteredMonsters,
  setFilteredMonsters,
}) {
  return (
    <div className={styles.monstersContainer}>
      {showResultNum && (
        <NumOfResults
          monsters={monsters}
          setMonsters={setMonsters}
          name={name}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          filteredMonsters={filteredMonsters}
          setFilteredMonsters={setFilteredMonsters}
        />
      )}

      {filteredMonsters.at(0).showFiltered &&
        filteredMonsters.at(1).length === 0 &&
        showResultNum && <NoResultsFound />}

      {filteredMonsters.at(0).showFiltered && (
        <MonstersList
          xxx={filteredMonsters.at(1)}
          setSelected={setSelected}
          setHideDetailsLanding={setHideDetailsLanding}
          setShowDetails={setShowDetails}
        />
      )}

      {!filteredMonsters.at(0).showFiltered && (
        <MonstersList
          xxx={monsters}
          setSelected={setSelected}
          setHideDetailsLanding={setHideDetailsLanding}
          setShowDetails={setShowDetails}
        />
      )}
    </div>
  );
}
