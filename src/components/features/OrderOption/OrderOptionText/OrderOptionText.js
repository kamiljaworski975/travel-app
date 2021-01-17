import React from "react";

const OrderOptionText = ({ currentValue, setOptionValue }) => {
  return (
    <div>
      <input
        value={currentValue}
        onChange={(event) => setOptionValue(event.target.value)}
      />
    </div>
  );
};

export default OrderOptionText;
