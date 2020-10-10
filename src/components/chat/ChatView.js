import React, { Component } from 'react';
import * as io from 'socket.io-client';
import { ChatHistory } from './ChatHistory';
import { ChatInput } from './ChatInput.js';
import { ChatCountdown } from './ChatCountdown';
import Alert from './Alert';
import { SERVER_URL } from '../../config';
import notification from '../../assets/audio/notification.ogg';

export default class ChatView extends Component {

  notificationSound = new Audio(notification);

  constructor(props) {
    super(props);

    this.state = {
      clientId: null,
      socket: null,
      roomId: null,
      messages: [],
      error: null,
      chatting: false,
      over: false,
      destroyed: false,
      remainingTime: '05:00',
      currentLength: 0
    }

    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  componentDidMount() {

    let pathname = this.props.location.pathname;
    let roomId = pathname.slice(6);
    console.log('RoomID: ' + roomId);

    const socket = io(SERVER_URL);

    socket.emit('create', roomId);

    socket.on('joined', () => {
      this.setState({
        clientId: socket.id,
        socket: socket,
        roomId: roomId,
      });
    });

    socket.on('ready', () => {
      this.notificationSound.play();
      this.setState({
        chatting: true
      });
    });

    socket.on('time left', (timeLeft) => {
      let time = new Date(null);
      time.setSeconds(timeLeft);

      this.setState({
        remainingTime: time.toISOString().substr(14, 5),
      })
    })

    socket.on('message sent', data => {
      if (data.senderId != this.state.clientId) {
        this.notificationSound.play();
      }
      console.log('Message sent successfully!');
      let messages = this.state.messages;
      messages.push(data);
      this.setState({
        messages: messages,
        currentLength: messages.length
      });
    });

    socket.on('over', () => {
      this.setState({
        chatting: false,
        over: true,
        remainingTime: '00:00'
      });
    })

    socket.on('room not found', () => {
      this.setState({
        error: 'Room NOT FOUND'
      })
    });

    socket.on('room full', () => {
      this.setState({
        error: 'Room FULL!'
      });
    })

    socket.on('room destroyed', () => {
      this.setState({
        destroyed: true,
        chatting: false,
      });
    });
  }


  handleSendMessage(msg) {
    let socket = this.state.socket;
    socket.emit('chat message', msg);
  }


  render() {
    let { error, socket, messages, chatting, clientId, over, destroyed, remainingTime, currentLength } = this.state;


    return (
      (error && <Alert>{error}</Alert>)
      || (socket === null && <Alert>Connecting...</Alert>)
      ||
      (<div className="chatbox">
        <ChatCountdown time={remainingTime} />
        <ChatHistory messages={messages}
          clientId={clientId}
          chatting={chatting}
          over={over}
          destroyed={destroyed}
          length={currentLength}
        />
        <ChatInput
          onSendMessage={this.handleSendMessage}
          chatting={chatting}
        />
      </div>)
    );
  }
}