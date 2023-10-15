import React from 'react';
import "./ViewSchedule.css";

import { useState } from 'react';


const ViewSchedule = () => {

    return (
        <div className="calendar">
            <iframe src="https://embed.styledcalendar.com/#9hnBWcEFwIu8guOioQ84" width="1000" height="800" title="Styled Calendar" class="styled-calendar-container"  style={{"border":"none"}} data-cy="calendar-embed-iframe" id = "calen"></iframe>
            <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script> 

        </div>
    );
       
}
 
export default ViewSchedule;