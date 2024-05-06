import React, { useState, useEffect, Component } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './home.css';
import game_logo from './2024.png';

function Home() {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState('');


  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://127.0.0.1:8081/api/token', {
      withCredentials: true,
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
      .then(res => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.user);

        } else {
          setAuth(false);
          setName("Not Signed In")
        }
      })
      .then(err => console.error(err))
  })

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Home");
  }
  return (
    <>
      {
        auth ?
          <>
            <div className='home-title'>
              <h1>Welcome to Isotope Robotics Web Scouting System</h1>
            </div>

            <p>This scouting system can handle pit and match scouting. <br />
              Once matches start it handles team by team stats and a fun UI for learning more about teams.
            </p>

            <img src={game_logo} className='game_logo'></img>
          </> : <></>
      }
    </>
  )
}

export default Home