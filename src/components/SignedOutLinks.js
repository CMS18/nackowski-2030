import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export class SignedOutLinks extends Component {
  render() {
    return (
      <ul className="right">
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignedOutLinks);
