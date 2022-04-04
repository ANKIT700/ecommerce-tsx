import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

import App from "./App";
import "./styles.css";
import "./styles.scss";
import "./styles.less";
import { Provider } from "react-redux";
import store from "./reducer/store";
{
  /* <BrowserRouter>
<App name="Jane"/>
</BrowserRouter> */
}

var mountNode = document.getElementById("app");
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App name="Jane" />
    </Provider>
  </BrowserRouter>,
  mountNode
);
