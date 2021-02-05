import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            currentCustomerCount: 0,
            timeLastUpdated: null
        }
    }

    


    decrementCount = () => {
        let d = new Date();
        this.setState({ currentCustomerCount: Math.max( 0, this.state.currentCustomerCount - 1 )});
        this.setState({ timeLastUpdated: d.getTime() });
        console.log('decrementCount');
    }

    incrementCount = () => {
        let d = new Date();
        this.setState({ currentCustomerCount: this.state.currentCustomerCount + 1 });
        this.setState({ timeLastUpdated: d.getTime() });
        console.log('incrementCount');
    }

    render() {
        return (
            <div className="customer-counter">
                <h2>Shoppers<br/>In Store</h2>
                <span className="customer-counter-count">{this.state.currentCustomerCount}</span>
                <div className="customer-counter-buttons">
                    <button onClick={this.decrementCount}>-</button>
                    <button onClick={this.incrementCount}>+</button>
                </div>
                <p>Last Updated: {this.state.timeLastUpdated}</p>
            </div>
        )
    }
}
