import React from 'react';
import { NavLink } from 'react-router-dom';
// import Education from '../education_logo.png';
// import Create from '../create_icon.png';
// import Schedule from '../schedule_icon.png';
import './Header.css';

const Header = () => {
    return (
        <>
            <nav>
                <span>
                    <NavLink to="/create">
                        Create
                    </NavLink>
                </span>
                <span>
                    <NavLink to="/viewschedule">
                        View Schedule
                    </NavLink>
                </span>
            </nav>
        </>
    )
}

export default Header;