import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuctionList from './AuctionList';
import SearchBar from './SearchBar';
import '../index.css';

class AuctionSummary extends Component {
  render() {
    const { auctions, filterString } = this.props;

    if (auctions.length > 0) {
      auctions.forEach(element => {
        console.log(element.Titel);
      });

      let filteredAuctions =
        filterString === ''
          ? auctions
          : auctions.filter(a => a.Titel.includes(filterString));
      // auctions;

      return (
        <div>
          <SearchBar />
          <AuctionList auctions={filteredAuctions} />
        </div>
      );
    } else {
      return null;
    }
  }
}
const mapStateToProps = state => {
  return {
    auctions: state.auction.auctions,
    filterString: state.auction.filter
  };
};
export default connect(mapStateToProps)(AuctionSummary);
