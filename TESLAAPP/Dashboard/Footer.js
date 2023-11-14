import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 Tesla News. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
