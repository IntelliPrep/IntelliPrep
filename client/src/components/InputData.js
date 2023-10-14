import React from 'react'
import "./InputData.css"

const InputData = () => {
    return (
        <>
        <div id="divone">
            <h1 id="addschedule">Add Schedule</h1>
        </div>
        
        <div className='name'>
            <label for="testname">Test Name:</label>
            <input type="text" name="testname" />
            <input type="submit" />
            
        </div>

        </>

            
    );
}

export default InputData

