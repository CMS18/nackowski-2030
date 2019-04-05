import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import { SignedOutLinks } from './SignedOutLinks';

export class Navigation extends Component {
  render() {
    let links =
      this.props.userName === null ? <SignedOutLinks /> : <SignedInLinks />;

    return (
      <nav className="nav-wrapper red">
        <div className="container">
          <Link to="/" className="brand-logo left">
            Nackowski
          </Link>
          {links}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  userName: state.user.name
});

export default connect(mapStateToProps)(Navigation);
