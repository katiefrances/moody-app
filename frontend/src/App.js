import React, { Component } from "react";
import Homepage from "./Homepage";
import Nav from "./Nav";
import Register from "./Register";
import Main from "./Main.css";

export default class App extends Component {
  render() {
    return (
      <>
        <Nav />
        {/* <Homepage /> */}
        <Register />
      </>
    );
  }
}
