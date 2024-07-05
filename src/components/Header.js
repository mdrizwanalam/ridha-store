import React from 'react';

export default function Header (){
  return (
    <header style={headerStyle}>
      <h1>RIDHA STORE</h1>
      <nav>
        <ul style={navStyle}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Cart</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
  padding: 0,
};

