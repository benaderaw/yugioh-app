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

  // console.log(selectedID);

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
          <MonsterDetails selectedID={selectedID} monsters={monsters} />
        </Section>
      </Main>
    </div>
  );
}
