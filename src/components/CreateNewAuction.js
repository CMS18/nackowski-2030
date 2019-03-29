import React, { Component } from 'react';

export default class CreateNewAuction extends Component {

    state = {
        name: null,
        title: null,
        endDate: null,
        estimate: null,
        info: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();

    }

    render() {
        return (<form onSubmit={this.handleSubmit}>
            <label htmlFor="name">{this.props.name}</label>
            <label htmlFor="title">Rubrik</label>
            <input type="text" id="title" onChange={this.handleChange} />
            <label htmlFor="endDate">Slutdatum</label>
            <input type="text" class="datepicker" id="endDate" onChange={this.handleChange}></input>
            <label htmlFor="estimate">Utropspris</label>
            <input type="text" id="estimate" onChange={this.handleChange} />
            <label htmlFor="info">Information om produkten</label>
            <textarea cols="70" rows="20" id="info" onChange={this.handleChange}></textarea>
            <button id="createNewCMD">Spara auktion</button>
            </form>)
    }
}
