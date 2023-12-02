/* eslint-disable react/prop-types */
import styles from "../cssModules/filters.module.css";

export default function Filters({
  filterName,
  filterType,
  filterBy,
  setFilterBy,
}) {
  // onChange -
  function handleFilter(e) {
    if (e.target.value.startsWith("Select".toLowerCase())) {
      return setFilterBy({ ...filterBy, [filterType]: null });
    }

    setFilterBy({ ...filterBy, [filterType]: e.target.value });
  }

  return (
    <select className={styles.filters} onChange={handleFilter}>
      <option>select {filterType}</option>

      {filterName?.map((filter, i) => (
        <option key={i} value={filter} name={filterType}>
          {filter}
        </option>
      ))}
    </select>
  );
}
