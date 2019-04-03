import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSingleAuction } from '../actions/auctionActions';
import BidList from './BidList';
import moment from 'moment';

export class DetailView extends Component {
  componentDidMount() {
    this.props.loadAuction(this.props.id);
  }

  render() {
    let auction = this.props.auction;

    if (auction) {
      return (
        auction && (
          <div className="container">
            <div className="row">
              <div className="col s6 card">
                <h5>{auction.Titel}</h5>
                <p>{auction.Beskrivning}</p>
                <p>Seller: {auction.SkapadAv}</p>
                <p>
                  Start Date:{' '}
                  {moment(auction.StartDatum).format('MMMM Do YYYY')}
                </p>
                <p>
                  End Date: {moment(auction.SlutDatum).format('MMMM Do YYYY')}
                </p>
              </div>
              <div className="col s6 card">
                <BidList id={auction.id} />
              </div>
            </div>
          </div>
        )
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  auction: state.auction.auctions.find(auc => auc.AuktionID == ownProps.id)
});

const mapDispatchToProps = dispatch => {
  return {
    loadAuction: id => dispatch(loadSingleAuction(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailView);
