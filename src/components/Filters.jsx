/* eslint-disable react/prop-types */
import styles from "../cssModules/filters.module.css";

export default function Filters({ filterName, filterType, setFilterBy }) {
  // onChange
  function handleFilter(e) {
    setFilterBy([e.target]);
  }

  return (
    <select name="lol" className={styles.filters} onChange={handleFilter}>
      <option>Select {filterType}</option>

      {filterName?.map((xxx, i) => (
        <option key={i} value={xxx} name={filterType}>
          {xxx}
        </option>
      ))}
    </select>
  );
}
