import "./App.css";
import { useState } from "react";
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
import Landing from "./components/Landing";
import DetailsLanding from "./components/DetailsLanding";

export default function App() {
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [hideLanding, setHideLanding] = useState(false);
  const [hideDetailsLanding, setHideDetailsLanding] = useState(false);
  const [monsters, setMonsters] = useState([]);
  const [copyMonsters, setCopyMonsters] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("");
  const [collection, setCollection] = useState(
    JSON.parse(localStorage.getItem("collections")) === null
      ? []
      : JSON.parse(localStorage.getItem("collections"))
  );
  const [showCollection, setShowCollection] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showResultNum, setShowResultNum] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);
  const [filterBy, setFilterBy] = useState({
    type: "select type",
    attribute: "select attribute",
    race: "select race",
    archetype: "select archetype",
    level: "select level",
  });

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
          setCopyMonsters={setCopyMonsters}
          setError={setError}
          setLoading={setLoading}
          setShowCollection={setShowCollection}
          setShowResultNum={setShowResultNum}
          setHideLanding={setHideLanding}
          setShowSearchResults={setShowSearchResults}
        />
        <Nav
          setShowCollection={setShowCollection}
          setHideLanding={setHideLanding}
          setHideDetailsLanding={setHideDetailsLanding}
          setShowDetails={setShowDetails}
          setShowSearchResults={setShowSearchResults}
          setQuery={setQuery}
          setName={setName}
        />
      </Navbar>

      <Main>
        <Section>
          {!hideLanding && !error && <Landing />}
          {loading && <Loading />}
          {error && !loading && !showCollection && <Error error={error} />}
          {showCollection ? (
            <Collections
              setSelected={setSelected}
              collection={collection}
              setShowCollection={setShowCollection}
              setHideDetailsLanding={setHideDetailsLanding}
              setShowDetails={setShowDetails}
            />
          ) : (
            !error &&
            !loading &&
            showSearchResults && (
              <Monsters
                monsters={monsters}
                setMonsters={setMonsters}
                copyMonsters={copyMonsters}
                setCopyMonsters={setCopyMonsters}
                setSelected={setSelected}
                showResultNum={showResultNum}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                filterBy={filterBy}
                setFilterBy={setFilterBy}
                setHideDetailsLanding={setHideDetailsLanding}
                setShowDetails={setShowDetails}
              />
            )
          )}
        </Section>

        <Section>
          {!hideDetailsLanding && <DetailsLanding />}
          {showDetails && (
            <MonsterDetails
              selected={selected}
              monsters={monsters}
              collection={collection}
              setCollection={setCollection}
            />
          )}
        </Section>
      </Main>
    </div>
  );
}
