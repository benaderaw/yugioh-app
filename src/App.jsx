import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

import Error from "./components/Error";
import Loading from "./components/Loading";
import Main from "./components/Main";
import Section from "./components/Section";
import Monsters from "./components/Monsters";
import MonsterDetails from "./components/MonsterDetails";

export default function App() {
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedID, setSelectedID] = useState("");

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
          setError={setError}
          setLoading={setLoading}
        />
      </Navbar>

      <Main>
        <Section>
          {loading && <Loading />}
          {error && !loading && <Error error={error} />}
          {!error && !loading && (
            <Monsters monsters={monsters} setSelectedID={setSelectedID} />
          )}
        </Section>

        <Section>
          <MonsterDetails />
        </Section>
      </Main>
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
