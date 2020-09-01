import React, { Component } from "react";
import BuyingElement from "./BuyingElement";
import Paying from "./Paying";

class Buying extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "before",
      sum: 0,
      contents: [
        { id: "42534", name: "식탁", price: 1000, sale: 30 },
        { id: "2345", name: "물뿌리개", price: 2000, sale: 20 },
        { id: "23456", name: "숟가락", price: 4000, sale: 10 },
        { id: "6745", name: "거울", price: 4430, sale: 10 },
        { id: "3245", name: "팔찌", price: 8348, sale: 50 },
        { id: "4356", name: "그릇", price: 8000, sale: 30 },
      ],
    };
  }

  showPage() {
    if (this.state.mode === "before") {
      return (
        <BuyingElement
          data={this.state.contents}
          delFunc={function (delId) {
            //해당하는 element를 삭제하고 state.data를 갱신하는 코드를 작성
            var _contents = Array.from(this.state.contents);
            var i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === delId) {
                _contents.splice(i, 1);
                break;
              }
              i++;
            }
            this.setState({ contents: _contents });
          }.bind(this)}
          showFunc={function (_sum) {
            this.setState({ mode: "after" });
            this.setState({ sum: _sum });
          }.bind(this)}
        ></BuyingElement>
      );
    } else {
      return <Paying sum={this.state.sum}></Paying>;
    }
  }

  render() {
    return <div>{this.showPage()}</div>;
  }
}

export default Buying;
