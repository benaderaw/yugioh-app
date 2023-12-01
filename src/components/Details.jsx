/* eslint-disable react/prop-types */
import styles from "../cssModules/details.module.css";
import star from "../assets/star.svg";
import { useEffect, useState } from "react";

export default function Details({ title, detail, stars }) {
  const [levelStars, setLevelStars] = useState([]);

  useEffect(() => {
    setLevelStars([]);

    for (let i = 1; i <= stars; i++) {
      setLevelStars((prev) => [...prev, star]);
    }
  }, [stars]);

  return (
    <div className={styles.details}>
      <span>
        {stars ? (
          <>
            <span className={styles.lvlText}>
              {title}: {detail}
            </span>
            {levelStars.map((lvl, i) => (
              <img key={i} src={star} alt="level star" />
            ))}
          </>
        ) : (
          <>
            {title}: {detail}
          </>
        )}
      </span>
    </div>
  );
}
