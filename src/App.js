import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./styles/App.css";
import HeaderContainer from "./app/Header/HeaderContainer";
import MessagingContainer from "./messaging/MessagingContainer";
import MessagingViewContainer from "./messaging/MessagingViewContainer";
import * as actions from "./messaging/MessagingActions";
import { subscribeToTimer, subscribeToMessages } from "./api";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timestamp: "no timestamp yet",
			messages: ""
		};

		subscribeToTimer((err, timestamp) =>
			this.setState({
				timestamp
			})
		);
		subscribeToMessages((err, messages) => {
			this.setState({
				messages
			});
			this.props.actions.receiveMessage(messages);
		});
	}
	render() {
		return (
			<div className="App">
				<HeaderContainer />
				These are the messages: {this.state.messages}
				<MessagingViewContainer messages={this.state.messages} />
				<MessagingContainer />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		app: state
	};
}

function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
