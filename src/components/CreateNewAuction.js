import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAuction } from '../actions/auctionActions';

class CreateNewAuction extends Component {
  state = {
    Titel: null,
    SlutDatum: new Date(),
    Utropspris: null,
    Beskrivning: null
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addAuction(this.state);
  };

  render() {
    return (
      <div className="container">
        <div className="row valign-wrapper">
          <div className="col s6 offset-s3 valign">
            <div className="card white darken-1">
              <div className="card-content black-text">
                <span className="card-title">Create new auction</span>
                <form onSubmit={this.handleSubmit}>
                  <div className="input-field">
                    <input
                      type="text"
                      id="Titel"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="Titel">Title</label>
                  </div>
                  <div className="input-field">
                    <input
                      type="date"
                      className="datepicker"
                      id="SlutDatum"
                      value={this.state.SlutDatum.toLocaleDateString()}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="SlutDatum">End date</label>
                  </div>
                  <div className="input-field">
                    <input
                      type="text"
                      id="Utropspris"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="Utropspris">Starting price</label>
                  </div>
                  <div className="input-field">
                    <textarea
                      id="Beskrivning"
                      className="materialize-textarea"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="Beskrivning">
                      Information about the product
                    </label>
                  </div>
                  <button id="createNewCMD">Save auction</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addAuction: auction => {
      dispatch(addAuction(auction));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateNewAuction);
