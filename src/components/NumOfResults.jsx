/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "../cssModules/numOfResults.module.css";
import { IoFilter } from "react-icons/io5";
import Filters from "./Filters";

export default function NumOfResults({
  monsters,
  setMonsters,
  name,
  filterBy,
  setFilterBy,
  copyMonsters,
  setCopyMonsters,
}) {
  const [showFilter, setShowFilter] = useState(false);
  const [type, setType] = useState([]);
  const [attribute, setAttribute] = useState([]);
  const [race, setRace] = useState([]);
  const [archetypes, setArchetypes] = useState([]);

  // create an array from the filter types (filter types passed as argument)
  const filters = function (filterType) {
    return Array.from(
      new Set(
        monsters
          .map((monster) => {
            return monster[filterType];
          })
          .filter((filters) => filters)
      )
    );
  };

  // onClick - sets filters
  function handleShowFilter() {
    setType(filters("type"));
    setAttribute(filters("attribute"));
    setRace(filters("race"));
    setArchetypes(filters("archetype"));
    setShowFilter(!showFilter);
  }

  return (
    <div className={styles.resultLengthContainer}>
      <div className={styles.resultLengthBox}>
        <p>
          {monsters.length} results found for {name}
        </p>
        <IoFilter
          className={showFilter ? styles.filterIconOpen : styles.filterIcon}
          onClick={handleShowFilter}
        />
      </div>

      {showFilter && (
        <div className={styles.filterBox}>
          <Filters
            filterName={type}
            filterType="Type"
            setFilterBy={setFilterBy}
          />
          <Filters
            filterName={attribute}
            filterType="attribute"
            setFilterBy={setFilterBy}
          />
          <Filters
            filterName={race}
            filterType="race"
            setFilterBy={setFilterBy}
          />
          <Filters
            filterName={archetypes}
            filterType="Archetype"
            setFilterBy={setFilterBy}
          />
          <button>Apply Filters</button>
          <button>Reset</button>
        </div>
      )}
    </div>
  );
}
