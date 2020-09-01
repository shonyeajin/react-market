import React, { Component } from "react";

class MainBtn extends Component {
  render() {
    return (
      <div>
        <p>
          <button id="btn1">상품등록</button>
        </p>
        <p>
          <button id="btn2">회원관리</button>
        </p>
        <p>
          <button id="btn3">상품판매</button>
        </p>
      </div>
    );
  }
}

export default MainBtn;
