import SearchingPage from "../ver_2/SearchingPage";
import { connect } from "react-redux";
import store from "../ver_2/store";

function mapStateToProps(state) {
  return {
    serching_contents: state.serching_contents,
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchingPage);
