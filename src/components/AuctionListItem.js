import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import '../index.css';

const AuctionListItem = ({ auction }) => {
  return (
    <div className="floater">
      <div className="row">
        <div className="col s3 m8">
          <div className="card brown darken-3">
            <div className="card-content white-text">
              <span className="card-title">{auction.Titel}</span>
              <p>{auction.Utropspris} kr</p>
              <p className="grey-text">
                End date: {moment(auction.SlutDatum).format('MMMM Do YYYY')}
              </p>
            </div>
            <div className="card-action">
              <NavLink to={'/auction/' + auction.AuktionID}>Bid</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionListItem;
