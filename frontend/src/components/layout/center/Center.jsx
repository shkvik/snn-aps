import React from 'react';
import '../center/Center.css'

const Center = (props) => {

    return (
        <div className='center'>
            <h1> Security Neural Network Automated Process System</h1>
            {props.children}
        </div>
    )
}

export default Center;