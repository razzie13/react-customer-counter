import React, { Component } from 'react'

import AddNumber from './AddNumber'
import CallAddedNumber from './CallAddedNumber'

export default class CallForHelp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
        storePhoneNumber: "Enter 10 Digit Number Here"
        }

        this.handleNumberInput = this.handleNumberInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleNumberInput(e)  {
        this.setState({storePhoneNumber: e.target.value});
    }

    handleSubmit(e)  {
        e.preventDefault();
        this.setState({storePhoneNumber: e.target.value});
    }

    render() {
        if (this.state.storePhoneNumber === "Enter 10 Digit Number Here")  
            {return (<AddNumber submitAction={this.handleSubmit} inputValue={this.state.storePhoneNumber}/>)} 
        else  
            {return (<CallAddedNumber phoneNumber={this.state.storePhoneNumber} />)}
    }
}

