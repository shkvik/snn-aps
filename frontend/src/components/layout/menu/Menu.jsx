import React from 'react';
import '../menu/Menu.css'



const Item = (props)  => {
    return (
        <div className='menu__item'>
            {props.label}
        </div>
    )
}

const Menu = (props) => {

    return (
        <div className='menu'>
            <Item label='Dashboard'/>
            <Item label='Settings'/>
            <Item label='Tools'/>
            <Item label='Favorites'/>
            <Item label='Archive'/>
        </div>
    )
}

export default Menu;