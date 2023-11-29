/* eslint-disable react/prop-types */
import styles from "../cssModules/search.module.css";
import { useEffect } from "react";

export default function Search({
  query,
  setQuery,
  name,
  setName,
  setMonsters,
}) {
  useEffect(() => {
    const fetchData = async function () {
      try {
        if (name === "") return;

        const res = await fetch(
          `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${name}`
        );

        if (!res.ok) throw new Error("⛔️ Something went wrong");

        const { data } = await res.json();

        localStorage.setItem("monsters", JSON.stringify(data));

        setMonsters(JSON.parse(localStorage.getItem("monsters")));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [name, setMonsters]);

  // onChange - search input
  function handelSearch(e) {
    setQuery(e.target.value);
  }

  // onSubmit
  function handelSearchSubmit(e) {
    e.preventDefault();

    setName(query);
  }

  return (
    <>
      <form action="" onSubmit={handelSearchSubmit}>
        <input
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
