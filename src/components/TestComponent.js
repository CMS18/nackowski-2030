/* ---- test av bidActions ---- */

import React, { Component } from 'react';
import { loadBids, createBid, deleteBid } from '../actions/bidActions';
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
    let fakeID = 3454;
    let fakeBidID = 2403;
    return (
      <div>
        <button onClick={() => this.props.createBid(fakeBid)}>Add bid</button>
        <button onClick={() => this.props.loadBids(fakeID)}>Load bids</button>
        <button onClick={() => this.props.deleteBid(fakeBidID)}>
          Delete Bid
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createBid: bid => dispatch(createBid(bid)),
    loadBids: id => dispatch(loadBids(id)),
    deleteBid: id => dispatch(deleteBid(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TestComponent);
