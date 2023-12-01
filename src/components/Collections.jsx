/* eslint-disable react/prop-types */
import styles from "../cssModules/monster.module.css";
import Monster from "./Monster";

export default function Collections({ collection, setSelected }) {
  return (
    <ul className={styles.monstersContainer}>
      {collection.map((monster) => (
        <Monster key={monster.id} monster={monster} setSelected={setSelected} />
      ))}
    </ul>
  );
}
