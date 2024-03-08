import React, { useState } from 'react';
import './App.css'; // You may need to create this file for styling
import logo from './image/logo.gif'
const App = () => {
  const [clickPosition, setClickPosition] = useState({ x: 12, y: 585 });

  const handleClick = (e) => {
    const { clientX, clientY } = e;
    // console.log(clientX);
    // console.log(clientY);
    setClickPosition({ x: clientX, y: clientY });
  };
  return (
    <div className="App" onClick={handleClick}>
      <img
        src={logo}
        alt="gif logo"
        style={{
          position: 'absolute',
          left: clickPosition.x,
          top: clickPosition.y,         
          transition:'left 10s, top 10s',
          width:'100px',
          height:'100px'
        }}
      />
    </div>
  );
};

export default App;
