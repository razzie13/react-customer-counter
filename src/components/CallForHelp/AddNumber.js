import React from 'react'

export default function AddNumber(props) {
    return (
        <div className="call-inside">
            <form onSubmit={props.submitAction}>
                <label>
                    Enter Store Phone Number
                    <input type="number" defaultValue={props.inputValue} onChange={props.inputAction} name="phone-number-input" id="phone-number-input" className="phone-number-input"></input>
                </label>
                <button>Add Number to App</button>
            </form>
        </div>
    )
}
