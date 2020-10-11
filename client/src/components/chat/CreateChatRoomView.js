import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CLIENT_URL } from '../../config';
import { createChatRoom } from '../../utils/api';

export default class CreateChatRoomView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roomId: null,
      loading: true,

    }

    this.handleCopy = this.handleCopy.bind(this);
  }

  componentDidMount() {
    createChatRoom()
    .then(response => {
      if (response.success) {
        this.setState({
          roomId: response.roomId,
          loading: false,
          copied: false,
        });
      }
      else {
        console.log('Something is wrong');
      }
    });
  }

  handleCopy() {
    if (!this.state.copied) {
      let link = CLIENT_URL + "/#/chat/" + this.state.roomId;
      const el = document.createElement('textarea');
      el.value = link;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      this.setState({
        copied: true
      });
      window.setTimeout(() => {
        this.setState({
          copied: false
        })
      }, 2000);
    }
    
  }
  render() {
    return (
      <div className='create-chat'>
      <div className="container">
            { (this.state.loading &&
              <p>Creating a chatroom, please wait...</p>)
              ||
              (this.state.roomId &&
                (<>     
                  <h3>Chatroom link:</h3>  
                  <Link to={'/chat/' + this.state.roomId}>{CLIENT_URL + "/#/chat/" + this.state.roomId}</Link>
                  <button className='copy-link-btn' onClick={this.handleCopy}>{this.state.copied ? 'Copied!' : 'Copy link'}</button>
                </>))       
            }
      </div>
      </div>
     
    );
  }
}
