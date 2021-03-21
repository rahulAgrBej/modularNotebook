import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  // Send a request to the server on port 8080 to retrieve message
  useEffect(() => {
    fetch('http://localhost:8080/hello')
			.then(response => {
				return response.json();
			})
			.then(res => {
				setMessage(res);
			})
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>
      </header>
    </div>
  );
}
export default App;