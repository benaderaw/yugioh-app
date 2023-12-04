/* eslint-disable react/prop-types */
import { IoFilter } from "react-icons/io5";
import styles from "../cssModules/filterIcon.module.css";

export default function FilterIcon({ showFilter, setShowFilter }) {
  // onClick - show filters
  function handleShowFilter() {
    setShowFilter(!showFilter);
  }

  return (
    <IoFilter
      className={showFilter ? styles.filterIconOpen : styles.filterIcon}
      onClick={handleShowFilter}
    />
  );
}
