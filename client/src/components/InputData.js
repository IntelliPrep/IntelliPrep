import React from 'react'
import "./InputData.css"
import axios from "axios"
import { useState } from 'react'
import {  } from "react-async"

const InputData = () => {
    const client = axios.create({ baseURL: "http://127.0.0.1:5000"});

    const [profileData, setProfileData] = useState('')
    const [sendData, setSendData] = useState('');
    async function getProfileData() {
        try {
            const response = await axios.post('http://127.0.0.1:5000/algorithmSend', {data: sendData});
            setProfileData(({
                profile_name : response.data.name,
                current_date: response.data.date}));
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>  
            <div className='name'>
                <label htmlFor="testname">Test Name:</label>
                <input type="text" value={sendData} onChange={(e) => setSendData(e.target.value)} name="testname"/>
                <button onClick={getProfileData}>Click me</button>
            </div>
            {profileData && <div>
                    <p>Profile name: {profileData.profile_name}</p>
                    <p>Current Date: {profileData.current_date}</p>
                </div>
            }

        </>

            
    );
}

export default InputData

