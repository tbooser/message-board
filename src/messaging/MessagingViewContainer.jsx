import React, { Component } from "react";
import { connect } from "react-redux";
import MessageItem from "./MessageItem.jsx";

export class MessagingViewContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.displayMessages = this.displayMessages.bind(this);
	}

	componentDidUpdate() {}

	displayMessages() {
		let messages = this.props.app.messageList.messages;
		return messages.map(currentMessage => {
			return <MessageItem key={Math.random()} message={currentMessage.message} />;
		});
	}

	render() {
		return <div className="messaging-view-container">{this.displayMessages()}</div>;
	}
}

function mapStateToProps(state) {
	return {
		app: state
	};
}

export default connect(mapStateToProps)(MessagingViewContainer);
