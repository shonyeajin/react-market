import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// eslint-disable-next-line no-unused-vars
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// eslint-disable-next-line no-unused-vars
import Login from "./Login";
// eslint-disable-next-line no-unused-vars
import BuyingElement from "./containers/BuyingElement";
// eslint-disable-next-line no-unused-vars
import Buying from "./containers/Buying";
import Paying from "./containers/Paying";
import App_test from "./redux_test/App_test";
import { Provider } from "react-redux";
import store from "./ver_2/store";
import RegisterPage from "./containers/RegisterPage";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";

function PAGES() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Buying}></Route>
        <Route path="/paying" component={Paying}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/registerPage" component={RegisterPage}></Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PAGES />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
