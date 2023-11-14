import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <h1>Tesla App</h1>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
      <div className="rabout">
      </div>
    </nav>
  );
}

export default Navbar;
