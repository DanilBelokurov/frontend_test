import React from 'react';
import './Main.css';
import MemberList from '../member-list/MemberList';
import ChatField from '../chat-field/ChatField';



function Main(props) {
    return (
        <section className="Main">
            <MemberList
                me={props.me}
                members={props.members} />
            <ChatField
            messages={props.messages}
            members={props.members}
            onSendNewMessage={props.onSendNewMessage} />
        </section>
    );
}

export default Main;