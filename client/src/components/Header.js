import React from 'react';
import {NavLink, Link, useLocation} from 'react-router-dom';
import Education from '../education_logo.png';
import Create from '../create_icon.png';
import Schedule from '../schedule_icon.png';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <div className = "div-header">
                <div className = "div-svg">
                    <Education/>
                </div>
                <div style = {{display: 'flex', flexdirection: 'row', alignItems: "center"}}>
                    {/* create schedule */}
                    <NavLink to='/create'><Create className = "div-svg"/></NavLink> 

                    {/* view schedule */}
                    <NavLink to='/schedule'><Schedule></Schedule></NavLink> 
                </div>
            </div>
        </nav>
    )
}

export default Header;