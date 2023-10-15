import React, {useEffect, useState } from 'react'
import "./InputData.css"
import axios from "axios"
import {  } from "react-async"
import { gapi, } from "gapi-script"


const InputData = () => {

    const [weekend1, setWeekend1] = useState('');
    const [weekend2, setWeekend2] = useState('');
    const [weekday1, setWeekday1] = useState('');
    const [weekday2, setWeekday2] = useState('');

    const client = axios.create({ baseURL: "http://127.0.0.1:5000"});
    const [inputFields, setInputFields] = useState([{name: '', date: '', topics: '', priorities: ''}]);


    const [sendData, setSendData] = useState('');
<<<<<<< Updated upstream
=======

    
    
>>>>>>> Stashed changes


    async function getScheduleData() {

        try {
            const response = await axios.post('http://127.0.0.1:5000/algorithmSend', [inputFields, [weekday1, weekday2], [weekend1, weekend2]]);
            console.log(response.data);
            for(let i = 0; i < response.data.length; i++) {
                createEvent(response.data[i][0], response.data[i][1], response.data[i][2]);
                //console.log(response.data[i][0], response.data[i][1], response.data[i][2]);
                //console.log('\n')
            }
        } catch (error) {   
            console.error(error.message);
        }
    }
    function createEvent(newSummary, eventStartTime, eventEndTime) {
        const calendarID = "425283682828-qn5idtnkss94e5hv94abuks7et6r1q7e.apps.googleusercontent.com";
        const apiKey = "AIzaSyDDeY3WO3s7EbWvL96YS5t2lVG3i4e4N7I";
        //console.log(eventStartTime);
        eventStartTime = new Date(eventStartTime)
        eventEndTime = new Date(eventEndTime)
        //console.log(eventStartTime);


        var event = {
            summary: newSummary,
            start: {
              dateTime: eventStartTime,
              timeZone: "America/New_York",
            },
            end: {
              dateTime: eventEndTime,
              timeZone: "America/New_York",
            },
            reminders: {
              useDefault: false,
              overrides: [
                { method: "email", minutes: 24 * 60 },
                { method: "popup", minutes: 10 },
              ],
            },
        };
        addHelper('samadahmed30044@gmail.com', event);

        


    }
    const addHelper = (calendarID, event) => {
        const accessToken = "ya29.a0AfB_byCgnzP8ZpcJt9luQOHpeiR2_L6BWi-6HlpdIxyJ4fiL9bvDKyDbQYjB6Um6nxteHROjyPKAmg5UIkLxHvjroHWsRBaOtTa8YLDywz6lPkltAjsWX3jrxcl-7GqXT-YeqqBbahwHo7_zs0Df0LP9PaSXJKgUYVMoaCgYKAZoSARMSFQGOcNnC19w7GzvrZuvmQSKjcxK3WA0171";
        function initiate() {
          gapi.client
            .request({
              path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
              method: "POST",
              body: event,
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${accessToken}`,
              },
            })
            .then(
              (response) => {
                return [true, response];
              },
              function (err) {
                console.log(err);
                return [false, err];
              }
            );
        }
        gapi.load("client", initiate);
      };


    const handleFormChange = (index, event) => {
        let data = [...inputFields]
            data[index][event.target.name] = event.target.value;
            setInputFields(data);

    }
    const addField = () => {
        let newfield = {name: '', date: '', topics:'', priorities:''};
        setInputFields([...inputFields, newfield]);

    }
    return (
        <>  
            <div className="app">
<<<<<<< Updated upstream
=======
                <script src='https://accounts.google.com/gsi/client'></script>
>>>>>>> Stashed changes
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
            <input type="time" name="weekday2" onChange={(e) => setWeekday2(e.target.value )}/><br></br>
            <button onClick={getScheduleData}>Click me</button>

        </>

            
    );
}

export default InputData

