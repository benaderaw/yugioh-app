/* eslint-disable react/prop-types */
import styles from "../cssModules/search.module.css";
import { useEffect } from "react";

export default function Search({
  query,
  setQuery,
  name,
  setName,
  setMonsters,
  setError,
  setLoading,
}) {
  useEffect(() => {
    const fetchData = async function () {
      try {
        setError("");
        setLoading(true);

        if (name === "") return;

        const res = await fetch(
          `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${name}`
        );

        if (!res.ok)
          throw new Error(`💥 No card by the name ${name} was found`);

        const { data } = await res.json();

        localStorage.setItem("monsters", JSON.stringify(data));

        setMonsters(JSON.parse(localStorage.getItem("monsters")));
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [name, setMonsters, setError, setLoading]);

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
