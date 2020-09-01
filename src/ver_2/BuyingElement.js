import React, { Component } from "react";
import store from "./store";

class BuyingElement extends Component {
  render() {
    var data = store.getState().contents;
    var lists = [];
    var i = 0;
    var sum = 0;

    while (i < data.length) {
      lists.push(
        <article className="white">
          <h5>ID:{data[i].id}</h5>
          <h5>상품명:{data[i].name}</h5>
          <h5>정가:{data[i].price}</h5>
          <h5>최대할인적용가:{data[i].sale}</h5>
          <input
            type="button"
            value="삭제"
            data-id={data[i].id}
            onClick={function (e) {
              this.props.delFunc(e.target.dataset.id);
            }.bind(this)}
          ></input>
        </article>
      );
      //sum += data[i].price;
      sum += (data[i].price * (100 - data[i].sale)) / 100;
      i++;
    }
    //sum값을 store에 dispatch
    if (sum !== store.getState().sum) {
      store.dispatch({ type: "SUMING", sum: sum });
    }

    return <div>{lists}</div>;
  }
}

export default BuyingElement;
