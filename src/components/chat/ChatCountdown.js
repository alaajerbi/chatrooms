import React, { Component } from 'react';

export class ChatCountdown extends Component {
  render() {

    let time = this.props.time;
    return (
      <div className='chat-countdown'>  
        <p className='timer'>{time}</p>
      </div>
    );
  }
}
