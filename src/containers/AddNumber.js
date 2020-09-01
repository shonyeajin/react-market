import AddNumber from "../redux_test/AddNumber";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  //인자로 store.dispatch를 자동으로 인자로 전달해 주는 api임

  return {
    onClick: function (size) {
      dispatch({ type: "INCREMENT", size: size });
    },
  };
}

export default connect(null, mapDispatchToProps)(AddNumber);

// import React, { Component } from "react";
// import store from "../store";
// export default class extends Component {
//   render() {
//     return (
//       <AddNumber
//         onClick={function (size) {
//           store.dispatch({ type: "INCREMENT", size: size });
//         }.bind(this)}
//       ></AddNumber>
//     );
//   }
// }
