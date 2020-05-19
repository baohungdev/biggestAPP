import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById("root")
);
