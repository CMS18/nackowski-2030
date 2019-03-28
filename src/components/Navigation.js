import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class Navigation extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return <div>This is gonna be a navigation bar.</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
