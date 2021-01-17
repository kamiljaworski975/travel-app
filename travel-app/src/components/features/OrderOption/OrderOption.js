import { checkPropTypes } from "prop-types";
import React from "react";
import styles from "./OrderOption.scss";

import OrderOptionCheckboxes from "./OrderOptionCheckboxes/OrderOptionCheckboxes";
import OrderOptionDropdown from "./OrderOptionDropdown/OrderOptionDropdown";
import OrderOptionIcons from "./OrderOptionIcons/OrderOptionIcons";
import OrderOptionNumber from "./OrderOptionNumber/OrderOptionNumber";
import OrderOptionDate from "./OrderOptionDate/OrderOptionDate";
import OrderOptionText from "./OrderOptionText/OrderOptionText";

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  text: OrderOptionText,
  date: OrderOptionDate,
};

const OrderOption = ({ id, name, type, setOrderOption, ...otherProps }) => {
  const OptionComponent = optionTypes[type];
  if (!OptionComponent) {
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          setOptionValue={(value) => setOrderOption({ [id]: value })}
          {...otherProps}
        />
      </div>
    );
  }
};

export default OrderOption;
