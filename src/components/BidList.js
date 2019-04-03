import React, { Component } from 'react';
import { connect } from 'react-redux';

export class BidList extends Component {
  render() {
    let bids = this.props.bids;
    if (bids) {
      return (
        <div>
          <p>bidlist</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  bids: [{ BudID: 600, Summa: 25100, AuktionID: 1, Budgivare: 'Hannibal' }]
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BidList);
