import { Outlet, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


const Layout = () => {
    return (
        <>
            <Navbar className="bg-black" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Brand href="/">Isotope Scouting</Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Scouting" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Pit">Pit</NavDropdown.Item>
                                <NavDropdown.Item href="/Match/Scouting">Match</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Results" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/team_list">Team Info</NavDropdown.Item>
                                <NavDropdown.Item href="/Pit/Results">Pit Info</NavDropdown.Item>
                                <NavDropdown.Item href="/Match/Results">Match Info</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet />
        </>
    )
};

export default Layout;