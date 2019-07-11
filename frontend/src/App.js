import React, { Component } from "react";
// import Homepage from "./Homepage";
import Nav from "./Nav";
import Register from "./Register";
import Login from "./Login";
// import Main from "./Main.css";
// import HomepageDate from "./HomepageDate";

export default class App extends Component {
  render() {
    return (
      <>
        <Nav />
        {/* <Homepage /> */}
        <Register />
        <Login />
        {/* <HomepageDate /> */}
      </>
    );
  }
}
