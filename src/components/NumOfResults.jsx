/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "../cssModules/numOfResults.module.css";
import { IoFilter } from "react-icons/io5";
import Filters from "./Filters";

export default function NumOfResults({
  monsters,
  setMonsters,
  name,
  // filterBy,
  // setFilterBy,
  copyMonsters,
  setCopyMonsters,
}) {
  const [showFilter, setShowFilter] = useState(false);
  const [type, setType] = useState([]);
  const [attribute, setAttribute] = useState([]);
  const [race, setRace] = useState([]);
  const [archetypes, setArchetypes] = useState([]);
  const [filterBy, setFilterBy] = useState({
    type: null,
    attribute: null,
    race: null,
    archetype: null,
  });

  // create an array from the filter types (filter types passed as argument)
  const filters = function (filterType) {
    return Array.from(
      new Set(
        copyMonsters
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

  // onClick - apply filters
  function handleApplyFilters() {
    const filterTypes = Object.values(filterBy).filter((fill) => fill);

    // no filter
    if (filterTypes.length === 0) {
      setMonsters(JSON.parse(localStorage.getItem("monsters")));
      return;
    }

    // one filter
    if (filterTypes.length === 1) {
      const filtered = copyMonsters.filter((monster) => {
        return Object.values(monster).includes(filterTypes.at(0));
      });

      setMonsters(filtered);
      setCopyMonsters(JSON.parse(localStorage.getItem("monsters")));
      return;
    }

    // more then one filter
    if (filterTypes.length > 1) {
      const filtered = copyMonsters.filter((monster) => {
        if (filterTypes.length === 2) {
          return (
            Object.values(monster).includes(filterTypes.at(0)) &&
            Object.values(monster).includes(filterTypes.at(1))
          );
        }

        if (filterTypes.length === 2) {
          return (
            Object.values(monster).includes(filterTypes.at(0)) &&
            Object.values(monster).includes(filterTypes.at(1)) &&
            Object.values(monster).includes(filterTypes.at(2))
          );
        }

        if (filterTypes.length === 3) {
          return (
            Object.values(monster).includes(filterTypes.at(0)) &&
            Object.values(monster).includes(filterTypes.at(1)) &&
            Object.values(monster).includes(filterTypes.at(2)) &&
            Object.values(monster).includes(filterTypes.at(3))
          );
        }
      });

      setMonsters(filtered);
      setCopyMonsters(JSON.parse(localStorage.getItem("monsters")));
      return;
    }
  }

  // onClick - reset filters
  function handleResetFilters() {
    setMonsters(JSON.parse(localStorage.getItem("monsters")));
    setFilterBy({
      type: null,
      attribute: null,
      race: null,
      archetype: null,
    });
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
            filterType="type"
            filterBy={filterBy}
            setFilterBy={setFilterBy}
          />
          <Filters
            filterName={attribute}
            filterType="attribute"
            filterBy={filterBy}
            setFilterBy={setFilterBy}
          />
          <Filters
            filterName={race}
            filterType="race"
            filterBy={filterBy}
            setFilterBy={setFilterBy}
          />
          <Filters
            filterName={archetypes}
            filterType="archetype"
            filterBy={filterBy}
            setFilterBy={setFilterBy}
          />
          <button
            className={styles.applyFilterBtn}
            onClick={handleApplyFilters}
          >
            Apply Filters
          </button>
          <button
            className={styles.resetFilterBtn}
            onClick={handleResetFilters}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
