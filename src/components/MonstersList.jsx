/* eslint-disable react/prop-types */

import styles from "../cssModules/monstersList.module.css";
import Monster from "./Monster";

export default function MonstersList({
  xxx,
  setSelected,
  setHideDetailsLanding,
  setShowDetails,
}) {
  return (
    <div className={styles.monstersListBox}>
      <ul className={styles.monstersList}>
        {xxx.map((monster) => (
          <Monster
            key={monster.id}
            monster={monster}
            setSelected={setSelected}
            setHideDetailsLanding={setHideDetailsLanding}
            setShowDetails={setShowDetails}
          />
        ))}
      </ul>
    </div>
  );
}
