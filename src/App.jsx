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
import { useFetch } from "./custom hooks/useFetch";

export default function App() {
  const [query, setQuery] = useState("");
  const [hideDetailsLanding, setHideDetailsLanding] = useState(false);
  const [selected, setSelected] = useState("");
  const [collection, setCollection] = useState(
    JSON.parse(localStorage.getItem("collections")) === null
      ? []
      : JSON.parse(localStorage.getItem("collections"))
  );
  const [showCollection, setShowCollection] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredMonsters, setFilteredMonsters] = useState([[false], []]);

  // custom hook - fetch api data
  const {
    setName,
    monsters,
    setMonsters,
    error,
    loading,
    hideLanding,
    setHideLanding,
    showSearchResults,
    setShowSearchResults,
    showResultNum,
    filterBy,
    setFilterBy,
  } = useFetch();

  return (
    <div className="App">
      <Navbar>
        <Search
          query={query}
          setQuery={setQuery}
          setName={setName}
          setShowCollection={setShowCollection}
          setFilteredMonsters={setFilteredMonsters}
          setFilterBy={setFilterBy}
        />
        <Nav
          setShowCollection={setShowCollection}
          setHideLanding={setHideLanding}
          setHideDetailsLanding={setHideDetailsLanding}
          setShowDetails={setShowDetails}
          setShowSearchResults={setShowSearchResults}
          setQuery={setQuery}
          setName={setName}
          setFilterBy={setFilterBy}
          setFilteredMonsters={setFilteredMonsters}
          setShowFilter={setShowFilter}
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
              showFilter={showFilter}
              setShowFilter={setShowFilter}
              filterBy={filterBy}
              setFilterBy={setFilterBy}
              filteredMonsters={filteredMonsters}
              setFilteredMonsters={setFilteredMonsters}
            />
          ) : (
            !error &&
            !loading &&
            showSearchResults && (
              <Monsters
                monsters={monsters}
                setMonsters={setMonsters}
                setSelected={setSelected}
                showResultNum={showResultNum}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                filterBy={filterBy}
                setFilterBy={setFilterBy}
                setHideDetailsLanding={setHideDetailsLanding}
                setShowDetails={setShowDetails}
                filteredMonsters={filteredMonsters}
                setFilteredMonsters={setFilteredMonsters}
                showFilter={showFilter}
                setShowFilter={setShowFilter}
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
