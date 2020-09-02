import React, { Component } from "react";
import store from "./store";
import { Route, Switch, Link } from "react-router-dom";

function cusInfo() {
  if (store.getState().selected_customer !== null) {
    return (
      <div className="white">
        <h2>구매자 정보</h2>
        <h5>구매자 이름: {store.getState().selected_customer.name}</h5>
        <h5>구매자 전화번호{store.getState().selected_customer.wholeNum}</h5>
        <h5>사용가능 포인트:{store.getState().selected_customer.point}p</h5>
      </div>
    );
  }
}

export default class Paying extends Component {
  searchCustomer(backNum) {
    var customerDB = store.getState().customerDB;
    var i = 0;

    while (i < customerDB.length) {
      if (customerDB[i].backNum === Number(backNum)) {
        this.props.save_customer(customerDB[i]);
        break;
      }
      i++;
    }
  }
  render() {
    return (
      <div>
        <h2>상품 결제</h2>
        <form
          action="/customer_search_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            //e.target.backNum.value의 값으로 디비에서 구매자 정보 가져오는 코드 작성
            this.searchCustomer(e.target.backNum.value);
          }.bind(this)}
        >
          <input
            type="text"
            placeholder="휴대폰번호 뒤 4자리"
            name="backNum"
          ></input>

          <input type="submit" value="회원 검색"></input>
        </form>
        {cusInfo()}
        <article className="white">
          <h2>할인 적용</h2>
          <form
            onSubmit={function (e) {
              e.preventDefault();
              //포인트 적용한 결제 가격을 연산하고 이를 창에 띄우고 setState로 sum변경
              //   this.setState({
              //     finalCost: this.props.sum - e.target.usePoint.value,
              //   });
              //   this.showFinalCost();
              var usePoint = Number(e.target.usePoint.value);
              if (usePoint > 0) {
                this.props.apply_point(usePoint);
              }
            }.bind(this)}
          >
            <p>
              <text>포인트 적용 </text>
              <input type="text" placeholder="0p" name="usePoint"></input>
              <input type="submit" value="적용"></input>
            </p>
          </form>
          <h3>
            최종 결제 금액:
            {this.props.final_sum === 0 ? this.props.sum : this.props.final_sum}
            원
          </h3>
        </article>

        <article className="white">
          <h2>결제 방법</h2>
          <form
            onSubmit={function (e) {
              e.preventDefault();
              this.props.payment(
                Number(e.target.cardPay.value),
                Number(e.target.cashPay.value)
              );
            }.bind(this)}
          >
            <input
              type="text"
              placeholder="카드결제 금액"
              name="cardPay"
            ></input>
            <input
              type="text"
              placeholder="현금결제 금액"
              name="cashPay"
            ></input>
            <br />
            <br />
            <input type="submit" value="결제하기"></input>
          </form>
        </article>
        <br />
        <br />
        <Link to="/">
          <input type="button" value="Home으로 이동"></input>
        </Link>
      </div>
    );
  }
}
