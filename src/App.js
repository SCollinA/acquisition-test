import React, { useState } from 'react';
import './App.css';
import Login from './Login/Login'
import Logout from './Logout/Logout'
import Tracker from './Tracker/Tracker'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aquisition Tracker</h1>
        {isLoggedIn && 
          <Logout setIsLoggedIn={setIsLoggedIn}/>}
      </header>
      {(!isLoggedIn && 
        <Login setIsLoggedIn={setIsLoggedIn}/>) ||
        <Tracker/>}
    </div>
  );
}

export default App;
