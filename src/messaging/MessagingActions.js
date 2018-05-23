import {
  ADD_MESSAGE,
  STORE_MESSAGE_CONFIRMATION,
  RECEIVE_MESSAGE,
  SERVER_MESSAGE
} from "./MessagingConstants.js";

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
  return dispatch => {
    dispatch({ message, type: SERVER_MESSAGE });
  };
};

export const postMessage = data => {
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
