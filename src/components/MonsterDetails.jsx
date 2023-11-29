/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "../cssModules/monsterDetails.module.css";
import Details from "./Details";
import Loading from "./Loading";

export default function MonsterDetails({ selectedID, monsters }) {
  const [selectedMonster, setSelectedMonster] = useState({});
  const [detailsLoading, setDetailsLoading] = useState(false);

  // useEffect -
  useEffect(() => {
    setDetailsLoading(true);

    const selected = monsters.filter((monster) => {
      return monster.id === selectedID;
    });

    setSelectedMonster({ ...selected?.at(0) });
    setDetailsLoading(false);
  }, [selectedID, monsters]);

  // console.log(selectedMonster);

  const {
    id,
    image = selectedMonster.card_images?.at(0).image_url,
    name,
    desc,
    atk,
    def,
    archetype,
    attribute,
    level,
    race,
    type,
  } = selectedMonster;

  const gods = function () {
    // Slifer
    if (id === 10000020) return styles.detailsContainerSlifer;

    // Obelisk
    if (id === 10000000) return styles.detailsContainerObelisk;

    // Ra
    if (id === 10000010 || id === 10000080 || id === 10000090)
      return styles.detailsContainerRa;

    return styles.detailsContainer;
  };

  return (
    <>
      {detailsLoading && <Loading />}

      <div className={gods()}>
        {Object.keys(selectedMonster).length !== 0 && !detailsLoading && (
          <>
            <div className={styles.detailsImgAndNameBox}>
              <img src={image} alt={name} className={styles.detailsImg} />
              <h2 className={styles.detailsName}>{name}</h2>
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
          </>
        )}
      </div>
    </>
  );
}
