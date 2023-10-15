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
        const accessToken = "ya29.a0AfB_byD8D1U4mRSbo6XFuTgfGiaGHR86Et5x_NM7icumn7smSbvdnspczAY-ZID5lzM7Q1VbwRVCSYvDoO1taGYCzdXd81wpJO629RVOn4miTTrKb9JkPZiUerJelZcIjK5c9zVWxZjj9kL4yTLr0ziZBdzQT5r_BtXGaCgYKASsSARMSFQGOcNnCKofx4xsLepakDq20J5nLNA0171";
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
        <html>
            <head>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Create Schedule</title>
                <link rel="stylesheet" href="https://codepen.io/gymratpacks/pen/VKzBEp#0"/>
                <link href='https://fonts.googleapis.com/css?family=Nunito:400,300' rel='stylesheet' type='text/css'/>
                <link rel="stylesheet" href="./InputData.css"/>
            </head>
       
        <div class="row">
    <div class="col-md-12">
        <h1 id="createschedule"> Create Schedule </h1>
            <div className="app">
                <form>
                    {inputFields.map((input, index) => {
                        return (
                            <div key={index}>
                                <fieldset>
                                <legend><span class="number"><var>{index+1}</var></span> Test Information</legend>
                                
                                <label for="name">Class Name:</label>
                                <input
                                name='name'
                                type="name"
                                id='name'
                                placeholder="Class Name"
                                value={input.name}
                                onChange = {event => handleFormChange(index, event)}
                                />

                                <label for="date">Test Date:</label>
                                <input
                                name='date'
                                type="date"
                                id='date'
                                placeholder='Test Date'
                                value={input.date}
                                onChange = {event => handleFormChange(index, event)}
                                />

                                <label for="topics">Topic List:</label>
                                <input
                                name='topics'
                                id='topics'
                                type="topics"
                                placeholder="Topic List"
                                value={input.topics}
                                onChange = {event => handleFormChange(index, event)}
                                />

                                <label for="priorities">Priorities:</label>
                                <input
                                name='priorities'
                                type="priorities"
                                id='priorities'
                                placeholder="Priority List"
                                value={input.priorities}
                                onChange = {event => handleFormChange(index, event)}
                                />
                                </fieldset>

                            </div>

                        ) 
                })}
                </form>
            
            </div>
            </div>
             
            
            <field>
                <button onClick = {addField}> Add Another Test </button> <br></br>
                <h1>Please input what times you are available! </h1>
                <label for="weekend">Weekend:</label>
                <input type="time" name="weekend1" id="weekend" onChange={(e) => setWeekend1(e.target.value)}/>
                <input type="time" name="weekend2" id="weekend" onChange={(e) => setWeekend2(e.target.value )}/> <br></br>
                <label for="weekday">Weekday:</label>
                <input type="time" name="weekday1" id = "weekday" onChange={(e) => setWeekday1(e.target.value)}/>
                <input type="time" name="weekday2" id = "weekday" onChange={(e) => setWeekday2(e.target.value )}/><br></br>
                <button onClick={getScheduleData}>Click me</button>
            </field>

            </div>
            

        </html>
        </>

            
    );
}

export default InputData

