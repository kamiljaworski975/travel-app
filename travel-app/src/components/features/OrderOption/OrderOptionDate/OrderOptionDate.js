import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker-cssmodules.css";
import styles from "../OrderOption.scss";

const addDays = (date, days) => {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(result);
  const mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(result);
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(result);
  const formatDate = `${da}/${mo}/${ye}`;

  return formatDate;
};

const OrderOptionDate = ({ setOptionValue, currentValue }) => {
  const startDate = new Date();

  return (
    <div className={styles.dateContainer}>
      <h4>Start</h4>
      <DatePicker
        className={styles.datePick}
        selected={currentValue ? currentValue : startDate}
        dateFormat="dd/MM/yyyy"
        onChange={(date) =>
          setOptionValue(date <= startDate ? currentValue : date)
        }
      />
      <h4>End</h4>
      <span className={styles.dateEnd}>
        {addDays(currentValue ? currentValue : startDate, 5)}
      </span>
    </div>
  );
};

export default OrderOptionDate;

// {addDays(currentValue ? currentValue : startDate, 5)}
