import React from 'react';
import '../menu/Menu.css'

const Menu = (props) => {

    return (
        <div className='menu'>
            {props.children}
        </div>
    )
}

export default Menu;