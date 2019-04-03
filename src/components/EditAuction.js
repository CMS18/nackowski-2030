import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSingleAuction, editAuction } from '../actions/auctionActions';
import moment from 'moment';

class EditAuction extends Component {
  componentDidMount() {
    this.props.loadAuction(this.props.id);
    this.setState(this.props.auction);
  }

  constructor(props) {
    super(props);

    this.state = {
      Titel: 'loading',
      SlutDatum: '',
      Utropspris: '',
      Beskrivning: '',
      SkapadAv: '',
      AuktionID: ''
    };
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;

    if (oldProps.auction === undefined && newProps.auction !== undefined) {
      let newTime = moment(newProps.auction.SlutDatum).format('YYYY-MM-DD');
      let newState = { ...newProps.auction, SlutDatum: newTime };
      this.setState(newState);
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.editAuction(this.state);
    this.props.history.push('/auction/' + this.props.id);
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
                    <label className="active" htmlFor="Titel">
                      Title
                    </label>
                  </div>
                  <div className="input-field">
                    <input
                      value={this.state.SlutDatum}
                      type="date"
                      className="datepicker"
                      id="SlutDatum"
                      onChange={this.handleChange}
                    />
                    <label className="active" htmlFor="SlutDatum">
                      End date
                    </label>
                  </div>
                  <div className="input-field">
                    <input
                      value={this.state.Utropspris}
                      type="text"
                      id="Utropspris"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="Utropspris" className="active">
                      Starting price
                    </label>
                  </div>
                  <div className="input-field">
                    <textarea
                      value={this.state.Beskrivning}
                      id="Beskrivning"
                      className="materialize-textarea"
                      onChange={this.handleChange}
                    />
                    <label className="active" htmlFor="Beskrivning">
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
const mapStateToProps = (state, ownProps) => {
  return {
    auction: state.auction.auctions.find(
      a => a.AuktionID === parseInt(ownProps.id)
    )
  };
};

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
