import React, { useState, useEffect, Component } from 'react'
import axios from 'axios';
import './pit.css';

function Pit() {
    axios.defaults.withCredentials = true;
    const [events, setEvents] = useState([{ 'name': '', 'event_code': '' }])
    const [selectEvent, setSelectedEvent] = useState('');
    //ADD 2024 States
    const [values, setValues] = useState({
      teamNumber: ''
    });
  
    //Populates state varibles with possible CHS events
    useEffect(() => {
      axios.get('http://127.0.0.1:8081/api/find/events/all')
        .then((res) => setEvents(res.data.results));
    }, []);
  
    //Handles the select event selection
    const handleChange = (e) => {
      setSelectedEvent(e.target.value);
    };
  
  

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8081/api/event/match/submit', values, { headers: { event_code: selectEvent } })
          .then(res => {
            if (res.data.Status === "Success") {
              const match_form = document.getElementById("matchForm");
              match_form.addEventListener('submit', (e) => {
                e.preventDefault();
                match_form.reset();
              })
            } else {
              alert("Error Submitting Values to API");
              window.location.reload(false);
            }
          })
      }


    return (
        <>
            <div className='title'>
                <h2>Pit Scouting</h2>
            </div>

            <div className='eventSelect'>
                <p>Now Scouting For Event: {selectEvent}</p>
                <div className='inputs'>
                <label className='label-selectEvent' htmlFor='select-event'><strong>Select Event: </strong></label> {" "}
                <select className='select-event' onChange={handleChange}>
                    <option value=''>Select Event</option>
                    {events.map((event, index) => {
                        return (
                            <option value={event.name}>{event.name}</option>
                        )
                    })}
                </select>
                </div>
            </div>

            <form action='submit'>
                <div className='inputs'>
                    <label>
                        Team Number: <input name='teamNumber' defaultValue="Team #" />
                    </label>
                </div>

                <div className='inputs'>
                    <label>
                        Drivetrain: {" "}
                        <select name='drivetrain' id='drivetrain'>
                            <option id='tank' value='tank'>Tank</option>
                            <option id='swerve' value='swerve'>Swerve</option>
                            <option id='mecanum' value='mecanum'>Mecanum</option>
                        </select>
                    </label>
                </div>


                <div className='submit'>
                    <button type='submit' className='btn btn-success'>Save</button>
                </div>
            </form>
        </>
    )
}

export default Pit