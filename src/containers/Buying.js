import Buying from "../ver_2/Buying";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    sum: state.sum,
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Buying);
