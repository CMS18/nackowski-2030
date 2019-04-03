import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSingleAuction, editAuction } from '../actions/auctionActions';

class EditAuction extends Component {
  componentDidMount() {
    this.props.loadAuction(this.props.id);
  }

  state = {
    Titel: null,
    SlutDatum: null,
    Utropspris: null,
    Beskrivning: null
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    this.props.editAuction(this.state);
  };

  render() {
    return (
      <div className="container">
        <div className="row valign-wrapper">
          <div className="col s6 offset-s3 valign">
            <div className="card white darken-1">
              <div className="card-content black-text">
                <span className="card-title">Edit Auction</span>
                <form onSubmit={this.handleSubmit}>
                  <div className="input-field">
                    <input
                      value={this.state.Titel}
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
                      class="materialize-textarea"
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
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    loadAuction: id => dispatch(loadSingleAuction(id)),
    editAuction: auction => dispatch(editAuction(auction))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAuction);
