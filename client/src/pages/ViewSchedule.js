import React from 'react';
import "./ViewSchedule.css";

import { useState } from 'react';


const ViewSchedule = () => {

    return (
        <div className="calendar">
            <h1 id= "h1">View Schedule Below!</h1>
            
            <iframe src="https://embed.styledcalendar.com/#17fZdj7DPjviESh5Eb2X" width='1000' height='500   ' title="Styled Calendar" style={{'border-width': 0}} class="styled-calendar-container" sdata-cy="calendar-embed-iframe"></iframe>
            <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>

        </div>
    );
       
}
 
export default ViewSchedule;