import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../assets/bg.png'


const RightNav = () => {
    return (
        <div className='my-5'>
            <h4>LogIn With</h4>
            <div>
                <Button className='mb-2' variant="outline-primary"> <FaGoogle /> LogIn With Google</Button>
                <Button variant="outline-secondary"><FaGithub /> LogIn With Github</Button>

            </div>
            <div className='my-5'>
                <h4>Find Us On</h4>

                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter />  Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
              
                </ListGroup>
            </div>
            <Qzone></Qzone>
           <div className='my-5 position-relative  '>
           <img src={bg} alt="" />
           <div className=' position-absolute  top-0 start-50 translate-middle-x my-5'>
            <h3 className='text-white text-center   '>Create an <br /> Amazing <br /> Newspaper</h3>
            <p className='text-center text-white my-5'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <div className='text-center'>
            <Button className='' variant="danger">Learn More</Button>
            </div>
           </div>
           </div>
        </div>
    );
};

export default RightNav;