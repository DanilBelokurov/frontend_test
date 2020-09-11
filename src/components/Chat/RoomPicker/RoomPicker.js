import React from 'react'
import { Container, Row, Button, ButtonGroup, Col } from 'react-bootstrap';
import './RoomPicker.css'


const all_chats_conter = 33;
const friends_chats_counter = 5;
const team_chats_counter = 3;


class RoomPicker extends React.Component {

  render() {
    return (
      <Container className="roomPicker">
        <Row className="roomPicker-row-tmp">
          <Col md={7} className="roomPicker-container">
            <ButtonGroup className="roomPicker-btns">
              <Button className="roomPicker-btn">Все чаты ({all_chats_conter})</Button>
              <Button className="roomPicker-btn">Друзья ({friends_chats_counter})</Button>
              <Button className="roomPicker-btn">Команда ({team_chats_counter})</Button>
            </ButtonGroup>
          </Col>
          <Col md={3} className="friend-info ml-auto">
            <p className="aboutFriend">Здесь будет информация о ком-то</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default RoomPicker;