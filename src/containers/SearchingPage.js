import SearchingPage from "../ver_2/SearchingPage";
import { connect } from "react-redux";
import store from "../ver_2/store";

function mapStateToProps(state) {
  return {
    searching_contents: state.searching_contents,
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchingPage);
