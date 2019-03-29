import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import { SignedOutLinks } from "./SignedOutLinks";

export class Navigation extends Component {
  render() {
    return (
      <nav className="nav-wrapper red">
        <div className="container">
          <Link to="/" className="brand-logo left">
            Nackowski
          </Link>
          <SignedInLinks />
          <SignedOutLinks />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
