import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AuctionListItem from './AuctionListItem';

class App extends Component {
  render() {
    let auctionListItem = <AuctionListItem />
    return <div className="App">{auctionListItem}</div>
  }
}

export default App;
