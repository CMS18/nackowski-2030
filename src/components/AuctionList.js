import React, {Component} from 'react';
// import {connect} from 'react-redux';
import AuctionListItem from './AuctionListItem';

//testcode start ---------------------------
export default class AuctionList extends Component{

    constructor(props){

        super(props);
        this.state = {posts:[]};

    }

    componentDidMount(){
        fetch('http://nackowskis.azurewebsites.net/api/Auktion/2030/') //skickar anropet till API:et
        .then(response => response.json()) //Hämtar json datan
        .then(json => this.setState({posts: json})) //Skickar in datan till statet alternativt consollen
    }

    // let promise = await fetch(url);
    // let data = await promise.json();
    // this.setState({posts:data});



    render()
        {
        return <AuctionList posts = {this.state.posts} />
        }


}
//testcode end -----------------------------