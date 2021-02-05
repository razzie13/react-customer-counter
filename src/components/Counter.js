import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            currentCustomerCount: 0
        }
    }



    render() {
        return (
            <div className="customer-counter">
                <h2>Shoppers<br/>In Store</h2>
                <span className="customer-counter-count">{this.state.currentCustomerCount}</span>
                <div className="customer-counter-buttons">
                    <button onClick={() => {
                        this.setState({ currentCustomerCount: this.state.currentCustomerCount - 1})
                    }}>-</button>
                    <button onClick={() => {
                        this.setState({ currentCustomerCount: this.state.currentCustomerCount + 1})
                    }}>+</button>
                </div>
                <p>Last Updated:</p>
            </div>
        )
    }
}
