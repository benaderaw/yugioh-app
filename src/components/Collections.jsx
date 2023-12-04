/* eslint-disable react/prop-types */
import { useCallback } from "react";
import styles from "../cssModules/monster.module.css";
import Monster from "./Monster";
import { useKey } from "../custom hooks/useKey";

export default function Collections({
  collection,
  setSelected,
  setShowCollection,
  setHideDetailsLanding,
  setShowDetails,
}) {
  // onClick - close collection display and go back when back arrow button is clicked
  const handleBackBtn = useCallback(() => {
    setShowCollection(false);
  }, [setShowCollection]);

  // custom hook - focus input when "enter" key is pressed
  useKey("Escape", handleBackBtn);

  return (
    <div className={styles.monstersContainer}>
      <div className={styles.collectionTitleBox}>
        <button className={styles.backBtn} onClick={handleBackBtn}>
          &larr;
        </button>
        <h1> My Collections</h1>
      </div>

      <div className={styles.monstersBox}>
        <ul className={styles.monstersList}>
          {collection.map((monster) => (
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
    </div>
  );
}
