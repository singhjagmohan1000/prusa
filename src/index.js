import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { App } from "./App/App";

const rootElement = document.getElementById("app");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
