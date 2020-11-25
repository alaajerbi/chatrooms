import React, { Component } from 'react';
import send from '../../assets/svg/send.svg';

export class ChatInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: ''
    }

    this.updateMessage = this.updateMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.onfocus = this.onfocus.bind(this);
  }

  componentDidMount() {
    window.addEventListener("focus", this.onfocus);
  }

  componentWillUnmount() {
    window.removeEventListener("focus", this.onfocus);
  }

  onfocus() {
    this.messageInput.focus();
  }

  updateMessage(e) {
    let value = e.target.value;
    this.setState({
      message: value
    });
  }

  submitMessage(e) {
    e.preventDefault();
    let message = this.state.message;
    if (message !== "") {
      this.setState({
        message: '',
      });
      this.props.onSendMessage(message);
    }
  }
  render() {
    let chatting = this.props.chatting;

    return (
      <form action='' className='chat-input'>
        <input autoFocus ref={(input) => { this.messageInput = input}} type="text" id='message-input' value={this.state.message} onChange={this.updateMessage} placeholder='Type something...' disabled={ !chatting}/>
        <button id='submit' onClick={this.submitMessage} disabled={ !chatting }><img src={send} alt="Send" /></button>
      </form>
    );
  }
}
