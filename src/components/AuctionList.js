import React, {Component} from 'react';
import {connect} from 'react-redux';
import CreateNewAuction from './CreateNewAuction';
import axios from 'axios';

//testcode start ---------------------------

export default class AuctionList extends Component{

    state = {
        posts: [ ]
    }
    componentDidMount(){
        axios.get('http://nackowskis.azurewebsites.net/api/Auktion/2030/')
        .then(res => {
            console.log(res)
            this.setState({
                posts : res.data.slice(0,3)
            })
        })
    }

    render(){
        const {posts} = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                    <div className="card-content">
                    <span className="card-title"></span>
                    <h1>{post.title}</h1>
                    <h4>{post.info}</h4>
                    <p>{post.enddate}</p>
                    <p>{post.startingprice}</p>
                    <p>{post.info}</p>
                    </div>
                    </div>
                    
                )
            })
        ) : (
            <div className="">No auctions avalible</div>
        )

        return(
            <div className="">
            <h3>Home</h3>
            {postList}
            </div>

        )
    }

//  render()
//      {
//          return <AuctionList posts = {this.state.posts} />
//      }


}

//testcode end -----------------------------