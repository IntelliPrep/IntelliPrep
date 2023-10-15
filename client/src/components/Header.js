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
                <div id="addpadding"><li className="parent"><a style={{'text-decoration': "none", "color": "black"}} className="link" href="/create">Create Schedule</a></li></div>
                <div id="addpadding"><li className="parent"><a style={{'text-decoration': "none", "color": "black"}} className="link" href="/viewschedule">View Schedule</a></li></div>
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