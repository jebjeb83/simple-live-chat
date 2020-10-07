import React, { useState } from 'react';
import ChatLayout from './components/ChatLayout'
import Login from './components/Login'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  return (
    <div className='App'>
      {
        !isLoggedIn ? 
          <Login
            setIsLoggedIn={setIsLoggedIn}
            username={username}
            setUsername={setUsername}
          /> : 
          <ChatLayout
            setIsLoggedIn={setIsLoggedIn}
            username={username}
            setUsername={setUsername}
            isAnonymous={isAnonymous}
            setIsAnonymous={setIsAnonymous}
            messages={messages}
            setMessages={setMessages}
            message={message}
            setMessage={setMessage}
          />
      }
    </div>
  );
}

export default App;
