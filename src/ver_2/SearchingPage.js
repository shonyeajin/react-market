import React, { Component } from "react";
import store from "./store";
import { Route, Switch, Link } from "react-router-dom";

export default class SearchingPage extends Component {
  state = {
    mode: 0,
    searching_category: null,
    searching_input_text: null,
  };
  show_searching_content() {
    if (this.state.mode === 1) {
      var data = this.props.searching_contents;
      var i = 0;
      var lists = [];
      if (this.state.searching_category === "name") {
        while (i < data.length) {
          if (data[i].name === this.state.searching_input_text) {
            lists.push(
              <h5 className="white">
                <text>ID:{data[i].id}</text>
                <br />
                <text>NAME:{data[i].name}</text>
                <br />
                <text>PRICE:{data[i].price}</text>
                <br />
                <text>SALE:{data[i].sale}</text>
                <br />
                <text>LOCATION:{data[i].location}</text>
                <br />
                <text>COMPANY:{data[i].company}</text>
              </h5>
            );
          }
          i++;
        }
      }
      if (this.state.searching_category === "id") {
        while (i < data.length) {
          if (data[i].id === this.state.searching_input_text) {
            lists.push(
              <h5 className="white">
                <text>ID:{data[i].id}</text>
                <br />
                <text>NAME:{data[i].name}</text>
                <br />
                <text>PRICE:{data[i].price}</text>
                <br />
                <text>SALE:{data[i].sale}</text>
                <br />
                <text>LOCATION:{data[i].location}</text>
                <br />
                <text>COMPANY:{data[i].company}</text>
              </h5>
            );
          }
          i++;
        }
      }
      if (this.state.searching_category === "location") {
        while (i < data.length) {
          if (data[i].location === this.state.searching_input_text) {
            lists.push(
              <h5 className="white">
                <text>ID:{data[i].id}</text>
                <br />
                <text>NAME:{data[i].name}</text>
                <br />
                <text>PRICE:{data[i].price}</text>
                <br />
                <text>SALE:{data[i].sale}</text>
                <br />
                <text>LOCATION:{data[i].location}</text>
                <br />
                <text>COMPANY:{data[i].company}</text>
              </h5>
            );
          }
          i++;
        }
      }
      if (this.state.searching_category === "company") {
        while (i < data.length) {
          if (data[i].company === this.state.searching_input_text) {
            lists.push(
              <h5 className="white">
                <text>ID:{data[i].id}</text>
                <br />
                <text>NAME:{data[i].name}</text>
                <br />
                <text>PRICE:{data[i].price}</text>
                <br />
                <text>SALE:{data[i].sale}</text>
                <br />
                <text>LOCATION:{data[i].location}</text>
                <br />
                <text>COMPANY:{data[i].company}</text>
              </h5>
            );
          }
          i++;
        }
      }
      return (
        <div>
          <h2>검색한 물건 컨텐츠 보여주기</h2>
          <h2>{lists}</h2>
        </div>
      );
    }
  }

  show_searching_category() {
    var list = [];
    list.push(<option value="name">상품명</option>);
    list.push(<option value="id">아이디</option>);
    list.push(<option value="location">재고위치</option>);
    list.push(<option value="company">매입처</option>);
    return list;
  }
  render() {
    return (
      <div>
        <h2 className="white">상품 검색</h2>
        <form
          className="white"
          onSubmit={function (e) {
            e.preventDefault();
            this.setState({ mode: 1 });
            this.setState({
              searching_category: e.target.searching_category.value,
              searching_input_text: e.target.search_input_text.value,
            });
          }.bind(this)}
        >
          <text>검색 분류 </text>

          <select name="searching_category">
            {this.show_searching_category()}
          </select>
          <br />
          <br />
          <input
            type="text"
            placeholder="검색할 값을 입력하세요"
            name="search_input_text"
          ></input>
          <input type="submit" value="검색"></input>
          <br />
        </form>
        <div className="white">{this.show_searching_content()}</div>
      </div>
    );
  }
}
