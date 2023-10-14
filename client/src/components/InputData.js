import React from 'react'
import "./InputData.css"
import axios from "axios"
import { useState } from 'react'

const InputData = () => {
    const [profileData, setProfileData] = useState(null)
    function getData() {
        axios({
          method: "GET",  
          url:"http://127.0.0.1:5000/algorithm",
        })
        .then((response) => {
          const res = response.data
          setProfileData(({
            profile_name: res.name,
            about_me: res.about}))
        }).catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            }
    })}

    return (
        <>
        <div id="divone">
            <h1 id="addschedule">Add Schedule</h1>
        </div>
        
        <div className='name'>
            <label for="testname">Test Name:</label>
            <input type="text" name="testname" />
            <button onClick={getData}>Click me</button>
        </div>
        {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
            </div>
        }

        </>

            
    );
}

export default InputData

