import { useEffect, useState } from "react";

export function useFetch() {
  // STATES
  const [name, setName] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [copyMonsters, setCopyMonsters] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResultNum, setShowResultNum] = useState(false);
  const [hideLanding, setHideLanding] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [filterBy, setFilterBy] = useState({
    type: "select type",
    attribute: "select attribute",
    race: "select race",
    archetype: "select archetype",
    level: "select level",
  });

  //
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
        setCopyMonsters(JSON.parse(localStorage.getItem("monsters")));
        setShowResultNum(true);
        setHideLanding(true);
        setShowSearchResults(true);
        setFilterBy({
          type: "select type",
          attribute: "select attribute",
          race: "select race",
          archetype: "select archetype",
          level: "select level",
        });
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [
    name,
    setMonsters,
    setCopyMonsters,
    setError,
    setLoading,
    setHideLanding,
    setShowSearchResults,
    setShowResultNum,
  ]);

  return {
    name,
    setName,
    monsters,
    setMonsters,
    copyMonsters,
    setCopyMonsters,
    error,
    setError,
    loading,
    setLoading,
    hideLanding,
    setHideLanding,
    showSearchResults,
    setShowSearchResults,
    showResultNum,
    setShowResultNum,
    filterBy,
    setFilterBy,
  };
}
