/* eslint-disable react/prop-types */
import { useCallback, useEffect } from "react";
import styles from "../cssModules/monster.module.css";
import Monster from "./Monster";

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

  // useEffect - close collection display and go back when Escape key is pressed
  useEffect(() => {
    const callback = function (e) {
      if (e.key === "Escape") handleBackBtn();
    };

    document.addEventListener("keydown", callback);

    // clean up
    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [handleBackBtn]);

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
