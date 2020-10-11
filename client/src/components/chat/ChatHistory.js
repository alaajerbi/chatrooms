import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Alert from './Alert.js';

export class ChatHistory extends Component {


  constructor(props) {
    super(props);

    this.state = {
      length: props.length
    }

    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidUpdate(prevProps) {
    let { length } = this.state;

    if (prevProps.length > length) {
      this.scrollToBottom();
      this.setState({
        length: prevProps.length,
      })
    }
    else if (this.props.over || this.props.destroyed) {
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    if (this.messagesEnd && this.messagesEnd !== undefined) {
      this.messagesEnd.scrollIntoView();
    }
  }

  render() {
    let messages = this.props.messages;
    let clientId = this.props.clientId;
    let chatting = this.props.chatting;
    let destroyed = this.props.destroyed;
    let over = this.props.over;

    const messageElements = messages.map((message, index) => {
      return (
        <div key={index} className={'chat-message ' + (message.senderId === clientId ? 'mine' : 'not-mine')}>
          {message.body}
        </div>
      );
    });

    const stopMessage = (
      <div className="stop-message">
        { (destroyed && "Your partner has left the room.") || (over && "Time is up!") } <Link to='../createChatRoom' style={{ color: "#222" }}>Create a new room?</Link>
        <br />
        <br />
      </div>
    )

    const scrollToElement = <div style={{ float: "left", clear: "both" }}
      ref={(el) => { this.messagesEnd = el; }}>
    </div>;

    return (
      <div className='chat-history'>
        {
          (chatting && messages.length === 0 && <Alert>Someone joined the room, Say Hi!</Alert>)
          ||
          (chatting && (
            <React.Fragment>
              { messageElements}
              { scrollToElement}
            </React.Fragment>
          ))
          ||
          ((over || destroyed) && (
            <React.Fragment>
              { messageElements}
              { stopMessage }
              { scrollToElement}
            </React.Fragment>
          ))
          ||
          (<Alert>Waiting for a second party to join...</Alert>)
        }
      </div>
    );
  }
}
