import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import '../index.css';

const AuctionListItem = ({ auction }) => {
  return (
    <div className="col s12 m6 l4">
      <div className="card ">
        <div className="card-image">
          <img
            src={
              'https://picsum.photos/1000/600?image=' +
              auction.AuktionID.toString().substring(2, 4)
            }
          />
        </div>
        <div className="card-content ">
          <span className="card-title">{auction.Titel}</span>
          <p>{auction.Utropspris} kr</p>
          <p className="grey-text ">
            <p>End date:</p>
            {moment(auction.SlutDatum).format('MMMM Do YYYY')}
          </p>
        </div>
        <div className="card-action">
          <NavLink to={'/auction/' + auction.AuktionID}>Bid</NavLink>
        </div>
      </div>
    </div>
  );
};

export default AuctionListItem;
