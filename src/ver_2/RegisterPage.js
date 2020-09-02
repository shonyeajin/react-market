import React, { Component } from "react";
import store from "./store";
import { Route, Switch, Link } from "react-router-dom";

export default class RegisterPage extends Component {
  state = {
    selected_bigItem: "",
    selected_midItem: "",
  };
  showingBig() {
    var data = this.props.category;
    var lists = [];
    var i = 0;

    while (i < data.length) {
      lists.push(
        <h5
          data-id={data[i].bigCate}
          onClick={function (e) {
            this.setState({ selected_bigItem: e.target.dataset.id });
          }.bind(this)}
        >
          {data[i].bigCate}
        </h5>
      );
      i++;
    }
    return <div>{lists}</div>;
  }
  showingMid() {
    var data = this.props.category;
    var lists = [];
    var i = 0,
      j = 0;
    while (i < data.length) {
      if (data[i].bigCate === this.state.selected_bigItem) {
        while (j < data[i].midCate.length) {
          lists.push(
            <h5
              data-id={data[i].midCate[j]}
              onClick={function (e) {
                this.setState({ selected_midItem: e.target.dataset.id });
              }.bind(this)}
            >
              {data[i].midCate[j]}
            </h5>
          );
          j++;
        }
      }
      i++;
    }
    return <div>{lists}</div>;
  }

  render() {
    return (
      <div>
        <h2 className="white">상품 등록(일반)</h2>
        <div className="flex_container">
          <div className="white flex_item">
            <h3>대분류</h3>
            {this.showingBig()}
          </div>
          <div className="white flex_item">
            <h3>중분류</h3>
            {this.showingMid()}
          </div>
          <div className="white flex_item">
            <h3>상품정보</h3>
            <form
              onSubmit={function (e) {
                e.preventDefault();
                this.props.submitFunc(
                  this.state.bigCate,
                  this.state.midCate,
                  e.target.name.value,
                  Number(e.target.price.value),
                  Number(e.target.amount.value)
                );
              }.bind(this)}
            >
              <input type="text" placeholder="상품명" name="name"></input>
              <input type="text" placeholder="가격" name="price"></input>
              <input type="text" placeholder="수량" name="amount"></input>
              <input type="submit" value="등록"></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
