import React, { Component } from 'react'

export default class Counter extends Component {

    state = {
        currentCustomerCount: null,
        timeLastUpdated: null,
        stateTest: null
    }

    componentDidMount()  {
        this.callBackendAPI()
        .then(res => this.setState({ currentCustomerCount: res.express }))
        .catch(err => console.log(err));
    }

    callBackendAPI = async () => {
        const response = await fetch('/customer-counter');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message) 
        }
        return body;
    };
    


    decrementCount = () => {
        let d = new Date()
        this.setState({ currentCustomerCount: Math.max( 0, this.state.currentCustomerCount - 1 )});
        this.setState({ timeLastUpdated: d.getHours() + ':' + d.getMinutes() });
        console.log('decrementCount');
    }

    incrementCount = () => {
        let d = new Date()
        this.setState({ currentCustomerCount: this.state.currentCustomerCount + 1 });
        this.setState({ timeLastUpdated: d.getHours() + ':' + d.getMinutes() });
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
                <p>Time Last Updated: {this.state.timeLastUpdated}</p>
            </div>
        )
    }
}
