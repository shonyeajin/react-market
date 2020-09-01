import Paying from "../ver_2/Paying";
import { connect } from "react-redux";
import store from "../ver_2/store";

function mapStateToProps(state) {
  return {
    selected_customer: state.selected_customer,
    final_sum: state.final_sum,
    sum: state.sum,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    save_customer: function (selected_customer) {
      dispatch({ type: "CUSTOMER", selected_customer });
    },
    apply_point: function (usePoint) {
      var final_sum = store.getState().sum - usePoint;
      dispatch({ type: "APPLY_POINT", final_sum });
    },
    payment: function (cardPay, cashPay) {
      dispatch({ type: "PAYMENT", cardPay, cashPay });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Paying);
