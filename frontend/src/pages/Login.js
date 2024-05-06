import React, { useState, useEffect, Component } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import './login.css';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [isAdmin, setIsAdmin] = useState('');
  const [name, setName] = useState('');
  const [auth, setAuth] = useState(false);

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8081/api/auth/login', values, {
      withCredentials: true
    })

      .then(res => {
        if (res.data.Status === "Success") {
          const token = res.data.token;

          //set JWT token to local
          localStorage.setItem("token", token);

          navigate('/Home');
          window.location.reload(true);
        } else {
          alert(res.data.Error);
          window.location.reload(false);
        }
      })
      .then(err => console.error(err))
  }

  useEffect(() => {
    axios.get('http://127.0.0.1:8081/api/token', {
      withCredentials: true
    })
      .then(res => {
        if (res.data.Status === "Success") {
          navigate("/Home");
        }
      })
      .then(err => console.error(err))
  })


  return (
    <>
      <div className=''>
        <div className='bg-white p-3 rounded'>
          <h2>Log In</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='email'><strong>Email:</strong></label>
              <input type='email' placeholder='Enter Email' name='email' className='form-control rounded-0' onChange={(e) => setValues({ ...values, email: e.target.value })}></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='password'><strong>Password:</strong></label>
              <input type='password' placeholder='Enter Password' name='password' className='form-control rounded-0' onChange={(e) => setValues({ ...values, password: e.target.value })}></input>
            </div>
            <div className='mb-3'>
              <button type='submit' className='btn btn-success w-100 rounded-0'>Log In</button>
              <p> By logging in you agree to FRC 9709 Team's terms and agreements</p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
