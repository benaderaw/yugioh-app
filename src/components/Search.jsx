/* eslint-disable react/prop-types */
import styles from "../cssModules/search.module.css";
import { useRef } from "react";
import { useKey } from "../custom hooks/useKey";

export default function Search({
  query,
  setQuery,
  setName,
  setShowCollection,
}) {
  // onChange - search input
  function handelSearch(e) {
    setQuery(e.target.value);
  }

  // onSubmit
  function handelSearchSubmit(e) {
    e.preventDefault();

    setName(query);
    setShowCollection(false);
  }

  //
  const input = useRef(null);

  function ccc() {
    return input.current.focus();
  }

  //
  useKey("Enter", ccc);

  return (
    <>
      <form onSubmit={handelSearchSubmit}>
        <input
          ref={input}
          type="text"
          placeholder="Search monsters..."
          className={styles.search}
          value={query}
          onChange={handelSearch}
        />
      </form>
    </>
  );
}
