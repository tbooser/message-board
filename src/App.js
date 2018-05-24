import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./styles/App.css";
import HeaderContainer from "./app/Header/HeaderContainer";
import MessagingContainer from "./messaging/MessagingContainer";
import MessagingViewContainer from "./messaging/MessagingViewContainer";
import * as actions from "./messaging/MessagingActions";
import Login from "./auth/Login.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
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
