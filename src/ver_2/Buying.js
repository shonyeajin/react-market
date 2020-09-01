import React, { Component } from "react";
import BuyingElement from "../containers/BuyingElement";
import store from "./store";
import Paying from "./Paying";
import { Route, Switch, Link } from "react-router-dom";

export default class Buying extends Component {
  render() {
    return (
      <div>
        <h2>상품판매</h2>
        <input type="text" placeholder="ID로 상품검색"></input>
        <button
          type="submit"
          onClick={function (e) {
            alert("상품검색 작업 실행");
          }}
        >
          검색
        </button>
        <BuyingElement></BuyingElement>
        <article>
          <h2 className="white">합계:{store.getState().sum}</h2>
        </article>
        <article>
          <Link to="/paying">
            <input type="button" value="판매하기"></input>
          </Link>
        </article>
      </div>
    );
  }
}
