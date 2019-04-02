import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateNewAuction extends Component {

    state = {
        name: null,
        title: null,
        endDate: null,
        startingPrice: null,
        info: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addAuction(this.state);
    }

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

const mapDispatchToProps = (dispatch) => {
    return {
        addAuction: (auction) => { dispatch({type: 'ADD_AUCTION', auction: auction})}
    }
}

export default connect(null, mapDispatchToProps)(CreateNewAuction);