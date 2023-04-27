import React from 'react';
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/LeftNav/LeftNav';
import RightNav from '../Pages/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                        </Col>
                    <Col lg={6}>
                        <h2>Main content coming....</h2>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    
                    </Col>
                </Row>
                
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default Main;