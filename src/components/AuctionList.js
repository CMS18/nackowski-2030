import React from 'react';
import AuctionListItem from './AuctionListItem';
import '../index.css';
// import { Link } from 'react-router-dom'; - Behövs inte längre

const AuctionList = ({ auctions }) => {
  return (
    <div>
      {auctions &&
        auctions.map(auction => {
          return <AuctionListItem auction={auction} key={auction.AuktionID} />;
        })}
    </div>
  );
};
export default AuctionList;
