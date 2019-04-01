import React, { Component } from 'react';

export default class CreateNewAuction extends Component {

    state = {
        name: null,
        title: null,
        endDate: null,
        startingPrice: null,
        info: null
        //behövs nån typ av id?
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        /* --- behöver AddAuction i AuctionList först ---
        this.props.addAuction(this.state) */
    }

    /* ---------------- I AuctionList (?) ----------
    addAuction = (auction) => {
        let auctions = [...this.state.auctions, auction] (spread så det blir en kopia av listan som finns,
                                                så man inte ändrar på state direkt.)
        this.setState({
            posts: auctions
        })
    }
    
    ----------- I AuctionLists render-return -----------
    <AddAuction addAuction={this.addAuction} />
    */

    render() {
        return (<form onSubmit={this.handleSubmit}>
            <label htmlFor="name">{this.props.name}</label>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
            <label htmlFor="endDate">End date</label>
            <input type="text" class="datepicker" id="endDate" onChange={this.handleChange}></input>
            <label htmlFor="startingPrice">Starting price</label>
            <input type="text" id="startingPrice" onChange={this.handleChange} />
            <label htmlFor="info">Information about the product</label>
            <textarea cols="70" rows="20" id="info" onChange={this.handleChange}></textarea>
            <button id="createNewCMD">Save auction</button>
            </form>)
    }
}
