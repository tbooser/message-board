import {
  ADD_MESSAGE,
  STORE_MESSAGE_CONFIRMATION,
  RECEIVE_MESSAGE,
  SOCKET_EMIT
} from "./MessagingConstants.js";
import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:3002");

export const addMessage = message => {
  return dispatch => {
    dispatch({ message, type: ADD_MESSAGE });
  };
};

export const receiveMessage = message => {
  return dispatch => {
    dispatch({ message, type: RECEIVE_MESSAGE });
  };
};

export const socketEmit = message => {
  console.log("SOCKET_EMIT", message);
  return () => {
    socket.emit("subscribeToMessages");
    socket.emit({
      message,
      type: SOCKET_EMIT
    });
  };
};

export const postMessage = data => {
  console.log("STORE_MESSAGE", data);
  return dispatch => {
    fetch("http://localhost:3001/messages", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: data })
    }).then(response => {
      dispatch(storeMessageConfirmation());
    });
  };
};

export const storeMessageConfirmation = message => {
  return dispatch => {
    dispatch({ type: STORE_MESSAGE_CONFIRMATION });
  };
};
