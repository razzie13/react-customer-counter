import React from 'react'

export default function AddNumber() {
    return (
        <div className="call-inside">
            <form>
                <label>
                    Enter Store Phone Number
                    <input type="number" placeholder="Enter 10 Digit Number Here" name="phone-number-input" id="phone-number-input" className="phone-number-input"></input>
                </label>
                <button>Add Number to App</button>
            </form>
        </div>
    )
}
