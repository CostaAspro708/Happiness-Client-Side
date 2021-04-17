import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Country from "./Country";
import styles from "./style.module.css";

import {ApiTable} from "./table.js";

  function App() {
   
    return (
    <div> api table assignments
      <div className={styles.Container}>
        <div className={styles.Center}>
          <ApiTable/>
        </div> 
      </div>
    </div>
    );
  }

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <switch>
        <Route path="/country">
          <Country/>
        </Route>
        <Route exact path="/">
          <App/>
        </Route>
      </switch>
    </Router>
  </React.StrictMode>,
  rootElement
);
