import React, { Component } from "react";
import "./Main.css";
import logo from "./images/marketLogo2.png";

class Main extends Component {
  render() {
    return (
      <div>
        <img src={logo} width="300" alt={"logo"}></img>
        <h1>마켓발견;</h1>
      </div>
    );
  }
}

export default Main;
