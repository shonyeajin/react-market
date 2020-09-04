import React, { Component } from "react";
import store from "./store";
import { Route, Switch, Link } from "react-router-dom";

export default class RegisterPage extends Component {
  state = {
    selected_bigItem: "",
    selected_midItem: "",
    mode_B: "before",
    mode_M: "before",
  };

  showAddTool_Mid() {
    if (this.state.mode_M === "after") {
      return (
        <div>
          <form
            onSubmit={function (e) {
              e.preventDefault();
              if (
                e.target.midCate.value !== "" &&
                this.state.selected_bigItem !== ""
              ) {
                //입력이 null이 아니고 selected_bigItem이 존재하면 함수 호출
                //this.props.addBigCate(e.target.bigCate.value);
                this.props.addMidCate(
                  this.state.selected_bigItem,
                  e.target.midCate.value
                );
              }
              this.setState({ mode_M: "before" });
            }.bind(this)}
          >
            <input type="text" placeholder="중분류 추가" name="midCate"></input>
            <input type="submit" value="등록"></input>
          </form>
        </div>
      );
    }
  }

  showAddTool_Big() {
    if (this.state.mode_B === "after") {
      return (
        <div>
          <form
            onSubmit={function (e) {
              e.preventDefault();
              if (e.target.bigCate.value !== "") {
                this.props.addBigCate(e.target.bigCate.value);
              }
              this.setState({ mode_B: "before" });
            }.bind(this)}
          >
            <input type="text" placeholder="대분류 추가" name="bigCate"></input>
            <input type="submit" value="등록"></input>
          </form>
        </div>
      );
    }
  }

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
    return (
      <div>
        {lists}
        <input
          type="button"
          value="+"
          onClick={function (e) {
            this.setState({ mode_B: "after" });
          }.bind(this)}
        ></input>
        {this.showAddTool_Big()}
      </div>
    );
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
    return (
      <div>
        {lists}
        <input
          type="button"
          value="+"
          onClick={function (e) {
            this.setState({ mode_M: "after" });
          }.bind(this)}
        ></input>
        {this.showAddTool_Mid()}
      </div>
    );
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
              <br />
              <input type="text" placeholder="가격" name="price"></input>
              <br />
              <input type="text" placeholder="수량" name="amount"></input>
              <br />
              <br />
              <input type="submit" value="등록"></input>
            </form>
            <br />
            <text>ID값</text>
          </div>
        </div>
      </div>
    );
  }
}
