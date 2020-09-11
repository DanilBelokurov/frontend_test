import React from 'react'
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import Navbar from './Navbar/Navbar';
import BtnGroup from './BtnGroup/BtnGroup'
import './Header.css';


class Header extends React.Component {
  render() {
    return (
      <Container className="header-container" expand="lg">
        <Row>
          <Col>
            <Navbar />
          </Col>
        </Row>
        <Row>
          <Col>
            <BtnGroup/>
          </Col> 
        </Row>
      </Container>
    )
  }
}

export default Header;