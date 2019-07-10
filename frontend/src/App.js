import React, { Component } from "react";
import Homepage from "./Homepage";
import Nav from "./Nav";
import Login from "./Login";

export default class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Homepage />
        <Login />
      </>
    );
  }
}
