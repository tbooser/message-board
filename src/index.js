import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import combineReducers from "./messaging/MessagingReducers.js";
import App from "./App";
import createSocketIoMiddleware from "redux-socket.io";
import io from "socket.io-client";
const socket = io("http://localhost:3002");
const socketIoMiddleware = createSocketIoMiddleware(socket, "SERVER/");

const store = createStore(combineReducers, applyMiddleware(ReduxThunk, socketIoMiddleware));
store.subscribe(() => {
  console.log("New client state ", store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
