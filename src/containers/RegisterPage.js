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
    addBigCate: function (_bigCate) {
      var item = {
        bigCate: _bigCate,
        midCate: [],
      };
      dispatch({ type: "ADD_BIG", item });
    },
    addMidCate: function (selected_bigItem, _midCate) {
      var i = 0;
      var [...data] = store.getState().category;
      while (i < data.length) {
        if (data[i].bigCate === selected_bigItem) {
          var item_1 = [...data[i].midCate, _midCate];
          var item_2 = {
            bigCate: selected_bigItem,
            midCate: item_1,
          };
          dispatch({ type: "ADD_MID", item_2, i });
        }
        i++;
      }
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
