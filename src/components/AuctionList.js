import React, {Component} from 'react';
// import {connect} from 'react-redux';
import AuctionListItem from './AuctionListItem';

//testcode start ---------------------------
export default class AuctionList extends Component{

    render()
    {
        let allItems = this.props.posts.map((auctionlistitem) =>{
            return(<auctionlistitem item = {auctionlistitem} />)
        })

        return(<div>{allItems}</div>);
    }


}
//testcode end -----------------------------