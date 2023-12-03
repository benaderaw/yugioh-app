/* eslint-disable react/prop-types */
import styles from "../cssModules/monster.module.css";
import Monster from "./Monster";
import NoResultsFound from "./NoResultsFound";
import NumOfResults from "./NumOfResults";

export default function Monsters({
  monsters,
  setMonsters,
  setSelected,
  name,
  copyMonsters,
  setCopyMonsters,
  showFilter,
  activeFilter,
  setActiveFilter,
  filterBy,
  setFilterBy,
}) {
  return (
    <div className={styles.monstersContainer}>
      {showFilter && (
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

      {monsters.length === 0 && showFilter && <NoResultsFound />}

      <div className={styles.monstersBox}>
        <ul className={styles.monstersList}>
          {monsters.map((monster) => (
            <Monster
              key={monster.id}
              monster={monster}
              setSelected={setSelected}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
