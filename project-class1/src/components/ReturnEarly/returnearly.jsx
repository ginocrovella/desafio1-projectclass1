import React from 'react'

const ReturnEarly = ({condition}) => {

    if (condition) {
        return (
            <h3>Condition true</h3>
        )
    }
    return (
        <h3>Condition false</h3>
    )
}

export default ReturnEarly