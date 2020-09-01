import React, { Component } from "react";
//아직 Buying.js의 sum값 안바꿨는데, 이거는 최종 결제 버튼 누르면 변경해주기
//아직 결제방법은 UI만 만들어 놓은거임, 고치셈
class Paying extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerInfo: "none",
      customer: "",
      finalCost: 0,
    };
  }

  //디비정보라고 가정
  customerDB = [
    {
      backNum: 1111,
      name: "yeajin",
      wholeNum: "010-8830-1111",
      point: 92834,
    },
    {
      backNum: 2222,
      name: "suzy",
      wholeNum: "010-8830-2222",
      point: 8345,
    },
    {
      backNum: 3333,
      name: "miyeon",
      wholeNum: "010-8830-3333",
      point: 765,
    },
  ];

  showFinalCost() {
    return (
      <h4>{`최종결제금액:${
        this.state.finalCost === 0 ? this.props.sum : this.state.finalCost
      }원`}</h4>
    );
  }

  searchCustomer(_backNum) {
    var i = 0;

    while (i < this.customerDB.length) {
      if (this.customerDB[i].backNum === parseInt(_backNum)) {
        //this.state.customer = this.customerDB[i];
        this.setState({ customer: this.customerDB[i] });
        break;
      }
      i++;
    }
  }

  showingCustomerInfo() {
    if (this.state.customerInfo === "Yes") {
      return (
        <div>
          <h5>구매자 이름: {this.state.customer.name}</h5>
          <h5>구매자 전화번호{this.state.customer.wholeNum}</h5>
          <h5>사용가능 포인트:{this.state.customer.point}p</h5>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <article>
          <h2>구매자 정보</h2>
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
            <input
              type="submit"
              value="회원 검색"
              onClick={function (e) {
                this.setState({ customerInfo: "Yes" });
              }.bind(this)}
            ></input>
          </form>
          {this.showingCustomerInfo()}
        </article>
        <article>
          <h2>할인 적용</h2>
          <form
            onSubmit={function (e) {
              e.preventDefault();
              //포인트 적용한 결제 가격을 연산하고 이를 창에 띄우고 setState로 sum변경
              this.setState({
                finalCost: this.props.sum - e.target.usePoint.value,
              });
              this.showFinalCost();
            }.bind(this)}
          >
            <p>
              <text>포인트 적용 </text>
              <input type="text" placeholder="0p" name="usePoint"></input>
              <input type="submit" value="적용"></input>
            </p>
          </form>
          {this.showFinalCost()}
        </article>
        <article>
          <h2>결제 방법</h2>
          <form
            onSubmit={function (e) {
              e.preventDefault();
              alert("찐마지막 결제");
            }.bind(this)}
          >
            <input type="text" placeholder="카드결제 금액" name="card"></input>
            <input type="text" placeholder="현금결제 금액" name="cash"></input>
            <br />
            <br />
            <input type="submit" value="결제하기"></input>
          </form>
        </article>
      </div>
    );
  }
}

export default Paying;
