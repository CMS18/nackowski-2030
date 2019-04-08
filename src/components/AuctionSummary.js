import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuctionList from './AuctionList';
import '../index.css';

class AuctionSummary extends Component {
  render() {
    const { auctions } = this.props;
    if (auctions) {
      return (
        <div>
          <AuctionList auctions={auctions} />
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    auctions: state.auction.auctions
  };
};
export default connect(mapStateToProps)(AuctionSummary);
