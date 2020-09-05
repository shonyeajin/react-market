import LeavingPage from "../ver_2/LeavingPage";
import { connect } from "react-redux";
import store from "../ver_2/store";

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    addApprFunc: function (apprItem) {
      dispatch({ type: "ADD_APPR_ITEM", apprItem });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeavingPage);
