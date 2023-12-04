/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "../cssModules/filters.module.css";
import Select from "./Select";
import Button from "./Button";

export default function Filters({
  filterBy,
  setFilterBy,
  copyMonsters,
  monsters,
  setMonsters,
  setCopyMonsters,
  setShowFilter,
}) {
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

  // sort
  function compareNumbers(a, b) {
    return a - b;
  }

  // STATES
  const [type, setType] = useState(filters("type"));
  const [attribute, setAttribute] = useState(filters("attribute"));
  const [race, setRace] = useState(filters("race"));
  const [archetype, setArchetype] = useState(filters("archetype"));
  const [level, setLevel] = useState(filters("level").sort(compareNumbers));

  // onChange
  function handleFilter(e) {
    if (e.target.value.startsWith("Select".toLowerCase())) {
      return setFilterBy({ ...filterBy, [e.target.name]: e.target.value });
    }
    setFilterBy({ ...filterBy, [e.target.name]: e.target.value });
  }

  // onClick - apply filters
  function handleApplyFilters() {
    const filterTypes = Object.values(filterBy).filter(
      (fill) => !fill?.startsWith("select".toLowerCase())
    );

    // no filter
    if (filterTypes.length === 0) {
      setMonsters(JSON.parse(localStorage.getItem("monsters")));
      return;
    }

    // one filter
    if (filterTypes.length === 1) {
      const filtered = copyMonsters.filter((monster) => {
        const valuesArray = Object.values(monster).map((el) => String(el));

        return valuesArray.includes(filterTypes.at(0));
      });

      setMonsters(filtered);
      setCopyMonsters(JSON.parse(localStorage.getItem("monsters")));
      setShowFilter(false);
      return;
    }

    // more then one filter
    if (filterTypes.length > 1) {
      const filtered = copyMonsters.filter((monster) => {
        const valuesArray = Object.values(monster).map((el) => String(el));

        if (filterTypes.length === 2) {
          return (
            valuesArray.includes(filterTypes.at(0)) &&
            valuesArray.includes(filterTypes.at(1))
          );
        }

        if (filterTypes.length === 3) {
          return (
            valuesArray.includes(filterTypes.at(0)) &&
            valuesArray.includes(filterTypes.at(1)) &&
            valuesArray.includes(filterTypes.at(2))
          );
        }

        if (filterTypes.length === 4) {
          return (
            valuesArray.includes(filterTypes.at(0)) &&
            valuesArray.includes(filterTypes.at(1)) &&
            valuesArray.includes(filterTypes.at(2)) &&
            valuesArray.includes(filterTypes.at(3))
          );
        }

        if (filterTypes.length === 5) {
          return (
            valuesArray.includes(filterTypes.at(0)) &&
            valuesArray.includes(filterTypes.at(1)) &&
            valuesArray.includes(filterTypes.at(2)) &&
            valuesArray.includes(filterTypes.at(3)) &&
            valuesArray.includes(filterTypes.at(4))
          );
        }
      });

      setMonsters(filtered);
      setCopyMonsters(JSON.parse(localStorage.getItem("monsters")));
      setShowFilter(false);
      return;
    }
  }

  // onClick - reset filters
  function handleResetFilters() {
    setMonsters(
      monsters.length > 0 || monsters.length === 0
        ? JSON.parse(localStorage.getItem("monsters"))
        : []
    );

    setFilterBy({
      type: "select type",
      attribute: "select attribute",
      race: "select race",
      archetype: "select archetype",
      level: "select level",
    });

    setType(filters("type"));
    setAttribute(filters("attribute"));
    setRace(filters("race"));
    setArchetype(filters("archetype"));
    setLevel(filters("level").sort(compareNumbers));
  }

  // helper function - check if filter is selected
  function activeFilter(filter) {
    return filter.startsWith("select") ? styles.filters : styles.activeFilter;
  }

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterBox}>
        <Select
          name={"type"}
          onChange={handleFilter}
          className={activeFilter(filterBy.type)}
          value={filterBy.type}
          filter={type}
        />

        <Select
          name={"attribute"}
          onChange={handleFilter}
          className={activeFilter(filterBy.attribute)}
          value={filterBy.attribute}
          filter={attribute}
        />

        <Select
          name={"race"}
          onChange={handleFilter}
          className={activeFilter(filterBy.race)}
          value={filterBy.race}
          filter={race}
        />

        <Select
          name={"archetype"}
          onChange={handleFilter}
          className={activeFilter(filterBy.archetype)}
          value={filterBy.archetype}
          filter={archetype}
        />

        <Select
          name={"level"}
          onChange={handleFilter}
          className={activeFilter(filterBy.level)}
          value={filterBy.level}
          filter={level}
        />
      </div>

      <div className={styles.btnContainer}>
        <Button btnStyle={styles.applyFilterBtn} onClick={handleApplyFilters}>
          Apply Filters
        </Button>

        <Button btnStyle={styles.resetFilterBtn} onClick={handleResetFilters}>
          Reset
        </Button>
      </div>
    </div>
  );
}
