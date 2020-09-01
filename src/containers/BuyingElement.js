import BuyingElement from "../ver_2/BuyingElement";
import { connect } from "react-redux";
import store from "../ver_2/store";

function mapStateToProps(state) {
  return {
    delFunc: function (delId) {
      //해당하는 element를 삭제하고 store.contents를 갱신하는 코드를 작성
      var _contents = Array.from(state.contents);
      var i = 0;
      while (i < _contents.length) {
        if (_contents[i].id === delId) {
          _contents.splice(i, 1);
          break;
        }
        i++;
      }
      //this.setState({ contents: _contents });
      store.dispatch({ type: "CONTENT_UPDATE", contents: _contents });
    },
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyingElement);
