import React, { Component } from "react";
import { connect } from "react-redux";
import Auth from "./Auth.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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

function mapStateToProps(state) {
  return {
    app: state
  };
}

export default connect(mapStateToProps)(Login);
