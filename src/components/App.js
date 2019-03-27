import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AuctionList from "./AuctionList";
import AuctionListItem from "./AuctionListItem";
import Navigation from "./Navigation";

class App extends Component {
  render() {
    let auctionListItem = <AuctionListItem />;
    let navigation = <Navigation />;
    let auctionList = <AuctionList />;

    return <div className="App">{/* soda */}</div>;
  }
}

export default App;
