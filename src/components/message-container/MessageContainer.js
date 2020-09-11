import React from 'react';
import './MessageContainer.css';
import Message from '../message/Message';

function MessageContainer(props) {
    const messageList = props.messages.map(message => 
       <Message
           key={message.uuid}
           sender={props.members.find((member) => member.uuid === message.sender_id)} 
           message={message} />
       );

   return (
       <section className="MessageContainer" >
           {messageList}
       </section>
   );
}

export default MessageContainer;