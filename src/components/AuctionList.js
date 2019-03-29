import React, {Component} from 'react';
// import {connect} from 'react-redux';
import CreateNewAuction from './CreateNewAuction';

//testcode start ---------------------------

export default class AuctionList extends Component{

    constructor(){
        super();

        this.state = {
            'items': []
        }
    }

    componentDidMount(){
        this.getItems();
    }

    getItems(){
        fetch('http://nackowskis.azurewebsites.net/api/Auktion/2030/')
        .then(results => results.json())
        .then(json => json.results)
        .then(results => this.setState({'items': results}));
    }

    addAuction = (auction) => {
        auction.id = Math.random();
        let auctions = [...this.state.auctions]
        this.setState({
            auctions
        })

    }

    render(){
        return(
            <ul>
                {this.state.items.map(function(item, index){
                    return <div key={index} className="">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p>{item.expiredate}</p>
                        <p>{item.bid}</p>
                        {/* <CreateNewAuction createNewAuction{this.createNewAuction} /> */}

                    </div>
                    }
                 )}

            </ul>
        );
    }
    // render()
    //     {
    //         return <AuctionList posts = {this.state.posts} />
    //     }


}

//testcode end -----------------------------