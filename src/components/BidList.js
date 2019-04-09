import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBid, loadBids } from '../actions/bidActions';
import moment from 'moment';

export class BidList extends Component {
  componentDidMount() {
    this.props.loadBids(this.props.auction.AuktionID);
  }

  state = {
    bidAmount: 0
  };

  render() {
    let isFinished = moment(this.props.auction.SlutDatum).isBefore(moment());

    console.log(this.props);

    let bids = this.props.bids;

    if (isFinished) {
      let finalBid = this.props.auction.Utropspris;
      if (bids.length > 0) {
        finalBid = bids[bids.length - 1].Summa;
      }
      return (
        <div>The Auction has ended. The final price was {finalBid} kr</div>
      );
    }

    let listItems = bids
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

    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
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
