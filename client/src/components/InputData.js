import React from 'react'
import "./InputData.css"
import axios from "axios"
import { useState } from 'react'
import {  } from "react-async"
import createEvent from "./event.js"

const InputData = () => {

    const [weekend1, setWeekend1] = useState('');
    const [weekend2, setWeekend2] = useState('');
    const [weekday1, setWeekday1] = useState('');
    const [weekday2, setWeekday2] = useState('');

    const client = axios.create({ baseURL: "http://127.0.0.1:5000"});
    const [inputFields, setInputFields] = useState([{name: '', date: '', topics: '', priorities: ''}]);


    const [sendData, setSendData] = useState('');
    var value;

    async function getScheduleData() {
        try {
            const response = await axios.post('http://127.0.0.1:5000/algorithmSend', [inputFields, [weekday1, weekday2], [weekend1, weekend2]]);
            for (let i = 0; i < response.data.length; i++) {
                console.log("hola");
                console.log(response.data[i][0], response.data[i][1], response.data[i][2]);
                /*createEvent(response.data[i][0], response.data[i][1], response.data[i][2]);*/
            }
            createEvent(response.data.name, response.data.date, response.data.date);
        } catch (error) {   
            console.error(error.message);
        }
    }
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

