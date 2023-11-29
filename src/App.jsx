import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

import styles from "./cssModules/navbar.module.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [pagination, setPagination] = useState([0, 5]);

  // onClick - pagination next button
  function handleNext() {
    if (pagination[1] >= monsters.length) return;
    setPagination((prev) => [prev[0] + 5, prev[1] + 5]);
  }
  // onClick - pagination back button
  function handleBack() {
    if (pagination[0] === 0) return;
    setPagination((prev) => [prev[0] - 5, prev[1] - 5]);
  }

  return (
    <div className="App">
      <Navbar>
        <Search
          query={query}
          setQuery={setQuery}
          name={name}
          setName={setName}
          monsters={monsters}
          setMonsters={setMonsters}
          pagination={pagination}
        />
      </Navbar>

      <div className={styles.cards}>
        {monsters.map(
          (monster, i) =>
            i >= pagination[0] &&
            i < pagination[1] && (
              <div key={monster.id} className={styles.card}>
                <img src={monster.card_images.at(0).image_url} alt="" />
                <h2>{monster.name}</h2>
              </div>
            )
        )}
      </div>

      {monsters.length > 5 && (
        <div className={styles.btnContainer}>
          <button className={styles.backBtn} onClick={handleBack}>
            &larr; BACK
          </button>

          <button className={styles.nextBtn} onClick={handleNext}>
            NEXT &rarr;
          </button>
        </div>
      )}
    </div>
  );
}
