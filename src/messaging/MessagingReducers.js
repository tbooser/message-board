import { combineReducers } from "redux";
import { RECEIVE_MESSAGE } from "./MessagingConstants.js";

const messageState = {
	messages: []
};

function messageList(state = messageState, action) {
	switch (action.type) {
		case RECEIVE_MESSAGE:
			console.log("RECEIVE_MESSAGE reducer");
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
