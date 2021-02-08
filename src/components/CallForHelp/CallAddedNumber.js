import React from 'react'

export default function CallAddedNumber(props) {
    return (
        <div className="call-inside">
                <a href={props.phoneNumber}>Call Store For Assistance</a>
                <p>Store Phone: {props.phoneNumber}</p>
        </div>
    )
}
