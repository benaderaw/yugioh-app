import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

import styles from "./cssModules/navbar.module.css";
import Error from "./components/Error";
import Loading from "./components/Loading";

export default function App() {
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [pagination, setPagination] = useState([0, 5]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

  if (error) console.log(error.message);

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
          setError={setError}
          setLoading={setLoading}
        />
      </Navbar>

      {loading && <Loading />}
      {error && !loading && <Error error={error} />}

      {!error && !loading && (
        <>
          <div className={styles.cards}>
            {monsters.map(
              (monster, i) =>
                i >= pagination[0] &&
                i < pagination[1] && (
                  <div key={monster.id} className={styles.card}>
                    <img src={monster.card_images.at(0).image_url} alt="" />
                    <div className={styles.name}>
                      <h2>{monster.name}</h2>
                    </div>
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
        </>
      )}
    </div>
  );
}

// git add .
// git commit -m "bla bla bla"
// git push -> must push to git to show committed in remote repository
// git branch [branch name] -> creates a new branch but dose no enter it, use git checkout [branch name] to enter the new branch if desired
// git branch -m [branch name] -> rename current branch
// git checkout -b [branch name] -> will create new branch and switch to the new branch, if the branch name already exists it will not work
// git checkout [branch name] -> switch to the branch
// git branch -d [branch name] -> deletes the branch, needs to not be in the branch you want to delete
