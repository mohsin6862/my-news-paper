import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import NavegationBar from '../NavegationBar/NavegationBar';


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

            <NavegationBar></NavegationBar>
            
        </Container>
    );
};

export default Header;