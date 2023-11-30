/* eslint-disable react/prop-types */
import styles from "../cssModules/marketPrice.module.css";

export default function MarketPrice({ selected }) {
  const {
    amazon_price: amazon,
    cardmarket_price: cardmarket,
    coolstuffinc_price: coolstuffinc,
    ebay_price: ebay,
    tcgplayer_price: tcgplayer,
  } = selected.card_prices.at(0);

  return (
    <div className={styles.marketPriceContainer}>
      <div className={styles.marketPriceHeader}>
        <h2>Marketplace Price</h2>
      </div>
      <div className={styles.sellersBox}>
        <div>
          <span>${amazon}</span>
          <span>Amazon</span>
        </div>
        <div>
          <span>${ebay}</span>
          <span>Ebay</span>
        </div>
        <div>
          <span>${cardmarket}</span>
          <span>Cardmarket</span>
        </div>
        <div>
          <span>${coolstuffinc}</span>
          <span>Coolstuffinc</span>
        </div>
        <div>
          <span>${tcgplayer}</span>
          <span>TCGplayer</span>
        </div>
      </div>
    </div>
  );
}
