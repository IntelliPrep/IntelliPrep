import React from 'react'
import "./InputData.css"
import axios from "axios"
import { useState } from 'react'
import {  } from "react-async"

const InputData = () => {

    const [weekend1, setWeekend1] = useState('');
    const [weekend2, setWeekend2] = useState('');
    const [weekday1, setWeekday1] = useState('');
    const [weekday2, setWeekday2] = useState('');

    const client = axios.create({ baseURL: "http://127.0.0.1:5000"});
    const [inputFields, setInputFields] = useState([{name: '', date: '', topics: '', priorities: ''}]);

    const [profileData, setProfileData] = useState('')
    const [sendData, setSendData] = useState('');


    async function getProfileData() {
        try {
            const response = await axios.post('http://127.0.0.1:5000/algorithmSend', [inputFields, [weekday1, weekday2], [weekend1, weekend2]]);
            setProfileData(({
                profile_name : response.data.name,
                current_date: response.data.date}));
        } catch (error) {   
            console.error(error.message);
        }
    }
    const handleFormChange = (index, event) => {
        let data = [...inputFields]
            data[index][event.target.name] = event.target.value;
            setInputFields(data);
            console.log(inputFields);

    }
    const addField = () => {
        let newfield = {name: '', date: '', topics:'', priorities:''};
        setInputFields([...inputFields, newfield]);

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
            <div className="app">
                <div className="title">Welcome! Please Enter Your Schedule Information</div>
                <form>
                    {inputFields.map((input, index) => {
                        return (
                            <div key={index}>
                                <input
                                name='name'
                                placeholder="className"
                                value={input.name}
                                onChange = {event => handleFormChange(index, event)}
                                />
                                <input
                                name='date'
                                type="date"
                                placeholder='Test Date'
                                value={input.date}
                                onChange = {event => handleFormChange(index, event)}
                                />
                                <input
                                name='topics'
                                placeholder="Topic List"
                                value={input.topics}
                                onChange = {event => handleFormChange(index, event)}
                                />
                                <input
                                name='priorities'
                                placeholder="Priority List"
                                value={input.priorities}
                                onChange = {event => handleFormChange(index, event)}
                                />

                            </div>

                        ) 
                })}
                </form>
            </div>
            <button onClick={addField}> Add More </button> <br></br>
            <h1>Please from what times you are Available! </h1>
            <p> Weekends:</p>
            <input type="time" name="weekend1" onChange={(e) => setWeekend1(e.target.value)}/>
            <input type="time" name="weekend2" onChange={(e) => setWeekend2(e.target.value )}/> <br></br>
            <p> Weekdays:</p>
            <input type="time" name="weekday1" onChange={(e) => setWeekday1(e.target.value)}/>
            <input type="time" name="weekday2" onChange={(e) => setWeekday2(e.target.value )}/>

        </>

            
    );
}

export default InputData

