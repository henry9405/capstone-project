
import React, { useState } from 'react';
import './Login.js';

function Login({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    if (username.trim() === '' || email.trim() === '') {
      return;
    }

    handleLogin(username, email);
    setUsername('');
    setEmail('');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          className="input-field"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="input-field"
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
