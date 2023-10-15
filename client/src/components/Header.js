import React from 'react';
import { NavLink } from 'react-router-dom';
// import Education from '../education_logo.png';
// import Create from '../create_icon.png';
// import Schedule from '../schedule_icon.png';
import './Header.css';

const Header = () => {
    return (
        
        <>
            <nav className="navigationWrapper">
                <div className="logoWrapper">
                    <span className="stylish">Intelli</span>
                    <span className="logo">Prep</span>
                </div>
            <ul className="navigation">
                <li className="parent"><a className="link" href="/create">Create Schedule</a></li>
                <li className="parent"><a className="link" href="/viewschedule">View Schedule</a></li>
            </ul>
            </nav>
            {/* <nav>
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
            </nav> */}
        </>

        

    )
}

export default Header;