/* ---- test av bidActions ---- */

import React, { Component } from 'react';
import { loadBids, createBid } from '../actions/bidActions';
import { connect } from 'react-redux';

class TestComponent extends Component {
  state = {
    Summa: null,
    Budgivare: null,
    AuktionID: null
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createBid(this.state);
  };

  render() {
    let fakeBid = { Summa: 200, Budgivare: 'Sara', AuktionID: 3454 };
    return (
      <div>
        <button onClick={() => this.props.createBid(fakeBid)}>Add bid</button>
        <button onClick={() => this.props.loadBids()}>Load bids</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createBid: bid => dispatch(createBid(bid)),
    loadBids: () => dispatch(loadBids())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TestComponent);
