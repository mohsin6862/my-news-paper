import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className='text-center my-5'>
                <img src={logo} alt="" />
                <h6 className='mt-2'>Journalism Without Fear or Favour</h6>
                <p >{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-secondary p-2 ' >
                <Button variant="danger">Latest</Button>
                <Marquee className='text-white'>
                    I can be a React component, multiple React components, or just some text. <br />
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                   
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">HOME</Nav.Link>
                            <Nav.Link href="#pricing">ABOUT</Nav.Link>
                            <Nav.Link href="#pricing">CAREER</Nav.Link>
                            
                        </Nav>
                        <Nav className=''>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                            <Button variant="secondary">LogIn</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
           
            </Navbar>
        </Container>
    );
};

export default Header;