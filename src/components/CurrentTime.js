import React from 'react'
import Moment from 'react-moment'

export default function CurrentTime() {

    let time = new Date()

    return (
        <div>
            <h2>Current Time:</h2>
            <Moment format="HH:mm">
                {time}
            </Moment>
        </div>
    )
}
