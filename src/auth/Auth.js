import auth0 from "auth0-js";
import config from "./config.js";

export default class Auth {
  auth0 = new auth0.WebAuth();

  login() {
    this.auth0.authorize();
  }
}
