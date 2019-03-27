import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AuctionListItem from './AuctionListItem';
import Navigation from "./Navigation";

class App extends Component {
  render() {
    let auctionListItem = <AuctionListItem />
    let navigation = <Navigation />;

    return <div className="App">
    {auctionListItem}
    {navigation}
    </div>;
  }
}

export default App;
