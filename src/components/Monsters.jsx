/* eslint-disable react/prop-types */
import styles from "../cssModules/monster.module.css";
import Monster from "./Monster";

export default function Monsters({ monsters, setSelected }) {
  return (
    <ul className={styles.monstersContainer}>
      {monsters.map((monster) => (
        <Monster key={monster.id} monster={monster} setSelected={setSelected} />
      ))}
    </ul>
  );
}
