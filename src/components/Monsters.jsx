/* eslint-disable react/prop-types */
import styles from "../cssModules/monster.module.css";
import Monster from "./Monster";

export default function Monsters({ monsters, setSelected }) {
  return (
    <div className={styles.monstersContainer}>
      {/* <p>{monsters.length} results found</p> */}
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
