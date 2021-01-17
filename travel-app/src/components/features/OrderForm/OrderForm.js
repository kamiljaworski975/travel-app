import React from "react";
import { Row, Col } from "react-flexbox-grid";
import PropTypes from "prop-types";

import OrderSummary from "../OrderSummary/OrderSummary";
import OrderOption from "../OrderOption/OrderOption";
import prcingData from "../../../data/pricing.json";

const OrderForm = ({ options, tripCost, setOrderOption }) => {
  return (
    <Row>
      {prcingData.map((option) => {
        return (
          <Col md={4} key={option.id}>
            <OrderOption
              name={option.name}
              type={option.type}
              currentValue={options[option.id]}
              setOrderOption={setOrderOption}
              {...option}
            />
          </Col>
        );
      })}

      <Col xs={12}>
        <OrderSummary options={options} tripCost={tripCost} />
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
};

export default OrderForm;
