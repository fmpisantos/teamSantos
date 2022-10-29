import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Home = props =>{
    return(
        <div className="app">
          <Container fluid className="black">
            <Row className="red">
              <Col xs={3} className="green"></Col>
              <Col xs={9} className="pink"></Col>
            </Row>
          </Container>
        </div>
    )
  }
  
  export default Home;