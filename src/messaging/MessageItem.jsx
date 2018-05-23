import React, { Component } from "react";
import { connect } from "react-redux";

export class MessageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="message-item">{this.props.message}</div>;
  }
}

export default connect()(MessageItem);
