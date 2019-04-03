import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBid, loadBids } from '../actions/bidActions';

export class BidList extends Component {
  componentDidMount() {
    console.log(this.props);

    this.props.loadBids(this.props.id);
  }

  handleChange = event => {
    this.setState({
      bidAmount: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submitBid({
      Summa: this.state.bidAmount,
      AuktionID: this.props.id
    });
    // this.setState({
    //   bidAmount: ''
    // });
    // event.target.value = 0;
  };

  render() {
    console.log(this.props.id);
    let listItems = this.props.bids
      .map(e => (
        <li key={e.BudID}>
          <h5>{e.Budgivare}</h5>
          <p>{e.Summa}</p>{' '}
        </li>
      ))
      .reverse();

    listItems.push(
      <li key={'utgang'}>
        <h5>Utgångspris</h5>
        <p>{this.props.utropspris}</p>
      </li>
    );

    let bids = this.props.bids;

    if (bids) {
      return (
        <div>
          <h4>Bids</h4>
          <form onSubmit={this.handleSubmit}>
            <div className="input-field">
              <input
                id="newbid"
                type="text"
                className="validate"
                onChange={this.handleChange}
              />
              <label htmlFor="newbid">New Bid</label>
            </div>
          </form>
          <ul>{listItems}</ul>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  bids: state.bids.bids
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
