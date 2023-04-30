import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';

const NavegationBar = () => {
    const {user} = useContext(AuthContext)
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                   
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features"><Link to='/' className='text-decoration-none'>HOME</Link></Nav.Link>
                            <Nav.Link href="#pricing">ABOUT</Nav.Link>
                            <Nav.Link href="#pricing">CAREER</Nav.Link>
                            
                        </Nav>
                        <Nav className=''>
                            {user && <Nav.Link href="#deets"><FaUser style={{fontSize:'2rem'}}></FaUser> {user.name}</Nav.Link>}
                            <Nav.Link eventKey={2} href="#memes">
                            {user? <Button variant="secondary">Logout</Button> : <Link to='/login'><Button variant="secondary" >Login</Button></Link> }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
           
            </Navbar>
        </Container>
    );
};

export default NavegationBar;