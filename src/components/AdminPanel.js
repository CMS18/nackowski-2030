import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class AdminPanel extends Component {
  render() {
    let del = null;
    if (this.props.bids) {
      del =
        this.props.bids.length !== 0 ? null : (
          <Link className="btn red" to={`/delete/${this.props.auktionID}`}>
            Delete Auction
          </Link>
        );
    }

    return (
      <div>
        <Link className="btn red" to={`/edit/${this.props.auktionID}`}>
          Edit Auction
        </Link>
        {del}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bids: state.bids.bids
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPanel);
