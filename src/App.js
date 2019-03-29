import React, { Component } from "react";

// import AuctionList from "./components/AuctionList";
import Navigation from "./components/Navigation";
import CreateNewAuction from "./components/CreateNewAuction";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LogIn } from "./components/LogIn";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            {/* <Route Exact path="/" component={AuctionList} /> */}
            <Route path="/new" component={CreateNewAuction} />
            <Route path="/login" component={LogIn} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
