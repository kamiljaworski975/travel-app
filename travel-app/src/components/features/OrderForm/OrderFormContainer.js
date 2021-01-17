import { connect } from "react-redux";

import OrderForm from "./OrderForm";
import {
  getOrderOptions,
  getOrder,
  setOrderOption,
} from "../../../redux/orderRedux";

const mapStateToProps = (state) => ({
  options: getOrderOptions(state),
  order: getOrder(state),
});

const mapDispatchToProps = (dispatch) => ({
  setOrderOption: (order) => dispatch(setOrderOption(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
