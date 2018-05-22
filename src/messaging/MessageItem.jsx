import React, { Component } from "react";
import { connect } from "react-redux";

export class MessageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    return <div className="message-item">{this.props.message}</div>;
  }
}

export default connect()(MessageItem);
