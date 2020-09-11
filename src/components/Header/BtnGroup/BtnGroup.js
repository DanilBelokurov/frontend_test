import React from 'react'
import { Container, ButtonGroup, Button, Row, Col } from 'react-bootstrap'
import './BtnGroup.css'


class BtnGroup extends React.Component {

  render() {
    return (
      <Container className="header-btns-container">
        <Row >
          <Col md={5} className="label-container"> <p className="messages-label"> Переписки </p> </Col>
          <Col md={7} className="btns-container">
            <ButtonGroup className="header-btns ml-auto">
              <Button className="header-btn">Общий</Button>
              <Button className="header-btn">Рабочий</Button>
              <Button className="header-btn">Активность</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default BtnGroup;