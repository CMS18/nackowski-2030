import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AuctionList from "./AuctionList";
import AuctionListItem from "./AuctionListItem";
import Navigation from "./Navigation";
import CreateNewAuction from './CreateNewAuction';

class App extends Component {
  render() {
    let auctionListItem = <AuctionListItem />;
    let navigation = <Navigation />;
<<<<<<< Updated upstream
    let auctionList = <AuctionList />;

    return <div className="App">{/* soda */}</div>;
=======
    let auctionList = <AuctionList />
    let newAuction = <CreateNewAuction name="Sara" />

    return <div className="App">
    {auctionListItem}
    {navigation}
    {auctionList}
    {newAuction}
    </div>;
   
>>>>>>> Stashed changes
  }
}

export default App;
