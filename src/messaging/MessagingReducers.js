import { combineReducers } from "redux";
import { SERVER_MESSAGE } from "./MessagingConstants.js";

const messageState = {
  messages: []
};

function messageList(state = messageState, action) {
  switch (action.type) {
    case SERVER_MESSAGE:
      return Object.assign(
        {},
        {
          messages: [
            ...state.messages,
            {
              message: action.message
            }
          ]
        }
      );
    default:
      return state;
  }
}

export default combineReducers({ messageList });
