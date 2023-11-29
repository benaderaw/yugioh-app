/* eslint-disable react/prop-types */
import styles from "../cssModules/card.module.css";

export default function Monster({ monster, setSelectedID }) {
  function handleSelectIDClick() {
    setSelectedID(monster.id);
  }

  return (
    <>
      <li className={styles.card} onClick={handleSelectIDClick}>
        <img
          src={monster.card_images.at(0).image_url}
          alt=""
          className={styles.cardImg}
        />
        <div className={styles.name}>
          <h2>{monster.name}</h2>
        </div>
      </li>
    </>
  );
}
