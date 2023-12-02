/* eslint-disable react/prop-types */
import styles from "../cssModules/monster.module.css";
import Monster from "./Monster";
import NumOfResults from "./NumOfResults";

export default function Monsters({
  monsters,
  setMonsters,
  setSelected,
  name,
  // filterBy,
  // setFilterBy,
  copyMonsters,
  setCopyMonsters,
}) {
  return (
    <div className={styles.monstersContainer}>
      <NumOfResults
        monsters={monsters}
        setMonsters={setMonsters}
        name={name}
        // filterBy={filterBy}
        // setFilterBy={setFilterBy}
        copyMonsters={copyMonsters}
        setCopyMonsters={setCopyMonsters}
      />

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
