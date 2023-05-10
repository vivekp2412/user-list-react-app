import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import userReducer from "./store/Dataslice";
import { Provider } from "react-redux";
const store = configureStore({ reducer: userReducer });
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
