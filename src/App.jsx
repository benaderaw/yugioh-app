import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Error from "./components/Error";
import Loading from "./components/Loading";
import Main from "./components/Main";
import Section from "./components/Section";
import Monsters from "./components/Monsters";
import MonsterDetails from "./components/MonsterDetails";
import Collections from "./components/Collections";

export default function App() {
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("");
  const [collection, setCollection] = useState(
    JSON.parse(localStorage.getItem("collections")) === null
      ? []
      : JSON.parse(localStorage.getItem("collections"))
  );
  const [showCollection, setShowCollection] = useState(false);

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
          setShowCollection={setShowCollection}
        />
        <Nav setShowCollection={setShowCollection} />
      </Navbar>

      <Main>
        <Section>
          {loading && <Loading />}
          {error && !loading && <Error error={error} />}
          {showCollection ? (
            <Collections
              setSelected={setSelected}
              collection={collection}
              setShowCollection={setShowCollection}
            />
          ) : (
            !error &&
            !loading && (
              <Monsters monsters={monsters} setSelected={setSelected} />
            )
          )}
        </Section>

        <Section>
          <MonsterDetails
            selected={selected}
            monsters={monsters}
            collection={collection}
            setCollection={setCollection}
          />
        </Section>
      </Main>
    </div>
  );
}
