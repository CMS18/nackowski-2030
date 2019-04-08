<<<<<<< HEAD
import React from 'react';
import AuctionListItem from './AuctionListItem';
import '../index.css';
import { Link } from 'react-router-dom';

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
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';
// import CreateNewAuction from './CreateNewAuction';
import axios from 'axios';
import { Stats } from 'fs';

//testcode start ---------------------------

export class AuctionList extends Component {
  state = {
    posts: []
  };

  render() {
    const posts = this.props.auctions;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="floater">
            <div class="row">
              <div class="col m9">
                <div class="card red darken-4">
                  <div class="card-content white-text">
                    <span class="card-title">{post.Titel}</span>
                    <p>{post.Utropspris}kr</p>
                    <p>{post.SlutDatum}</p>
                  </div>
                  <div class="card-action">
                    <a href="#">Bid</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div>No auctions avalible</div>
    );

    return (
      <div>
        <h3>Auction list</h3>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auctions: state.auction.auctions
});

export default connect(mapStateToProps)(AuctionList);
//testcode end -----------------------------
>>>>>>> da0a3673e0a100791e99185a50081b5ae70bb73e
