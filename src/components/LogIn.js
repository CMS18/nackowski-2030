import React, { Component } from "react";
import { connect } from "react-redux";

export class LogIn extends Component {
  state = {
    name: null
  };

  handleChange = e => {
    let newState = {
      name: e.target.value
    };
    this.setState(newState);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitForm();
  };

  render() {
    return (
      <div class="container">
        <form onSubmit={this.handleSubmit}>
          <div class="row">
            <div class="input-field col s6">
              <input
                id="first_name"
                type="text"
                class="validate"
                onChange={this.handleChange}
              />
              <label for="first_name">Name</label>
            </div>
          </div>
          <div>
            <input id="submit" type="submit" className="btn" value="Log In" />
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {};

export default connect(
  null,
  mapDispatchToProps
)(LogIn);
