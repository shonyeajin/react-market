import React, { Component } from "react";
import store from "./store";
import { Route, Switch, Link } from "react-router-dom";

export default class LeavingPage extends Component {
  showYear() {
    //30년 짜리 프로그램 ㅋ
    var i = 2020;
    var list = [];
    while (i <= 2050) {
      list.push(<option value={i}>{i}</option>);
      i++;
    }
    return list;
  }

  showMonth() {
    var i = 1;
    var list = [];
    while (i <= 12) {
      list.push(<option value={i}>{i}</option>);
      i++;
    }
    return list;
  }

  showDate() {
    var i = 1;
    var list = [];
    while (i <= 31) {
      list.push(<option value={i}>{i}</option>);
      i++;
    }
    return list;
  }

  render() {
    return (
      <div>
        <h2 className="white">상품 등록(위탁)</h2>
        <form
          className="white"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.addApprFunc({
              name: e.target.name.value,
              appr_price: Number(e.target.appr_price.value),
              hope_price: Number(e.target.hope_price.value),
              appr_info: e.target.appr_info.value,
              appr_date: `${e.target.year.value}-${e.target.month.value}-${e.target.day.value}`,
              pay_method: e.target.pay_method.value,
            });
          }.bind(this)}
        >
          <input type="text" placeholder="위탁상품명" name="name"></input>
          <br />
          <input type="text" placeholder="감정가" name="appr_price"></input>
          <br />
          <input type="text" placeholder="희망가" name="hope_price"></input>
          <br />
          <input type="text" placeholder="위탁정보" name="appr_info"></input>
          <br />
          <text>위탁 날짜: </text>
          <select name="year">{this.showYear()}</select>
          <select name="month">{this.showMonth()}</select>
          <select name="day">{this.showDate()}</select>
          <br />
          <text>고객 정산 방법: </text>
          <input
            type="radio"
            name="pay_method"
            value="point"
            checked="checked"
          />
          포인트
          <input type="radio" name="pay_method" value="account" />
          계좌
          <br />
          <br />
          <input type="submit" value="등록"></input>
        </form>
      </div>
    );
  }
}
