import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.scss";
import { Provider } from "react-redux";
import store from "./store.js";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById('main'));

const output = <React.StrictMode>
  <Provider store={store}>
    <App/>
  </Provider>
</React.StrictMode>;
root.render(output);
