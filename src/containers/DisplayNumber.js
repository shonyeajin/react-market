import DisplayNumber from "../redux_test/DisplayNumber";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    number: state.number,
    //이렇게 작성하면 밑에서 초기화하고, 구독하고, 공급할 props인자로 넘겨준거와 같은 역할을 함
  };
}

export default connect(mapStateToProps)(DisplayNumber);

// import React, { Component } from "react";
// import store from "../store";
// export default class extends Component {
//   state = { number: store.getState().number };
//   constructor(props) {
//     super(props);
//     store.subscribe(
//       function () {
//         this.setState({ number: store.getState().number });
//       }.bind(this)
//     );
//   }
//   render() {
//     return <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>;
//   }
// }
