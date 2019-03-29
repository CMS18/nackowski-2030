import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/new">Create New Auction</NavLink>
      </li>
      <li>
        <NavLink to="/">List Auctions</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
