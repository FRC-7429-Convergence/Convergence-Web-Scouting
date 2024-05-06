import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Outlet, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


function Layout() {

    const [auth, setAuth] = useState(false);
    const [name, setName] = useState('');
    const [isAdmin, setIsAdmin] = useState('');

    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:8081/api/token', {
            withCredentials: true
        })
            .then(res => {
                if (res.data.Status === "Success") {
                    setAuth(true);
                    setIsAdmin(res.data.admin);
                } else {
                    setAuth(false);
                    setIsAdmin(res.data.admin);
                }
            })
            .then(err => console.error(err))
    })

    const navigate = useNavigate();
    const handleDelete = () => {
        axios.get('http://localhost:8081/api/auth/logout', {
            withCredentials: true
        })
            .then(res => {
                navigate("/");
            }).catch(err => console.log(err));
    }


    return (
        <>
            <Navbar className="bg-black" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Brand href="/Home">Isotope Scouting</Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            {
                                auth ?
                                    <>
                                        <Nav.Link href="/Home">Home</Nav.Link>
                                        <NavDropdown title="Scouting" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/Pit">Pit</NavDropdown.Item>
                                            <NavDropdown.Item href="/Match/Scouting">Match</NavDropdown.Item>
                                        </NavDropdown>

                                        <NavDropdown title="Results" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/team_list">Team Info</NavDropdown.Item>
                                            <NavDropdown.Item href="/Pit/Results">Pit Info</NavDropdown.Item>
                                            <NavDropdown.Item href="/Match/Results">Match Info</NavDropdown.Item>
                                        </NavDropdown>
                                        {isAdmin === "true" ?
                                            <Nav.Link href="/admin">Admin</Nav.Link>
                                            :
                                            <p></p>
                                        }
                                        <button className='btn btn-danger outline-danger' onClick={handleDelete}>Logout</button>
                                    </>
                                    :
                                    <>
                                        <Nav.Link href='/'>Login</Nav.Link>
                                    </>

                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet />
        </>
    )
};

export default Layout;