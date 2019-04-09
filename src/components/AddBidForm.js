import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBid } from '../actions/bidActions';

export class AddBidForm extends Component {
  state = {
    bidAmount: 0
  };

  handleChange = event => {
    this.setState({
      bidAmount: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let bidAmount = this.state.bidAmount;
    let currentMaxBid = this.props.maxBid;
    console.log(
      currentMaxBid +
        ' is the current maxbid, you have to enter a higher amount'
    );

    if (bidAmount > currentMaxBid) {
      this.props.submitBid({
        Summa: this.state.bidAmount,
        AuktionID: this.props.auction.AuktionID
      });
    }
  };

  render() {
    let isLoggedIn = this.props.user !== null;
    let isCreator = this.props.user === this.props.auction.SkapadAv;

    let isDisabled = !isLoggedIn || isCreator;
    let val = isLoggedIn ? this.state.bidAmount : 'Log in to place bid';
    val = isCreator ? 'You can not bid on your own auction' : val;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-field row">
          <div className="col m7 s12">
            <input
              value={val}
              disabled={isDisabled}
              id="newbid"
              type="text"
              className="validate input-field"
              onChange={this.handleChange}
            />
            {/* <label className="active" htmlFor="newbid">
              New Bid
            </label> */}
          </div>
          <div className="col m5 s12">
            <button disabled={isDisabled} className="btn red input-field">
              Submit bid
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user.name,
  maxBid:
    state.bids.bids.lengt > 0
      ? Math.max(...state.bids.bids.map(b => b.Summa))
      : ownProps.auction.Utropspris
});

const mapDispatchToProps = dispatch => {
  return {
    submitBid: bid => dispatch(createBid(bid))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBidForm);
