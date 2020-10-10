import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/svg/logo.svg';
import '../App.css';

const LandingPage = (props) => {
  return (
     <div className="main">
       <hero>
        <img src={logo} alt="Logo" width="200"/>
      </hero>

        <div className="container">
        <div class="section">
          <h1>Chat Rooms with Time Limit</h1>
          <p>Built with ReactJS, NodeJS, Express, and Socket.io by <a href="http://alaajerbi.com">@alaajerbi</a></p>
        </div>
	<div className="cta">
            <Link to='/createChatRoom' class="btn" style={{marginLeft: '10px'}}>Create a room!</Link>
	</div>
      </div>
     </div>
    
  )
}

export default LandingPage;
