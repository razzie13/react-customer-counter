import React, { Component } from 'react'

export default class CallForHelp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
        storePhoneNumber: null
        }
    }

    render() {
        if (this.state.storePhoneNumber == null)  {
            return (
                <div className="call-inside">
                    <form>
                        <label>
                            Enter Store Phone Number
                            <input type="number" placeholder="Enter 10 Digit Number Here" name="phone-number-input" id="phone-number-input" className="phone-number-input"></input>
                        </label>
                        <button onClick={() => this.setState({ storePhoneNumber: this.state.storePhoneNumber = '5195787851'})}>Add Number to App</button>
                    </form>
                </div>
            )
        } else  {
            return (
                <div className="call-inside">
                    <form>
                        <button>Call Store For Assistance</button>
                    </form>
                </div>
            )
            
        }
        
    }
}

