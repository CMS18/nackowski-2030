import React,{Component} from 'react';

class CreateNewAuction extends Component{
    render(){
        return(<div>
            <label>{this.props.name}</label>
            <label>Rubrik:</label>
            <br/>
            <input type="text" />
            <br/>
            <label>Slutdatum:</label>
            <br/>
            <input type="text" class="datepicker"></input>
            <br/>
            
        </div>)
    }
}
