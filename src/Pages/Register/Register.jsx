import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../hooks/useTitle';


const Register = () => {
    const {createUser}= useContext(AuthContext);
    const [accepted,setAccepted]=useState(false)
    useTitle('Register')
    const handleRegister = (event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password= form.password.value;
        const confirm= form.confirm.value; 
        console.log(name,photo, email,password,confirm)
        createUser(email,password)
        .then(result=>{
            const createdUser = result.user;
            console.log(createdUser)
       
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    const handleChecked =(event)=>{
      console.log(event.target.checked)
      setAccepted(event.target.checked)
    }
    return (
        <Container className='w-50 '>

        <Form onSubmit={handleRegister}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Your name" />
                
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Your photo url" />
                
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
                
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name='confirm' placeholder="Confirm Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                onClick={handleChecked}
                name='accepted'
                type="checkbox" 
                label={<>Accept <Link to='/terms'>All Terms and Conditions</Link></>} />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={!accepted}>
                Register
              </Button>
              <br />
              <Form.Text className="text-muted">
        
                <p>Already have an account? <Link to='/login'>Please LogIn</Link></p>
                 
                </Form.Text>
            </Form>
        
                   
                </Container>
    );
};

export default Register;