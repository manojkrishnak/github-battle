import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Battle from "./Components/Battle";
import BattleCompare from "./Components/BattleCompare";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/">
      <App />
    </Route>
    <Route exact path="/battle">
      <Battle />
    </Route>
    <Route path="/battle/results">
      <BattleCompare />
    </Route>
    {/* <Route component={NotFound} /> */}
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
