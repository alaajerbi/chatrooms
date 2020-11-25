import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage.js';
import CreateChatRoomView from './components/chat/CreateChatRoomView';
import ChatView from './components/chat/ChatView';

class App extends Component {
  componentWillMount() {
    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={LandingPage} />
          <Route path='/createChatRoom' component={CreateChatRoomView} />
          <Route path='/chat/:id' component={ChatView} />
        </div>
      </Router>
    );
  }
}

export default App;
