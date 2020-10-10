import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage.js';
import CreateChatRoomView from './components/chat/CreateChatRoomView';
import ChatView from './components/chat/ChatView';

class App extends Component {
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
