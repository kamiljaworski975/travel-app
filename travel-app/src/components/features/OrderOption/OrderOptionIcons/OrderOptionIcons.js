import React from "react";
import styles from "../OrderOption.scss";

import Icon from "../../../common/Icon/Icon";
import { formatPrice } from "../../../../utils/formatPrice";

const OrderOptionIcons = ({
  required,
  values,
  setOptionValue,
  currentValue,
}) => (
  <div>
    {required ? (
      ""
    ) : (
      <div onClick={() => setOptionValue("")}>
        <Icon name="times-circle" />
        <span>None</span>
      </div>
    )}
    {values.map((value) => (
      <div
        key={value.id}
        onClick={() => {
          setOptionValue(value.id);
          console.log(currentValue);
        }}
        className={currentValue == value.id ? styles.iconActive : styles.icon}
      >
        <Icon name={value.icon} />
        <span>{value.name} </span>
        <span>{formatPrice(value.price)}</span>
      </div>
    ))}
  </div>
);

export default OrderOptionIcons;
