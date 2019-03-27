import React, { Component } from "react";
import AuctionList from "./AuctionList";
import AuctionListItem from "./AuctionListItem";
import Navigation from "./Navigation";
import CreateNewAuction from './CreateNewAuction';

class App extends Component {
  render() {
    //let auctionListItem = <AuctionListItem />;
    //let navigation = <Navigation />;
    //let auctionList = <AuctionList />;
    let newAuction = <CreateNewAuction name="Sara" />;

    return <div className="App">
    {newAuction}
    </div>;
  }
}

export default App;
