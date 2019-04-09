import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBid, loadBids } from '../actions/bidActions';

export class BidList extends Component {
  componentDidMount() {
    this.props.loadBids(this.props.auction.AuktionID);
  }

  state = {
    bidAmount: 0
  };

  render() {
    let listItems = this.props.bids
      .map(e => (
        <li className="bidlistitem" key={e.BudID}>
          <h5>{e.Budgivare}:</h5>
          <h5>{e.Summa} kr</h5>{' '}
        </li>
      ))
      .reverse();

    listItems.push(
      <li className="bidlistitem" key={'utgang'}>
        <h5>Utropspris: </h5>
        <h5>{this.props.auction.Utropspris} kr</h5>
      </li>
    );

    let bids = this.props.bids;

    if (bids) {
      return (
        <div>
          <ul>{listItems}</ul>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  bids: state.bids.bids,
  user: state.user.name
  // utgangspris: state.auctions.find(a => a.AuktionID === parseInt(ownProps.id))
  //   .utgangspris
  // bids: [
  //   { BudID: 600, Summa: 25100, AuktionID: 1, Budgivare: 'Hannibal' },
  //   { BudID: 601, Summa: 28900, AuktionID: 1, Budgivare: 'Sara' },
  //   { BudID: 602, Summa: 999999, AuktionID: 1, Budgivare: 'Albin' }
  // ]
});

const mapDispatchToProps = dispatch => {
  return {
    submitBid: bid => dispatch(createBid(bid)),
    loadBids: id => dispatch(loadBids(id))
    // loadBids: auktionID => {},
    // submitBid: () => {}
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BidList);
