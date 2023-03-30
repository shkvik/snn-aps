import React from 'react';
import '../body/Body.css'

const Body = (props) => {

    return (
        <body>
            {props.children}
        </body>
    )
}

export default Body;