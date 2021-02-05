import React, { Component } from 'react'

import AddNumber from './AddNumber'
import CallAddedNumber from './CallAddedNumber'

export default class CallForHelp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
        storePhoneNumber: null
        }
    }

    render() {
        if (this.state.storePhoneNumber == null)  
            {return (<AddNumber />)} 
        else  
            {return (<CallAddedNumber />)}
    }
}

