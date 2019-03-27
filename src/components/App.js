import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Navigation";

class App extends Component {
  render() {
    let navigation = <Navigation />;
    return <div className="App">{navigation}</div>;
  }
}

export default App;
