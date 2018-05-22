import { ADD_MESSAGE, STORE_MESSAGE_CONFIRMATION, RECEIVE_MESSAGE } from "./MessagingConstants.js";
import * as socketAPI from "../api.js";

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
  console.log("STORE_MESSAGE_CONFIRMATION");
  return dispatch => {
    dispatch({ type: STORE_MESSAGE_CONFIRMATION });
  };
};
