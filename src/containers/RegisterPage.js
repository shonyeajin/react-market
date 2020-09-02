import RegisterPage from "../ver_2/RegisterPage";
import { connect } from "react-redux";
import store from "../ver_2/store";

function mapStateToProps(state) {
  return {
    category: state.category,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    submitFunc: function (_bigCate, _midCate, _name, _price, _amount) {
      var item = {
        bigCate: _bigCate,
        midCate: _midCate,
        name: _name,
        price: _price,
        amount: _amount,
      };
      dispatch({ type: "REGISTER", item });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
