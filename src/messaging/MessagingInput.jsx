import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./MessagingActions";
import { bindActionCreators } from "redux";

export class MessagingInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: ""
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ message: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		event.target.reset();
		this.props.actions.addMessage(this.state.message);
		this.props.actions.postMessage(this.state.message);
		console.log("Handle submit fired with the text: " + this.state.message);
		this.setState({ message: "" });
	}

	render() {
		return (
			<div className="messaging-input">
				<form onSubmit={this.handleSubmit}>
					<label>
						<input
							className="message-input-box"
							id="input-box"
							type="text"
							value={this.state.message}
							onChange={this.handleChange}
							name="name"
							autoComplete="off"
							placeholder="Write something..."
						/>
					</label>
					<input type="submit" className="message-input-submit-button" />
				</form>
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

export default connect(mapStateToProps, mapDispatchToProps)(MessagingInput);
