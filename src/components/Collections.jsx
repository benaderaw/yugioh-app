/* eslint-disable react/prop-types */
import { useCallback } from "react";
// import styles from "../cssModules/monster.module.css";
import styles from "../cssModules/collection.module.css";
import Monster from "./Monster";
import { useKey } from "../custom hooks/useKey";
import Filters from "./Filters";
import FilterIcon from "./FilterIcon";
import Button from "./Button";
import MonstersList from "./MonstersList";

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
    <div className={styles.monsterCollectionContainer}>
      <div className={styles.collectionBox}>
        <div className={styles.textBox}>
          <Button btnStyle={styles.backBtn} onClick={handleBackBtn}>
            &larr;
          </Button>
          <h1> My Collections</h1>
        </div>

        <FilterIcon />
      </div>

      <MonstersList
        xxx={collection}
        setSelected={setSelected}
        setHideDetailsLanding={setHideDetailsLanding}
        setShowDetails={setShowDetails}
      />
    </div>
  );
}
