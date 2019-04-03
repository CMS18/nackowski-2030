import React, { Component } from 'react';

import AuctionList from './components/AuctionList';
import Navigation from './components/Navigation';
import CreateNewAuction from './components/CreateNewAuction';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import DetailView from './components/DetailView';

import { connect } from 'react-redux';
import { loadAuctions } from './actions/auctionActions';

class App extends Component {
  componentDidMount() {
    this.props.loadDatabase();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            {/* <Route Exact path="/" component={AuctionList} /> */}
            <Route path="/list" component={AuctionList} />
            <Route path="/new" component={CreateNewAuction} />
            <Route path="/login" component={LogIn} />
            <Route
              path="/auction/:id"
              render={props => (
                <DetailView {...props} id={props.match.params.id} />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadDatabase: () => dispatch(loadAuctions())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
