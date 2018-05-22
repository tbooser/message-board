import React, { Component } from "react";
import MessagingInput from "./MessagingInput.jsx";
import { connect } from "react-redux";

export class MessagingContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		document.getElementById("input-box").focus();
		document.getElementById("input-box").select();
	}

	render() {
		return (
			<div className="messaging-container">
				<MessagingInput />
			</div>
		);
	}
}

export default connect()(MessagingContainer);
