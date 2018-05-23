import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./styles/App.css";
import HeaderContainer from "./app/Header/HeaderContainer";
import MessagingContainer from "./messaging/MessagingContainer";
import MessagingViewContainer from "./messaging/MessagingViewContainer";
import * as actions from "./messaging/MessagingActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <MessagingViewContainer />
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
