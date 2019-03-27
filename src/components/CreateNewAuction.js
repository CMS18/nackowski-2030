import React, { Component } from 'react';

export default class CreateNewAuction extends Component {
    render() {

        return (<div>
            <label>{this.props.name}</label>
            <br />
            <label>Rubrik</label>
            <br />
            <input type="text" />
            <br />
            <label>Slutdatum</label>
            <br />
            <input type="text" class="datepicker"></input>
            <br />
            <label>Utropspris</label>
            <br />
            <input type="text" />
            <br /><br />
            <label>Information om produkten</label>
            <br />
            <textarea cols="70" rows="20"></textarea>
            <br />
            <button id="createNewCMD" onClick={this.props.onClick}>Spara auktion</button>

        </div>)
    }
}
