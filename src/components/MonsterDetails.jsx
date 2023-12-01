/* eslint-disable react/prop-types */
// import { useState } from "react";
import { useEffect } from "react";
import styles from "../cssModules/monsterDetails.module.css";
import Details from "./Details";
import MarketPrice from "./MarketPrice";

export default function MonsterDetails({
  selected,
  collection,
  setCollection,
}) {
  const {
    id,
    image = selected.card_images?.at(0).image_url,
    name,
    desc,
    atk,
    def,
    archetype,
    attribute,
    level,
    race,
    type,
  } = selected;

  const gods = function () {
    // Slifer
    if (id === 10000020) return styles.detailsContainerSlifer;

    // Obelisk
    if (id === 10000000) return styles.detailsContainerObelisk;

    // Ra
    if (id === 10000010 || id === 10000080 || id === 10000090)
      return styles.detailsContainerRa;

    //10000040
    if (id === 10000040) return styles.detailsContainerHolactie;

    return styles.detailsContainer;
  };

  // useEffect - update and store collections to local storage
  useEffect(() => {
    localStorage.setItem("collections", JSON.stringify(collection));
  }, [collection]);

  // derived-state - cheek if selected card is already in collection
  const isAdded = collection.some((card) => card.id === selected.id);

  // onClick - add or remove cards to your collection
  function handleAddToOrRemoveFromCollection() {
    if (isAdded) {
      return setCollection(
        collection.filter((card) => {
          return card.id !== selected.id;
        })
      );
    }

    setCollection([...collection, selected]);
  }

  // console.log(collection);

  return (
    <>
      <div className={gods()}>
        {Object.keys(selected).length !== 0 && (
          <>
            <div className={styles.detailsImgAndNameBox}>
              <img src={image} alt={name} className={styles.detailsImg} />
              <h2 className={styles.detailsName}>{name}</h2>

              <button
                onClick={handleAddToOrRemoveFromCollection}
                className={isAdded ? styles.added : styles.add}
              >
                {isAdded ? "Remove from Collection" : "Add to Collection"}
              </button>

              <div className={styles.descBox}>
                <p>
                  <em>{desc}</em>
                </p>
              </div>
            </div>

            <div className={styles.detailsBox}>
              {(atk || atk === 0) && <Details title={"Attack"} detail={atk} />}
              {(def || def === 0) && <Details title={"Defense"} detail={def} />}
              {archetype && <Details title={"Archetype"} detail={archetype} />}
              {attribute && <Details title={"Attribute"} detail={attribute} />}
              {level && (
                <Details title={"Level"} detail={level} stars={level} />
              )}
              {race && <Details title={"Race"} detail={race} />}
              {type && <Details title={"Type"} detail={type} />}
            </div>

            <MarketPrice selected={selected} />
          </>
        )}
      </div>
    </>
  );
}
