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
  copyMonsters,
  setCopyMonsters,
  showResultNum,
  activeFilter,
  setActiveFilter,
  filterBy,
  setFilterBy,
  setHideDetailsLanding,
  setShowDetails,
}) {
  return (
    <div className={styles.monstersContainer}>
      {showResultNum && (
        <NumOfResults
          monsters={monsters}
          setMonsters={setMonsters}
          name={name}
          copyMonsters={copyMonsters}
          setCopyMonsters={setCopyMonsters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
        />
      )}

      {monsters.length === 0 && showResultNum && <NoResultsFound />}

      <MonstersList
        xxx={monsters}
        setSelected={setSelected}
        setHideDetailsLanding={setHideDetailsLanding}
        setShowDetails={setShowDetails}
      />
    </div>
  );
}
