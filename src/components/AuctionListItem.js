import React from 'react';
import moment from 'moment';
import '../index.css';

const AuctionListItem = ({ auction }) => {
  return (
    <div className="floater">
      <div className="row">
        <div className="col s3 m8">
          <div class="card brown darken-3">
            <div class="card-content white-text">
              <span class="card-title">{auction.Titel}</span>
              <p>{auction.Utropspris} kr</p>
              <p className="grey-text">
                End date: {moment(auction.StartDatum).format('MMMM Do YYYY')}
              </p>
            </div>
            <div class="card-action">
              <a href={'/auction/' + auction.AuktionID}>Bid</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionListItem;
