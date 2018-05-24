import React, { Component } from "react";
import { connect } from "react-redux";
import Auth from "./Auth.js";

class Login extends Component {
  login() {
    const auth = new Auth();
    auth.login();
  }

  render() {
    return (
      <div className="Login">
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default Login;
