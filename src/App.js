import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import RoomPicker from './components/Chat/RoomPicker/RoomPicker';
import Main from './components/main/Main';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chatroomName: 'Чат-комната',
      messages: [
        {
          content: "Сообщение 1",
          sender_id: "mnzxcv97zx6chvo",
          uuid: "dg897sdfg"
        },
        {
          content: "Сообщение 2",
          sender_id: "98s7dfh9a8s7dhf",
          uuid: "8723hernm"
        },
        {
          content: "Еще одно сообщение",
          sender_id: "mnzxcv97zx6chvo",
          uuid: "435nbcv98234"
        }
      ],
      members: [
        {
          is_online: true,
          name: "Алексей",
          uuid: "98s7dfh9a8s7dhf"
        },
        {
          is_online: true,
          name: "Дмитрий",
          uuid: "mnzxcv97zx6chvo"
        },
        {
          is_online: false,
          name: "Андрей",
          uuid: "kjuhv987ashdfoua"
        },
        {
          is_online: false,
          name: "Владимир",
          uuid: "jdhnf978WEHJSNDL"
        },
      ],
      me: {
        is_online: true,
        name: "Алексей",
        uuid: "98s7dfh9a8s7dhf"
      }
    };
  }

  onSendNewMessage = async (message) => {
    console.log(message)
 }

  render() {
    return (
      <div className="App">
        <Header />
        <RoomPicker />
        <Main
          members={this.state.members}
          messages={this.state.messages}
          me={this.state.me} 
    onSendNewMessage={this.onSendNewMessage}
    me={this.state.me}/>
      </div>
    );
  }
}

export default App;