import React, { Component } from "react";
import Main from "./Main";
import MainBtn from "./MainBtn";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Main></Main>
        <MainBtn></MainBtn>
      </div>
    );
  }
}

export default App;
