import React from "react";
import styles from "../OrderOption.scss";

const OrderOptionNumber = ({ setOptionValue, currentValue, limits }) => (
  <div className={styles.number}>
    <input
      className={styles.inputSmall}
      type="number"
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={(event) => setOptionValue(event.currentTarget.value)}
    />
  </div>
);

export default OrderOptionNumber;
