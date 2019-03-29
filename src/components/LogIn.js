import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/userActions";

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
    console.log(this.props);
    e.preventDefault();
    this.props.submitForm(this.state.name);
  };

  render() {
    console.log(this.props);

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="first_name"
                type="text"
                className="validate"
                onChange={this.handleChange}
              />
              <label htmlFor="first_name">Name</label>
            </div>
          </div>
          <div>
            <input
              id="submit"
              type="submit"
              className="btn red"
              value="Log In"
            />
          </div>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    submitForm: name => {
      dispatch(loginUser(name));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LogIn);
