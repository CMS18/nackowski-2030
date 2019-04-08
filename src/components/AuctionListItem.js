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
              <a href={'/auction' + auction.AuktionID}>Bid</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionListItem;

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import moment from 'moment';

// export class AuctionListItem extends Component {
//   state = {
//     posts: []
//   };

//   render() {
//     const posts = this.props.auctions;

//     const postList = posts.length ? (
//       posts.map(post => {
//         return (
//           <div className="floater">
//             <div class="row">
//               <div class="col s3 m8">
//                 <div class="card brown darken-3">
//                   <div class="card-content white-text">
//                     <span class="card-title">{post.Titel}</span>
//                     <p>{post.Utropspris}kr</p>
//                     <p className="grey-text">
//                       End date: {moment(post.StartDatum).format('MMMM Do YYYY')}
//                     </p>
//                   </div>
//                   <div class="card-action">
//                     <a href="#">Bid</a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })
//     ) : (
//       <div>No auctions avalible</div>
//     );

//     return (
//       <div>
//         <h3 class="header">Auction list</h3>
//         {postList}
//       </div>
//     );
//   }
// }
// const mapStateToProps = state => ({
//   auctions: state.auction.auctions
// });
// // const mapDispatchToProps = dispatch => {
// //   return {
// //     loadAuction: id => dispatch(loadAuctions(id))
// //   };
// // };

// export default connect(mapStateToProps)(AuctionListItem);
