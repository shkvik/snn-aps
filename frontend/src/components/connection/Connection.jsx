import React from 'react';
import '../connection/Connection.css';
import Activity from './chart/activity/Activity';

import { Outlet, Link, NavLink   } from "react-router-dom";

const Connection = (props) => {
    var id = props.id;
    var ip = props.ip;
    var protocol = props.protocol;

    function handleClick() {
        window.location.href = '/modbus';
    }

    const link = `/modbus/${id}`;
    console.log(id);
    return (
        <NavLink to={link} className='nav-link'>
            <div className="node">
                <div className='node__attributes'>

                    <div className='node__keys'>
                        <div className='key'>node №</div>
                        <div className='key'>ip</div>
                        <div className='key'>protocol</div>
                    </div>

                    <div className='node__keys'>
                        <div className='value'>{id}</div>
                        <div className='value'>{ip}</div>
                        <div className='value'>{protocol}</div>
                    </div>

                </div>
                
                <Activity/>
            </div>
        </NavLink>

    )
}

export default Connection;