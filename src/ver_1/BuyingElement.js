import React, { Component } from "react";
import "./BuyingElement.css";

class BuyingElement extends Component {
  render() {
    var data = this.props.data;
    var lists = [];
    var i = 0;
    var sum = 0;

    while (i < data.length) {
      lists.push(
        <article>
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

    return (
      <div>
        <input type="text" placeholder="ID로 상품검색"></input>
        <button
          type="submit"
          onClick={function (e) {
            alert("상품검색 작업 실행");
          }}
        >
          검색
        </button>
        {lists}
        <article>
          <h2>합계:{sum}</h2>
        </article>
        <article>
          <input
            type="button"
            value="판매하기"
            onClick={function (e) {
              this.props.showFunc(sum);
            }.bind(this)}
          ></input>
        </article>
      </div>
    );
  }
}

export default BuyingElement;
